import { HomeIcon } from "@assets/HomeIcon/HomeIcon";
import { StyledLink, StyledNav, StyledUl } from "./Headers.styles";

export const Header = () => {
  return (
    <nav>
      <StyledNav data-testid="header" id="top">
        <StyledLink to="/">
          <HomeIcon />
        </StyledLink>

        <StyledUl>
          <li>
            <StyledLink data-testid="characters-navlink" to="/characters">
              Characters
            </StyledLink>
          </li>
          <li>
            <StyledLink data-testid="episodes-navlink" to="/episodes">
              Episodes
            </StyledLink>
          </li>
          <li>
            <StyledLink data-testid="locations-navlink" to="/locations">
              Locations
            </StyledLink>
          </li>
        </StyledUl>
      </StyledNav>
    </nav>
  );
};
