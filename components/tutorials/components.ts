import { Box, Card as CardAksara, theme, UnstyledAnchor } from '@aksara-ui/react';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

export const Cards = styled('div')<{ mb?: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${(prop) => (prop && prop.mb ? prop.mb : '48px')};

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    flex-direction: column;
    margin-bottom: 24px;
    iframe,
    .yt-lite {
      width: 100% !important;
      height: 22vh;
      background-size: 100%;
      &:before {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    iframe,
    .yt-lite {
      width: 39vw;
      background-size: 100%;
      &:before {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }

  @media only screen and (min-width: ${`${breakpoints.xl}px`}) {
    iframe,
    .yt-lite {
      width: 29vw;
      background-size: 100%;
      &:before {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }
`;

export const Anchor = styled(UnstyledAnchor)`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: ${theme.colors.blue06};
  cursor: pointer;
  :hover {
    color: ${theme.colors.blue08};
    text-decoration: underline;
  }
  svg {
    margin-left: 8px;
  }
  path {
    :hover {
      fill: ${theme.colors.blue08};
    }
    fill: ${theme.colors.blue06};
  }
`;

export const CardsWrapper = styled(Box)`
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    padding-left: 24px;
    padding-right: 24px;
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

export const Card = styled(CardAksara)<{ index?: number }>`
  border-radius: 8px;
  border: 1px solid ${theme.colors.grey03};
  background-color: ${theme.colors.white};
  cursor: default;
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    max-width: 100% !important;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    width: 32%;
    margin-top: ${(props) => (props.index > 2 ? '32px' : '0px')};
  }

  &:hover {
    box-shadow: 0px 8px 16px 0px ${theme.colors.greymed01};
  }
`;
