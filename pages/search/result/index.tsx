import React from 'react';
import Container from 'components/container';
import Head from 'next/head';
import { Footer, FooterWrapper } from 'components/layout/Footer';
import { Box, Heading as HeadingAksara, Text, theme } from '@aksara-ui/react';
import { PaginationWithDetails } from 'components/tutorials/pagination';
import IndexLayout from 'components/layouts';
import { useRouter } from 'next/router';
import { FUSE_SEARCH } from 'utils/search';
import { PRODUCTS_DICT } from 'utils/constants';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { breakpoints } from 'utils/variables';
import { BreadcrumbContent } from 'interfaces/next';

const LIMIT = [5, 10, 15];

const ResultTitle = styled('h3')`
  line-height: 32px;
  color: ${theme.colors.greydark02};
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const ResultExcerpt = styled(Text)`
  font-style: normal;
  font-weight: normal;
  color: ${theme.colors.greymed04};
  font-size: 16px;
  line-height: 28px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 12px;
    line-height: 16px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const SearchResult = styled('div')`
  &:not(:last-child) {
    padding-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.greylight04};

    @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
      margin-bottom: 10px;
    }
    @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
      margin-bottom: 24px;
    }
  }
`;

const SearchResultLink = styled(Link)`
  color: inherit;

  ${SearchResult} {
    border-bottom: 1px solid ${theme.colors.grey02};
  }

  &:last-child {
    ${SearchResult} {
      border-bottom: none;
    }
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    ${ResultTitle} {
      text-decoration: underline;
    }

    ${SearchResult} {
      background-color: ${theme.colors.grey05};
    }
  }
`;

const Wrapper = styled(Box)`
  border-radius: 8px;
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    margin-left: 160px;
    margin-right: 160px;
  }
`;

const InnerWrapper = styled(Box)`
  background-color: ${theme.colors.greylight01};
  padding: 32px 32px 48px 32px;
  margin-bottom: 48px;
`;

const PaginationWrapper = styled(Box)`
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    margin-top: 48px;
    margin-bottom: 96px;
  }
`;

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

const BreadcrumbWrapper = styled(Box)<{ hideOnMobile?: boolean; hideOnDesktop?: boolean }>`
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    margin-top: 14px;
    margin-bottom: 14px;
  }
  ${(props) => props.hideOnMobile && HideOnMobile}
  ${(props) => props.hideOnDesktop && HideOnDesktop}
`;

const HeadingWrapper = styled(Box)`
  display: flex;
  margin-top: 48px;
  margin-bottom: 48px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled(HeadingAksara)`
  color: ${theme.colors.greydark02};

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 24px;
    line-height: 32px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const Index: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);

  const [results, setResults] = React.useState([]);
  const router = useRouter();
  const { query, product } = router.query;

  React.useEffect(() => {
    if (typeof query !== 'undefined' && typeof product !== 'undefined' && typeof FUSE_SEARCH[product] !== 'undefined') {
      const fuse = FUSE_SEARCH[product];
      setResults(fuse.search(query));
    }
  }, [product, query, router]);

  return (
    <IndexLayout navHidden>
      <Head>
        <title>
          Search result for “{query}” {PRODUCTS_DICT[product] && `in ${PRODUCTS_DICT[product]}`} 🔎
        </title>
      </Head>
      <Container>
        <HeadingWrapper>
          <Heading>
            Search result for “{query}” {PRODUCTS_DICT[product] && `in ${PRODUCTS_DICT[product]}`} 🔎
          </Heading>
        </HeadingWrapper>
        <Wrapper>
          <InnerWrapper>
            {results.slice((page - 1) * limit, limit * page).map(({ item: page }) => {
              let breadcrumbItems: BreadcrumbContent[] = [{ url: `/`, urlDisplay: `Home` }];
              if (product === 'global') {
                if (page.type === 'tutorials') {
                  breadcrumbItems = [
                    ...breadcrumbItems,
                    { url: `/tutorials`, urlDisplay: `All Tutorials` },
                    { urlDisplay: `${PRODUCTS_DICT[page.product]} Tutorial` },
                  ];
                } else {
                  breadcrumbItems = [
                    ...breadcrumbItems,
                    { url: `/${page.product}`, urlDisplay: `${PRODUCTS_DICT[page.product]}` },
                    { urlDisplay: `${page.section}` },
                  ];
                }
              } else {
                breadcrumbItems = [
                  ...breadcrumbItems,
                  { url: `/${page.product}`, urlDisplay: `${PRODUCTS_DICT[page.product]}` },
                  { urlDisplay: `Documentation Contents` },
                ];
              }

              return (
                <SearchResult key={`${page.product}-${page.id}`}>
                  <SearchResultLink href={page.meta.absolutePath}>
                    <ResultTitle>{page.title}</ResultTitle>
                  </SearchResultLink>
                  <BreadcrumbWrapper hideOnMobile>
                    <Breadcrumb items={breadcrumbItems} />
                  </BreadcrumbWrapper>
                  <BreadcrumbWrapper hideOnDesktop>
                    <Breadcrumb
                      items={breadcrumbItems.map((item, index) => {
                        if (index === 0) {
                          return { urlDisplay: '...' };
                        }
                        return { urlDisplay: item.urlDisplay };
                      })}
                    />
                  </BreadcrumbWrapper>
                  {page.excerpt && <ResultExcerpt>{page.excerpt}</ResultExcerpt>}
                </SearchResult>
              );
            })}
          </InnerWrapper>
          <PaginationWrapper>
            <PaginationWithDetails
              current={page}
              setPage={setPage}
              totalPage={Math.floor(results.length / limit + 1)}
              limit={limit}
              setLimit={setLimit}
              limitList={LIMIT}
              totalItems={results.length}
            />
          </PaginationWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Wrapper>
      </Container>
    </IndexLayout>
  );
};

export default Index;
