import { useState } from "react";
import styles from "./tabuleiro.module.css";
import {
  adicionarJogada,
  JOGO_INICIAL,
  verificarFimDoJogo,
  verificarVencedor,
} from "./jogo-do-galo";

export function JogoDoGalo() {
  const [jogoDoGalo, setJogoDoGalo] = useState(JOGO_INICIAL);
  const vencedor = verificarVencedor(jogoDoGalo);
  const registaJogada = (i, j) => {
    if (!verificarFimDoJogo(jogoDoGalo)) {
      console.log(jogoDoGalo.jogada);
      setJogoDoGalo((jogo) => {
        const jog = adicionarJogada(jogo, jogo.jogadorAtual, i, j);
        return jog;
      });
    }
  };

  return (
    <div className={styles.tabuleiroGalo}>
      <div>
        {jogoDoGalo.tabuleiro.map((linha, i) => (
          <div className={styles.row} key={`${i}`}>
            {linha.map((casa, j) => (
              <div
                onMouseEnter={() => {}}
                onClick={() => {
                  registaJogada(i, j);
                }}
                className={styles.cell}
                key={`${i}${j}`}
                data-testid={`l${i}c${j}`}
              >
                {casa}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        {verificarFimDoJogo(jogoDoGalo) ? (
          <p data-testid="gameover">Jogo Terminado!</p>
        ) : (
          <p>
            Jogador Atual:{" "}
            <span data-testid="turn">{jogoDoGalo.jogadorAtual}</span>
          </p>
        )}
        {vencedor && (
          <p>
            Vencedor: <span data-testid="winner">{vencedor}</span>
          </p>
        )}
      </div>
      <button onClick={() => setJogoDoGalo(JOGO_INICIAL)} data-testid="restart">
        Reiniciar Jogo
      </button>
    </div>
  );
}
