import { StyledSmall } from "./SubTitle.styles";

type Children = string | JSX.Element;

type Props = {
  children: Children | Children[];
};

export const SubTitle = ({ children }: Props) => {
  return <StyledSmall>{children}</StyledSmall>;
};
