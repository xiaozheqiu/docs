import React from 'react';
import Container from '../../components/container';
import Head from 'next/head';
import { Footer, FooterWrapper } from 'components/layout/Footer';
import { Box, Heading, Text, theme } from '@aksara-ui/react';
import { Cards, CardsWrapper } from 'components/tutorials/components';
import { PaginationWithDetails } from 'components/tutorials/pagination';
import { TutorialCard } from 'components/tutorials/TutorialCard';
import IndexLayout from 'components/layouts';
import { allTutorials, Tutorials } from 'contentlayer/generated';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

interface IIndex {
  tutorialPosts: Tutorials[];
}

const TutorialTitle = styled(Heading)`
  color: ${theme.colors.greydark02};
  margin-bottom: 14px;

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 24px;
    line-height: 32px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const TutorialDescription = styled(Text)`
  color: ${theme.colors.greydark02};
  font-weight: 400;

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const LIMIT = [6, 9, 12];

const Index: React.FC<IIndex> = ({ tutorialPosts }) => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(6);

  return (
    <IndexLayout navHidden>
      <Head>
        <title>Kata Product Documentations - Tutorials</title>
      </Head>
      <Container>
        <Box display="flex" py={32} mb={48} flexDirection="column" justifyContent="center" alignItems="center">
          <TutorialTitle>Tutorials 📚</TutorialTitle>
          <TutorialDescription>Find the tutorials for our products</TutorialDescription>
        </Box>
        {tutorialPosts.length > 0 && (
          <CardsWrapper>
            <Cards>
              {tutorialPosts.slice((page - 1) * limit, limit * page).map((tutorial: any, idx: number) => {
                return <TutorialCard key={tutorial.id} index={idx} tutorial={tutorial} />;
              })}
            </Cards>
            <PaginationWithDetails
              current={page}
              setPage={setPage}
              totalPage={Math.floor(tutorialPosts.length / limit + 1)}
              limit={limit}
              setLimit={setLimit}
              limitList={LIMIT}
              totalItems={tutorialPosts.length}
            />
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </CardsWrapper>
        )}
      </Container>
    </IndexLayout>
  );
};

export async function getStaticProps() {
  const posts = [...allTutorials];

  return {
    props: {
      tutorialPosts: posts,
    },
  };
}

export default Index;
