import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs} from 'file-saver';

const Relatorio = () =>{
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [registros, setRegistros] = useState([]);
  const [exame, setExame] = useState('');
  const [sexo, setSexo] = useState('');
  const [origem, setOrigem] = useState('');
  const [idadeInicio, setIdadeInicio] = useState('');
  const [idadeFim, setIdadeFim] = useState('');


  const buscarRegistros = async () => {
    try {
      const params = new URLSearchParams();
        
      if (dataInicio) params.append("dataInicio", dataInicio);
      if (dataFim) params.append("dataFim", dataFim);
      if (exame) params.append("exame", exame);
      if (sexo) params.append("sexo", sexo);
      if (origem) params.append("origem", origem);
      if (idadeInicio) params.append("idadeInicio", idadeInicio);
      if (idadeFim) params.append("idadeFim", idadeFim);
        
      const response = await axios.get(`http://192.168.150.82:3001/api/registros/filtro?${params.toString()}`);
      setRegistros(response.data);
    } catch (error) {
      console.error("Erro ao buscar registros:", error);
      alert("Erro ao buscar registros");
    }
  };

  const exportarExcel = () => {
    const registrosFormatados = registros.map(registro => ({
      ...registro,
      datanascimento: formatarData(registro.datanascimento),
      datarealizada: formatarData(registro.datarealizada),
    }));

    const ws = XLSX.utils.json_to_sheet(registrosFormatados);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Registros");
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const arquivoExcel = new Blob([excelBuffer], { type: 'application/octet-stream' });  
    saveAs(arquivoExcel, `registros_${dataInicio}_a_${dataFim}.xlsx`);
  };
  
  const formatarData = (isoString) => {
    if (!isoString) return '';
    const data = new Date(isoString);
    return data.toLocaleDateString('pt-BR');
  };

  const calcularIdade = (dataNasc) => {
    const hoje = new Date();
    const nascimento = new Date(dataNasc);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
  
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
  
    return `${idade} anos`;
  };
  

  return (
    <div className="FrameRelatorio">
      <h1>Relatórios</h1>
      <input className="CmpDataRelatorio" type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)}/>
      <input className="CmpDataRelatorio" type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)}/>
      <select name="exame" className="CmpExameRelatorio" placeholder="Tipo de exame" value={exame} onChange={(e) => setExame(e.target.value)}>
          <option value="">Exame</option>
          <option value="Crânio">Crânio</option>
          <option value="Mandibula">Mandibula</option>
          <option value="Face">Face</option>
          <option value="S. Face">S. Face</option>
          <option value="Órbitas">Órbitas</option>
          <option value="Cervical">Cervical</option>
          <option value="Dorsal">Dorsal</option>
          <option value="Lombar">Lombar</option>
          <option value="Sacro">Sacro</option>
          <option value="Tórax">Tórax</option>
          <option value="Costela">Costela</option>
          <option value="Esterno">Esterno</option>
          <option value="Cravicula">Cravicula</option>
          <option value="Ombro">Ombro</option>
          <option value="Braço">Braço</option>
          <option value="Cotovelo">Cotovelo</option>
          <option value="Antebraço">Antebraço</option>
          <option value="Punho">Punho</option>
          <option value="Mão">Mão</option>
          <option value="Dedo">Dedo</option>
          <option value="Bacia">Bacia</option>
          <option value="Abdômen">Abdômen</option>
          <option value="Quadril">Quadril</option>
          <option value="Fêmur">Fêmur</option>
          <option value="Joelho">Joelho</option>
          <option value="Perna">Perna</option>
          <option value="Tornozelo">Tonozelo</option>
          <option value="Pé">Pé</option>
          <option value="Calcâneo">Calcâneo</option>
      </select>
      <select name="sexo" className="CmpSexoRelatorio" value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="">Sexo</option>
          <option value="M">M</option>
          <option value="F">F</option>
      </select>
      <input className="CmpOrigemRelatorio" type="text" placeholder="Origem" value={origem} onChange={(e) => setOrigem(e.target.value)}/>
      <input className="CmpIdade" type="number" placeholder="Idade inicial" value={idadeInicio} onChange={(e) => setIdadeInicio(e.target.value)}/>
      <input className="CmpIdade" type="number" placeholder="Idade final" value={idadeFim} onChange={(e) => setIdadeFim(e.target.value)}/>
      <button className="BotaoBuscar" onClick={buscarRegistros}>
        Buscar
      </button>
      <button className="BotaoExportar" onClick={exportarExcel} disabled={registros.length === 0}>
        Exportar para Excel
      </button>

      <div>
        <table className="CabecalhoRelatorio">
          <tr>
            <td>Nome</td>
            <td>Sexo</td>
            <td>
              <div className="linha1">Data</div>
              <div>Nascimento</div>
            </td>
            <td>Idade</td>
            <td>Exame</td>
            <td>Incid.</td>
            <td>Origem</td>
            <td>Reexpo.</td>
            <td>Motivo</td>
            <td>
              <div className="linha1">Data</div>
              <div>Realização</div>
            </td>
            <td>
              <div className="linha1">Hora</div>
              <div>Solicit.</div>
            </td>
            <td>
              <div className="linha1">Hora</div>
              <div>Realizada</div>
            </td>
            <td>Técnico</td>
          </tr>       
        </table>
        <table cellPadding="3" cellSpacing="0" className="TabelaRelatorio">
          <tbody>
            {registros.map((item, index) => (
              <tr key={item.id}>
                <td>{item.nomepaciente}</td>
                <td>{item.sexo}</td>
                <td>{formatarData(item.datanascimento)}</td>
                <td>{calcularIdade(item.datanascimento)}</td> 
                <td>{item.exame}</td>
                <td>{item.qtdincidencias}</td>
                <td>{item.origem}</td>
                <td>{item.reexposicao}</td>
                <td>{item.motivo}</td>
                <td>{formatarData(item.datarealizada)}</td>
                <td>{item.horapedido}</td>
                <td>{item.horarealizada}</td>
                <td>{item.nometecnico}</td>
              </tr>
            ))}
          </tbody>
        </table>  
      </div>
    </div>
  );
};

export default Relatorio;