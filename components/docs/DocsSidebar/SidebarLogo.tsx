import styled, { css } from 'styled-components';
import { theme } from '@aksara-ui/react';
import { dimensions, breakpoints } from 'utils/variables';

interface SidebarLogoProps {
  navHidden?: boolean;
}

const hasSidebar = css`
  background-color: ${theme.colors.grey01};
`;

const hasNoSidebar = css`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.grey02};
`;

const SidebarLogo = styled('div')<SidebarLogoProps>`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  justify-content: center;
  width: ${dimensions.widths.sidebar.lg}px;
  padding: 0 24px;
  margin: 24px 0;
  width: 100%;
  cursor: pointer;

  ${(props) => (props.navHidden ? hasNoSidebar : hasSidebar)}

  @media (max-width: ${breakpoints.lg - 1}px) {
    display: none;
  }
`;

export default SidebarLogo;
