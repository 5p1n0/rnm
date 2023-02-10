/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyledLink } from "./FieldLink.styles";

type Props = {
  name: string;
  destination: string;
  state: any;
};

export const FieldLink = ({ name, destination, state }: Props) => {
  return (
    <StyledLink data-testid="card-link" to={destination} state={state}>
      {name}
    </StyledLink>
  );
};
