import styled from "styled-components";
import { colors, pngShadow, device } from "../styles/globalStyles";

export const CardComponent = styled.div`
  display: inline-block;
  justify-content: center;
  position: relative;
  background-color: ${colors.blue};
  min-width: 300px;
  max-width: 400px;
  height: 450px;
  padding: 7px;
  margin: 20px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 3px 3px 3px grey;
  &:hover {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  & #star {
    position: absolute;
    border: 0px;
    padding: 0;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
  & h3 {
    margin-top: ${(props) => props.marginTop};
    margin-bottom: 0px;
    font-size: 1.75em;
    text-align: center;
    color: #843511;
  }
  & p {
    font-family: "Noto Sans JP", sans-serif;
    margin: 5px;
    margin-left: 10px;
    font-size: 22px;
  }
  & span {
    color: azure;
    /* text-shadow: ${colors.brown} 3px 3px 4px; */
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
    height: 100px;
    margin-top: 30px;
  }
  & #images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
  }
  @media ${device.mobileL} {
    transform: scale(0.9);
  }
  @media ${device.mobileM} {
    transform: scale(0.8);
  }
  @media ${device.mobileS} {
    transform: scale(0.7);
  }
`;
