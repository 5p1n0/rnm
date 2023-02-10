import { StyledP } from "./Description.styles";

type Props = {
  children: string;
};

export const Description = ({ children }: Props) => {
  return <StyledP>{children}</StyledP>;
};
