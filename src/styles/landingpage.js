import styled from "styled-components";
import { colors, footerHg, navBarHg, pngShadow } from "../styles/globalStyles";

export const Landing = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: calc(100vh - ${navBarHg} - ${footerHg});
  justify-content: space-evenly;
  width: 100%;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 20px;
  & #link {
    text-decoration: none;
  }
  & .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 3px 3px 3px grey;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    text-align: center;
    width: 200px;
    height: 100px;
    background-color: ${colors.blue};
    padding: 10px;
    margin: 20px;
    text-decoration: none;
  }
  & h4 {
    margin: 0;
    color: ${colors.brown};
  }
  & .info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  & p {
    font-family: "Sofadi One", cursive;
    margin: 1px;
    margin-left: 20px;
    font-size: 1em;
    color: initial;
  }
  & #text {
    margin: 0;
    padding: 0;
  }
  & span {
    font-size: 1em;
  }
  & #images {
    display: flex;
    margin: 0;
  }
  & #icon {
    margin: 0;
    padding: 0;
    width: 55px;
    filter: ${pngShadow};
  }
`;
