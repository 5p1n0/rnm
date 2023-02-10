import { StyledH1 } from "./Title.styled";

type Props = {
  children: string;
};

export const Title = ({ children }: Props) => {
  return <StyledH1 data-testid="card-title">{children}</StyledH1>;
};
