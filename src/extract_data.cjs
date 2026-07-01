/**
 * Script to extract CYBER_BOOK data from App.jsx into separate files.
 * 
 * Run with: npm run extract-data
 * 
 * Creates:
 *   src/data/cyberBook.json         - All lessons (serializable data only)
 *   src/data/cyberBookContent.json   - Lessons with real content
 *   src/data/cyberBookPlaceholders.json - Lessons with placeholder content
 */

const fs = require('fs')
const path = require('path')

const appPath = path.join(__dirname, 'App.jsx')
const src = fs.readFileSync(appPath, 'utf-8')

// Find the CYBER_BOOK array boundaries
const marker = 'const CYBER_BOOK = ['
const si = src.indexOf(marker)
const ai = src.indexOf('[', si)

let d = 0
let ae = -1
for (let i = ai; i < src.length; i++) {
  if (src[i] === '[') d++
  if (src[i] === ']') d--
  if (d === 0) { ae = i + 1; break }
}

let arr = src.substring(ai, ae)

// Replace check arrow functions with the keyword string they match
arr = arr.replace(
  /check:\s*\(out\)\s*=>\s*out\.includes\(([^)]+)\)/g,
  'check: $1'
)
arr = arr.replace(
  /check:\s*\(out,\s*vars\)\s*=>\s*out\.includes\(([^)]+)\)/g,
  'check: $1'
)

// Evaluate the sanitized array
let book
try {
  book = (new Function('return ' + arr))()
} catch (e) {
  console.error('Failed to parse:', e.message)
  process.exit(1)
}

// Transform to serializable JSON structure
const result = book.map(p => ({
  id: p.id,
  title: p.title,
  lessons: p.lessons.map(l => ({
    id: l.id,
    title: l.title,
    content: l.content,
    initialCode: l.initialCode,
    exerciseTask: l.exercise ? l.exercise.task : '',
    exerciseCheckKeyword: typeof l.exercise.check === 'string'
      ? l.exercise.check
      : l.title,
    quizQuestion: l.quiz ? l.quiz.question : '',
    quizOptions: l.quiz ? l.quiz.options : ['A', 'B', 'C', 'D'],
    quizAnswer: l.quiz ? l.quiz.answer : 0,
    isPlaceholder: l.content.startsWith('[Placeholder]')
  }))
}))

// Ensure data directory exists
const dd = path.join(__dirname, 'data')
if (!fs.existsSync(dd)) fs.mkdirSync(dd)

// Write complete data
fs.writeFileSync(
  path.join(dd, 'cyberBook.json'),
  JSON.stringify(result, null, 2)
)

// Split into content vs placeholders
const cp = []
const pp = []
result.forEach(p => {
  const cl = p.lessons.filter(l => !l.isPlaceholder)
  const pl = p.lessons.filter(l => l.isPlaceholder)
  if (cl.length > 0) cp.push({ id: p.id, title: p.title, lessons: cl })
  if (pl.length > 0) pp.push({ id: p.id, title: p.title, lessons: pl })
})

fs.writeFileSync(
  path.join(dd, 'cyberBookContent.json'),
  JSON.stringify(cp, null, 2)
)
fs.writeFileSync(
  path.join(dd, 'cyberBookPlaceholders.json'),
  JSON.stringify(pp, null, 2)
)

const total = result.reduce((s, p) => s + p.lessons.length, 0)
const contentCount = cp.reduce((s, p) => s + p.lessons.length, 0)
const placeholderCount = pp.reduce((s, p) => s + p.lessons.length, 0)

console.log('Extraction complete!')
console.log('  cyberBook.json: ' + result.length + ' parts, ' + total + ' lessons')
console.log('  cyberBookContent.json: ' + cp.length + ' parts, ' + contentCount + ' lessons')
console.log('  cyberBookPlaceholders.json: ' + pp.length + ' parts, ' + placeholderCount + ' lessons')
