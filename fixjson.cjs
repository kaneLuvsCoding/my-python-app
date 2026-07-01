const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'data', 'data.json');
const outputPath = path.join(__dirname, '..', 'data', 'data_fixed.json');

let raw = fs.readFileSync(inputPath, 'utf-8');

// Wrap in array brackets
raw = '[' + raw + ']';

// Replace arrow functions in check fields
raw = raw.replace(/check:\s*\(out\)\s*=>\s*out\.includes\(([^)]+)\)/g, function(match, arg) {
  var cleanArg = arg.trim();
  if (cleanArg.startsWith("'") && cleanArg.endsWith("'")) {
    cleanArg = '"' + cleanArg.slice(1, -1) + '"';
  }
  return '"check": ' + cleanArg;
});

raw = raw.replace(/check:\s*\(out,\s*vars\)\s*=>\s*[^}]+/g, function() {
  return '"check": "placeholder"';
});

// Quote all unquoted property keys
raw = raw.replace(/(\s)(\w+)(\s*:)/g, function(m, b, k, c) {
  return b + '"' + k + '"' + c;
});

// Convert single-quoted strings to double-quoted
var result = '';
var inDQ = false;
var inSQ = false;
var prev = '';

for (var i = 0; i < raw.length; i++) {
  var ch = raw[i];
  if (ch === '"' && prev !== '\\' && !inSQ) {
    inDQ = !inDQ;
    result += ch;
  } else if (ch === "'" && prev !== '\\' && !inDQ) {
    if (!inSQ) { inSQ = true; result += '"'; }
    else { inSQ = false; result += '"'; }
  } else {
    result += ch;
  }
  prev = ch;
}

try {
  var parsed = JSON.parse(result);
  fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2), 'utf-8');
  console.log('SUCCESS');
  console.log('Modules: ' + parsed.length);
} catch (e) {
  console.error('FAIL: ' + e.message);
  fs.writeFileSync(outputPath + '.debug', result.substring(0, 5000), 'utf-8');
}
