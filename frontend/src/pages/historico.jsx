import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Historico = () => {
  const [registros, setRegistros] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroData, setFiltroData] = useState('');

  const formatarData = (isoString) => {
    if (!isoString) return '';
    const data = new Date(isoString);
    return data.toLocaleDateString('pt-BR');
  };

  const buscarRegistros = async () => { //Aqui é declarado a função de buscar os registros no banco de dados via GET
    try {
      const res = await axios.get('http://localhost:3001/api/registros');
      setRegistros(res.data);
    } catch (err) {
      console.error('Erro ao buscar registros:', err);
    }
  };

  useEffect(() => { //Responsável por executar a função declarada acima, porém só uma vez graças ao []
    buscarRegistros();
  }, []);

  const removerAcentos = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const filtrarRegistros = () => { //Declaração e execução dos filtros
    return registros.filter((item) => {
      const nomePaciente = removerAcentos(item.nomepaciente.toLowerCase());
      const nomeFiltro = removerAcentos(filtroNome.toLowerCase());
      
      const nomeMatch = nomePaciente.includes(nomeFiltro)
      const dataMatch = filtroData
        ? item.datapedido && item.datapedido.startsWith(filtroData)
        : true;
      return nomeMatch && dataMatch;
    });
  };

  const limparFiltros = () => { //Apenas limpa os fltros
    setFiltroNome('');
    setFiltroData('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Histórico de Registros</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="date"
          value={filtroData}
          onChange={(e) => setFiltroData(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={limparFiltros}>Limpar filtros</button>
      </div>

      <table border="1" cellPadding="3" cellSpacing="0">
        <thead>
          <tr>
            <th>Prontuário</th>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Data Nasc.</th>
            <th>Exame</th>
            <th>Qtd. Incidências</th>
            <th>Data Pedido</th>
            <th>Hora Pedido</th>
            <th>Técnico</th>
          </tr>
        </thead>
        <tbody>
          {filtrarRegistros().map((item) => (
            <tr key={item.id}>
              <td>{item.prontuario}</td>
              <td>{item.nomepaciente}</td>
              <td>{item.sexo}</td>
              <td>{formatarData(item.datanascimento)}</td>
              <td>{item.exame}</td>
              <td>{item.qtdincidencias}</td>
              <td>{formatarData(item.datapedido)}</td>
              <td>{item.horapedido}</td>
              <td>{item.nometecnico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historico;
