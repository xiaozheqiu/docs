import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import { MenuNode, Edge } from 'interfaces/nodes';
import { Heading } from 'components/foundations';
import { colors, layerIndexes, breakpoints, dimensions } from 'utils/variables';

import { NavigationContext, NavigationActionTypes } from './NavigationContext';
import NavButton from './NavButton';
import { Accordion } from '@aksara-ui/react';
import TocJsonWrapper from 'components/docs/TableOfContents/TocJsonWrapper';
import { useRouter } from 'next/router';

interface ToggleableProps {
  isOpen?: boolean;
}

const Wrapper = styled('aside')<ToggleableProps>`
  position: fixed;
  margin-top: ${dimensions.heights.header}px;
  transition: all 0.3s ease;
  background-color: ${colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: ${layerIndexes.dialog};
  overflow-y: hidden;

  @media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px) {
    width: ${dimensions.widths.sidebar.sm}px;
    margin-top: 0;
    box-shadow: none;
    border-bottom: none;
  }

  @media (max-width: ${breakpoints.lg}px) {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: ${dimensions.widths.sidebar.md}px;
    height: 100%;
    margin-top: 0;
    padding-bottom: 5rem;
    pointer-events: auto;
    transform: translate(${(props) => (props.isOpen ? '0' : '-100%')}, 0);
    transition: transform 0.3s ease;
  }

  @media (min-width: ${breakpoints.lg}px) {
    flex: 0 0 ${dimensions.widths.sidebar.lg}px;
    box-shadow: none;
    border-bottom: none;
    background-color: ${colors.grey01};
  }
`;

interface WrapperInnerProps {
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}

const HideOnMobile = css`
  @media (max-width: ${breakpoints.lg - 1}px) {
    display: none;
  }
`;

const HideOnDesktop = css`
  @media (min-width: ${breakpoints.lg}px) {
    display: none;
  }
`;

const WrapperInner = styled('nav')<WrapperInnerProps>`
  margin-top: ${dimensions.heights.header}px;
  height: calc(100vh - ${dimensions.heights.header}px);
  overflow-y: auto;

  @media (min-width: ${breakpoints.lg}px) {
    width: 200px;
    flex: 1 1 auto;
    z-index: 2;
    margin-top: 0;
  }

  ${(props) => props.hideOnMobile && HideOnMobile}
  ${(props) => props.hideOnDesktop && HideOnDesktop}
`;

const Header = styled('section')`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${dimensions.heights.header}px;
  padding: 0 24px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.grey02};
  z-index: ${layerIndexes.stickyNav};

  @media (min-width: ${breakpoints.lg}px) {
    display: none;
  }
`;

interface HeaderInnerProps {
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}

const HeaderInner = styled('div')<HeaderInnerProps>`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.hideOnMobile && HideOnMobile}
  ${(props) => props.hideOnDesktop && HideOnDesktop}
`;

const DocumentationNav = styled('div')`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 24px;
`;

interface NavigationProps {
  navigation?: Edge<MenuNode>;
  navHidden?: boolean;
}

function Navigation({ navigation, navHidden }: NavigationProps) {
  const { state, dispatch } = React.useContext(NavigationContext);
  const router = useRouter();

  const isItemSelected = React.useCallback(
    (url: string): boolean => {
      return url === router.asPath;
    },
    [router]
  );

  const isAccordionHeaderActive = React.useCallback(
    (url: string): boolean => {
      const [baseUrl] = router.asPath.split('#');
      return url === baseUrl;
    },
    [router]
  );
  return (
    <Wrapper isOpen={state.isOpen}>
      <Header>
        <HeaderInner hideOnDesktop>
          <Heading as="h1" size={400}>
            Menu
          </Heading>
          <NavButton
            icon="x"
            fill={colors.blue08}
            onClick={() => dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER })}
          >
            Toggle Drawer
          </NavButton>
        </HeaderInner>
      </Header>
      <WrapperInner hideOnDesktop={navHidden}>
        <DocumentationNav>
          {navigation && (
            <Accordion type="multiple">
              <TocJsonWrapper
                onClick={(e, url) => {
                  dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER });
                  router.push(url);
                }}
                tree={navigation}
                isItemSelected={isItemSelected}
                isAccordionHeaderActive={isAccordionHeaderActive}
              />
            </Accordion>
          )}
        </DocumentationNav>
      </WrapperInner>
    </Wrapper>
  );
}

export default Navigation;
