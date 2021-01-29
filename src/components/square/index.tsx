import {FC} from "react";
import styled from "styled-components";

const Button = styled.button`
  background: lightblue;
  border: 2px solid darkblue;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`;

const Square: FC<{ onClick: any, value: string }> = ({onClick, value}) => (
    <Button onClick={onClick}>{value}</Button>
);

export default Square
