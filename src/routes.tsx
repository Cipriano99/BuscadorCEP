import { Routes, Route } from 'react-router-dom';

import { Inicio } from './pages/Inicio';
import { BuscarCEP } from './pages/BuscarCEP';
import { BuscarEndereço } from './pages/BuscarEndereço';
import { ResultadoEndereço } from './pages/ResultadoEndereço';

type RotasType = {
  path: string;
  element: JSX.Element;
  breadcrumb: string;
};

export const rotas: RotasType[] = [
  {
    path: '/',
    element: <Inicio />,
    breadcrumb: 'Início',
  },
  {
    path: '/cep',
    element: <BuscarCEP />,
    breadcrumb: 'Buscar CEP',
  },
  {
    path: '/endereco',
    element: <BuscarEndereço />,
    breadcrumb: 'Buscar endereço',
  },
  {
    path: '/endereco/:cep',
    element: <ResultadoEndereço />,
    breadcrumb: 'Resultado - CEP',
  },
];

export const RoutesCEP = () => {
  return (
    <Routes>
      {rotas.map(({ path, element }, key) => (
        <Route path={path} key={key} element={element} />
      ))}
    </Routes>
  );
};
