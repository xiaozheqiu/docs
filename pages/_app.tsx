import { styleJSX } from '../styles/global';
import Head from 'next/head';
import { AksaraProvider } from '@aksara-ui/react';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import GlobalStyles from 'components/foundations/reset/components/GlobalStyles';
import { themeProps } from 'components/Theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <AksaraProvider disableInjection theme={themeProps}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/wujin-favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <style jsx>{styleJSX}</style>
    </AksaraProvider>
  );
}
