import styled from "styled-components";
import { colors } from "./globalStyles";

export const Spinner = styled.div`
  border: 7px solid rgb(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;
  margin: auto;
  margin-top: 160px;
  border-radius: 50%;
  border-left-color: ${colors.brown};
  animation: spin 1s cubic-bezier(0.42, 0.18, 0.33, 0.71) infinite;
`;
