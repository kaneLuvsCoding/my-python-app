const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const raw = fs.readFileSync(path.join(dataDir, 'data.json'), 'utf-8');
const output = '// CYBER_BOOK syllabus data\nexport const CYBER_BOOK = [\n' + raw + '\n];\n';
fs.writeFileSync(path.join(dataDir, 'cyberbook.js'), output, 'utf-8');
console.log('Done! cyberbook.js created');
