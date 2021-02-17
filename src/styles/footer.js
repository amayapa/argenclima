import styled from "styled-components";
import { footerHg, colors, device } from "../styles/globalStyles";

export const FooTer = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  height: ${footerHg};
  min-height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.brown};
  position: relative;
  & span {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 22px;
    font-weight: bold;
    margin: 15px;
    color: ${colors.blue};
  }
  & a {
    text-decoration: none;
  }
  & p {
    margin: 0;
    right: 10px;
    top: -25px;
    text-decoration: none;
    position: absolute;
  }
  @media ${device.mobileL} {
    justify-content: flex-start;
  }
  @media ${device.mobileS} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-right: 10px;
  position: absolute;
  right: 0;
  & a {
    text-decoration: none;
    text-align: right;
    margin: 0;
  }
  & span {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    color: ${colors.yellow};
    font-style: normal;
    margin: 0;
    text-align: right;
  }
`;
