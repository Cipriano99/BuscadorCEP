import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';

import { ContainerInício } from './styles';

export const Inicio = () => {
  const navigate = useNavigate();

  return (
    <ContainerInício>
      <h1>Bem-vindo ao BuscadorCEP!</h1>
      <p>
        O aplicativo BuscadorCEP! permite que você encontre código de
        endereçamento postais (CEP).
        <br />
        Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o
        BuscadorCEP! também vai te ajudar.
        <br />
        Aproveite! 😁
      </p>
      <div className="botões">
        <Button onClick={() => navigate('/endereco')}>Buscar Endereço</Button>
        <Button onClick={() => navigate('/cep')}>Buscar CEP</Button>
      </div>
    </ContainerInício>
  );
};
