import styled from "styled-components";

export const StyledSpan = styled.span`
  font-size: 0.875rem;
  text-align: center;
`;

export const StyledButton = styled.button`
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 50ms;
  width: 3.75rem;
  height: 3.875rem;
  border: 0;
  z-index: 1;
  border-radius: 1.25rem;
  line-height: 1.375rem;
  font-size: 1.25rem;
  background: #3c3e44;
  color: #f5f5f5;
  margin-bottom: 3rem;
  cursor: pointer;

  &:enabled:hover {
    color: #202329;
    background: #9ece10;
  }
`;
