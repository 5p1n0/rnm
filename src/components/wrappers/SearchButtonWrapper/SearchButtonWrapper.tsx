import { StyledDiv } from "./SearchButtonWrapper.styles";

type Props = {
  children: JSX.Element[];
};

export const SearchButtonWrapper = ({ children }: Props) => {
  return <StyledDiv>{children}</StyledDiv>;
};
