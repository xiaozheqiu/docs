import { theme } from '@aksara-ui/react';
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from 'utils/variables';

interface HeaderRightProps {
  className?: string;
  contents?: 'space-around' | 'space-between' | 'space-evenly' | 'flex-start' | 'flex-end';
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}

const HideOnMobile = css`
  @media (max-width: ${breakpoints.lg - 1}px) {
    display: none;
  }
`;

const HideOnDesktop = css`
  @media (min-width: ${breakpoints.lg}px) {
    display: none;
  }
`;

const Wrapper = styled('div')<HeaderRightProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 100%;
  justify-content: ${(props) => props.contents};
  border-bottom: 1px solid ${theme.colors.grey02};
  @media (max-width: ${breakpoints.lg - 1}px) {
    padding: 0 16px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 24px;
  }

  ${(props) => props.hideOnMobile && HideOnMobile}
  ${(props) => props.hideOnDesktop && HideOnDesktop}
`;

const HeaderRight: React.FC<HeaderRightProps> = ({ children, className, contents, ...rest }) => (
  <Wrapper className={className} contents={contents} {...rest}>
    {children}
  </Wrapper>
);

HeaderRight.defaultProps = {
  className: undefined,
  contents: 'space-between',
};

export default HeaderRight;
