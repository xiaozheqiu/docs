import styled, { css } from 'styled-components';
import { theme } from '@aksara-ui/react';
import { dimensions, breakpoints } from 'utils/variables';

interface HeaderLogoProps {
  navHidden?: boolean;
}

const hasSidebar = css`
  background-color: ${theme.colors.grey01};
`;

const hasNoSidebar = css`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.grey02};
`;

const HeaderLogo = styled('div')<HeaderLogoProps>`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.grey02};
  width: ${dimensions.widths.sidebar.lg}px;
  height: 100%;
  padding: 0 24px;
  cursor: pointer;

  ${(props) => (props.navHidden ? hasNoSidebar : hasSidebar)}

  @media (max-width: ${breakpoints.lg - 1}px) {
    display: none;
  }
`;

export default HeaderLogo;
