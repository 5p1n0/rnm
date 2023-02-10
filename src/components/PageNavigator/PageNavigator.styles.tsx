import styled from "styled-components";

export const StyledDiv = styled.div<{ page: number }>`
  display: ${(props) => (props.page ? "block" : "none")};
  background: #9ece10;
  color: #202329;
  padding: 0.5rem;
  cursor: default;
`;

export const StyledDivNext = styled(StyledDiv)`
  background: #3c3e44;
  color: #f5f5f5;
  transform: translateY(20%) translateX(-10%) rotate(5deg);
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 50ms;
  cursor: pointer;

  &:hover {
    color: #202329;
    background: #55cd64;
  }
`;

export const StyledDivPrev = styled(StyledDiv)`
  background: #3c3e44;
  color: #f5f5f5;
  transform: translateY(20%) translateX(10%) rotate(-5deg);
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 50ms;
  cursor: pointer;

  &:hover {
    color: #202329;
    background: #55cd64;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  height: 4rem;
  width: 6rem;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0 3rem;
`;
