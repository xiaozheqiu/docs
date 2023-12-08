import {
  Table as TableAksara,
  TableHead as TableHeadAksara,
  TableHeadRow as TableHeadRowAksara,
  TableHeadCell as TableHeadCellAksara,
  TableBody as TableBodyAksara,
  TableBodyRow as TableBodyRowAksara,
  TableBodyCell as TableBodyCellAksara,
  theme,
} from '@aksara-ui/react';
import styled from 'styled-components';
import { space, textSizes, colors } from 'utils/variables';

const Table = styled(TableAksara)`
  table-layout: fixed;
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[300].fontSize}px;
  line-height: ${textSizes[300].lineHeight}px;
  border-collapse: collapse;
  border: 2px solid ${colors.grey11};
`;

const TableHead = styled(TableHeadAksara)`
  border-bottom: 1px solid ${colors.grey02};
`;

export const TableHeadRow = styled(TableHeadRowAksara)``;

const TableHeadCell = styled(TableHeadCellAksara)`
  padding: 14px 16px;
  letter-spacing: -0.01em;
  border: 1px solid ${colors.grey02};

  &,
  p,
  span,
  li {
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
    color: ${theme.colors.greydark02};
    margin: 0;
    font-size: 16px;
    line-height: 24px;
  }
`;

const TableBody = TableBodyAksara;

const TableBodyRow = styled(TableBodyRowAksara)`
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.grey11};
  }
`;

const TableBodyCell = styled(TableBodyCellAksara)`
  padding: 14px 16px;
  min-width: 15vw;
  vertical-align: top;
  overflow-wrap: anywhere;
  border: 1px solid ${colors.grey02};
  &,
  p,
  span,
  li {
    font-size: ${textSizes[400].fontSize}px;
    line-height: ${textSizes[400].lineHeight}px;
    color: ${theme.colors.greydark02};
    margin: 0;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
const Components = {
  Table,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableBody,
  TableBodyRow,
  TableBodyCell,
};

export default Components;
