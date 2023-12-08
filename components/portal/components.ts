import { Card, theme, UnstyledAnchor, Box, Heading, Text } from '@aksara-ui/react';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

export const DocsCard = styled(Card)`
  padding: 18px 36px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #ffffff;
  height: fit-content;
  max-width: auto;
  z-index: 3;
  @media only screen and (max-width: ${`${breakpoints.md - 1}px`}) {
    width: 100%;
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
  @media only screen and (width: ${`${breakpoints.md}px`}) {
    margin-right: 12px;
    width: 355px;
    max-width: 255px;
    margin-bottom: 12px;
  }
  @media only screen and (min-width: ${`${breakpoints.md + 1}px`}) {
    margin-right: 12px;
    width: 30%;
    margin-bottom: 12px;
  }
  img {
    margin-right: 24px;
  }
  &:hover {
    box-shadow: 0px 8px 16px 0px ${theme.colors.greydark01};
  }
`;

export const DocsContent = styled(Box)`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${`${breakpoints.md - 1}px`}) {
    height: 30px;
  }
  @media only screen and (min-width: ${`${breakpoints.md}px`}) {
    height: 54px;
  }
`;

export const HeaderPortal = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.white};
  margin-top: 48px;

  @media only screen and (max-width: ${`${breakpoints.lg}px`}) {
    margin: 48px 16px 32px;
    text-align: center;
  }
`;

export const DocsCardWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 70%;
  flex-direction: row;
  font-weight: 700;
  flex-wrap: wrap;
  align-items: center;

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
  }
  @media only screen and (width: ${`${breakpoints.lg}px`}) {
    width: 100%;
  }
  @media only screen and (min-width: ${`${breakpoints.lg + 1}px`}) {
    margin-top: 48px;
  }
`;

export const TutorialWrapper = styled(Box)`
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
  @media only screen and (min-width: ${`${breakpoints.xl}px`}) {
    padding-left: 20vw;
    padding-right: 20vw;
  }
`;

export const HeroWrapper = styled('div')`
  position: absolute;

  @media only screen and (max-width: ${breakpoints.md}px) {
    width: 140px !important;
  }
  @media only screen and (min-width: ${breakpoints.md + 1}px) {
    width: 240px !important;
  }
  @media only screen and (min-width: ${breakpoints.lg + 1}px) {
    width: 385px !important;
  }
`;

export const Anchor = styled(UnstyledAnchor)`
  font-weight: 700;
  font-family: 'Inter-bold';
  color: ${theme.colors.grey08};

  @media only screen and (max-width: ${`${breakpoints.lg}px`}) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg + 1}px`}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.colors.grey08};
  }
`;

export const HeaderSegment = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media only screen and (max-width: ${breakpoints.lg - 1}px) {
    margin-bottom: 24px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    margin-bottom: 32px;
  }
`;

export const PortalWrapper = styled(Box)`
  display: flex;
  padding-bottom: 48px;
  background-color: ${theme.colors.blue07};
  margin-bottom: 48px;
`;

export const PortalTitle = styled(Heading)`
  color: ${theme.colors.greylight01};
  font-weight: 700;
  @media only screen and (max-width: ${`${breakpoints.md - 1}px`}) {
    font-size: 24px;
    line-height: 32px;
  }
  @media only screen and (min-width: ${`${breakpoints.md}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

export const PortalDescription = styled(Text)`
  color: ${theme.colors.greylight01};
  font-weight: 400;
  @media only screen and (max-width: ${`${breakpoints.md - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${`${breakpoints.md}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;
