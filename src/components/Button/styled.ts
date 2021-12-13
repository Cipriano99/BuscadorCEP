import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 48px;
  min-width: 184px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  margin: 8px 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;
