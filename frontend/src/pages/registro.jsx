import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Registro() {
  const [formData, setFormData] = useState({
    nomepaciente: '',
    sexo: '',
    datanascimento: '',
    exame: '',
    qtdincidencias: '',
    origem: '',
    reexposicao: '',
    motivo: '',
    datapedido: '',
    horapedido: '',
    horarealizada: '',
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

    try {
      const response = await axios.post('http://localhost:3001/api/registros');
      setMensagem(response.data.message || 'Registro salvo com sucesso!');
      setFormData({
        nomepaciente: '',
        sexo: '',
        datanascimento: '',
        exame: '',
        qtdincidencias: '',
        origem: '',
        reexposicao: '',
        motivo: '',
        datapedido: '',
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
  const buscarRegistros = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/registros');
      setRegistros(res.data.slice(0, 20)); // Pega apenas os últimos 20 registros
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
        <input name="nomepaciente" placeholder="Nome do Paciente" value={formData.nomepaciente} onChange={handleChange} required />
        <select name="sexo" value={formData.sexo} onChange={handleChange}>
          <option value="">Sexo</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
        <input name="datanascimento" type="date" value={formData.datanascimento} onChange={handleChange}/>
        <select name="exame" value={formData.exame} onChange={handleChange} required>
          <option value="">Exame</option>
          <option value="Torax">Tórax</option>
          <option value="Cranio">Crânio</option>
          <option value="Mao">Mão</option>
        </select>
        <input name="qtdincidencias" type="number" placeholder="Qtd. Incidências" value={formData.qtdincidencias} onChange={handleChange}/>
        <select name="origem" value={formData.origem} onChange={handleChange} required>
          <option value="">Origem</option>
          <option value="ortop">Ortop.</option>
          <option value="clinico">Clínico</option>
          <option value="uci">UCI</option>
        </select>
        <input name="reexposicao" type="text" placeholder="Reexposição" value={formData.reexposicao} onChange={handleChange}/>
        <input name="motivo" type="text" placeholder="Motivo" value={formData.motivo} onChange={handleChange}/>
        <input name="datapedido" type="date" value={formData.datapedido} onChange={handleChange} required />
        <input name="horapedido" type="time" value={formData.horapedido} onChange={handleChange} required />
        <input name="horarealizada" type="time" value={formData.horarealizada} onChange={handleChange} required />
        <input name="nometecnico" placeholder="Nome do Técnico" value={formData.nometecnico} onChange={handleChange} required />

        <button type="submit">Registrar</button>
      </form>

      {mensagem && <p style={{ marginTop: '10px' }}>{mensagem}</p>}
    {registros.length > 0 ? (
      <table border="1" cellPadding="3" cellSpacing="0" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Data Nasc.</th>
            <th>Exame</th>
            <th>Incid.</th>
            <th>Origem</th>
            <th>Reexpo.</th>
            <th>Motivo</th>
            <th>Data Pedido</th>
            <th>Hora Pedido</th>
            <th>Hora Realizada</th>
            <th>Técnico</th>
          </tr>
        </thead>
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
              <td>{formatarData(item.datapedido)}</td>
              <td>{item.horapedido}</td>
              <td>{item.horarealizada}</td>
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
