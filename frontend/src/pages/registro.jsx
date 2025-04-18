import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Registro() {
  const [formData, setFormData] = useState({
    prontuario: '',
    nomepaciente: '',
    sexo: '',
    datanascimento: '',
    exame: '',
    qtdincidencias: '',
    datapedido: '',
    horapedido: '',
    nometecnico: ''
  });

  const [mensagem, setMensagem] = useState('');
  const [registros, setRegistros] = useState([]); // Armazenando os registros para exibir na tabela

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Preenchendo data e hora atuais automaticamente
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toISOString().split('T')[0];
    const horaFormatada = dataAtual.toTimeString().split(' ')[0].slice(0, 5);

    const dadosCompletos = {
      ...formData,
      dataatual: dataFormatada,
      horaatual: horaFormatada
    };

    try {
      const response = await axios.post('http://localhost:3001/api/registros', dadosCompletos);
      setMensagem(response.data.message || 'Registro salvo com sucesso!');
      setFormData({
        prontuario: '',
        nomepaciente: '',
        sexo: '',
        datanascimento: '',
        exame: '',
        qtdincidencias: '',
        datapedido: '',
        horapedido: '',
        nometecnico: ''
      });
    } catch (error) {
      console.error('Erro ao registrar:', error);
      setMensagem('Erro ao registrar. Tente novamente.');
    }
  };
  //Tabela com a busca dos registros mais recentes
  const buscarRegistros = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/registros');
      setRegistros(res.data.slice(0, 15)); // Pega apenas os últimos 10 registros
    } catch (err) {
      console.error('Erro ao buscar registros:', err);
    }
  };

  // Buscar registros ao carregar o componente
  useEffect(() => {
    buscarRegistros();
  }, []);

  const formatarData = (isoString) => {
    if (!isoString) return '';
    const data = new Date(isoString);
    return data.toLocaleDateString('pt-BR');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registrar Exame</h2>
      <form onSubmit={handleSubmit}>
        <input name="prontuario" placeholder="Prontuário" value={formData.prontuario} onChange={handleChange} required />
        <input name="nomepaciente" placeholder="Nome do Paciente" value={formData.nomepaciente} onChange={handleChange} required />
        <select name="sexo" value={formData.sexo} onChange={handleChange} required>
          <option value="">Selecione o sexo</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
        <input name="datanascimento" type="date" value={formData.datanascimento} onChange={handleChange} required />
        <select name="exame" value={formData.exame} onChange={handleChange} required>
          <option value="">Selecione o exame</option>
          <option value="exameTorax">Exame de Toráx</option>
          <option value="exameCranio">Exame de Crânio</option>
          <option value="exameMao">Exame de Mão</option>
        </select>
        <input name="qtdincidencias" type="number" placeholder="Qtd. Incidências" value={formData.qtdincidencias} onChange={handleChange} required />
        <input name="datapedido" type="date" value={formData.datapedido} onChange={handleChange} required />
        <input name="horapedido" type="time" value={formData.horapedido} onChange={handleChange} required />
        <input name="nometecnico" placeholder="Nome do Técnico" value={formData.nometecnico} onChange={handleChange} required />

        <button type="submit">Registrar</button>
      </form>

      {mensagem && <p style={{ marginTop: '10px' }}>{mensagem}</p>}
    {registros.length > 0 ? (
      <table border="1" cellPadding="3" cellSpacing="0" style={{ marginTop: '20px' }}>
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
          {registros.map((item) => (
            <tr key={item.prontuario}>
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
    ) : (
      <p>Nenhum registro encontrado.</p>
    )}
  </div>
    
  );
};


export default Registro;
