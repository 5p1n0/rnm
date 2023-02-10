import styled from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 1.5rem;
`;

export const StyledSpan = styled.span`
  display: block;
  width: fit-content;
  font-family: "IBM Plex Sans", sans-serif;
  position: relative;
  color: #f5f5f5;
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 50ms;
  z-index: 0;
  font-size: 0.875rem;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 160%;
    z-index: -1;
    transform: scale(110%) rotate(2deg) translateY(-35%);
    background: #202329;
  }
`;

export const StyledDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 60%;
  padding: 0 1rem;
  height: 80%;
  margin-bottom: 1.5rem;

  @media (max-width: 43rem) {
    height: 55%;
  }
`;
