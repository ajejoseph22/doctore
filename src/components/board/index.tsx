import Square from "../square";
import styled from "styled-components";
import { FC, useContext } from "react";
import { GameContext } from "../game";

const BoardWrapper = styled.div`
  border: 4px solid darkblue;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Board: FC<{
  board: string[];
}> = ({ board }) => {
  const game = useContext(GameContext);
  return (
    <BoardWrapper>
      {board.map((square, i) => (
        <Square key={i} value={square} onClick={() => game.handleClick(i)} />
      ))}
    </BoardWrapper>
  );
};

export default Board;
