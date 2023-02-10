import styled from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 1.5rem;
`;

export const StyledSpan = styled.span`
  display: block;
  font-family: "IBM Plex Sans", sans-serif;
  width: fit-content;
  color: white;
  font-size: 0.875rem;
  position: relative;
  z-index: 1;

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
