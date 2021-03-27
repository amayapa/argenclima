import styled from "styled-components";

export const Star = styled.button`
  position: absolute;
  z-index: 2;
  border: 0px;
  padding: 0;
  outline: none;
  background-color: transparent;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  cursor: pointer;
  font-size: 2em;
  font-weight: bold;
  transition: transform 1s;
  :hover {
    transform: scale(1.2, 1.2);
    transition: transform 0.8s;
  }
  & img {
    height: ${(props) => props.height};
  }
`;
