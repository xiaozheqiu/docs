import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints, headingSizes, textSizes, colors, space, fonts, paragraphSizes } from 'utils/variables';
import { theme, Theme as ThemeAksara } from '@aksara-ui/react';

export const themeProps: ThemeAksara & { fontSizes: { heading: any; paragraph: any; text: any } } = {
  ...theme,
  colors,
  space,
  fonts,
  breakpoints: [`${breakpoints.sm}px`, `${breakpoints.md}px`, `${breakpoints.lg}px`, `${breakpoints.xl}px`],
  fontSizes: {
    ...theme.fontSizes,
    heading: headingSizes,
    paragraph: paragraphSizes,
    text: textSizes,
  },
};

/**
 * Aksara theme provider
 */
export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>;
};

export type FontSizes = typeof themeProps.fontSizes;
export type HeadingSizes = typeof headingSizes;
export type TextSizes = typeof textSizes;
export type Color = keyof typeof themeProps['colors'];
export type Space = keyof typeof themeProps['space'];
