import { Header } from '../../components/Header';
import AppContainer from './styles';
import config from '../../config.json';

import { Layout } from '../../components/Layout';
import { Users } from '../Users';
import { ControlForm } from '../ControlForm';

export const App = () => {
  return (
    <AppContainer>
      <Header logo={config.projectName} />
      <Layout>
        <>
          <ControlForm />
          <Users />
        </>
      </Layout>
    </AppContainer>
  );
};
