import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Breadcrumbs } from '../../components/Breadcrumb';

import { buscarCEP } from './buscarCEP';

import { ContainerEndereço } from './styles';

export const BuscarCEP = () => {
  const navigate = useNavigate();

  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');

  const url = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`;

  return (
    <>
      <Breadcrumbs />
      <ContainerEndereço>
        <h1>Buscar CEP</h1>

        <form onSubmit={(event) => buscarCEP(event, url)}>
          <Input
            name="estado"
            label="Sigla do estado"
            placeholder='Ex: "SC" ou "sc"'
            maxLength={2}
            minLength={2}
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
            required
          />
          <Input
            name="cidade"
            label="Nome da cidade"
            placeholder='Ex: "Itajaí" ou "itajai"'
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
            required
          />
          <Input
            name="rua"
            label="Nome ou identificação da rua"
            placeholder='Ex: "Marcos Konder" ou "marcos konder"'
            value={rua}
            onChange={(event) => setRua(event.target.value)}
            required
          />
          <div className="botões">
            <Button type="button" onClick={() => navigate('/')}>
              Voltar
            </Button>
            <Button type="submit">Pesquisar</Button>
          </div>
        </form>
      </ContainerEndereço>
    </>
  );
};
