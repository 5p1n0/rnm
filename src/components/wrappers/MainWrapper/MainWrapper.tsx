import { StyledMain } from "./MainWrapper.styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const MainWrapper = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};
