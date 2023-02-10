import { useState } from "react";
import { Character } from "../../interfaces";
import { Avatar, Back, FlipButton, Front } from "@components/card-layout";
import { StyledCard } from "./CharacterCard.styled";

export const CharacterCard = (character: Character) => {
  const [reverse, setReverse] = useState(false);

  const reverseHandler = () => setReverse(!reverse);

  return (
    <StyledCard data-testid="c-card" reverse={reverse}>
      <Avatar reverse={reverse} image={character.image} name={character.name} />

      <Front reverse={reverse} character={character} />

      <Back reverse={!reverse} episodes={character.episode} />

      <FlipButton handler={reverseHandler} />
    </StyledCard>
  );
};
