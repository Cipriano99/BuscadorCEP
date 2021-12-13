import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Breadcrumbs } from '../../components/Breadcrumb';

import { ContainerEndereço } from './styles';

interface IEndereço {
  erro: string;
  logradouro: string;
  localidade: string;
  uf: string;
  bairro: string;
  cep: string;
}

export const ResultadoEndereço = () => {
  const navigate = useNavigate();
  const { cep } = useParams();
  const [endereço, setEndereço] = useState<IEndereço>();

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);

        setTimeout(() => {
          setEndereço(data);
        }, 1000);
      } catch (error) {
        return null;
      }
    })();
  }, [url]);

  if (!endereço) {
    return (
      <ContainerEndereço>
        <Breadcrumbs />
        <h1>Buscando endereço referente ao CEP {cep}</h1>
      </ContainerEndereço>
    );
  }

  return (
    <>
      <Breadcrumbs />
      <ContainerEndereço>
        <h1>Resultado - CEP {cep}</h1>

        {endereço.erro ? (
          <>
            <p>
              O CEP informado não foi localizado, insira um CEP válido e tente
              novamente.
            </p>
          </>
        ) : (
          <>
            <Input
              name="logradouro"
              label="Logradouro"
              value={endereço.logradouro}
              readOnly
            />
            <Input
              name="municipio"
              label="Município / UF"
              value={`${endereço.localidade} - ${endereço.uf}`}
              readOnly
            />
            <Input
              name="bairro"
              label="Bairro"
              value={endereço.bairro}
              readOnly
            />
            <Input name="cep" label="CEP" value={endereço.cep} readOnly />
          </>
        )}
        <Button onClick={() => navigate('/endereco')}>Nova Busca</Button>
      </ContainerEndereço>
    </>
  );
};
