import { StyledP } from "./ErrorBlock.styles";

type Props = {
  message: string;
  children: JSX.Element;
};

export const ErrorBlock = ({ message, children }: Props) => {
  return (
    <>
      {children}
      <StyledP>{message}</StyledP>
    </>
  );
};
