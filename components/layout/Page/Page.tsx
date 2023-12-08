import styled from 'styled-components';
import { dimensions } from 'utils/variables';

interface PageProps {
  docsPage?: boolean;
}

const Page = styled('div')<PageProps>`
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  background: white;
  padding: 0;
`;

export default Page;
