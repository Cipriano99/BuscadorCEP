import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Navbar = () => {
  return (
    <Container>
      <li>
        <h2>BuscadorCEP!</h2>
      </li>

      <li>
        <Link to="/endereco">Buscar Endereço</Link>
      </li>

      <li>
        <Link to="/cep">Buscar CEP</Link>
      </li>
    </Container>
  );
};
