const fs = require('fs');
const path = require('path');

const appDir = process.env.USERPROFILE + '/Desktop/my-python-app';
const content = fs.readFileSync(path.join(appDir, 'src', 'App.jsx'), 'utf8');

const startIdx = content.indexOf('const CYBER_BOOK = [');
const arrayStart = content.indexOf('[', startIdx);

let depth = 0;
let endIdx = -1;
for (let i = arrayStart; i < content.length; i++) {
  if (content[i] === '[') depth++;
  else if (content[i] === ']') {
    depth--;
    if (depth === 0) {
      endIdx = i + 1;
      break;
    }
  }
}

const rawArray = content.substring(arrayStart, endIdx);

let processedArray = rawArray
  .replace(/check:\s*\(out(?:,\s*vars)?\)\s*=>\s*[^}]+/g, 'check: null');

const data = Function('return ' + processedArray)();

const jsonData = data.map(part => ({
  id: part.id,
  title: part.title,
  lessons: part.lessons.map(lesson => ({
    id: lesson.id,
    title: lesson.title,
    content: lesson.content,
    initialCode: lesson.initialCode,
    exercise: { task: lesson.exercise.task },
    quiz: {
      question: lesson.quiz.question,
      options: lesson.quiz.options,
      answer: lesson.quiz.answer,
    }
  }))
}));

const dataDir = path.join(appDir, 'src', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

fs.writeFileSync(
  path.join(dataDir, 'cyberBook.json'),
  JSON.stringify(jsonData, null, 2),
  'utf8'
);

console.log('Extracted ' + jsonData.length + ' parts, ' + jsonData.reduce((a, p) => a + p.lessons.length, 0) + ' lessons');
