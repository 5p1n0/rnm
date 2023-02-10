import styled from "styled-components";

export const StyledInput = styled.input`
  background: #3c3e44;
  color: white;
  border: 0;
  border-radius: 1.25rem;
  height: 2.5rem;
  width: 300px;
  text-align: center;
  font-family: "IBM Plex Sans", sans-serif;
  margin-top: 1rem;

  @media (max-width: 43rem) {
    width: 220px;
  }

  &:focus {
    outline: solid 2px #9ece10;

    &::placeholder {
      color: transparent;
    }
  }
`;
