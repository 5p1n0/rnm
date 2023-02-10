import styled from "styled-components";

export const StyledButton = styled.button`
  align-self: center;
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 0.75rem;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 43rem) {
    width: 2.625rem;
    height: 2.625rem;
    margin-bottom: 0.75rem;
  }
`;

export const StyledSvg = styled.svg`
  fill: #f5f5f5;
`;
