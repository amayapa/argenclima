import styled from "styled-components";
import { colors, pngShadow } from "../styles/globalStyles";

export const CardComponent = styled.div`
  display: inline-block;
  justify-content: center;
  position: relative;
  background-color: ${colors.blue};
  min-width: 300px;
  max-width: 400px;
  height: fit-content;
  padding: 7px;
  margin: 20px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 3px 3px 3px grey;
  & #x {
    position: absolute;
    top: 9px;
    right: 9px;
    cursor: pointer;
    font-size: 28px;
    font-weight: bold;
    color: #843511;
  }
  & #x:hover {
    font-size: 32px;
    color: red;
    top: 4px;
    right: 7px;
  }
  & h3 {
    margin-top: 40px;
    margin-bottom: 0px;
    font-size: 1.5em;
    text-align: center;
    color: #843511;
  }
  & p {
    font-family: "Sofadi One", cursive;
    margin: 10px;
    margin-left: 20px;
  }
  & span {
    color: #fcbf49;
    text-shadow: ${colors.brown} 3px 3px 4px;
    font-size: 20px;
  }
  & #stats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  & #icon {
    margin-top: 30px;
    filter: ${pngShadow};
  }
  & #shield {
    filter: ${pngShadow};
    height: 100px;
    margin-top: 30px;
  }
  & #images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
  }
`;
