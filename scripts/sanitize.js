const sanitizeHtml = require('sanitize-html');
const fs = require('fs');

const markdownJsonOutput = {
  tutorials: require('../markdown-to-json/outputs/tutorials.json'),
  'kata-platform': require('../markdown-to-json/outputs/kata-platform.json'),
  'kata-omnichat': require('../markdown-to-json/outputs/kata-omnichat.json'),
  'business-dashboard': require('../markdown-to-json/outputs/business-dashboard.json'),
  qios: require('../markdown-to-json/outputs/qios.json'),
  global: require('../markdown-to-json/outputs/global.json'),
};

const sanitizeString = (sentences, removeSymbol = true) => {
  const cleanSentences = sanitizeHtml(sentences, {
    allowedTags: [],
    allowedAttributes: {},
  })
    .replace(/[\n\r]/g, ' ') // \n \r
    .replace(/(?:https?|ftp):\/\/[\n\S]+/g, ' ') // URL
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ' '
    ); // Emoji

  if (removeSymbol) {
    return cleanSentences
      .replace(/[^\w\s]/gi, ' ') // Special Symbol;
      .replace(/ +(?= )/g, ''); // double space
  }
  return cleanSentences.replace(/ +(?= )/g, ''); // double space;
};

const convertRelativeToAbsolute = (relativePath, prefix) => {
  if (prefix) {
    return `/${prefix}/${relativePath}`;
  }
  return `/${relativePath}`;
};

const sanitizeUrl = (path) => {
  return path.replace(/\\/g, '/').replace('.html', '').replace('.mdx', '');
};

Object.keys(markdownJsonOutput).forEach((key) => {
  console.log(`Begin sanitizing ${key}`);
  const output = markdownJsonOutput[key];
  const isGlobal = key === 'global';
  const newData = output.data
    .filter(({ id }) => id !== 'release-notes-version')
    .map(({ contents, excerpt, id, meta, title, hiddenTitle, ...rest }) => {
      const { relativePath, ...restMeta } = meta;
      const absolutePath = convertRelativeToAbsolute(sanitizeUrl(relativePath), isGlobal ? undefined : key);
      // For handling global json and making breadcrumb for search page
      const [_, productKey, __] = absolutePath.split('/');
      return {
        contents: sanitizeString(contents).trim(),
        excerpt: sanitizeString(contents).split(' ').slice(0, 32).join(' ').trim(),
        meta: { ...restMeta, absolutePath },
        product: productKey,
        type: absolutePath.indexOf('tutorials') > 0 ? 'tutorials' : 'docs',
        id,
        title: title ?? hiddenTitle,
        ...rest,
      };
    });
  fs.writeFile(
    `./markdown-to-json/outputs/${key}.json`,
    JSON.stringify({ app: output.app, data: newData }),
    'utf-8',
    function (err) {
      if (err) throw err;
      console.log(`Finish sanitizing ${key}`);
    }
  );
});
