import Container from '../components/container';
import Portal from '../components/portal/portal';
import Head from 'next/head';
import { Footer, FooterWrapper } from 'components/layout/Footer';
import Tutorials from 'components/portal/tutorials';
import { TutorialWrapper } from 'components/portal/components';
import IndexLayout from 'components/layouts';
import { allTutorials, Tutorials as ITutorials } from 'contentlayer/generated';
import React from "react";

interface IIndex {
  tutorialPosts: ITutorials[];
}

const Index: React.FC<IIndex> = ({ tutorialPosts }) => {
  return (
    <IndexLayout navHidden>
      <Head>
        <title>若光产品文档</title>
      </Head>
      <Container>
        <Portal />
        <TutorialWrapper>
          <Tutorials tutorials={tutorialPosts} />
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </TutorialWrapper>
      </Container>
    </IndexLayout>
  );
};

export async function getStaticProps() {
  const posts = allTutorials.slice(0, 6);
  return {
    props: {
      tutorialPosts: posts,
    },
  };
}
export default Index;
