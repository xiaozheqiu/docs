import { Box, Heading, theme, Text } from '@aksara-ui/react';
import Image from 'next/image';
import { PRODUCTS as productList } from 'utils/constants';
import { layerIndexes } from 'utils/variables';
import {
  Anchor,
  DocsCard,
  DocsCardWrapper,
  DocsContent,
  HeaderPortal,
  HeroWrapper,
  PortalDescription,
  PortalTitle,
  PortalWrapper,
} from './components';

export default function Portal() {
  return (
    <PortalWrapper>
      <HeroWrapper>
        <Image width={385} height={335} layout="responsive" src="/assets/images/portal-hero.svg" alt="Portal Hero" />
      </HeroWrapper>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        zIndex={layerIndexes.flat}
      >
        <HeaderPortal>
          <PortalTitle>若光产品文档 👋</PortalTitle>
          <PortalDescription>查找我们产品的全面文档和教程</PortalDescription>
        </HeaderPortal>
        {/* <DocsCardWrapper>*/}
        {/*  {productList.map((product, idx) => (*/}
        {/*    <DocsCard key={`${idx}-${product.name}`}>*/}
        {/*      <Anchor href={product.url} target={product.externalUrl ? '_blank' : ''}>*/}
        {/*        <DocsContent>*/}
        {/*          <Box display="flex" mr={24}>*/}
        {/*            <Image layout="fixed" width={32} height={32} src={product.imgPath} alt={product.name} />*/}
        {/*          </Box>*/}
        {/*          {product.name}*/}
        {/*        </DocsContent>*/}
        {/*      </Anchor>*/}
        {/*    </DocsCard>*/}
        {/*  ))}*/}
        {/*</DocsCardWrapper> */}
      </Box>
    </PortalWrapper>
  );
}
