import styled from "styled-components";
import { device, navBarHg, footerHg } from "./globalStyles";

const DashBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - ${navBarHg} - ${footerHg});
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  & #extra-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px;
  }
  & #text {
    text-align: justify;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 20px;
  }
  @media ${device.tablet} {
    flex-direction: column;
    & #extra-info {
      margin: 30px;
      margin-top: 0;
    }
  }
  @media ${device.mobileM} {
    flex-direction: column;
    & #extra-info {
      margin: 30px;
      margin-top: 0;
      & h1 {
        margin-top: -30px;
      }
    }
  }
`;
export default DashBoard;
