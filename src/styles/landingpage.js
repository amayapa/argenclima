import styled from "styled-components";
import { colors, footerHg, navBarHg, pngShadow } from "../styles/globalStyles";

export const Landing = styled.div`
  padding: 15px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - ${navBarHg} - ${footerHg});
`;
export const Title = styled.h1`
  margin-top: 0;
  color: ${colors.yellow};
  text-align: center;
  text-shadow: ${colors.lightBrown} 1px 1px 2px;
`;

export const Cards = styled.div`
  font-size: initial;
  text-shadow: none;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
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
    flex-direction: column;
    justify-content: space-between;
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
    position: relative;
  }
  & .container:hover {
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    transform: scale(0.9);
    transition: transform 0.5s;
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
