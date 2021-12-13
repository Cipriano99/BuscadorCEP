import styled from 'styled-components';

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 8px 0 16px;

  label {
    font-weight: bold;
  }

  input {
    width: 100%;
    max-width: 320px;
    height: 48px;
    color: var(--secondary-color);
    background-color: var(--field-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    padding: 0 8px;

    &::placeholder {
      color: var(--placeholder-color);
    }
  }
`;
