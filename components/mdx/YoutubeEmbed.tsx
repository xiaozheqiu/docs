import { Box } from '@aksara-ui/react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const YoutubeEmbedWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={22} {...rest} />;
};

const YoutubeEmbed = LiteYouTubeEmbed;

const Components = {
  YoutubeEmbedWrapper,
  YoutubeEmbed,
};

export default Components;
