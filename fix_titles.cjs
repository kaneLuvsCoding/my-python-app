const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'cyberbook.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Match patterns like: title: "SOME TITLE",\n        content: "SOME TITLE\n\n...
// The title appears at the very start of the content string, followed by \n\n or \n
// We need to handle both single and double quoted titles

let count = 0;

// This regex finds title/content pairs where content starts with the title text
// Pattern: title: "X", followed eventually by content: "X\n
content = content.replace(
  /title:\s*"([^"]+)",\s*\n\s*content:\s*"/g,
  (match, title) => {
    // Check what comes after content: " in the original string
    const matchEnd = content.indexOf(match) + match.length;
    const afterContent = content.substring(matchEnd);
    
    // Check if content starts with the exact title followed by \n\n or \n
    if (afterContent.startsWith(title + '\\n\\n')) {
      count++;
      return match.replace(
        'content: "' + title + '\\n\\n',
        'content: "'
      );
    } else if (afterContent.startsWith(title + '\\n')) {
      count++;
      return match.replace(
        'content: "' + title + '\\n',
        'content: "'
      );
    }
    return match;
  }
);

// Actually, the above approach has issues with indexOf on repeated patterns.
// Let me use a simpler line-by-line approach instead.

// Re-read the file
content = fs.readFileSync(filePath, 'utf-8');
count = 0;

// Split into lines and process
const lines = content.split('\n');
const result = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this line has a title field
  const titleMatch = line.match(/^\s*title:\s*"([^"]+)"/);
  if (titleMatch) {
    const title = titleMatch[1];
    result.push(line);
    
    // Look ahead for the content line
    if (i + 1 < lines.length) {
      const nextLine = lines[i + 1];
      const contentMatch = nextLine.match(/^(\s*content:\s*")(.+)$/);
      if (contentMatch) {
        const prefix = contentMatch[1];
        const contentValue = contentMatch[2];
        
        // Check if content starts with title\n\n or title\n
        const escapedTitle = title;
        if (contentValue.startsWith(escapedTitle + '\\n\\n')) {
          // Remove title + \n\n from start of content
          const newContent = prefix + contentValue.substring(escapedTitle.length + 4); // +4 for \n\n (escaped)
          result.push(newContent);
          count++;
          i++; // Skip the next line since we processed it
          continue;
        } else if (contentValue.startsWith(escapedTitle + '\\n')) {
          // Remove title + \n from start of content  
          const newContent = prefix + contentValue.substring(escapedTitle.length + 2); // +2 for \n (escaped)
          result.push(newContent);
          count++;
          i++; // Skip the next line since we processed it
          continue;
        }
      }
    }
    continue;
  }
  
  result.push(line);
}

const output = result.join('\n');
fs.writeFileSync(filePath, output, 'utf-8');
console.log('Done! Removed ' + count + ' duplicate titles from content fields.');
