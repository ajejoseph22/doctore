import { FC } from "react";
import styled from "styled-components";

const InformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Information: FC<{
  winner: string | null;
  xIsNext: boolean;
  isDraw: boolean;
}> = ({ winner, xIsNext, isDraw }) => (
  <InformationWrapper>
    {isDraw && <p>It's a draw!</p>}
    {winner && <p>Winner is {winner}</p>}
    {!winner && !isDraw && <p>{`${xIsNext ? "X" : "O"} to play`}</p>}
  </InformationWrapper>
);
export default Information;
