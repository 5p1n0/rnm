import styled from "styled-components";

export const StyledDiv = styled.div<{ reverse: boolean }>`
  display: ${(props) => (props.reverse ? "none" : "block")};
  flex: 2 1;
  padding: 0 0.75rem 0.75rem;
  backface-visibility: hidden;
  transform: rotateY(0);
`;

export const StyledSection = styled.section`
  margin-bottom: 0.75rem;
`;

export const StyledSpan = styled.span<{ status: string }>`
  display: inline-block;
  margin-right: 0.375rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${(props) =>
    props.status === "Alive"
      ? "rgb(85, 204, 68)"
      : props.status === "Dead"
      ? "rgb(214,61,46)"
      : "rgb(158,158,158)"};
`;
