import { Episode } from "../../../interfaces";
import { Description, FieldLink } from "../index";
import { StyledDiv, StyledSection } from "./Back.styles";

type Props = {
  reverse: boolean;
  episodes: Episode[];
};

export const Back = ({ reverse, episodes }: Props) => {
  return (
    <StyledDiv reverse={reverse} data-testid="back">
      <Description>Appears in:</Description>

      <StyledSection>
        {episodes.map((ep: Episode, index: number) => {
          return (
            <FieldLink
              key={index}
              name={ep.name}
              destination="/episodes"
              state={{ name: ep.name }}
            />
          );
        })}
      </StyledSection>
    </StyledDiv>
  );
};
