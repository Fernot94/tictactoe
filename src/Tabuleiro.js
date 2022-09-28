import { useState } from "react";
import styles from "./tabuleiro.module.css";

export default function Tabuleiro() {
  const [matriz, setMatriz] = useState(
    new Array(9).fill("").map((e) => new Array(9).fill("#FFFFFF"))
  );
  const [corSelecionada, setSelecionada] = useState("#ff0054");
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
              onMouseEnter={() => {
                if (painting) {
                  mudaCor(i, j);
                }
              }}
              onMouseDown={() => {
                console.log("PAINTING");
                setPainting(true);
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
