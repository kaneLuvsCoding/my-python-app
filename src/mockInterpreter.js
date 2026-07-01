// --- SAFER EVALUATOR ---
const safeEval = (str) => {
  try {
    return Function(`"use strict"; return (${str})`)();
  } catch (e) {
    return "Error: " + e.message;
  }
};

// --- MOCK INTERPRETER ENGINE ---
export const executeMockPython = (rawCode, exercise) => {
  let outputLines = [];
  let vars = {};
  const lines = rawCode.split('\n');
  try {
    lines.forEach(line => {
      let l = line.trim();
      if (!l || l.startsWith('#')) return;

      if (l.startsWith('print(')) {
        let content = l.slice(6, -1).trim();
        if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
          outputLines.push(content.slice(1, -1));
        } else if (content.startsWith('f"') || content.startsWith("f'")) {
          let inner = content.slice(2, -1);
          let res = inner.replace(/\{([^}]+)\}/g, (m, k) => vars[k.trim()] !== undefined ? vars[k.trim()] : m);
          outputLines.push(res);
        } else if (vars[content] !== undefined) {
          outputLines.push(String(vars[content]));
        } else if (content.startsWith('type(')) {
          let val = content.slice(5, -1).trim();
          let target = vars[val] !== undefined ? vars[val] : val;
          if (!isNaN(target)) outputLines.push("<class 'int'>");
          else if (String(target).includes('j')) outputLines.push("<class 'complex'>");
          else outputLines.push("<class 'str'>");
        } else {
          try { outputLines.push(String(safeEval(content))); } catch (e) { outputLines.push(`NameError: name '${content}' is not defined`); }
        }
      } else if (l.includes('=') && !l.includes('==') && !l.includes('if ') && !l.includes('def ')) {
        let [name, val] = l.split('=').map(s => s.trim());
        if (val.startsWith('"') || val.startsWith("'")) vars[name] = val.slice(1, -1);
        else {
          let exp = val;
          Object.keys(vars).forEach(k => { exp = exp.replace(new RegExp(`\\b${k}\\b`, 'g'), vars[k]); });
          vars[name] = safeEval(exp);
        }
      } else if (l.startsWith('def ') || l.startsWith('class ') || l.startsWith('if ') || l.startsWith('for ')) {
        if (!outputLines.includes(">>> [LOG]: Block Sequence Executed.")) outputLines.push(">>> [LOG]: Block Sequence Executed.");
      }
    });
  } catch (e) { outputLines.push(">>> [CORE_ERROR]: Runtime Exception."); }
  const finalOutput = outputLines.join('\n');
  let passed = exercise && exercise.check ? exercise.check(finalOutput, vars) : false;
  return { output: finalOutput || ">>> [SIGNAL_IDLE]", passed };
};
