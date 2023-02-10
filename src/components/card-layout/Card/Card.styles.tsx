import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  width: 620px;
  height: 260px;

  @media (max-width: 43rem) {
    flex-direction: column;
    width: 260px;
    height: 600px;
  }

  color: #f5f5f5;
  border-radius: 0.75rem;
  background: #3c3e44;
  margin-bottom: 1.5rem;
`;
