import { NavLink, useParams } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import { ContainerBreadcrumbs } from './styles';

import { rotas } from '../../routes';

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(rotas);
  const paramCEP = useParams();

  return (
    <ContainerBreadcrumbs>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname}>
          {index !== 0 && ' > '}
          <NavLink to={match.pathname}>
            {breadcrumb}
            {index + 2 === rotas.length && paramCEP.cep}
          </NavLink>
        </span>
      ))}
    </ContainerBreadcrumbs>
  );
};
