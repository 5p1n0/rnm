import {
  StyledDiv,
  StyledDivNext,
  StyledDivPrev,
  StyledSection,
} from "./PageNavigator.styles";

type Props = {
  prev: number;
  next: number;
  setPage: React.Dispatch<React.SetStateAction<number>> | (() => void);
};

export const PageNavigator = ({ prev, next, setPage }: Props) => {
  return (
    <StyledSection data-testid="page-navigator">
      <StyledDivPrev
        data-testid="prev"
        page={prev}
        onClick={() => setPage(prev)}
      >
        {prev}
      </StyledDivPrev>
      <StyledDiv data-testid="actual" page={1}>
        {prev ? prev + 1 : next ? next - 1 : 1}
      </StyledDiv>
      <StyledDivNext
        data-testid="next"
        page={next}
        onClick={() => setPage(next)}
      >
        {next}
      </StyledDivNext>
    </StyledSection>
  );
};
