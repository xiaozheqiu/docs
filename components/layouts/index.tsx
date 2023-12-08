import React from 'react';

import { AksaraReset } from 'components/foundations';
import Layout from '../layout';
import { useRouter } from 'next/router';
import { Navigation } from 'components/layout/Navigation';
import { Overlay } from 'components/layout/Overlay';

import { NavigationContextProvider } from 'components/layout/Navigation/NavigationContext';
import { FUSE_SEARCH } from 'utils/search';

interface IndexLayoutProps {
  navHidden?: boolean;
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children, navHidden }) => {
  const [navigation, setNavigation] = React.useState();
  const router = useRouter();
  const [imageUrl, setImageUrl] = React.useState('docs');
  const [fuseSearch, setFuseSearch] = React.useState<{ fuse: any; name: string }>();
  const [_, product] = router.route.split('/');
  const isTutorial = product === 'tutorials';
  const isKataPlatform = product === 'kata-platform';
  const isKataOmnichat = product === 'kata-omnichat';
  const isBusinessDashboard = product === 'business-dashboard';
  const isQios = product === 'qios';

  React.useEffect(() => {
    let jsonNavigation;
    if (isTutorial && router.query.slug) {
      jsonNavigation = require(`docs/navigation/tutorials/${router.query.slug[0]}.json`);
      setNavigation(jsonNavigation);
    } else if (isKataPlatform) {
      jsonNavigation = require(`docs/toc-kata-platform.json`);
      setImageUrl('kata-platform');
      setNavigation(jsonNavigation);
    } else if (isQios) {
      jsonNavigation = require(`docs/toc-qios.json`);
      setImageUrl('qios');
      setNavigation(jsonNavigation);
    } else if (isBusinessDashboard) {
      jsonNavigation = require(`docs/toc-business-dashboard.json`);
      setImageUrl('business-dashboard');
      setNavigation(jsonNavigation);
    } else if (isKataOmnichat) {
      jsonNavigation = require(`docs/toc-kata-omnichat.json`);
      setImageUrl('kata-omnichat');
      setNavigation(jsonNavigation);
    }
    const productType = typeof FUSE_SEARCH[product];
    const name = productType === 'undefined' ? 'global' : product;
    const fuse = FUSE_SEARCH[name];
    setFuseSearch({ fuse, name });
  }, [router]);

  return (
    <NavigationContextProvider>
      <div id="#">
        <Layout imageOrigin={imageUrl} fuseSearch={fuseSearch}>
          <Overlay />
          <Navigation navigation={navigation} navHidden={navHidden} />
          {children}
        </Layout>
      </div>
    </NavigationContextProvider>
  );
};

export default IndexLayout;

export async function getStaticProps() {}
