import { useState } from "react";
import styles from "./tabuleiro.module.css";
import { adicionarJogada } from "./jogo-do-galo";

export function JogoDoGaloTest() {
  const [jogoDoGalo, setJogoDoGalo] = useState();
  const [matriz, setMatriz] = useState(
    new Array(3).fill("X").map((e) => new Array(3).fill("X"))
  );
  const [corSelecionada, setSelecionada] = useState("X");
  const [painting, setPainting] = useState(false);

  return (
    <div className={styles.tabuleiroGalo}>
      <div>
        {matriz.map((linha, i) => (
          <div className={styles.row} key={`${i}`}>
            {linha.map((casa, j) => (
              <div
                onClick={() => {}}
                style={{ backgroundColor: casa }}
                // onClick={() => adicionarJogada(i, j)}
                onClick={console.log(i, j)}
                className={styles.cell}
                key={`${i}${j}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
