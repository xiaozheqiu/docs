const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

// const fileContents = fs.readFileSync('./docs/tutorials/bot-studio.mdx', 'utf8');

// console.log(fileContents);
// console.log(fileContents.match(/<FigureImage(?:(?:\r\n \t|[\r\n \t]).+$)*/g));
var walk = function (dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(walk(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
};

const closingTag = '/>';

for (let file of walk('./docs')) {
  const fileContents = fs.readFileSync(file, 'utf8');
  let content = fileContents;
  let newContent = fileContents;
  console.log(`Process ${file} document`);
  let processed = 0;
  while (true) {
    console.log('processed', processed);
    const index = content.indexOf('<FigureImage');
    if (index === -1) break;
    content = content.substring(index);

    const closingIndex = content.indexOf(closingTag);

    const originalImageTag = content.substring(0, closingIndex + closingTag.length);
    if (originalImageTag.indexOf('naturalWidth') >= 0 || originalImageTag.indexOf('naturalHeight') >= 0) {
      content = content.substring(closingIndex);
      continue;
    }

    const source = originalImageTag.match(/(\/assets*.*(webp|jpg|png))/g)[0];
    const filePath = path.join(process.cwd(), 'public', source);

    const { width, height } = sizeOf(filePath);

    const newImageTag = originalImageTag.replace(
      closingTag,
      `naturalHeight={${height}} naturalWidth={${width}} ${closingTag}`
    );

    newContent = newContent.replace(originalImageTag, newImageTag);

    content = content.substring(closingIndex);
    processed++;
  }
  fs.writeFileSync(file, newContent, 'utf-8', function (err) {
    if (err) throw err;
    console.log(`Finish add natural dimension ${file}`);
  });
}
// console.log(fileContents.match(/(<(NextImage|FigureImage)*.*\/>)/gm));

// const path = '<NextImage src="/assets/images/tutorials/bot-studio/bse-1.webp" alt="bse-1" />';
// console.log(path.match(/(\/assets*.*(webp|jpg|png))/g));
