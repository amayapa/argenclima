import styled from "styled-components";
import { device, navBarHg, footerHg } from "./globalStyles";

const DashBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - ${navBarHg} - ${footerHg});
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  & #extra-info {
    margin: auto;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  & #text {
    text-align: justify;
  }
  @media ${device.tablet} {
    flex-direction: column;
    & #extra-info {
      margin: 30px;
    }
  }
`;
export default DashBoard;
