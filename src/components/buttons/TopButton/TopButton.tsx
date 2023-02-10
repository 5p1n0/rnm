import { StyledButton, StyledSpan } from "./TopButton.styles";

export const TopButton = () => {
  return (
    <a data-testid="top-link" href="#top">
      <StyledButton data-testid="top-button">
        {"\u25B4"}
        <br />
        <StyledSpan>Top</StyledSpan>
      </StyledButton>
    </a>
  );
};
