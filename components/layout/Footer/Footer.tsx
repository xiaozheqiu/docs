import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import { breakpoints, space } from 'utils/variables';
import { SOCIALS as socialData } from 'utils/constants';
import { theme, Text, UnstyledAnchor } from '@aksara-ui/react';
import Image from 'next/image';

const Wrapper = styled('footer')`
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid ${theme.colors.grey04};
`;

const Inner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${`${breakpoints.md}px`}) {
    text-align: center;
    flex-direction: column;
  }
`;

const SocialMediaList = styled('ul')`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SocialMediaListItem = styled('li')`
  margin: 0;
  margin-left: 8px;
  margin-right: 8px;

  @media only screen and (max-width: ${breakpoints.md}px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SocialMediaLink = styled(UnstyledAnchor)`
  display: inline-block;
  color: inherit;
  vertical-align: middle;
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

const FooterSection = styled('div')`
  line-height: 18px;
  @media (max-width: ${breakpoints.md - 1}px) {
    &:not(:first-child) {
      margin-top: ${space.sm}px;
    }
  }
`;

const Footer: React.FC = () => {
  const date = new Date();
  const dateLastUpdated = new Date('5 December 2023');
  const socials = socialData;

  return (
    <Wrapper>
      <Inner>
        <FooterSection>
          <Text as="p" scale={200} fontSize={12} color={theme.colors.greymed04}>
            &copy; {format(date, 'yyyy')} 若光科技
          </Text>
          <Text as="p" scale={200} fontSize={12} color={theme.colors.greymed04}>
            版本v1.0.0 上次更新{' '}
            {dateLastUpdated.getFullYear() +
              '年' +
              (dateLastUpdated.getMonth() + 1).toString().padStart(2, '0') +
              '月' +
              dateLastUpdated.getDate().toString().padStart(2, '0') +
              '日'}
          </Text>
        </FooterSection>
        <FooterSection>
          <SocialMediaList>
            {socials.map((social) => (
              <SocialMediaListItem key={social.name}>
                <SocialMediaLink href={social.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    width={16}
                    height={16}
                    layout="fixed"
                    src={`/assets/images/${social.imgpath}`}
                    alt={social.name}
                  />
                </SocialMediaLink>
              </SocialMediaListItem>
            ))}
          </SocialMediaList>
        </FooterSection>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
