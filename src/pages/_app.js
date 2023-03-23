import MainLayout from '@layout/MainLayout';
import { ProviderAuth } from '@hooks/useAuth';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}
