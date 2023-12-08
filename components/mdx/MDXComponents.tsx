import { h1, h2, h3, h4, h5, h6, hr, p, ul, ol, li } from 'components/page/Markdown/MarkdownComponents';
import ImageComponents from './Image';
import TableComponents from './Table';
import YoutubeEmbedComponents from './YoutubeEmbed';

const MDXComponents = {
  ...ImageComponents,
  ...YoutubeEmbedComponents,
  ...TableComponents,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  ul,
  ol,
  li,
};

export default MDXComponents;
