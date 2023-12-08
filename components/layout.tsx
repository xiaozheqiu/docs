import { Box, theme, UnstyledAnchor, Heading, Avatar } from '@aksara-ui/react';
import { breakpoints } from 'utils/variables';
import { Header, HeaderInner, HeaderLogo, HeaderRight } from './layout/Header';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import SearchBox from './search/SearchBox';
import SearchIcon from './layout/Header/SearchIcon';
import Head from 'next/head';
import { NavButton } from './layout/Navigation';
import { NextRouter, useRouter } from 'next/router';
import { NavigationActionTypes, NavigationContext } from './layout/Navigation/NavigationContext';
import Image from 'next/image';

const StyledLayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  min-height: 100vh;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

const LogoWrapper = styled('div')<{ isPost?: boolean }>`
  display: flex;
  align-items: ${(props) => (props.isPost ? 'center' : 'flex-start')};
  justify-content: ${(props) => (props.isPost ? 'center' : 'flex-start')};
  margin-top: 12px;
  flex: 1;
`;

const HomepageLink = styled(Link)`
  color: ${theme.colors.grey09};

  &:hover,
  &:focus {
    color: ${theme.colors.grey09};
    text-decoration: none;
  }
`;

const UnstyledSearchButton = styled('button')`
  margin: 0;
  padding: 8px;
  background: none;
  border: none;
`;

const DesktopHeaderRight = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const isPost = (router: NextRouter) => {
  if (router.query.slug) {
    return true;
  }
  return false;
};

interface ILayout {
  children: React.ReactNode;
  imageOrigin: string;
  fuseSearch: { fuse: any; name: string };
}

const Layout: React.FC<ILayout> = ({ children, imageOrigin, fuseSearch }) => {
  const { dispatch } = React.useContext(NavigationContext);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const router = useRouter();

  const onSearchMore = (product: string, query: string) => {
    router.push(`/search/result?product=${product}&query=${query}`);
  };

  return (
    <StyledLayoutRoot>
      <Head>
        <meta property="og:type" content="website" />
      </Head>

      <Header fixed>
        <HeaderInner>
          {!isPost(router) && (
            <HeaderLogo>
              <Link href="/" passHref>
                <Box alignItems="center" display="inline-flex">
                  <Image layout="fixed" width={40} height={40} src="/favicons/wujin-favicon.ico" alt="" />
                  <Heading as="span" ml="xs" scale={400}>
                    ruoguang
                  </Heading>
                </Box>
              </Link>
            </HeaderLogo>
          )}
          <HeaderRight hideOnDesktop>
            {isPost(router) && (
              <NavButton
                icon="hamburger"
                fill={theme.colors.greydark02}
                onClick={() => dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER })}
              >
                Toggle Drawer
              </NavButton>
            )}
            <LogoWrapper isPost={isPost(router)}>
              <Link href="/" passHref>
                <UnstyledAnchor display="flex">
                  <Image
                    layout="fixed"
                    width={imageOrigin === 'docs' ? 60 : 160}
                    height={40}
                    src={
                      imageOrigin === 'docs'
                        ? '/assets/images/logo-docs.svg'
                        : `/assets/images/products/${imageOrigin}-logo-docs.svg`
                    }
                    alt="Kata Documentations"
                  />
                </UnstyledAnchor>
              </Link>
            </LogoWrapper>
            {isSearchOpen ? (
              <SearchBox
                layout="mobile"
                fuseSearch={fuseSearch}
                onSearchMore={onSearchMore}
                onOverlayClick={() => setIsSearchOpen(false)}
              />
            ) : (
              <UnstyledSearchButton onClick={() => setIsSearchOpen(true)}>
                <SearchIcon fill={theme.colors.greydark02} />
              </UnstyledSearchButton>
            )}
          </HeaderRight>
          <HeaderRight contents="flex-end" hideOnMobile>
            <DesktopHeaderRight>
              <SearchBox layout="desktop" fuseSearch={fuseSearch} onSearchMore={onSearchMore} />
            </DesktopHeaderRight>
          </HeaderRight>
        </HeaderInner>
      </Header>
      {children}
    </StyledLayoutRoot>
  );
};

export default Layout;
