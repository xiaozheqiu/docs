import Fuse from 'fuse.js';

const MARKDOWN_JSON_OUTPUT = {
  tutorials: require('markdown-to-json/outputs/tutorials.json'),
  'kata-platform': require('markdown-to-json/outputs/kata-platform.json'),
  'kata-omnichat': require('markdown-to-json/outputs/kata-omnichat.json'),
  'business-dashboard': require('markdown-to-json/outputs/business-dashboard.json'),
  qios: require('markdown-to-json/outputs/qios.json'),
  global: require('markdown-to-json/outputs/global.json'),
};

const FUSE_SEARCH_OPTIONS = {
  shouldSort: true,
  threshold: 0.6,
  ignoreLocation: true,
  minMatchCharLength: 3,
  keys: ['title', 'contents'],
};
export const FUSE_SEARCH = {
  tutorials: new Fuse(MARKDOWN_JSON_OUTPUT.tutorials.data, FUSE_SEARCH_OPTIONS),
  'kata-platform': new Fuse(MARKDOWN_JSON_OUTPUT['kata-platform'].data, FUSE_SEARCH_OPTIONS),
  'kata-omnichat': new Fuse(MARKDOWN_JSON_OUTPUT['kata-omnichat'].data, FUSE_SEARCH_OPTIONS),
  'business-dashboard': new Fuse(MARKDOWN_JSON_OUTPUT['business-dashboard'].data, FUSE_SEARCH_OPTIONS),
  qios: new Fuse(MARKDOWN_JSON_OUTPUT.qios.data, FUSE_SEARCH_OPTIONS),
  global: new Fuse(MARKDOWN_JSON_OUTPUT.global.data, FUSE_SEARCH_OPTIONS),
};
