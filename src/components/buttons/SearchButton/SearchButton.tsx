import { StyledButton } from "./SearchButton.styles";

type Props = {
  handler: () => void;
};

export const SearchButton = ({ handler }: Props) => {
  return (
    <StyledButton data-testid="search-button" type="button" onClick={handler}>
      {"\u260c"}
    </StyledButton>
  );
};
