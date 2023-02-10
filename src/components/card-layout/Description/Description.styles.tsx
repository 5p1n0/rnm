import styled from "styled-components";

export const StyledP = styled.p`
  display: inline-block;
  color: #202329;
  width: fit-content;
  position: relative;
  z-index: 0;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  font-family: "Lora", serif;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 150%;
    z-index: -1;
    transform: scale(110%) rotate(-2.5deg) translateY(-50%);
    background: #9ece10;
  }
`;
