import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Page, NotFoundWrapper } from 'components/layout/Page';
import { Heading, Text } from 'components/foundations';
import styled from 'styled-components';
import IndexLayout from 'components/layouts';

const NotFoundPage: React.FC = () => (
  <IndexLayout navHidden>
    <Page>
      <Head>
        <title>404: Page Not Found</title>
      </Head>
      <NotFoundWrapper>
        <Inner>
          <Heading as="h1" size={800} m={0}>
            404
          </Heading>
          <Text as="p" size={400}>
            We can&apos;t find the page you&apos;re looking for.
          </Text>
          <Text as="p" size={400}>
            <Link href="/">Go back?</Link>
          </Text>
        </Inner>
      </NotFoundWrapper>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;

const Inner = styled('div')`
  text-align: center;
`;
