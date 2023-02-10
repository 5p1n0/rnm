import { StyledDiv } from "./Bottom.styles";

type Props = {
  children: JSX.Element[];
};

export const Bottom = ({ children }: Props) => {
  return <StyledDiv>{children}</StyledDiv>;
};
