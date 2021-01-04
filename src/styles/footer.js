import styled from "styled-components";
import { footerHg, colors } from "../styles/globalStyles";

const FooTer = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  height: ${footerHg};
  font-family: "Sofadi One", cursive;
  min-height: 50px;
  // max-height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lila};
  & span {
    font-size: 22px;
    margin: 15px;
  }
`;
export default FooTer;
