import { Text, Box, Heading, theme, UnstyledAnchor } from '@aksara-ui/react';
import { Cards } from 'components/tutorials/components';
import { MarkdownContent } from 'interfaces/next';
import React from 'react';
import { HeaderSegment } from './components';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

interface TutorialsProps {
  tutorials?: MarkdownContent[];
}

const VideoTitle = styled(Text)`
  color: ${theme.colors.greydark02};
  text-align: center;
  margin-bottom: 10px;
  margin-top: 12px;
  font-weight: 700;

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const VideoTutorial: React.FC<TutorialsProps> = () => {
  return (
    <VideoTutorialWrapper>
      <HeaderSegment>
        <Heading scale={700} fontSize={24} mb={0} color={theme.colors.greydark02}>
          Video Tutorial
        </Heading>
        <UnstyledAnchor
          fontSize={16}
          href="https://www.youtube.com/channel/UCrud2GevnuhBNM7C7RjakVg/playlists"
          target="_blank"
          cursor="pointer"
          color={theme.colors.blue07}
          _hover={{ textDecoration: 'underline', color: theme.colors.blue09, fontWeight: 500 }}
          fontWeight={500}
        >
          See all
        </UnstyledAnchor>
      </HeaderSegment>
      <Cards>
        <VideoWrapper>
          <LiteYouTubeEmbed
            id="fTMnCy9NE2w"
            title="Self-Onboarding"
            thumbnail="/assets/images/thumbnail/self-onboarding.png"
          />
          <VideoTitle>Kata Omnichat 2.0</VideoTitle>
        </VideoWrapper>
        <VideoWrapper>
          <LiteYouTubeEmbed
            id="eFWbrAObOXg"
            title="How to Set Up Qios"
            thumbnail="/assets/images/thumbnail/how-to-set-up-qios.png"
          />
          <VideoTitle>Qios Tutorial</VideoTitle>
        </VideoWrapper>
      </Cards>
    </VideoTutorialWrapper>
  );
};

export default VideoTutorial;

const VideoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${breakpoints.lg - 1}px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

const VideoTutorialWrapper = styled(Box)`
  margin-bottom: 48px;
`;
