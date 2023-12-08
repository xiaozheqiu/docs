import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MenuNode } from 'interfaces/nodes';
import { Heading, Box } from 'components/foundations';
import { colors, space } from 'utils/variables';
import { UnstyledAnchor } from '@aksara-ui/react';

interface NavigationMenuProps {
  node: MenuNode;
}

interface ToggleableProps {
  isOpen?: boolean;
}

const ToggleMenu = styled('ul')<ToggleableProps>`
  list-style-type: none;
  margin: 0 -${space.xs}px;
  padding: 0;
  transition: all 0.3s ease;
`;

const ToggleMenuList = styled('li')`
  margin: 0;
  font-size: 85%;
  color: ${colors.grey07};

  a {
    display: block;
    padding: ${space.xs}px;
    border: 2px solid transparent;
    border-radius: 2px;
    color: ${colors.grey07};

    &:hover,
    &:focus {
      background-color: ${colors.grey02};
      color: ${colors.grey07};
      text-decoration: none;
    }

    &:focus {
      outline: none;
      background-color: ${colors.blue01};
      border-color: ${colors.blue05};
    }

    &.active {
      color: ${colors.grey07};
      background-color: ${colors.blue01};
      font-weight: 500;
      border-color: transparent;
    }
  }
`;

const NavigationMenu: React.FC<NavigationMenuProps> = ({ node }) => {
  return (
    <Box mb="xl">
      <Heading as="h3" size={100} color="grey04" mb="sm">
        {node.title}
      </Heading>
      <ToggleMenu>
        {node.items?.map((item) => (
          <ToggleMenuList key={item.title}>
            <Link href={item.url} passHref>
              <UnstyledAnchor>{item.title}</UnstyledAnchor>
            </Link>
          </ToggleMenuList>
        ))}
      </ToggleMenu>
    </Box>
  );
};

export default React.memo(NavigationMenu);
