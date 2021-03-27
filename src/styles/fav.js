import styled from "styled-components";
import {
  colors,
  pngShadow,
  navBarHg,
  footerHg,
  device,
} from "../styles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  min-height: calc(100vh - ${navBarHg} - ${footerHg});
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1200px;
  margin: 0 auto;
`;
export const Title = styled.h1`
  color: ${colors.yellow};
  text-align: center;
  text-shadow: ${colors.lightBrown} 1px 1px 2px;
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
  max-width: 350px;
  height: 370px;
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
    transform: scale(0.9);
    transition: transform 0.5s;
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
    text-shadow: ${colors.lightBrown} 2px 2px 2px;
  }
  & #x:hover {
    font-size: 2.3em;
    top: 0px;
    right: 4px;
  }
  & h3 {
    cursor: pointer;
    padding-bottom: 5px;
    margin-top: ${(props) =>
      props.caba === "Buenos Aires F.D."
        ? "10px"
        : props.caba === "Santiago del Estero Province"
        ? "10px"
        : "25px"};
    margin-bottom: ${(props) =>
      props.caba === "Buenos Aires F.D."
        ? "0px"
        : props.caba === "Santiago del Estero Province"
        ? "0px"
        : "22px"};
    font-size: 1.75em;
    text-align: center;
    color: #843511;
    max-width: 250px;
  }
  & h3:hover {
    font-style: italic;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  & p {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    margin: 4px;
    margin-left: 10px;
    font-size: 20px;
  }
  & span {
    font-weight: lighter;
    color: azure;
    /* text-shadow: ${colors.brown} 1px 1px 1px; */
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
  @media ${device.mobileM} {
    & h3 {
      font-size: 1.5em;
    }
    & p {
      font-size: 1em;
    }
    &span {
      font-size: 0.75em;
    }
    & #shield {
      width: 60px;
      height: 60px;
      margin-left: 20px;
    }
  }
  @media ${device.mobileS} {
    & h3 {
      font-size: 1.25em;
    }
    & p {
      font-size: 0.75em;
    }
    &span {
      font-size: 0.5em;
    }
    & #shield {
      width: 50px;
      height: 50px;
      margin-left: 30px;
    }
  }
`;
