import React from 'react';
import Head from 'next/head';
import { Text, UnstyledAnchor } from '@aksara-ui/react';

import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { DocsHeader } from 'components/docs/DocsHeader';

import { FooterWrapper, Footer } from 'components/layout/Footer';
import { TocJsonWrapper } from 'components/docs/TableOfContents';
import { BackToTopButton } from 'components/docs/BackToTopButton';
// import { DocsHelpful } from 'components/docs/DocsHelpful';
import { useRouter } from 'next/router';
import { DocsContainer } from 'components/layout/Container';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import IndexLayout from 'components/layouts';
import { SidebarLogo } from 'components/docs/DocsSidebar';
import Link from 'next/link';
import { PRODUCTS_DICT } from 'utils/constants';
import { allTutorials, Tutorials } from 'contentlayer/generated';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXComponents from 'components/mdx/MDXComponents';
import { MarkdownContent } from 'components/page/Markdown';

interface TutorialPageTemplateProps {
  post: Tutorials;
  toc: any;
}

const TutorialPageTemplate: React.FC<TutorialPageTemplateProps> = ({ post, toc }) => {
  const MDXContent = useMDXComponent(post.body.code);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    router.push('/404');
  }

  const onTocSidebarClick = React.useCallback((e: any, url: string) => {
    e.preventDefault();
    router.push(url);
  }, []);

  const isItemSelected = React.useCallback(
    (tag: string): boolean => {
      // because toc based on one file only, the comparison is after # tag only
      return router.asPath.indexOf(tag) !== -1;
    },
    [router]
  );

  return (
    <Page suppressHydrationWarning={true} docsPage>
      <Head>
        <title>{post.title} &middot; Kata Platform Documentation</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <IndexLayout navHidden>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <DocsWrapper>
            {toc && (
              <div className="table-of-contents">
                <SidebarLogo>
                  <Link href="/" passHref>
                    <UnstyledAnchor>
                      <Image
                        layout="fixed"
                        width={60}
                        height={40}
                        src="/assets/images/logo-docs.svg"
                        alt="Kata Documentations"
                      />
                    </UnstyledAnchor>
                  </Link>
                </SidebarLogo>
                <TocJsonWrapper
                  tree={toc}
                  onClick={onTocSidebarClick}
                  isItemSelected={isItemSelected}
                  isAccordionHeaderActive={isItemSelected} // the logic is same because based on one file only
                />
              </div>
            )}
            <DocsContainer>
              <Breadcrumb
                items={[
                  { url: '/', urlDisplay: 'Home' },
                  { url: '/tutorials', urlDisplay: 'All Tutorials' },
                  { url: `/${post.product}`, urlDisplay: PRODUCTS_DICT[post.product] },
                  { urlDisplay: 'Tutorial' },
                ]}
              />
              <DocsHeader title={post.title} />
              <MarkdownContent>
                <MDXContent components={MDXComponents} />
              </MarkdownContent>
              {/* <DocsHelpful /> */}
              <FooterWrapper>
                <Footer />
              </FooterWrapper>
            </DocsContainer>
            <BackToTopButton href="#" />
          </DocsWrapper>
        )}
      </IndexLayout>
    </Page>
  );
};

export default TutorialPageTemplate;

export async function getStaticPaths() {
  return {
    paths: await allTutorials.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slugStringify = JSON.stringify(params.slug);
  const post = allTutorials.find((post) => JSON.stringify(post.slug) === slugStringify);
  const toc = await require(`docs/navigation/tutorials/${params?.slug[0]}.json`);

  return {
    props: {
      post,
      toc,
    },
  };
}
