import styled from "styled-components";
import { footerHg, colors } from "../styles/globalStyles";

const FooTer = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  height: ${footerHg};
  min-height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lila};
  & span {
    font-family: "Sofadi One", cursive;
    font-size: 22px;
    font-style: italic;
    margin: 15px;
    color: ${colors.brown};
  }
  & a {
    text-decoration: none;
  }
`;
export default FooTer;
