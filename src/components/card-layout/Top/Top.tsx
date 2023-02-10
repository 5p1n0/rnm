import { StyledDiv } from "./Top.styles";

type Props = {
  children: JSX.Element[];
};

export const Top = ({ children }: Props) => {
  return <StyledDiv>{children}</StyledDiv>;
};
