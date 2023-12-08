const fs = require('fs');

const TOCs = {
  'kata-platform': require('../docs/toc-kata-platform.json'),
  'kata-omnichat': require('../docs/toc-kata-omnichat.json'),
  'business-dashboard': require('../docs/toc-business-dashboard.json'),
  qios: require('../docs/toc-qios.json'),
};

Object.keys(TOCs).forEach((key) => {
  console.log(`Start creating link ${key}`);
  const linking = {};
  // ids that dont link with any other document
  const exceptionIds = ['release-notes-version'];
  let previous = null;
  TOCs[key].items.map((section) => {
    if (section.items && Array.isArray(section.items)) {
      section.items.map(({ id, url, title }) => {
        if (previous) {
          linking[previous.id] = { ...linking[previous.id], next: { id, url, title } };
        }

        if (!exceptionIds.includes(id)) {
          if (typeof linking[id] !== 'undefined') throw `There is duplicate id in ${key}`;
          linking[id] = {
            previous,
            next: null,
          };
        }
        previous = { id, url, title };
      });
    }
  });
  const path = `docs/linking-toc/${key}.json`;
  fs.writeFile(path, JSON.stringify(linking), 'utf-8', function (err) {
    if (err) throw err;
    console.log(`Finish creating link ${key}`);
  });
});
