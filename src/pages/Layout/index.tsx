import { GetCurrentYear } from '../../components/GetCurrentYear';
import { Navbar } from '../../components/Navbar';
import { RoutesCEP } from '../../routes';
import { ContainerLayout } from './styles';

export const Layout = () => {
  return (
    <ContainerLayout>
      <Navbar />
      <hr />
      <RoutesCEP />
      <hr />
      <GetCurrentYear />
    </ContainerLayout>
  );
};
