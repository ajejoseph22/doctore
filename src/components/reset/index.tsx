import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "../game";

const StyledButton = styled.button`
  background: #61dafb;
  color: #000;
  border: 2px solid darkblue;
  cursor: pointer;
  display: flex;
  margin: 5px auto;
  padding: 5px;
`;

const Reset = () => {
  const game = useContext(GameContext);
  return <StyledButton onClick={() => game.handleReset()}>RESET</StyledButton>;
};

export default Reset;
