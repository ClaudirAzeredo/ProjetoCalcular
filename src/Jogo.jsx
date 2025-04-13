import { useState } from "react";
import "./Jogo.css"; // certifica-se de que esse CSS esteja sendo importado

const Jogo = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resposta, setResposta] = useState("");
  const [pontos, setPontos] = useState(0);

  const sortearDesafio = () => {
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
    setNumero1(n1);
    setNumero2(n2);
    setResposta("");
  };

  const validarResposta = () => {
    if (parseInt(resposta) === numero1 + numero2) {
      setPontos(pontos + 1);
      alert("Parabéns! Resposta correta. 🏆");
    } else {
      alert("Ops! Tente novamente.");
    }
  };

  const novoJogo = () => {
    setPontos(0);
    sortearDesafio();
  };

  return (
    <div className="jogo-container">
      <h2>Você tem {pontos} pontos</h2>

      <button onClick={sortearDesafio} className="btn-sortear">
        Sortear Desafio
      </button>

      <p className="label">Quanto é :</p>
      <div className="soma">
        <span>{numero1}</span>
        <span> + </span>
        <span>{numero2}</span>
      </div>

      <p className="label">Sua Resposta :</p>
      <input
        type="number"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        className="campo-resposta"
      />

      <div className="botoes">
        <button onClick={validarResposta} className="btn-validar">Validar</button>
        <button onClick={novoJogo} className="btn-novo">Novo Jogo</button>
      </div>
    </div>
  );
};

export default Jogo;
