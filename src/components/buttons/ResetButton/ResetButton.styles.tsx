import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 1.5rem 0;
  width: 3rem;
  height: 3rem;
  border: 0;
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 50ms;
  font-size: 1.25rem;
  transform: rotateX(180deg);
  border-radius: 1.25rem;
  background: rgb(60, 62, 68);
  color: rgb(245, 245, 245);
  cursor: pointer;

  &:hover {
    color: #202329;
    background: #9ece10;
  }
`;
