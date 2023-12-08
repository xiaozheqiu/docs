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
import { MarkdownContent } from 'components/page/Markdown';
import { DocsContainer } from 'components/layout/Container';
import IndexLayout from 'components/layouts';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { PaginationDocs } from 'components/docs/Pagination';
import { SidebarLogo } from 'components/docs/DocsSidebar';
import Link from 'next/link';
import { allQios, Qios } from 'contentlayer/generated';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXComponents from 'components/mdx/MDXComponents';
import toc from 'docs/toc-qios.json';
import linkingToc from 'docs/linking-toc/qios.json';
import { MDXLinking } from 'interfaces/linking';

interface QiosPageTemplateProps {
  post: Qios;
  linking: MDXLinking;
}

const QiosPageTemplate: React.FC<QiosPageTemplateProps> = ({ post, linking }) => {
  const MDXContent = useMDXComponent(post.body.code);

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    router.push('/404');
  }

  const onTocSidebarClick = React.useCallback(
    (e: any, url: string) => {
      e.preventDefault();
      router.push(url);
    },
    [router]
  );

  const isItemSelected = React.useCallback(
    (url: string): boolean => {
      return url === router.asPath;
    },
    [router]
  );

  const isAccordionHeaderActive = React.useCallback(
    (url: string): boolean => {
      const [baseUrl] = router.asPath.split('#');
      return url === baseUrl;
    },
    [router]
  );
  return (
    <Page docsPage>
      <Head>
        <title>{post.title} &middot; Qios Documentation</title>
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
                        width={150}
                        height={40}
                        alt="Qios Documentations"
                        src="/assets/images/products/qios-logo-docs.svg"
                      />
                    </UnstyledAnchor>
                  </Link>
                </SidebarLogo>
                <TocJsonWrapper
                  tree={toc}
                  onClick={onTocSidebarClick}
                  isItemSelected={isItemSelected}
                  isAccordionHeaderActive={isAccordionHeaderActive}
                />
              </div>
            )}
            <DocsContainer>
              <Breadcrumb
                items={[
                  { url: '/', urlDisplay: 'Home' },
                  { url: '/qios', urlDisplay: 'Qios' },
                  { urlDisplay: post.section },
                ]}
              />
              <DocsHeader title={post.title} />
              <MarkdownContent>
                <MDXContent components={MDXComponents} />
              </MarkdownContent>
              {linking && <PaginationDocs prevPage={linking.previous} nextPage={linking.next} />}
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

export default QiosPageTemplate;

export async function getStaticPaths() {
  return {
    paths: await allQios.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slugStringify = JSON.stringify(params.slug);
  const post = allQios.find((post) => JSON.stringify(post.slug) === slugStringify);
  const linking = linkingToc[post.id] || null;

  return {
    props: {
      post,
      linking,
    },
  };
}
