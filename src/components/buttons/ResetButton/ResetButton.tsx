import { StyledButton } from "./ResetButton.styles";

type Props = {
  handler: () => void;
};

export const ResetButton = ({ handler }: Props) => {
  return (
    <StyledButton data-testid="reset-button" type="button" onClick={handler}>
      {"\u21ba"}
    </StyledButton>
  );
};
