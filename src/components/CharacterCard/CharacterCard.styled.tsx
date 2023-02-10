import styled from "styled-components";
import { StyledDiv } from "@components/card-layout/Card/Card.styles";

export const StyledCard = styled(StyledDiv)<{ reverse: boolean }>`
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${(props) =>
    props.reverse === true ? "rotateY(180deg)" : "none"};
`;
