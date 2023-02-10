import { HeroBackground } from "@assets/index";
import { StyledH1 } from "./HeroBanner.specs";

export const HeroBanner = () => {
  return (
    <>
      <HeroBackground />

      <StyledH1>{"Rick & Morty API"}</StyledH1>
    </>
  );
};
