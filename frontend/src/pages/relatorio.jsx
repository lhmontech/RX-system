import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs} from 'file-saver';

const FiltroDeRegistros = () =>{
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [registros, setRegistros] = useState([]);

    const buscarRegistros = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/api/registros/filtro?dataInicio=${dataInicio}&dataFim=${dataFim}`);
        setRegistros(response.data);
        } catch (error) {
        console.error("Erro ao buscar registros:", error);
        } 
};

const exportarExcel = () => {
    const ws = XLSX.utils.json_to_sheet(registros);
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

return (
    <div style={{ padding: '20px' }}>
      <h2>Filtrar por período</h2>
      <input
        type="date"
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
      />
      <input
        type="date"
        value={dataFim}
        onChange={(e) => setDataFim(e.target.value)}
      />
      <button onClick={buscarRegistros}>Buscar</button>
      <button onClick={exportarExcel} disabled={registros.length === 0}>
        Exportar para Excel
        </button>

      <div>
        <h3>Resultados:</h3>
        <table border="1" cellPadding="3" cellSpacing="0" style={{ marginTop: '20px' }}>
        <tbody>{registros.map((item, index) => (
            <tr key={item.id}>
            <td>{item.nomepaciente}</td>
            <td>{item.sexo}</td>
            <td>{formatarData(item.datanascimento)}</td>
            <td>{item.exame}</td>
            <td>{item.qtdincidencias}</td>
            <td>{item.origem}</td>
            <td>{item.reexposicao}</td>
            <td>{item.motivo}</td>
            <td>{formatarData(item.datapedido)}</td>
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

export default FiltroDeRegistros;