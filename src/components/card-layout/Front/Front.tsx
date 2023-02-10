import { StyledDiv, StyledSection, StyledSpan } from "./Front.styles";
import { Character } from "../../../interfaces";
import { Description, FieldLink, SubTitle, Title } from "../index";

type Props = {
  reverse: boolean;
  character: Character;
};

export const Front = ({ reverse, character }: Props) => {
  return (
    <StyledDiv reverse={reverse} data-testid="front">
      <StyledSection>
        <Title>{character.name}</Title>

        <SubTitle>
          <StyledSpan status={character.status} />

          {character.status +
            " - " +
            (character.type !== "" ? character.type : character.species) +
            (character.gender === "Male"
              ? " - \u2642"
              : character.gender === "Female"
              ? " - \u2640"
              : " - " + character.gender)}
        </SubTitle>
      </StyledSection>

      <StyledSection>
        <Description>Last know location:</Description>

        <FieldLink
          name={character.location.name}
          destination="/locations"
          state={{ name: character.location.name }}
        />
      </StyledSection>

      <StyledSection>
        <Description>Origin:</Description>

        <FieldLink
          name={character.origin.name}
          destination="/locations"
          state={{ name: character.origin.name }}
        />
      </StyledSection>
    </StyledDiv>
  );
};
