import styled from "styled-components";

export const StyledDiv = styled.div<{ reverse: boolean }>`
  flex: 1 1 0;
  display: ${(props) => (props.reverse ? "none" : "block")};
  min-height: 90%;
  padding: 0 0.75rem 0.75rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  @media (max-width: 43rem) {
    min-height: 60%;
  }
`;

export const StyledSection = styled.section`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 80%;
  padding: 0 1rem;
  height: 80%;

  @media (max-width: 43rem) {
    height: 90%;
  }
`;
