import React from 'react';
import { Breadcrumb as BreadcrumbAksara, BreadcrumbItem as BreadcrumbItemAksara, theme } from '@aksara-ui/react';
import { IconChevronRight } from '@aksara-ui/icons';
import { BreadcrumbContent } from 'interfaces/next';
import styled from 'styled-components';

interface BreadCrumbProps {
  items: BreadcrumbContent[];
}

const BreadcrumbItem = styled(BreadcrumbItemAksara)`
  color: ${(props) => !props.href && theme.colors.greymed05};
  &:hover {
    text-decoration: none;
    color: ${(props) => !props.href && theme.colors.greymed05};
  }
`;

const Breadcrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  const arrTmp: React.ReactNode[] = [];
  items.map((item) => {
    if (item.url) {
      arrTmp.push(<BreadcrumbItem href={item.url}>{item.urlDisplay}</BreadcrumbItem>);
    } else {
      arrTmp.push(<BreadcrumbItem style={{ color: theme.colors.greydark02 }}>{item.urlDisplay}</BreadcrumbItem>);
    }
  });

  return <BreadcrumbAksara items={arrTmp} separator={IconChevronRight} />;
};

export default Breadcrumb;
