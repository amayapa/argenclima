import styled from "styled-components";
import { colors, pngShadow, navBarHg, footerHg } from "../styles/globalStyles";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 15px;
  min-height: calc(103.9vh - ${navBarHg} - ${footerHg});
`;

export const EmptyFav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue};
  max-width: 600px;
  height: 300px;
  margin: 15px;
  padding: 15px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 3px 3px 3px grey;
  & h1 {
    text-align: center;
    color: #843511;
  }
`;

export const Fav = styled.div`
  display: inline-block;
  justify-content: center;
  position: relative;
  background-color: ${colors.blue};
  min-width: 150px;
  max-width: 300px;
  height: 300px;
  padding: 5px;
  margin: 15px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 3px 3px 3px grey;
  &:hover {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  & #x {
    position: absolute;
    border: 0px;
    padding: 0;
    background-color: transparent;
    outline: none;
    top: 4px;
    right: 10px;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: bold;
    color: ${colors.yellow};
    text-shadow: ${colors.black} 2px 2px 2px;
  }
  & #x:hover {
    font-size: 2.3em;
    top: 0px;
    right: 4px;
  }
  & h3 {
    margin-top: 20px;
    margin-bottom: 0px;
    text-align: center;
    color: #843511;
    max-width: 200px;
  }
  & p {
    font-family: "Sofadi One", cursive;
    margin: 4px;
    margin-left: 10px;
  }
  & span {
    color: #fcbf49;
    text-shadow: ${colors.brown} 3px 3px 4px;
    font-size: 18px;
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
    height: 80px;
    width: 80px;
    margin-top: 30px;
  }
  & #images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0px;
  }
`;
