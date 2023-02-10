import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: block;
  width: fit-content;
  margin-bottom: 0.75rem;
  position: relative;
  color: #f5f5f5;
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 50ms;
  z-index: 0;
  text-decoration: none;
  font-size: 0.875rem;
  font-family: "IBM Plex Sans", sans-serif;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 160%;
    z-index: -1;
    transform: scale(110%) rotate(2deg) translateY(-35%);
    background: #202329;
  }

  &:hover::before {
    background: #55cd64;
  }

  &:hover {
    color: #202329;
  }
`;
