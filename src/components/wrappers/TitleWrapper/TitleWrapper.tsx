import { StyledDiv } from "./TitleWrapper.styles";

type Props = {
  children: JSX.Element;
};

export const TitleWrapper = ({ children }: Props) => {
  return <StyledDiv data-testid="hero">{children}</StyledDiv>;
};
