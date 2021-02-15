import { device, colors, navBarHg } from "../styles/globalStyles";
import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  position: sticky;
  font-family: "Sofadi One", cursive;
  justify-content: space-between;
  margin: 0px;
  flex-direction: row;
  background-color: ${colors.brown};
  width: 100%;
  height: ${navBarHg};
  align-items: center;
  @media ${device.tablet} {
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    height: fit-content;
  }
`;

export const Logos = styled(Navbar)`
  justify-content: initial;
  width: fit-content;
  height: fit-content;
  flex-direction: row;
  & #logo {
    width: 70px;
    height: 70px;
    margin-left: 20px;
    margin-right: 10px;
    filter: drop-shadow(1px 1px 1px rgb(0, 0, 0, 0.25));
  }
  & .argenclima {
    font-size: 48px;
  }
  & #arg {
    color: ${colors.blue};
  }
  & #encl {
    color: ${colors.white};
  }
  & #ima {
    color: ${colors.blue};
  }
  @media ${device.tablet} {
    justify-content: center;
    padding: 0px;
    & #logo {
      margin-left: 0;
    }
  }
`;
