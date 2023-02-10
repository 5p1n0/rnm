import styled from "styled-components";

export const StyledImg = styled.img<{ reverse: boolean }>`
  display: ${(props) => (props.reverse ? "none" : "block")};
  backface-visibility: hidden;
  max-width: 260px;
  border-radius: 0.75rem;

  @media (max-width: 43rem) {
    flex: 0 1;
    min-height: 260px;
  }
`;
