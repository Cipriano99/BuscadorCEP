import styled from 'styled-components';

export const ContainerBreadcrumbs = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      height: 100%;
      display: flex;
      gap: 4px;
    }

    &:last-child {
      a {
        text-decoration: none;
        color: black;
        pointer-events: none;
      }
    }
  }
`;
