import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Breadcrumbs } from '../../components/Breadcrumb';

import { ContainerEndereço } from './styles';

const formatoCEP = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
};

export const BuscarEndereço = () => {
  const [cep, setCep] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs />
      <ContainerEndereço>
        <h1>Buscar Endereço</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            const apenasNumerosCEP = cep.replace('-', '');
            navigate(`${apenasNumerosCEP}`);
          }}
        >
          <Input
            name="cep"
            label="CEP*"
            value={cep}
            maxLength={9}
            minLength={9}
            placeholder='Ex.: "88306-492"'
            onChange={(event) => setCep(formatoCEP(event.target.value))}
            onFocus={(event) => event.target.select()}
            required
          />
          <div className="botões">
            <Button type="button" onClick={() => navigate('/')}>
              Voltar
            </Button>
            <Button type="submit">Buscar</Button>
          </div>
        </form>
      </ContainerEndereço>
    </>
  );
};
