import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  padding: 0 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 43rem) {
    padding: 0 0.875rem;
    justify-content: space-around;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-family: "Lora", serif;
  font-weight: 600;

  &[aria-current] {
    color: #9ece10;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.75rem;

  @media (max-width: 43rem) {
    font-size: 0.875rem;
    gap: 1.25rem;
  }
`;
