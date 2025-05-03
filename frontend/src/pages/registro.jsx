import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';

const Registro = () => {
  const [formData, setFormData] = useState({
    prontuario: '',
    nomepaciente: '',
    sexo: '',
    datanascimento: '',
    exame: '',
    qtdincidencias: '',
    origem: '',
    reexposicao: '',
    motivo: '',
    datarealizada: '',
    horapedido: '',
    horarealizada: '',
    nometecnico: ''
  });
  
  const setMensagem = useState('');
  const [registros, setRegistros] = useState([]); // Armazenando os registros para exibir na tabela

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/registros', formData);
      await atualizarRegistros(); // Atualiza a tabela
      setFormData({
        prontuario: '',
        nomepaciente: '',
        sexo: '',
        datanascimento: '',
        exame: '',
        qtdincidencias: '',
        origem: '',
        reexposicao: '',
        motivo: '',
        datarealizada: '',
        horapedido: '',
        horarealizada: '',
        nometecnico: ''
      });
    } catch (error) {
      console.error('Erro ao registrar:', error);
      setMensagem('Erro ao registrar. Tente novamente.');
    }
  };
  //Tabela com a busca dos registros mais recentes
  const atualizarRegistros = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/registros');
      const ultimosRegistros = res.data.slice(0, 20); // Últimos 20 registros
      setRegistros(ultimosRegistros);
    } catch (err) {
      console.error('Erro ao buscar registros:', err);
    }
  };

  // Buscar registros ao carregar a pagina e logo após inserir um novo
  useEffect(() => {
    atualizarRegistros();
  }, []);

  const buscarProntuario = async () => {
    if (!formData.prontuario) return;
    try {
      const response = await axios.get(`http://localhost:3001/api/registros/prontuario/${formData.prontuario}`);
      const data = response.data;
      setFormData(prev => ({
        ...prev,
        nomepaciente: data.nome,
        sexo: data.sexo,
        datanascimento: data.datanascimento.slice(0, 10),
      }));
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar prontuário");
    }
  };

  const excluirRegistro = async (id) => {
    const confirmar = window.confirm('Tem certeza que deseja excluir este registro?');
    if (!confirmar) return;
  
    try {
      const resposta = await axios.delete(`http://localhost:3001/api/registros/${id}`);
      if (resposta.status === 200) {
        await atualizarRegistros();
      }
    } catch (erro) {
      console.error('Erro ao excluir:', erro);
      alert("Erro ao excluir o registro");
    }
  };
  const formatarData = (isoString) => {
    if (!isoString) return '';
    const data = new Date(isoString);
    return data.toLocaleDateString('pt-BR');
  };

  return (
    <div>
      <h1>Registrar Exame</h1>
      <form onSubmit={handleSubmit}>
        Prontuário:
        <input name="prontuario" className="CmpProntuario" placeholder="Prontuário" value={formData.prontuario} onChange={handleChange}/>
        <button type="button" onClick={buscarProntuario} className="BotaoBuscar">Buscar</button>
        <br />
        <div className="LinhaRegistro">
          <span className="SpanNome">Nome</span>
          <span className="SpanSexo">Sexo</span>
          <div className="Coluna1">
            <span className="linha1">Data</span>
            <span>Nascimento</span>
          </div>         
          <span className="SpanExame">Exame</span>
          <span className="SpanInci">Incid.</span>
          <span className="SpanOrigem">Origem</span>
          <span className="SpanReexpo">Reexpo.</span>
          <span className="SpanMotivo">Motivo</span>
          <div className="Coluna2">
            <span className="linha1">Data</span>
            <span>Realização</span>
          </div>     
          <div className="Coluna3">
            <span className="linha1">Hora</span>
            <span>Solicitção</span>
          </div>
          <div className="Coluna4">
            <span className="linha1">Hora</span>
            <span>Realizada</span>
          </div>        
          <span>Técnico</span>
        </div>
        <hr />
        <input name="nomepaciente" className="CmpNome" placeholder="Nome do Paciente" value={formData.nomepaciente} onChange={handleChange} required />
        <select name="sexo" className="CmpSexo" value={formData.sexo} onChange={handleChange}>
          <option value=""></option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
        <input name="datanascimento" className="CmpData" type="date" value={formData.datanascimento} onChange={handleChange}/>
        <select name="exame" className="CmpExame" value={formData.exame} onChange={handleChange} required>
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
          <option value="Calcâneo">Calacâneo</option>
        </select>
        <input name="qtdincidencias" className="CmpInci" placeholder="Nº" type="number" value={formData.qtdincidencias} onChange={handleChange}/>
        <select name="origem" className="CmpOrigem" value={formData.origem} onChange={handleChange} required>
          <option value="">Origem</option>
          <option value="Ortopedia">Ortopedia</option>
          <option value="Clínico">Clínico</option>
          <option value="Observação">Observação</option>
          <option value="Clínica Médica">Clínica Médica</option>
          <option value="Box">Box</option>
          <option value="Externo">Externo</option>
          <option value="Ambulatório">Ambulatório</option>
          <option value="UCI">UCI</option>
        </select>
        <input name="reexposicao" className="CmpReexp" type="text" placeholder="Reexp." value={formData.reexposicao} onChange={handleChange}/>
        <input name="motivo" className="CmpMotivo" type="text" placeholder="Motivo" value={formData.motivo} onChange={handleChange}/>
        <input name="datarealizada" className="CmpData" type="date" value={formData.datarealizada} onChange={handleChange} required />
        <input name="horapedido" className="CmpHora" type="time" value={formData.horapedido} onChange={handleChange} required />
        <input name="horarealizada" className="CmpHora" type="time" value={formData.horarealizada} onChange={handleChange} required />
        <input name="nometecnico" className="CmpTecnico" placeholder="Nome do Técnico" value={formData.nometecnico} onChange={handleChange} required />
        <div className="BotaoDireita">
        <button type="submit" className="BotaoRegistrar">Registrar</button></div>        
      </form>
      {registros.length > 0 ? (
      <table cellPadding="3" cellSpacing="0" className="TabelaRegistro">
        <tbody>
          {registros.map((item) => (
            <tr key={item.id}>
              <td>{item.nomepaciente}</td>
              <td>{item.sexo}</td>
              <td>{formatarData(item.datanascimento)}</td>
              <td>{item.exame}</td>
              <td>{item.qtdincidencias}</td>
              <td>{item.origem}</td>
              <td>{item.reexposicao}</td>
              <td>{item.motivo}</td>
              <td>{formatarData(item.datarealizada)}</td>
              <td>{item.horapedido}</td>
              <td>{item.horarealizada}</td>
              <td>{item.nometecnico}</td>
              <td>
                <button onClick={() => excluirRegistro(item.id)} className="BotaoExcluir">
                  <Trash2 className="icon"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Nenhum registro encontrado.</p>
    )}
  </div>
  );
};

export default Registro;
