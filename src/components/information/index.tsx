import { FC } from "react";
import styled from "styled-components";

const InformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Information: FC<{ winner: string | null; xIsNext: boolean }> = ({
  winner,
  xIsNext,
}) => (
  <InformationWrapper>
    {winner && <p>Winner is {winner}</p>}
    {!winner && <p>{`${xIsNext ? "X" : "O"} to play`}</p>}
  </InformationWrapper>
);
export default Information;
