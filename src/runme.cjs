const fs = require('fs')
const path = require('path')

const src = fs.readFileSync(path.join(__dirname, 'App.jsx'), 'utf-8')

const startTag = 'const CYBER_BOOK = ['
const si = src.indexOf(startTag)
const ai = src.indexOf('[', si)

let d = 0, ae = -1
for (let i = ai; i < src.length; i++) {
  if (src[i] === '[') d++
  if (src[i] === ']') d--
  if (d === 0) { ae = i + 1; break }
}

let arr = src.substring(ai, ae)
arr = arr.replace(/check:\s*\(out\)\s*=>\s*out\.includes\(([^)]+)\)/g, 'check: $1')
arr = arr.replace(/check:\s*\(out,\s*vars\)\s*=>\s*out\.includes\(([^)]+)\)/g, 'check: $1')

const book = (0, eval)(arr)

const result = book.map(p => ({
  id: p.id,
  title: p.title,
  lessons: p.lessons.map(l => ({
    id: l.id,
    title: l.title,
    content: l.content,
    initialCode: l.initialCode,
    exerciseTask: l.exercise ? l.exercise.task : '',
    exerciseCheckKeyword: typeof l.exercise.check === 'string' ? l.exercise.check : l.title,
    quizQuestion: l.quiz ? l.quiz.question : '',
    quizOptions: l.quiz ? l.quiz.options : ['A', 'B', 'C', 'D'],
    quizAnswer: l.quiz ? l.quiz.answer : 0,
    isPlaceholder: l.content.startsWith('[Placeholder]')
  }))
}))

const dd = path.join(__dirname, 'data')
if (!fs.existsSync(dd)) fs.mkdirSync(dd)
fs.writeFileSync(path.join(dd, 'cyberBook.json'), JSON.stringify(result, null, 2))

const cp = [], pp = []
result.forEach(p => {
  const cl = p.lessons.filter(l => !l.isPlaceholder)
  const pl = p.lessons.filter(l => l.isPlaceholder)
  if (cl.length > 0) cp.push({ id: p.id, title: p.title, lessons: cl })
  if (pl.length > 0) pp.push({ id: p.id, title: p.title, lessons: pl })
})

fs.writeFileSync(path.join(dd, 'cyberBookContent.json'), JSON.stringify(cp, null, 2))
fs.writeFileSync(path.join(dd, 'cyberBookPlaceholders.json'), JSON.stringify(pp, null, 2))

console.log('OK ' + result.length + ' parts')
