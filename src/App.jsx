import { Layout } from 'antd';
import AppHeader from '@components/Header/AppHeader';
import AppLayout from '@components/Layout/AppLayout';
import AppContent from '@components/Content/AppContent';
import { CryptoContextProvider } from '@context/crypto-context';

function App() {

  return (
    <CryptoContextProvider>
      <Layout>
        <AppHeader />
        <Layout>
          <AppLayout />
          <AppContent />
        </Layout>
      </Layout>
    </CryptoContextProvider>
  )
}

export default App
