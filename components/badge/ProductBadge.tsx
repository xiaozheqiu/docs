import { theme } from '@aksara-ui/react';
import styled from 'styled-components';

export const ProductBadge = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 12px;
  height: 32px;
  border-radius: 8px;
  width: fit-content;
  align-items: center;
  border: 1px solid ${theme.colors.grey03};
  padding: 12px 8px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
