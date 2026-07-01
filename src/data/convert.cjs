const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'data.json');
const outputPath = path.join(__dirname, 'data_fixed.json');

let raw = fs.readFileSync(inputPath, 'utf-8');

// Wrap in array brackets if not already
raw = '[' + raw + ']';

// The data uses JS object syntax. We need to eval it safely.
// Replace arrow function expressions in exercise.check with a placeholder string
// Pattern: check: (out) => out.includes("...") or check: (out) => out.includes('...')
raw = raw.replace(/check:\s*\(out\)\s*=>\s*out\.includes\(([^)]+)\)/g, (match, arg) => {
  // Convert the arg to a proper JSON string
  let cleanArg = arg.trim();
  // If wrapped in single quotes, convert to double
  if (cleanArg.startsWith("'") && cleanArg.endsWith("'")) {
    cleanArg = '"' + cleanArg.slice(1, -1) + '"';
  }
  return '"check": ' + cleanArg;
});

// Also handle check: (out, vars) => patterns
raw = raw.replace(/check:\s*\(out,\s*vars\)\s*=>\s*[^}]+/g, (match) => {
  return '"check": "placeholder"';
});

// Convert unquoted keys to quoted keys
// Match key: at the start of a property (after newline+whitespace, or after { or ,)
raw = raw.replace(/(\s)(\w+)(\s*:)/g, (match, before, key, colon) => {
  // Don't double-quote if already quoted
  return before + '"' + key + '"' + colon;
});

// Replace single-quoted strings with double-quoted strings
// This is tricky because content may contain single quotes inside double-quoted strings
// We'll do a character-by-character approach for single-quote to double-quote conversion
let result = '';
let inDoubleQuote = false;
let inSingleQuote = false;
let prevChar = '';

for (let i = 0; i < raw.length; i++) {
  const ch = raw[i];
  
  if (ch === '"' && prevChar !== '\\' && !inSingleQuote) {
    inDoubleQuote = !inDoubleQuote;
    result += ch;
  } else if (ch === "'" && prevChar !== '\\' && !inDoubleQuote) {
    if (!inSingleQuote) {
      inSingleQuote = true;
      result += '"'; // Replace opening single quote with double quote
    } else {
      inSingleQuote = false;
      result += '"'; // Replace closing single quote with double quote
    }
  } else {
    result += ch;
  }
  
  prevChar = ch;
}

// Try to parse and re-serialize as proper JSON
try {
  // Use a relaxed JSON parser approach - eval with safety
  // Actually let's just try JSON.parse first
  const parsed = JSON.parse(result);
  fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2), 'utf-8');
  console.log('SUCCESS: Written to', outputPath);
  console.log('Array length:', parsed.length);
  console.log('First module:', parsed[0].title);
  console.log('Last module:', parsed[parsed.length - 1].title);
} catch (e) {
  console.error('JSON.parse failed:', e.message);
  // Find the position of the error
  const pos = parseInt(e.message.match(/position (\d+)/)?.[1] || '0');
  if (pos > 0) {
    console.error('Context around error:');
    console.error(result.substring(Math.max(0, pos - 100), pos + 100));
  }
  // Write the intermediate result for debugging
  fs.writeFileSync(outputPath + '.debug', result, 'utf-8');
  console.log('Debug file written to', outputPath + '.debug');
}
