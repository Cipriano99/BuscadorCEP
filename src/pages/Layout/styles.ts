import styled from 'styled-components';

export const ContainerLayout = styled.div`
  width: 96%;
  max-width: 1080px;
  padding: 0 24px;
  margin: 32px auto;

  hr {
    margin: 16px 0 8px;
  }

  main {
    min-height: 516px;
  }

  h1 {
    margin: 16px;
    text-align: center;
  }

  .botões {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 425px) {
    .botões {
      flex-wrap: wrap-reverse;
    }
  }
`;
