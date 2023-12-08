import React from 'react';
import { Box, Pagination, PaginationDetail, PaginationFilter } from '@aksara-ui/react';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

interface PaginationDetailsProps {
  current: number;
  totalPage: number;
  totalItems: number;
  setLimit: Function;
  setPage: (page: number) => void;
  limitList: number[];
  limit: number;
}

export const PaginationWithDetails: React.FC<PaginationDetailsProps> = ({
  current,
  totalPage,
  limit,
  limitList,
  totalItems,
  setLimit,
  setPage,
}) => {
  return (
    <PaginationWrapper alignItems="center" justifyContent="space-between">
      <PaginationDetailWrapper>
        <PaginationDetail page={current} limit={limit} length={totalItems} />
      </PaginationDetailWrapper>
      <Pagination onSelect={setPage} current={current} total={totalPage} />
      <PaginationFilter
        selectedItem={limit}
        items={limitList}
        onChange={(changes) => {
          setLimit(changes);
          setPage(1);
        }}
      />
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    line-height: 64px;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  } ;
`;

const PaginationDetailWrapper = styled(Box)`
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    margin-bottom: 8x;
  }
`;
