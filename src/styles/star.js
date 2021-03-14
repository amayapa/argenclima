import styled from "styled-components";

export const Star = styled.button`
  position: absolute;
  border: 0px;
  padding: 0;
  outline: none;
  background-color: transparent;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  cursor: pointer;
  font-size: 2em;
  font-weight: bold;
  :hover {
    transform: rotateZ(180deg) scale(1.2, 1.2);
    transition: transform 1s;
  }
  & img {
    height: ${(props) => props.height};
  }
`;
