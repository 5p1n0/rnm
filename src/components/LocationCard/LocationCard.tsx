import {
  Bottom,
  Card,
  Description,
  FieldLink,
  SubTitle,
  Title,
  Top,
} from "@components/card-layout/index";
import { Character, Location } from "../../interfaces";
import { StyledDiv, StyledSpan, StyledSection } from "./LocationCard.styles";

export const LocationCard = ({
  name,
  type,
  dimension,
  residents,
}: Location) => {
  return (
    <Card>
      <Top>
        <StyledSection>
          <Title>{name}</Title>

          <SubTitle>{type}</SubTitle>
        </StyledSection>

        <StyledSection>
          <Description>Dimension:</Description>

          <StyledSpan>{dimension ? dimension : "???"}</StyledSpan>
        </StyledSection>
      </Top>

      <Bottom>
        <Description>Characters in this location:</Description>

        <StyledDiv>
          {residents.map((ch: Character, index: number) => {
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
