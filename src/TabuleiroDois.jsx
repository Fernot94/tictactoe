import { useState } from "react";
import styles from "./tabuleiro.module.css";

function adicionarJogada(jogo, jogador, linha, coluna) {
  return {
    ...jogo,
    tabuleiro: jogo.tabuleiro.map((l, i) =>
      l.map((p, j) => (i === linha && j === coluna && p === "" ? jogador : p))
    ),
  };
}

export default function TabuleiroDois() {
  const [matriz, setMatriz] = useState(
    new Array(3).fill("").map((e) => new Array(3).fill("#FFFFFF"))
  );
  const [corSelecionada, setSelecionada] = useState(<p>X</p>);
  const [painting, setPainting] = useState(false);

  const mudaCor = (linha, coluna) => {
    setMatriz((prevMatriz) => {
      return prevMatriz.map((line, i) => {
        return line.map((casa, j) => {
          if (i === linha && j === coluna) {
            return corSelecionada;
          }
          return casa;
        });
      });
    });
  };

  return (
    <div>
      {matriz.map((linha, i) => (
        <div className={styles.row} key={`${i}`}>
          {linha.map((casa, j) => (
            <div
              onMouseDown={() => {
                console.log(i, j);
                // setPainting(true);
                adicionarJogada();
              }}
              style={{ backgroundColor: casa }}
              onClick={() => mudaCor(i, j)}
              className={styles.cell}
              key={`${i}${j}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
