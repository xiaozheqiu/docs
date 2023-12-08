import { breakpoints } from 'utils/variables';
import styled from 'styled-components';
import { theme } from '@aksara-ui/react';

const DocsWrapper = styled('article')`
  font-family: 'Inter', sans-serif;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  background-color: ${theme.colors.white};

  @media (max-width: ${breakpoints.lg - 1}px) {
    padding: 16px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding: 32px;
  }

  @media (max-width: ${breakpoints.lg - 1}px) {
    overflow-x: auto;
  }
`;

export default DocsWrapper;
