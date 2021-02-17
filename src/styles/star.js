import styled from "styled-components";
import { colors } from "./globalStyles";

export const Star = styled.button`
  position: absolute;
  border: 0px;
  padding: 0;
  background-color: transparent;
  outline: none;
  top: -5px;
  left: 7px;
  cursor: pointer;
  font-size: 2em;
  font-weight: bold;
  color: ${colors.yellow};
  text-shadow: ${colors.lightBrown} 2px 2px 2px;
  :hover {
    transform: rotate(360deg);
  }
`;
