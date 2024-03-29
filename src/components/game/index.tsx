import Board from "../board";
import { createContext, useEffect, useState } from "react";
import { calculateWinner } from "../../util/methods";
import Information from "../information";
import Reset from "../reset";

export const GameContext = createContext({
  handleClick: (i: number) => {},
  handleReset: () => {},
});

const Game = () => {
  const freshState = Array(9).fill(null);
  const [board, setBoard] = useState(freshState);
  const [xIsNext, setXIsNext] = useState(true);
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    setWinner(calculateWinner(board));

    if (!winner && !board.includes(null)) {
      setIsDraw(true);
    }
  }, [board]);

  return (
    <GameContext.Provider
      value={{
        handleClick: (i: number) => {
          const boardCopy = [...board];
          if (winner || boardCopy[i]) return;
          boardCopy[i] = xIsNext ? "X" : "O";
          setBoard(boardCopy);
          setXIsNext(!xIsNext);
        },
        handleReset: () => {
          setBoard(freshState);
          setIsDraw(false);
        },
      }}
    >
      <Information isDraw={isDraw} winner={winner} xIsNext={xIsNext} />
      <Reset />
      <Board board={board} />
    </GameContext.Provider>
  );
};
export default Game;
