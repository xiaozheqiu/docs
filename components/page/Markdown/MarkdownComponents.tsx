import * as React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph as ParagraphAksara } from 'components/foundations';
import { space, textSizes, colors, breakpoints } from 'utils/variables';
import { ParagraphProps, theme } from '@aksara-ui/react';

const UnorderedList = styled('ul')`
  margin: ${space.sm}px 0;
`;

const HorizontalRule = styled('hr')`
  margin: ${space.xl}px 0;
  border: none;
  border-top: 1px solid ${colors.grey02};
`;

const TableDefault = styled('table')`
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[400].fontSize}px;
  line-height: ${textSizes[400].lineHeight}px;
  border-collapse: collapse;

  thead {
    border: 1px solid ${colors.grey02};

    th {
      border: 1px solid ${colors.grey02};
      padding: ${space.xs}px ${space.sm}px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: left;
      color: ${theme.colors.greydark02};
    }
  }

  tfoot {
    tr {
      border: 1px solid ${colors.grey02};
      td {
        padding: ${space.xs}px ${space.sm}px;
        border: 1px solid ${colors.grey02};
        vertical-align: top;
        font-style: normal;
        font-stretch: normal;
        font-weight: 700;
        letter-spacing: -0.01em;
        text-transform: uppercase;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: ${space.xs}px ${space.sm}px;
        border: 1px solid ${colors.grey02};
        min-width: 15vw;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize}px;
        line-height: ${textSizes[400].lineHeight}px;
        color: ${colors.grey07};
        overflow-wrap: anywhere;
      }
    }
  }
`;

const TableBordered = styled('table')`
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[300].fontSize}px;
  line-height: ${textSizes[300].lineHeight}px;
  border-collapse: collapse;
  border: 2px solid ${colors.grey11};

  thead {
    border-bottom: 1px solid ${colors.grey02};
    th {
      padding: 14px 16px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      text-align: center;
      color: ${theme.colors.greydark02};
    }
  }

  tbody {
    tr {
      td {
        padding: 14px 16px;
        min-width: 15vw;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize}px;
        line-height: ${textSizes[400].lineHeight}px;
        color: ${colors.grey12};
        overflow-wrap: anywhere;
      }
      &:not(:last-child) {
        border-bottom: 1px solid ${colors.grey11};
      }
    }
  }
`;

export const H1 = styled(Heading)`
  font-weight: 700;
  color: ${theme.colors.greydark05};
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 20px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

export const h1 = (props: JSX.IntrinsicAttributes) => <H1 as="h1" {...props} />;

export const h2 = (props: JSX.IntrinsicAttributes) => (
  <Heading fontSize={30} fontWeight={700} as="h2" my="lg" color={theme.colors.greydark05} {...props} />
);
export const h3 = (props: JSX.IntrinsicAttributes) => (
  <Heading fontSize={24} fontWeight={700} as="h3" my="lg" color={theme.colors.greydark05} {...props} />
);
export const h4 = (props: JSX.IntrinsicAttributes) => (
  <Heading size={400} as="h4" color={theme.colors.greydark02} my="lg" {...props} />
);
export const h5 = (props: JSX.IntrinsicAttributes) => (
  <Heading fontSize={14} fontWeight={700} as="h5" my="lg" color={theme.colors.greydark02} {...props} />
);
export const h6 = (props: JSX.IntrinsicAttributes) => <Heading size={400} as="h6" my="lg" {...props} />;

const Paragraph = styled(ParagraphAksara)<ParagraphProps>`
  font-weight: 400;
  color: ${theme.colors.greydark02};
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const p = (props: JSX.IntrinsicAttributes) => <Paragraph mt="sm" {...props} />;
export const hr = (props: JSX.IntrinsicAttributes) => <HorizontalRule {...props} />;
export const ul = (props: JSX.IntrinsicAttributes) => <UnorderedList {...props} />;
export const ol = (props: JSX.IntrinsicAttributes) => <UnorderedList as="ol" {...props} />;
export const li = (props: JSX.IntrinsicAttributes) => <Paragraph as="li" my="xxs" {...props} />;

interface TableAttributes extends JSX.IntrinsicAttributes {
  className?: string;
}
export const table = (props: TableAttributes) => {
  const { className, ...rest } = props;
  if (className?.includes('bordered')) {
    return <TableBordered {...rest} />;
  }
  return <TableDefault {...rest} />;
};
