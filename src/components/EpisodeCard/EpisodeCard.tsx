import {
  Card,
  Top,
  Title,
  SubTitle,
  Description,
  FieldLink,
  Bottom,
} from "@components/card-layout/index";
import { Character, Episode } from "../../interfaces";
import { StyledDiv, StyledSection, StyledSpan } from "./EpisodeCard.styles";

export const EpisodeCard = ({
  name,
  episode,
  air_date,
  characters,
}: Episode) => {
  return (
    <Card>
      <Top>
        <StyledSection>
          <Title>{name}</Title>

          <SubTitle>{episode}</SubTitle>
        </StyledSection>

        <StyledSection>
          <Description>Air date:</Description>

          <StyledSpan>{air_date}</StyledSpan>
        </StyledSection>
      </Top>

      <Bottom>
        <Description>Characters in this episode:</Description>

        <StyledDiv>
          {characters.map((ch: Character, index: number) => {
            return (
              <FieldLink
                key={index}
                name={ch.name}
                destination="/characters"
                state={{ name: ch.name }}
              />
            );
          })}
        </StyledDiv>
      </Bottom>
    </Card>
  );
};
