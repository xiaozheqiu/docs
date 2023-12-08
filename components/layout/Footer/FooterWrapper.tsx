import styled from 'styled-components';
import { theme } from '@aksara-ui/react';
import { breakpoints } from 'utils/variables';

const FooterWrapper = styled('div')`
  @media screen and (min-width: ${breakpoints.lg}px) {
    margin-top: ${theme.space.xxl}px;
  }

  @media screen and (max-width: ${breakpoints.lg - 1}px) {
    margin-top: 24px;
  }
`;

export default FooterWrapper;
