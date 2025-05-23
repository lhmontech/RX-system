import React, { useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

const Historico = () => {
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [registros, setRegistros] = useState([]);
  
  //Função para usar o método GET e filtrar o retorno dos registros por data
  const buscarRegistros = async () => {
    try {
      const params = new URLSearchParams();

      if (dataInicio) params.append("dataInicio", dataInicio);
      if (dataFim) params.append("dataFim", dataFim);

      const response = await axios.get(
        `http://localhost:3001/api/registros/filtro?${params.toString()}`
      );
      setRegistros(response.data);
    } catch (error) {
      console.error("Erro ao buscar registros:", error);
      alert("Erro ao buscar registros");
    }
  };

  //Função para excluir dados já registrados
  const excluirRegistro = async (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este registro?"
    );
    if (!confirmar) return;

    try {
      const resposta = await axios.delete(
        `http://localhost:3001/api/registros/${id}`
      );
      if (resposta.status === 200) {
        await buscarRegistros();
      }
    } catch (erro) {
      console.error("Erro ao excluir:", erro);
      alert("Erro ao excluir o registro");
    }
  };

  //Função para formatar a forma como a data aparece para o usuário
  const formatarData = (isoString) => {
    if (!isoString) return "";
    const data = new Date(isoString);
    return data.toLocaleDateString("pt-BR");
  };

  //Função para calcular a idade com base na data de nascimento
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
    //Campos para inserir data inicial e final mais botão para iniciar a busca
    <div className="FrameRelatorio">
      <h1>Histórico</h1>
      <input
        className="CmpDataHistorico"
        type="date"
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
      />
      <input
        className="CmpDataHistorico"
        type="date"
        value={dataFim}
        onChange={(e) => setDataFim(e.target.value)}
      />

      <button className="BotaoBuscar" onClick={buscarRegistros}>
        Buscar
      </button>
      
      <div>
      <table className="CabecalhoHistorico">
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
        <table cellPadding="3" cellSpacing="0" className="TabelaHistorico">
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
                <td>
                  <button onClick={() => excluirRegistro(item.id)} className="BotaoExcluir">
                    <Trash2 className="icon"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historico;
