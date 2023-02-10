import { StyledDiv } from "./Card.styles";

type Props = {
  children: JSX.Element[];
};

export const Card = ({ children }: Props) => {
  return <StyledDiv data-testid="card">{children}</StyledDiv>;
};
