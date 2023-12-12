
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import i18n from '../pages/i18n/i18n';
// import "../src/app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
// export default appWithTranslation(MyApp, i18n);
export default appWithTranslation(MyApp);
