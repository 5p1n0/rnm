import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSvg = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  animation: ${rotate} 1.5s linear infinite;

  @media (max-width: 43rem) {
    width: 2rem;
    height: 2rem;
  }
`;
