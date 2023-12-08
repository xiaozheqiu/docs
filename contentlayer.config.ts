import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import sanitizeHtml from 'sanitize-html';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1),
  },
  excerpt: {
    type: 'string',
    resolve: (doc) =>
      sanitizeHtml(doc.body.raw.split('.').slice(0, 2).join('.'), {
        allowedTags: [],
        allowedAttributes: {},
      }),
  },
};

const BusinessDashboard = defineDocumentType(() => ({
  name: 'BusinessDashboard',
  filePathPattern: 'business-dashboard/**/*.mdx',
  contentType: 'mdx',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    hiddenTitle: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const KataOmnichat = defineDocumentType(() => ({
  name: 'KataOmnichat',
  filePathPattern: 'kata-omnichat/**/*.mdx',
  contentType: 'mdx',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    hiddenTitle: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const KataPlatform = defineDocumentType(() => ({
  name: 'KataPlatform',
  filePathPattern: 'kata-platform/**/*.mdx',
  contentType: 'mdx',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    hiddenTitle: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const Qios = defineDocumentType(() => ({
  name: 'Qios',
  filePathPattern: 'qios/**/*.mdx',
  contentType: 'mdx',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    hiddenTitle: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const Tutorials = defineDocumentType(() => ({
  name: 'Tutorials',
  filePathPattern: 'tutorials/**/*.mdx',
  contentType: 'mdx',
  fields: {
    layout: { type: 'string' },
    id: { type: 'string', required: true },
    imgSpot: { type: 'string', required: true },
    product: { type: 'string', required: true },
    title: { type: 'string', required: true },
    date: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'docs',
  documentTypes: [BusinessDashboard, KataOmnichat, KataPlatform, Qios, Tutorials],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [remarkRehype, { allowDangerousHtml: true }],
      rehypeRaw,
      rehypeSlug,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
