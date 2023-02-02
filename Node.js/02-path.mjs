import path from 'node:path';

const nodePath = '/Users/romain/.nvm/versions/node/v16.16.0/bin';

console.log(path.isAbsolute(nodePath));

const imagePath = 'logo.png';

console.log(path.extname(imagePath)); // .png
console.log(path.parse(imagePath)); // { root: '', dir: '', base: 'logo.png', ext: '.png', name: 'logo' }

console.log(path.dirname(nodePath));
console.log(path.dirname(path.dirname(nodePath)));

console.log(path.join('uploads', imagePath)); // uploads/logo.png (relatif)
console.log(path.resolve('uploads', imagePath)); // /Users/romain/Desktop/Formation/Node.js/uploads/logo.png (absolu par rapport au CWD)
