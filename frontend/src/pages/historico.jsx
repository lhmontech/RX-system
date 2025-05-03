import React, { useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

const Historico = () => {
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [registros, setRegistros] = useState([]);

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

  const formatarData = (isoString) => {
    if (!isoString) return "";
    const data = new Date(isoString);
    return data.toLocaleDateString("pt-BR");
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
      <h1>Histórico</h1>
      <input
        className="CmpData"
        type="date"
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
      />
      <input
        className="CmpData"
        type="date"
        value={dataFim}
        onChange={(e) => setDataFim(e.target.value)}
      />

      <button className="BotaoBuscar" onClick={buscarRegistros}>
        Buscar
      </button>

      <div>
        <div className="LinhaRelatorio">
          <span className="SpanNome">Nome</span>
          <span className="SpanSexo">Sexo</span>
          <div className="Coluna1">
            <span className="linha1">Data</span>
            <span>Nascimento</span>
          </div>
          <span className="SpanIdade">Idade</span>
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
                  <button
                    onClick={() => excluirRegistro(item.id)}
                    className="BotaoExcluir"
                  >
                    <Trash2 className="icon" />
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
