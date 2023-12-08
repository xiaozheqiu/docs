import { theme } from '@aksara-ui/react';
import { css } from 'styled-components';
import { breakpoints } from 'utils/variables';

export const styleJSX = css`
  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter';
    src: url('/assets/fonts/Inter.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter-bold';
    src: url('/assets/fonts/Inter-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'SF Pro Text';
    src: url('/assets/fonts/SF-Pro-Text.woff') format('woff');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Mono';
    src: url('/assets/fonts/RobotoMono.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Mono Bold';
    src: url('/assets/fonts/RobotoMono-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Inter', 'Inter-bold', sans-serif;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter-bold', sans-serif;
  }

  a.header-anchor {
    color: #ffff;
    font-size: 20px;
  }

  a.header-anchor:hover {
    color: #2c2d33;
    text-decoration: none;
  }

  section nav {
    display: none;
  }

  .table-of-contents {
    position: fixed;
    border-right: 1px solid #eff2f5;
    left: 0;
    top: 0;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 16px;
    width: 23%;
    max-width: 320px;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    background-color: #fff;
  }

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    .table-of-contents {
      display: none;
    }
  }

  .isActive {
    border-radius: 12px;
    background-color: ${theme.colors.blue01};
    color: ${theme.colors.blue07} !important;
  }
`;
