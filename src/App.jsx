import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal, Shield, Lock, Cpu, Layers, CheckCircle, ChevronRight, Menu, X,
  Play, Award, Book, Database, Globe, BarChart, Zap, Eye, Ghost, Activity, Info, Search, Code, AlertTriangle, Box, Server, TrendingUp, Key
} from 'lucide-react';

// --- SAFER EVALUATOR ---
const safeEval = (str) => {
  try {
    return Function(`"use strict"; return (${str})`)();
  } catch (e) {
    return "Error: " + e.message;
  }
};

// --- MOCK INTERPRETER ENGINE ---
const executeMockPython = (rawCode, exercise) => {
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

// --- DATA: HIGH-DETAIL VERBATIM SYLLABUS ---
const CYBER_BOOK = [
  {
    id: 'p1',
    title: "Python Standard Input and Output",
    lessons: [
      {
        id: 'l1-1',
        title: "Python Standard Input and Output",
        content: "Python programming \u1010\u103d\u1004\u103a built-in functions \u1019\u103b\u102c\u1038\u1005\u103d\u102c\u1015\u102b\u101d\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b standard input \u1021\u1014\u1031\u1016\u103c\u1004\u1037\u103a input( ) function \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u103c\u102e\u1038 standard output \u1021\u1014\u1031\u1016\u103c\u1004\u1037\u103a print( ) \u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b\u1010\u101a\u103a\u104b\n\nformat function \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u103c\u102e\u1038\u1010\u1031\u102c\u1037\u101c\u100a\u103a\u1038 format (\u1015\u102f\u1036\u1005\u1036\u1010\u1000\u103b) \u1016\u103c\u1004\u1037\u103a print \u1011\u102f\u1010\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b format function \u1000\u102d\u102f\u101e\u102f\u1036\u1038\u101b\u102c\u1010\u103d\u1004\u103a data \u1019\u103b\u102c\u1038\u1000\u102d\u102f\u1016\u1031\u102c\u103a\u1015\u103c\u1016\u102d\u102f\u1037\u1021\u1010\u103d\u1000\u103a curly bracket { } \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b\u1010\u101a\u103a\u104b format function \u1000\u102d\u102f\u101e\u102f\u1036\u1038\u101b\u102c\u1010\u103d\u1004\u103a format \u101b\u103e\u1031\u1037\u104c dot (.) \u1000\u102d\u102f\u101b\u1031\u1038\u1015\u1031\u1038\u101b\u1019\u100a\u103a\u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 format function \u1011\u1032\u1019\u103e\u102c\u101c\u100a\u103a\u1038 \u1019\u102d\u1019\u102d\u1016\u1031\u102c\u103a\u1015\u103c\u1001\u103b\u1004\u103a\u101e\u1031\u102c data \u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1021\u1005\u1009\u103a\u101c\u102d\u102f\u1000\u103a comma (,) \u1001\u103c\u102c\u1038\u1015\u103c\u102e\u1038 \u101b\u1031\u1038\u101e\u102c\u1038\u1015\u1031\u1038\u101b\u1019\u100a\u103a \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b app.py \u1011\u1032\u1010\u103d\u1004\u103a\u1021\u1031\u102c\u1000\u103a\u1015\u102b program \u1000\u102d\u102f\u101b\u1031\u1038\u101e\u102c\u1038\u1011\u102c\u1038\u1019\u100a\u103a\u1016\u103c\u1005\u103a \u1015\u102b\u101e\u100a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (1)\n\na = 10; b = 5;\nprint('The value of a is {} and b is {}'.format(a,b))\n\n#output\n#The value of a is 10 and b is 5\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b program (1) \u1000\u102d\u102f\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b .format( ) \u1011\u1032\u1010\u103d\u1004\u103a a \u1014\u103e\u1004\u1037\u103a b \u1000\u102d\u102f\u101b\u1031\u1038\u101e\u102c\u1038\u1011\u102c\u1038\u1015\u103c\u102e\u1038 \u104e\u1004\u103a\u1038 a \u1014\u103e\u1004\u1037\u103a b \u104f \u1010\u1014\u103a\u1016\u102d\u102f\u1038\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u101c\u102d\u102f\u1001\u103b\u1004\u103a\u1010\u101a\u103a\u1006\u102d\u102f\u101b\u1004\u103a curly bracket { } \u1016\u103c\u1004\u1037\u103a\u1011\u102f\u1010\u103a\u1015\u1031\u1038\u101b\u1015\u102b\u1010\u101a\u103a\u104b \u1000\u103b\u103d\u1014\u103a\u1010\u1031\u102c\u103a\u1010\u102d\u102f\u1037 \u101b\u1031\u1038\u101e\u102c\u1038\u1011\u102c\u1038\u101e\u1031\u102c program \u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a curly bracket { } \u1014\u103e\u1005\u103a\u1001\u102f\u1015\u102b\u101d\u1004\u103a\u1015\u103c\u102e\u1038 first curly bracket { } \u101e\u100a\u103a .format( ) function \u1021\u1010\u103d\u1004\u103a\u1038\u101b\u103e\u102d first element \u1016\u103c\u1005\u103a\u101e\u1031\u102c a \u1000\u102d\u102f\u101b\u100a\u103a\u100a\u103d\u103e\u1014\u103a\u1038\u1015\u103c\u102e\u1038 second curly bracket {} \u101e\u100a\u103a second element \u1016\u103c\u1005\u103a\u101e\u1031\u102c b \u1000\u102d\u102f \u101b\u100a\u103a\u100a\u103d\u103e\u1014\u103a\u1038\u1015\u102b\u1010\u101a\u103a\u104b program \u1000\u102d\u102f run \u101c\u103b\u103e\u1004\u103a output \u1021\u1014\u1031\u1016\u103c\u1004\u1037\u103a The value of a is 10 and b is 5 \u1006\u102d\u102f\u1010\u102c\u1000\u102d\u102f \u1019\u103c\u1004\u103a\u1010\u103d\u1031\u1037\u101b\u1019\u103e\u102c \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b C programming \u1010\u103d\u1004\u103a\u1019\u1030 integer \u1019\u103b\u102c\u1038\u1021\u1010\u103d\u1000\u103a \u1011\u102d\u102f\u1000\u1032\u1037\u101e\u102d\u102f\u1037\u101e\u1031\u102c \u1005\u102c\u101e\u102c\u1038\u1019\u103b\u102c\u1038\u1000\u103c\u102c\u1038\u1010\u103d\u1004\u103a \u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u101e\u100a\u1037\u103a\u1021\u1001\u102b\u1019\u103b\u102d\u102f\u1038\u104c %d \u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b\u1010\u101a\u103a\u104b\n\nFormat function \u1000\u102d\u102f\u1021\u1001\u103c\u102c\u1038\u101e\u1031\u102c \u1014\u100a\u103a\u1038\u101c\u1019\u103a\u1038\u1016\u103c\u1004\u1037\u103a\u101c\u100a\u103a\u1038 \u1011\u1015\u103a\u1019\u1036\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u101e\u1031\u1038\u1010\u101a\u103a\u104b .format( ) function \u1021\u1010\u103d\u1004\u103a\u1038\u101b\u1031\u1038\u101e\u102c\u1038\u1011\u102c\u1038\u101e\u1031\u102c element \u1019\u103b\u102c\u1038\u101e\u100a\u103a index 0 \u1019\u103e\u1005\u1010\u1004\u103a\u1015\u103c\u102e\u1038 \u1021\u1005\u1009\u103a\u101c\u102d\u102f\u1000\u103a \u1014\u1031\u101b\u102c\u101a\u1030\u1015\u102b\u1010\u101a\u103a\u104b \u1011\u102d\u102f\u101e\u102d\u102f\u1037 \u1021\u1005\u1009\u103a\u101c\u102d\u102f\u1000\u103a\u1014\u1031\u101b\u102c\u101a\u1030\u1011\u102c\u1038\u101e\u1031\u102c element \u1019\u103b\u102c\u1038\u1000\u102d\u102f print \u1011\u102f\u1010\u103a\u101e\u1031\u102c\u1021\u1001\u102b\u1010\u103d\u1004\u103a \u1019\u102d\u1019\u102d\u101c\u102d\u102f\u101e\u101c\u102d\u102f index number \u1019\u103b\u102c\u1038\u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u104d element \u1019\u103b\u102c\u1038\u1000\u102d\u102f \u101b\u103e\u1031\u1037\u1014\u1031\u102c\u1000\u103a \u1015\u103c\u1031\u102c\u1004\u103a\u1038\u101c\u1032\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b \u101b\u103e\u1031\u1037\u1006\u102f\u1036\u1038 element \u1000\u102d\u102f\u1015\u1031\u102b\u103a\u1005\u1031\u1001\u103b\u1004\u103a\u101e\u1031\u102c \u1021\u1001\u102b\u1019\u103b\u102d\u102f\u1038\u1010\u103d\u1004\u103a curly bracket { } \u1021\u1010\u103d\u1004\u103a\u1038\u104c { 0 } \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b\u1010\u101a\u103a\u104b \u1011\u102d\u102f\u1014\u100a\u103a\u1038\u1010\u1030 \u1012\u102f\u1010\u102d\u101a element \u1000\u102d\u102f\u1015\u1031\u102b\u103a\u1005\u1031\u1001\u103b\u1004\u103a\u101e\u1031\u102c \u1021\u1001\u102b\u1019\u103b\u102d\u102f\u1038\u104c\u101c\u100a\u103a\u1038 { 1 } \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b\u1010\u101a\u103a\u104b \u1021\u1031\u102c\u1000\u103a\u1010\u103d\u1004\u103a sample program (2) \u1000\u102d\u102f output \u1014\u103e\u1004\u1037\u103a\u1010\u1000\u103d \u1016\u1031\u102c\u103a\u1015\u103c\u1011\u102c\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (2)\napp.py\n\nprint('hello {2} {3} from {0} {1} '.format('green','hackers','win','htut'));\n\n#output\n#hello win htut from green hackers\n</CODE_BLOCK>\n\n\u1011\u102d\u102f\u1037\u1015\u103c\u1004\u103a format function \u1000\u102d\u102f\u101e\u102f\u1036\u1038\u1015\u103c\u102e\u1038 string \u1019\u103b\u102c\u1038\u1000\u102d\u102f print \u1011\u102f\u1010\u103a\u101b\u102c\u1010\u103d\u1004\u103a\u101c\u100a\u103a\u1038 keyword arguments \u1019\u103b\u102c\u1038\u1000\u102d\u102f\u101c\u100a\u103a\u1038\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u101e\u1031\u1038\u1010\u101a\u103a\u104b sample program (3) \u1000\u102d\u102f output \u1014\u103e\u1004\u1037\u103a\u1010\u1000\u103d \u1021\u1031\u102c\u1000\u103a\u1010\u103d\u1004\u103a \u1016\u1031\u102c\u103a\u1015\u103c\u1011\u102c\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (3)\n\nprint('Hello {name} team {gh}'.format(name='Win Htut', gh='Green Hackers'))\n\n#output\n#Hello Win Htut team Green Hackers\n</CODE_BLOCK>\n\nPython \u1010\u103d\u1004\u103a \u1012\u101e\u1019\u1000\u102d\u1014\u103a\u1038\u1019\u103b\u102c\u1038\u1000\u102d\u102f print \u1011\u102f\u1010\u103a\u101b\u102c\u104c % operator \u1000\u102d\u102f\u101e\u102f\u1036\u1038\u1015\u103c\u102e\u1038 \u1019\u102d\u1019\u102d\u1010\u102d\u102f\u1037 \u101c\u102d\u102f\u1021\u1015\u103a\u101e\u101c\u102d\u102f control \u101c\u102f\u1015\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u101e\u1031\u1038\u1010\u101a\u103a\u104b \u1012\u101e\u1019\u1014\u103e\u1005\u103a\u1014\u1031\u101b\u102c\u1011\u102d print \u101c\u102f\u1015\u103a\u1001\u103b\u1004\u103a\u101e\u1031\u102c\u1021\u1001\u102b\u1010\u103d\u1004\u103a %.2f \u101f\u102f\u101b\u1031\u1038\u101e\u102c\u1038\u101b\u1015\u103c\u102e\u1038 3 \u1014\u1031\u101b\u102c\u1011\u102d print \u1011\u102f\u1010\u103a\u1001\u103b\u1004\u103a\u101e\u1031\u102c\u1021\u1001\u102b\u1010\u103d\u1004\u103a\u1019\u1030 %.3f \u101f\u102f\u101b\u1031\u1038\u101e\u102c\u1038\u101b\u1015\u102b\u1010\u101a\u103a\u104b sample program (4) \u1000\u102d\u102f output \u1014\u103e\u1004\u1037\u103a\u1010\u1000\u103d \u1021\u1031\u102c\u1000\u103a\u1010\u103d\u1004\u103a \u1016\u1031\u102c\u103a\u1015\u103c\u1011\u102c\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (4)\n\na = 10.12345\nprint('the value of a is %.3f '%a)\n\n#output\n#the value of a is 10.123\n\nprint('the value of a is %.2f '%a)\n\n#output\n#the value of a is 10.12\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b program (4) \u1010\u103d\u1004\u103a a \u1021\u1010\u103d\u1004\u103a\u1038\u101b\u103e\u102d value \u1000\u102d\u102f % operator \u1016\u103c\u1004\u1037\u103a control \u101c\u102f\u1015\u103a\u1019\u100a\u103a \u1016\u103c\u1005\u103a\u101e\u100a\u1037\u103a\u1021\u1010\u103d\u1000\u103a print( ) function \u1021\u1010\u103d\u1004\u103a\u1038\u101b\u103e\u102d single quote \u1021\u1015\u102d\u1010\u103a\u104f \u1014\u1031\u102c\u1000\u103a\u1010\u103d\u1004\u103a % sign \u1016\u103c\u1004\u1037\u103a a \u1000\u102d\u102f \u101b\u1031\u1038\u101e\u102c\u1038\u1015\u1031\u1038\u101b\u1019\u100a\u103a\u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 \u1005\u102c\u101e\u102c\u1038\u1021\u1010\u103d\u1004\u103a\u1038 \u1015\u1031\u102b\u103a\u1001\u103b\u1004\u103a\u101e\u100a\u1037\u103a\u1014\u1031\u101b\u102c\u1010\u103d\u1004\u103a %.3f \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a %.2f \u1021\u1005\u101b\u103e\u102d\u101e\u1016\u103c\u1004\u1037\u103a \u101b\u1031\u1038\u101e\u102c\u1038\u1015\u1031\u1038\u101b\u1019\u100a\u103a \u1016\u103c\u1005\u103a\u1010\u101a\u103a\u104b",
        initialCode: "a = 10; b = 5;\nprint('The value of a is {} and b is {}'.format(a,b))\nprint('hello {2} {3} from {0} {1} '.format('green','hackers','win','htut'))\nprint('Hello {name} team {gh}'.format(name='Win Htut', gh='Green Hackers'))\na = 10.12345\nprint('the value of a is %.3f '%a)\nprint('the value of a is %.2f '%a)",
        exercise: { task: "[Placeholder Task] Try writing code for Python Standard Input and Output", check: (out) => out.includes("Python Standard Input and Output") },
        quiz: { question: "[Placeholder Quiz] What does Python Standard Input and Output do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-2',
        title: "Standard Input in Python Programming",
        content: "Standard input \u1006\u102d\u102f\u1010\u102c user \u1006\u102e\u1019\u103e \u1011\u100a\u1037\u103a\u1015\u1031\u1038\u101c\u102d\u102f\u1000\u103a\u101e\u1031\u102c \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a program \u1011\u1032\u101e\u102d\u102f\u1037 \u101d\u1004\u103a\u101c\u102c \u101e\u1031\u102c data or elements \u1019\u103b\u102c\u1038\u1000\u102d\u102f input \u101c\u102d\u102f\u1037\u1001\u1031\u102b\u103a\u1015\u102b\u1010\u101a\u103a\u104b keyboard and mouse \u1010\u102d\u102f\u1037\u101e\u100a\u103a input \u1019\u103b\u102c\u1038\u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 monitor, soundbox and etc \u1010\u102d\u102f\u1037\u101e\u100a\u103a output \u1019\u103b\u102c\u1038\u1016\u103c\u1005\u103a\u1000\u103c\u1015\u102b\u1010\u101a\u103a\u104b Python programming \u1010\u103d\u1004\u103a user \u1006\u102e\u1019\u103e input \u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1016\u1010\u103a\u101b\u1014\u103a input( ) function \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b Python programming \u101e\u100a\u103a \u1021\u101b\u1019\u103a\u1038\u101b\u102d\u102f\u1038\u101b\u103e\u1004\u103a\u1038\u101e\u1000\u1032\u1037\u101e\u102d\u102f\u1037 input \u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1016\u1010\u103a\u101b\u102c\u1010\u103d\u1004\u103a\u101c\u100a\u103a\u1038 \u1021\u101b\u1019\u103a\u1038\u1000\u102d\u102f \u101c\u103d\u101a\u103a\u1000\u1030\u1015\u102b\u1010\u101a\u103a\u104b input sample program \u1000\u102d\u102f output \u1014\u103e\u1004\u1037\u103a\u1010\u1000\u103d \u1021\u1031\u102c\u1000\u103a\u1010\u103d\u1004\u103a \u1016\u1031\u102c\u103a\u1015\u103c\u1011\u102c\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>\nSample program (5)\n\ndata = input('enter some data :')\nprint('user input data is :',data)\n\n#output\n#enter some data :hello\n#user input data is : hello\n</CODE_BLOCK>",
        initialCode: "# Mocking input for this sandbox env\ndef input(prompt):\n    print(prompt, end=\"\")\n    return \"hello\"\n\ndata = input('enter some data :')\nprint('user input data is :',data)",
        exercise: { task: "[Placeholder Task] Try writing code for Standard Input in Python Programming", check: (out) => out.includes("Standard Input in Python Programming") },
        quiz: { question: "[Placeholder Quiz] What does Standard Input in Python Programming do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-3',
        title: "Standard Data Type",
        content: "Standard Data Type\n\nPython programming \u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a standard data type \u1021\u1014\u1031\u1014\u1032\u1037 6 \u1019\u103b\u102d\u102f\u1038\u101b\u103e\u102d\u1015\u102b\u1010\u101a\u103a\u104b\n\n    Numbers\n    String\n    List\n    Tuple\n    Dictionary\n    Set",
        initialCode: "# Placeholder Code for Standard Data Type\\nprint('Standard Data Type')",
        exercise: { task: "[Placeholder Task] Try writing code for Standard Data Type", check: (out) => out.includes("Standard Data Type") },
        quiz: { question: "[Placeholder Quiz] What does Standard Data Type do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-4',
        title: "Numbers in Python",
        content: "Numbers in Python\n\nNumber data type \u1010\u103d\u1031\u1006\u102d\u102f\u1010\u102c numeric values \u1010\u103d\u1031\u1000\u102d\u102f \u101e\u102d\u102f\u101c\u103e\u1031\u102c\u1004\u103a\u1016\u102d\u102f\u1037\u1021\u1010\u103d\u1000\u103a \u101e\u102f\u1036\u1038\u1015\u102b\u1010\u101a\u103a\u104b value \u1010\u1005\u103a\u1001\u102f assign \u101e\u1010\u103a\u1019\u103e\u1010\u103a\u1015\u1031\u1038\u101c\u102d\u102f\u1000\u103a\u1010\u102c\u1014\u1032\u1037 number objects \u1000\u102d\u102f \u1015\u103c\u102f\u101c\u102f\u1015\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\nFor example:\n<CODE_BLOCK>\nvar1 = 1\nvar2 = 2\n</CODE_BLOCK>\n\ndel \u1006\u102d\u102f\u1010\u1032\u1037 statement \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u103c\u102e\u1038 number objects \u1010\u103d\u1031\u1000\u102d\u102f \u1016\u103c\u1010\u103a\u1011\u102f\u1010\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\nFor example:\n<CODE_BLOCK>\ndel var1\n</CODE_BLOCK>\n\ndel \u1006\u102d\u102f\u1010\u102c\u1000\u102d\u102f\u101e\u102f\u1036\u1038\u1015\u103c\u102e\u1038 single object \u1010\u1005\u103a\u1001\u102f\u1010\u100a\u103a\u1038\u1010\u1004\u103a\u1019\u1000\u1015\u1032 multiple objects \u1010\u103d\u1031\u1000\u102d\u102f\u1015\u102b \u1016\u103c\u1010\u103a\u1011\u102f\u1010\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u101e\u1031\u1038\u1010\u101a\u103a\u104b\n\nFor example:\n<CODE_BLOCK>\ndel var1, var2, var3, var4\n</CODE_BLOCK>\n\nPython programming language \u1019\u103e\u102c number data type \u1000\u102d\u102f numerical type \u1021\u1014\u1031\u1014\u1032\u1037 \u1021\u1031\u102c\u1000\u103a\u1015\u102b\u1021\u1010\u102d\u102f\u1004\u103a\u1038 support \u1015\u1031\u1038\u1011\u102c\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n    int ( single integer )\n    float ( floating point real values )\n    complex ( complex )\n    booleans\n\nint \u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a long integers \u1021\u1014\u1031\u1014\u1032\u1037 \u1000\u102d\u102f\u101a\u103a\u1005\u102c\u1038\u1015\u103c\u102f\u1015\u102b\u1010\u101a\u103a\u104b \u1006\u102d\u102f\u101c\u102d\u102f\u1001\u103b\u1004\u103a\u1010\u102c\u1000 python \u1019\u103e\u102c integer \u1010\u103d\u1031\u1021\u102c\u1038\u101c\u102f\u1036\u1038\u101e\u100a\u103a long \u1010\u103d\u1031\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b Float \u1006\u102d\u102f\u1010\u102c\u1000\u1010\u1031\u102c\u1037 \u1012\u101e\u1019\u1000\u102d\u1014\u103a\u1038\u1010\u103d\u1031\u1000\u102d\u102f \u1006\u102d\u102f\u101c\u102d\u102f\u1010\u102c\u1015\u102b\u104b\n\n| int      | float      | complex        |\n|----------|------------|----------------|\n| 10       | 0.0        | 3.14j          |\n| 100      | 15.20      | 45.j           |\n| -786     | -21.9      | 9.322e-36j     |\n| 80       | 32.3+e18   | .876j          |\n| -490     | -90.       | -.6545+0j      |\n| -0*260   | -32.54e100 | 3e+26j         |\n| 0*69     | 70.2-E12   | 4.53e-7j       |",
        initialCode: "var1 = 1\nvar2 = 2\nprint(var1, var2)\ndel var1\ntry:\n    print(var1)\nexcept NameError:\n    print(\"var1 deleted\")",
        exercise: { task: "[Placeholder Task] Try writing code for Numbers in Python", check: (out) => out.includes("Numbers in Python") },
        quiz: { question: "[Placeholder Quiz] What does Numbers in Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-5',
        title: "Complex numbers",
        content: "Complex numbers\n\nComplex numbers \u1010\u103d\u1031\u1006\u102d\u102f\u1010\u102c real number \u1014\u103e\u1004\u1037\u103a imaginary number \u1015\u102b\u101d\u1004\u103a\u1010\u102c\u1000\u102d\u102f \u1006\u102d\u102f\u101c\u102d\u102f\u1010\u102c\u1015\u102b\u104b\n\nFor example:\n<CODE_BLOCK>\nBj\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b \u1016\u1031\u102c\u103a\u1015\u103c\u1001\u103b\u1000\u103a\u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a B \u101e\u100a\u103a real number \u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 j \u101e\u100a\u103a imaginary number \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b j \u101e\u100a\u103a square root of -1 \u1014\u103e\u1004\u1037\u103a \u1021\u1010\u1030\u1010\u1030\u1015\u1004\u103a \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\nFor example:\n<CODE_BLOCK>\n3+7j\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b \u1016\u1031\u102c\u103a\u1015\u103c\u1001\u103b\u1000\u103a\u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a 3 \u101e\u100a\u103a real part \u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 7j \u101e\u100a\u103a imaginary part \u1016\u103c\u1005\u103a\u1015\u102b\u101e\u100a\u103a\u104b \u1011\u102d\u102f\u1037\u1000\u103c\u1031\u102c\u1004\u1037\u103a 3+7j \u1000\u102d\u102f complex number \u101f\u102f\u1001\u1031\u102b\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\nReal number + imaginary number = complex number",
        initialCode: "c = 3 + 7j\nprint('Complex Number:', c)\nprint('Real Part:', c.real)\nprint('Imaginary Part:', c.imag)",
        exercise: { task: "[Placeholder Task] Try writing code for Complex numbers", check: (out) => out.includes("Complex numbers") },
        quiz: { question: "[Placeholder Quiz] What does Complex numbers do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-6',
        title: "Booleans",
        content: "[Placeholder] Content for Booleans",
        initialCode: "# Placeholder Code for Booleans\\nprint('Booleans')",
        exercise: { task: "[Placeholder Task] Try writing code for Booleans", check: (out) => out.includes("Booleans") },
        quiz: { question: "[Placeholder Quiz] What does Booleans do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-7',
        title: "Type Conversion",
        content: "[Placeholder] Content for Type Conversion",
        initialCode: "# Placeholder Code for Type Conversion\\nprint('Type Conversion')",
        exercise: { task: "[Placeholder Task] Try writing code for Type Conversion", check: (out) => out.includes("Type Conversion") },
        quiz: { question: "[Placeholder Quiz] What does Type Conversion do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-8',
        title: "Implicit Type Conversion or coercion",
        content: "[Placeholder] Content for Implicit Type Conversion or coercion",
        initialCode: "# Placeholder Code for Implicit Type Conversion or coercion\\nprint('Implicit Type Conversion or coercion')",
        exercise: { task: "[Placeholder Task] Try writing code for Implicit Type Conversion or coercion", check: (out) => out.includes("Implicit Type Conversion or coercion") },
        quiz: { question: "[Placeholder Quiz] What does Implicit Type Conversion or coercion do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-9',
        title: "Explicit Type Conversion",
        content: "[Placeholder] Content for Explicit Type Conversion",
        initialCode: "# Placeholder Code for Explicit Type Conversion\\nprint('Explicit Type Conversion')",
        exercise: { task: "[Placeholder Task] Try writing code for Explicit Type Conversion", check: (out) => out.includes("Explicit Type Conversion") },
        quiz: { question: "[Placeholder Quiz] What does Explicit Type Conversion do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-10',
        title: "Data type conversion with string",
        content: "[Placeholder] Content for Data type conversion with string",
        initialCode: "# Placeholder Code for Data type conversion with string\\nprint('Data type conversion with string')",
        exercise: { task: "[Placeholder Task] Try writing code for Data type conversion with string", check: (out) => out.includes("Data type conversion with string") },
        quiz: { question: "[Placeholder Quiz] What does Data type conversion with string do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-11',
        title: "String in Python",
        content: "[Placeholder] Content for String in Python",
        initialCode: "# Placeholder Code for String in Python\\nprint('String in Python')",
        exercise: { task: "[Placeholder Task] Try writing code for String in Python", check: (out) => out.includes("String in Python") },
        quiz: { question: "[Placeholder Quiz] What does String in Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-12',
        title: "Accessing the Character using Slice operator",
        content: "[Placeholder] Content for Accessing the Character using Slice operator",
        initialCode: "# Placeholder Code for Accessing the Character using Slice operator\\nprint('Accessing the Character using Slice operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Accessing the Character using Slice operator", check: (out) => out.includes("Accessing the Character using Slice operator") },
        quiz: { question: "[Placeholder Quiz] What does Accessing the Character using Slice operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-13',
        title: "upper()",
        content: "[Placeholder] Content for upper()",
        initialCode: "# Placeholder Code for upper()\\nprint('upper()')",
        exercise: { task: "[Placeholder Task] Try writing code for upper()", check: (out) => out.includes("upper()") },
        quiz: { question: "[Placeholder Quiz] What does upper() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-14',
        title: "lower()",
        content: "[Placeholder] Content for lower()",
        initialCode: "# Placeholder Code for lower()\\nprint('lower()')",
        exercise: { task: "[Placeholder Task] Try writing code for lower()", check: (out) => out.includes("lower()") },
        quiz: { question: "[Placeholder Quiz] What does lower() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-15',
        title: "isupper()",
        content: "[Placeholder] Content for isupper()",
        initialCode: "# Placeholder Code for isupper()\\nprint('isupper()')",
        exercise: { task: "[Placeholder Task] Try writing code for isupper()", check: (out) => out.includes("isupper()") },
        quiz: { question: "[Placeholder Quiz] What does isupper() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-16',
        title: "islower()",
        content: "[Placeholder] Content for islower()",
        initialCode: "# Placeholder Code for islower()\\nprint('islower()')",
        exercise: { task: "[Placeholder Task] Try writing code for islower()", check: (out) => out.includes("islower()") },
        quiz: { question: "[Placeholder Quiz] What does islower() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-17',
        title: "count()",
        content: "[Placeholder] Content for count()",
        initialCode: "# Placeholder Code for count()\\nprint('count()')",
        exercise: { task: "[Placeholder Task] Try writing code for count()", check: (out) => out.includes("count()") },
        quiz: { question: "[Placeholder Quiz] What does count() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-18',
        title: "find()",
        content: "[Placeholder] Content for find()",
        initialCode: "# Placeholder Code for find()\\nprint('find()')",
        exercise: { task: "[Placeholder Task] Try writing code for find()", check: (out) => out.includes("find()") },
        quiz: { question: "[Placeholder Quiz] What does find() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-19',
        title: "replace()",
        content: "[Placeholder] Content for replace()",
        initialCode: "# Placeholder Code for replace()\\nprint('replace()')",
        exercise: { task: "[Placeholder Task] Try writing code for replace()", check: (out) => out.includes("replace()") },
        quiz: { question: "[Placeholder Quiz] What does replace() do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p2',
    title: "Operators",
    lessons: [
      {
        id: 'l2-1',
        title: "Operators",
        content: "[Placeholder] Content for Operators",
        initialCode: "# Placeholder Code for Operators\\nprint('Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Operators", check: (out) => out.includes("Operators") },
        quiz: { question: "[Placeholder Quiz] What does Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-2',
        title: "Arithmetic Operators",
        content: "[Placeholder] Content for Arithmetic Operators",
        initialCode: "# Placeholder Code for Arithmetic Operators\\nprint('Arithmetic Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Arithmetic Operators", check: (out) => out.includes("Arithmetic Operators") },
        quiz: { question: "[Placeholder Quiz] What does Arithmetic Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-3',
        title: "Relational Operator",
        content: "[Placeholder] Content for Relational Operator",
        initialCode: "# Placeholder Code for Relational Operator\\nprint('Relational Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Relational Operator", check: (out) => out.includes("Relational Operator") },
        quiz: { question: "[Placeholder Quiz] What does Relational Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-4',
        title: "Logical Operators",
        content: "[Placeholder] Content for Logical Operators",
        initialCode: "# Placeholder Code for Logical Operators\\nprint('Logical Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Logical Operators", check: (out) => out.includes("Logical Operators") },
        quiz: { question: "[Placeholder Quiz] What does Logical Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-5',
        title: "And Logical Operator",
        content: "[Placeholder] Content for And Logical Operator",
        initialCode: "# Placeholder Code for And Logical Operator\\nprint('And Logical Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for And Logical Operator", check: (out) => out.includes("And Logical Operator") },
        quiz: { question: "[Placeholder Quiz] What does And Logical Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-6',
        title: "Or Logical Operator",
        content: "[Placeholder] Content for Or Logical Operator",
        initialCode: "# Placeholder Code for Or Logical Operator\\nprint('Or Logical Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Or Logical Operator", check: (out) => out.includes("Or Logical Operator") },
        quiz: { question: "[Placeholder Quiz] What does Or Logical Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-7',
        title: "Not Logical Operator",
        content: "[Placeholder] Content for Not Logical Operator",
        initialCode: "# Placeholder Code for Not Logical Operator\\nprint('Not Logical Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Not Logical Operator", check: (out) => out.includes("Not Logical Operator") },
        quiz: { question: "[Placeholder Quiz] What does Not Logical Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-8',
        title: "Bitwise Operators",
        content: "[Placeholder] Content for Bitwise Operators",
        initialCode: "# Placeholder Code for Bitwise Operators\\nprint('Bitwise Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise Operators", check: (out) => out.includes("Bitwise Operators") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-9',
        title: "Bitwise or ( | )",
        content: "[Placeholder] Content for Bitwise or ( | )",
        initialCode: "# Placeholder Code for Bitwise or ( | )\\nprint('Bitwise or ( | )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise or ( | )", check: (out) => out.includes("Bitwise or ( | )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise or ( | ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-10',
        title: "Bitwise 1's complement ( ~ ) or Bitwise Not",
        content: "[Placeholder] Content for Bitwise 1's complement ( ~ ) or Bitwise Not",
        initialCode: "# Placeholder Code for Bitwise 1's complement ( ~ ) or Bitwise Not\\nprint('Bitwise 1\\'s complement ( ~ ) or Bitwise Not')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise 1's complement ( ~ ) or Bitwise Not", check: (out) => out.includes("Bitwise 1's complement ( ~ ) or Bitwise Not") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise 1's complement ( ~ ) or Bitwise Not do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-11',
        title: "Bitwise XOR ( ^ )",
        content: "[Placeholder] Content for Bitwise XOR ( ^ )",
        initialCode: "# Placeholder Code for Bitwise XOR ( ^ )\\nprint('Bitwise XOR ( ^ )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise XOR ( ^ )", check: (out) => out.includes("Bitwise XOR ( ^ )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise XOR ( ^ ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-12',
        title: "Bitwise right shift ( >> )",
        content: "[Placeholder] Content for Bitwise right shift ( >> )",
        initialCode: "# Placeholder Code for Bitwise right shift ( >> )\\nprint('Bitwise right shift ( >> )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise right shift ( >> )", check: (out) => out.includes("Bitwise right shift ( >> )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise right shift ( >> ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-13',
        title: "Bitwise Left ( << )",
        content: "[Placeholder] Content for Bitwise Left ( << )",
        initialCode: "# Placeholder Code for Bitwise Left ( << )\\nprint('Bitwise Left ( << )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise Left ( << )", check: (out) => out.includes("Bitwise Left ( << )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise Left ( << ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-14',
        title: "Assignment Operators",
        content: "[Placeholder] Content for Assignment Operators",
        initialCode: "# Placeholder Code for Assignment Operators\\nprint('Assignment Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Assignment Operators", check: (out) => out.includes("Assignment Operators") },
        quiz: { question: "[Placeholder Quiz] What does Assignment Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-15',
        title: "Special Operators",
        content: "[Placeholder] Content for Special Operators",
        initialCode: "# Placeholder Code for Special Operators\\nprint('Special Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Special Operators", check: (out) => out.includes("Special Operators") },
        quiz: { question: "[Placeholder Quiz] What does Special Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-16',
        title: "Identity Operators",
        content: "[Placeholder] Content for Identity Operators",
        initialCode: "# Placeholder Code for Identity Operators\\nprint('Identity Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Identity Operators", check: (out) => out.includes("Identity Operators") },
        quiz: { question: "[Placeholder Quiz] What does Identity Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-17',
        title: "is not identity operator",
        content: "[Placeholder] Content for is not identity operator",
        initialCode: "# Placeholder Code for is not identity operator\\nprint('is not identity operator')",
        exercise: { task: "[Placeholder Task] Try writing code for is not identity operator", check: (out) => out.includes("is not identity operator") },
        quiz: { question: "[Placeholder Quiz] What does is not identity operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-18',
        title: "Dive to String",
        content: "[Placeholder] Content for Dive to String",
        initialCode: "# Placeholder Code for Dive to String\\nprint('Dive to String')",
        exercise: { task: "[Placeholder Task] Try writing code for Dive to String", check: (out) => out.includes("Dive to String") },
        quiz: { question: "[Placeholder Quiz] What does Dive to String do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-19',
        title: "Membership Operators",
        content: "[Placeholder] Content for Membership Operators",
        initialCode: "# Placeholder Code for Membership Operators\\nprint('Membership Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Membership Operators", check: (out) => out.includes("Membership Operators") },
        quiz: { question: "[Placeholder Quiz] What does Membership Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p3',
    title: "Python Control Structure",
    lessons: [
      {
        id: 'l3-1',
        title: "Python Control Structure",
        content: "[Placeholder] Content for Python Control Structure",
        initialCode: "# Placeholder Code for Python Control Structure\\nprint('Python Control Structure')",
        exercise: { task: "[Placeholder Task] Try writing code for Python Control Structure", check: (out) => out.includes("Python Control Structure") },
        quiz: { question: "[Placeholder Quiz] What does Python Control Structure do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-2',
        title: "Indentation Error - Sample Program (54)",
        content: "[Placeholder] Content for Indentation Error - Sample Program (54)",
        initialCode: "# Placeholder Code for Indentation Error - Sample Program (54)\\nprint('Indentation Error - Sample Program (54)')",
        exercise: { task: "[Placeholder Task] Try writing code for Indentation Error - Sample Program (54)", check: (out) => out.includes("Indentation Error - Sample Program (54)") },
        quiz: { question: "[Placeholder Quiz] What does Indentation Error - Sample Program (54) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-3',
        title: "elif",
        content: "[Placeholder] Content for elif",
        initialCode: "# Placeholder Code for elif\\nprint('elif')",
        exercise: { task: "[Placeholder Task] Try writing code for elif", check: (out) => out.includes("elif") },
        quiz: { question: "[Placeholder Quiz] What does elif do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-4',
        title: "else statement",
        content: "[Placeholder] Content for else statement",
        initialCode: "# Placeholder Code for else statement\\nprint('else statement')",
        exercise: { task: "[Placeholder Task] Try writing code for else statement", check: (out) => out.includes("else statement") },
        quiz: { question: "[Placeholder Quiz] What does else statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-5',
        title: "Loops",
        content: "[Placeholder] Content for Loops",
        initialCode: "# Placeholder Code for Loops\\nprint('Loops')",
        exercise: { task: "[Placeholder Task] Try writing code for Loops", check: (out) => out.includes("Loops") },
        quiz: { question: "[Placeholder Quiz] What does Loops do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-6',
        title: "While loop",
        content: "[Placeholder] Content for While loop",
        initialCode: "# Placeholder Code for While loop\\nprint('While loop')",
        exercise: { task: "[Placeholder Task] Try writing code for While loop", check: (out) => out.includes("While loop") },
        quiz: { question: "[Placeholder Quiz] What does While loop do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-7',
        title: "while loop with the break statement",
        content: "[Placeholder] Content for while loop with the break statement",
        initialCode: "# Placeholder Code for while loop with the break statement\\nprint('while loop with the break statement')",
        exercise: { task: "[Placeholder Task] Try writing code for while loop with the break statement", check: (out) => out.includes("while loop with the break statement") },
        quiz: { question: "[Placeholder Quiz] What does while loop with the break statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-8',
        title: "For loop",
        content: "[Placeholder] Content for For loop",
        initialCode: "# Placeholder Code for For loop\\nprint('For loop')",
        exercise: { task: "[Placeholder Task] Try writing code for For loop", check: (out) => out.includes("For loop") },
        quiz: { question: "[Placeholder Quiz] What does For loop do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-9',
        title: "For loops through a String",
        content: "[Placeholder] Content for For loops through a String",
        initialCode: "# Placeholder Code for For loops through a String\\nprint('For loops through a String')",
        exercise: { task: "[Placeholder Task] Try writing code for For loops through a String", check: (out) => out.includes("For loops through a String") },
        quiz: { question: "[Placeholder Quiz] What does For loops through a String do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-10',
        title: "For loops with break statement",
        content: "[Placeholder] Content for For loops with break statement",
        initialCode: "# Placeholder Code for For loops with break statement\\nprint('For loops with break statement')",
        exercise: { task: "[Placeholder Task] Try writing code for For loops with break statement", check: (out) => out.includes("For loops with break statement") },
        quiz: { question: "[Placeholder Quiz] What does For loops with break statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-11',
        title: "For loops with continue statement",
        content: "[Placeholder] Content for For loops with continue statement",
        initialCode: "# Placeholder Code for For loops with continue statement\\nprint('For loops with continue statement')",
        exercise: { task: "[Placeholder Task] Try writing code for For loops with continue statement", check: (out) => out.includes("For loops with continue statement") },
        quiz: { question: "[Placeholder Quiz] What does For loops with continue statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-12',
        title: "Pass",
        content: "[Placeholder] Content for Pass",
        initialCode: "# Placeholder Code for Pass\\nprint('Pass')",
        exercise: { task: "[Placeholder Task] Try writing code for Pass", check: (out) => out.includes("Pass") },
        quiz: { question: "[Placeholder Quiz] What does Pass do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p4',
    title: "List in Python",
    lessons: [
      {
        id: 'l4-1',
        title: "List in Python",
        content: "[Placeholder] Content for List in Python",
        initialCode: "# Placeholder Code for List in Python\\nprint('List in Python')",
        exercise: { task: "[Placeholder Task] Try writing code for List in Python", check: (out) => out.includes("List in Python") },
        quiz: { question: "[Placeholder Quiz] What does List in Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-2',
        title: "Declaring a List",
        content: "[Placeholder] Content for Declaring a List",
        initialCode: "# Placeholder Code for Declaring a List\\nprint('Declaring a List')",
        exercise: { task: "[Placeholder Task] Try writing code for Declaring a List", check: (out) => out.includes("Declaring a List") },
        quiz: { question: "[Placeholder Quiz] What does Declaring a List do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-3',
        title: "Creating a list with Data",
        content: "[Placeholder] Content for Creating a list with Data",
        initialCode: "# Placeholder Code for Creating a list with Data\\nprint('Creating a list with Data')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a list with Data", check: (out) => out.includes("Creating a list with Data") },
        quiz: { question: "[Placeholder Quiz] What does Creating a list with Data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-4',
        title: "Creating a list with Multiple Data",
        content: "[Placeholder] Content for Creating a list with Multiple Data",
        initialCode: "# Placeholder Code for Creating a list with Multiple Data\\nprint('Creating a list with Multiple Data')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a list with Multiple Data", check: (out) => out.includes("Creating a list with Multiple Data") },
        quiz: { question: "[Placeholder Quiz] What does Creating a list with Multiple Data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-5',
        title: "Accessing data",
        content: "[Placeholder] Content for Accessing data",
        initialCode: "# Placeholder Code for Accessing data\\nprint('Accessing data')",
        exercise: { task: "[Placeholder Task] Try writing code for Accessing data", check: (out) => out.includes("Accessing data") },
        quiz: { question: "[Placeholder Quiz] What does Accessing data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-6',
        title: "Accessing Data from Multidimensional list",
        content: "[Placeholder] Content for Accessing Data from Multidimensional list",
        initialCode: "# Placeholder Code for Accessing Data from Multidimensional list\\nprint('Accessing Data from Multidimensional list')",
        exercise: { task: "[Placeholder Task] Try writing code for Accessing Data from Multidimensional list", check: (out) => out.includes("Accessing Data from Multidimensional list") },
        quiz: { question: "[Placeholder Quiz] What does Accessing Data from Multidimensional list do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-7',
        title: "Remove Method - Removing element from list",
        content: "[Placeholder] Content for Remove Method - Removing element from list",
        initialCode: "# Placeholder Code for Remove Method - Removing element from list\\nprint('Remove Method - Removing element from list')",
        exercise: { task: "[Placeholder Task] Try writing code for Remove Method - Removing element from list", check: (out) => out.includes("Remove Method - Removing element from list") },
        quiz: { question: "[Placeholder Quiz] What does Remove Method - Removing element from list do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-8',
        title: "pop() Method - Popping elements from list",
        content: "[Placeholder] Content for pop() Method - Popping elements from list",
        initialCode: "# Placeholder Code for pop() Method - Popping elements from list\\nprint('pop() Method - Popping elements from list')",
        exercise: { task: "[Placeholder Task] Try writing code for pop() Method - Popping elements from list", check: (out) => out.includes("pop() Method - Popping elements from list") },
        quiz: { question: "[Placeholder Quiz] What does pop() Method - Popping elements from list do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-9',
        title: "index()",
        content: "[Placeholder] Content for index()",
        initialCode: "# Placeholder Code for index()\\nprint('index()')",
        exercise: { task: "[Placeholder Task] Try writing code for index()", check: (out) => out.includes("index()") },
        quiz: { question: "[Placeholder Quiz] What does index() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-10',
        title: "Error",
        content: "[Placeholder] Content for Error",
        initialCode: "# Placeholder Code for Error\\nprint('Error')",
        exercise: { task: "[Placeholder Task] Try writing code for Error", check: (out) => out.includes("Error") },
        quiz: { question: "[Placeholder Quiz] What does Error do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-11',
        title: "append( ) method",
        content: "[Placeholder] Content for append( ) method",
        initialCode: "# Placeholder Code for append( ) method\\nprint('append( ) method')",
        exercise: { task: "[Placeholder Task] Try writing code for append( ) method", check: (out) => out.includes("append( ) method") },
        quiz: { question: "[Placeholder Quiz] What does append( ) method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-12',
        title: "extend() method",
        content: "[Placeholder] Content for extend() method",
        initialCode: "# Placeholder Code for extend() method\\nprint('extend() method')",
        exercise: { task: "[Placeholder Task] Try writing code for extend() method", check: (out) => out.includes("extend() method") },
        quiz: { question: "[Placeholder Quiz] What does extend() method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-13',
        title: "Using operator for extending list",
        content: "[Placeholder] Content for Using operator for extending list",
        initialCode: "# Placeholder Code for Using operator for extending list\\nprint('Using operator for extending list')",
        exercise: { task: "[Placeholder Task] Try writing code for Using operator for extending list", check: (out) => out.includes("Using operator for extending list") },
        quiz: { question: "[Placeholder Quiz] What does Using operator for extending list do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-14',
        title: "insert() method",
        content: "[Placeholder] Content for insert() method",
        initialCode: "# Placeholder Code for insert() method\\nprint('insert() method')",
        exercise: { task: "[Placeholder Task] Try writing code for insert() method", check: (out) => out.includes("insert() method") },
        quiz: { question: "[Placeholder Quiz] What does insert() method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-15',
        title: "count() method",
        content: "[Placeholder] Content for count() method",
        initialCode: "# Placeholder Code for count() method\\nprint('count() method')",
        exercise: { task: "[Placeholder Task] Try writing code for count() method", check: (out) => out.includes("count() method") },
        quiz: { question: "[Placeholder Quiz] What does count() method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-16',
        title: "reverse() method",
        content: "[Placeholder] Content for reverse() method",
        initialCode: "# Placeholder Code for reverse() method\\nprint('reverse() method')",
        exercise: { task: "[Placeholder Task] Try writing code for reverse() method", check: (out) => out.includes("reverse() method") },
        quiz: { question: "[Placeholder Quiz] What does reverse() method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-17',
        title: "sort() method",
        content: "[Placeholder] Content for sort() method",
        initialCode: "# Placeholder Code for sort() method\\nprint('sort() method')",
        exercise: { task: "[Placeholder Task] Try writing code for sort() method", check: (out) => out.includes("sort() method") },
        quiz: { question: "[Placeholder Quiz] What does sort() method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-18',
        title: "copy() method",
        content: "[Placeholder] Content for copy() method",
        initialCode: "# Placeholder Code for copy() method\\nprint('copy() method')",
        exercise: { task: "[Placeholder Task] Try writing code for copy() method", check: (out) => out.includes("copy() method") },
        quiz: { question: "[Placeholder Quiz] What does copy() method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-19',
        title: "clear() method",
        content: "[Placeholder] Content for clear() method",
        initialCode: "# Placeholder Code for clear() method\\nprint('clear() method')",
        exercise: { task: "[Placeholder Task] Try writing code for clear() method", check: (out) => out.includes("clear() method") },
        quiz: { question: "[Placeholder Quiz] What does clear() method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-20',
        title: "Dive To List",
        content: "[Placeholder] Content for Dive To List",
        initialCode: "# Placeholder Code for Dive To List\\nprint('Dive To List')",
        exercise: { task: "[Placeholder Task] Try writing code for Dive To List", check: (out) => out.includes("Dive To List") },
        quiz: { question: "[Placeholder Quiz] What does Dive To List do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p5',
    title: "Namespaces",
    lessons: [
      {
        id: 'l5-1',
        title: "Namespaces",
        content: "[Placeholder] Content for Namespaces",
        initialCode: "# Placeholder Code for Namespaces\\nprint('Namespaces')",
        exercise: { task: "[Placeholder Task] Try writing code for Namespaces", check: (out) => out.includes("Namespaces") },
        quiz: { question: "[Placeholder Quiz] What does Namespaces do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-2',
        title: "Introduction to Function",
        content: "[Placeholder] Content for Introduction to Function",
        initialCode: "# Placeholder Code for Introduction to Function\\nprint('Introduction to Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Introduction to Function", check: (out) => out.includes("Introduction to Function") },
        quiz: { question: "[Placeholder Quiz] What does Introduction to Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-3',
        title: "The range() function ( Standard Library Function )",
        content: "[Placeholder] Content for The range() function ( Standard Library Function )",
        initialCode: "# Placeholder Code for The range() function ( Standard Library Function )\\nprint('The range() function ( Standard Library Function )')",
        exercise: { task: "[Placeholder Task] Try writing code for The range() function ( Standard Library Function )", check: (out) => out.includes("The range() function ( Standard Library Function )") },
        quiz: { question: "[Placeholder Quiz] What does The range() function ( Standard Library Function ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-4',
        title: "Programmer Defined Function",
        content: "[Placeholder] Content for Programmer Defined Function",
        initialCode: "# Placeholder Code for Programmer Defined Function\\nprint('Programmer Defined Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Programmer Defined Function", check: (out) => out.includes("Programmer Defined Function") },
        quiz: { question: "[Placeholder Quiz] What does Programmer Defined Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-5',
        title: "Python Function with Parameters",
        content: "[Placeholder] Content for Python Function with Parameters",
        initialCode: "# Placeholder Code for Python Function with Parameters\\nprint('Python Function with Parameters')",
        exercise: { task: "[Placeholder Task] Try writing code for Python Function with Parameters", check: (out) => out.includes("Python Function with Parameters") },
        quiz: { question: "[Placeholder Quiz] What does Python Function with Parameters do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-6',
        title: "Parameter Passing",
        content: "[Placeholder] Content for Parameter Passing",
        initialCode: "# Placeholder Code for Parameter Passing\\nprint('Parameter Passing')",
        exercise: { task: "[Placeholder Task] Try writing code for Parameter Passing", check: (out) => out.includes("Parameter Passing") },
        quiz: { question: "[Placeholder Quiz] What does Parameter Passing do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-7',
        title: "Avoidable Error",
        content: "[Placeholder] Content for Avoidable Error",
        initialCode: "# Placeholder Code for Avoidable Error\\nprint('Avoidable Error')",
        exercise: { task: "[Placeholder Task] Try writing code for Avoidable Error", check: (out) => out.includes("Avoidable Error") },
        quiz: { question: "[Placeholder Quiz] What does Avoidable Error do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-8',
        title: "List passing to a function",
        content: "[Placeholder] Content for List passing to a function",
        initialCode: "# Placeholder Code for List passing to a function\\nprint('List passing to a function')",
        exercise: { task: "[Placeholder Task] Try writing code for List passing to a function", check: (out) => out.includes("List passing to a function") },
        quiz: { question: "[Placeholder Quiz] What does List passing to a function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-9',
        title: "Pass by reference in python",
        content: "[Placeholder] Content for Pass by reference in python",
        initialCode: "# Placeholder Code for Pass by reference in python\\nprint('Pass by reference in python')",
        exercise: { task: "[Placeholder Task] Try writing code for Pass by reference in python", check: (out) => out.includes("Pass by reference in python") },
        quiz: { question: "[Placeholder Quiz] What does Pass by reference in python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-10',
        title: "What is a reference?",
        content: "[Placeholder] Content for What is a reference?",
        initialCode: "# Placeholder Code for What is a reference?\\nprint('What is a reference?')",
        exercise: { task: "[Placeholder Task] Try writing code for What is a reference?", check: (out) => out.includes("What is a reference?") },
        quiz: { question: "[Placeholder Quiz] What does What is a reference? do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-11',
        title: "Everything is an Object",
        content: "[Placeholder] Content for Everything is an Object",
        initialCode: "# Placeholder Code for Everything is an Object\\nprint('Everything is an Object')",
        exercise: { task: "[Placeholder Task] Try writing code for Everything is an Object", check: (out) => out.includes("Everything is an Object") },
        quiz: { question: "[Placeholder Quiz] What does Everything is an Object do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-12',
        title: "Returning function from a function",
        content: "[Placeholder] Content for Returning function from a function",
        initialCode: "# Placeholder Code for Returning function from a function\\nprint('Returning function from a function')",
        exercise: { task: "[Placeholder Task] Try writing code for Returning function from a function", check: (out) => out.includes("Returning function from a function") },
        quiz: { question: "[Placeholder Quiz] What does Returning function from a function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-13',
        title: "Function Passing to a Function",
        content: "[Placeholder] Content for Function Passing to a Function",
        initialCode: "# Placeholder Code for Function Passing to a Function\\nprint('Function Passing to a Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Function Passing to a Function", check: (out) => out.includes("Function Passing to a Function") },
        quiz: { question: "[Placeholder Quiz] What does Function Passing to a Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l5-14',
        title: "Avoidable Error",
        content: "[Placeholder] Content for Avoidable Error",
        initialCode: "# Placeholder Code for Avoidable Error\\nprint('Avoidable Error')",
        exercise: { task: "[Placeholder Task] Try writing code for Avoidable Error", check: (out) => out.includes("Avoidable Error") },
        quiz: { question: "[Placeholder Quiz] What does Avoidable Error do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p6',
    title: "Positional and Keyword Arguments",
    lessons: [
      {
        id: 'l6-1',
        title: "Positional and Keyword Arguments",
        content: "[Placeholder] Content for Positional and Keyword Arguments",
        initialCode: "# Placeholder Code for Positional and Keyword Arguments\\nprint('Positional and Keyword Arguments')",
        exercise: { task: "[Placeholder Task] Try writing code for Positional and Keyword Arguments", check: (out) => out.includes("Positional and Keyword Arguments") },
        quiz: { question: "[Placeholder Quiz] What does Positional and Keyword Arguments do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-2',
        title: "Unpacking",
        content: "[Placeholder] Content for Unpacking",
        initialCode: "# Placeholder Code for Unpacking\\nprint('Unpacking')",
        exercise: { task: "[Placeholder Task] Try writing code for Unpacking", check: (out) => out.includes("Unpacking") },
        quiz: { question: "[Placeholder Quiz] What does Unpacking do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-3',
        title: "Unpacking list to tuple",
        content: "[Placeholder] Content for Unpacking list to tuple",
        initialCode: "# Placeholder Code for Unpacking list to tuple\\nprint('Unpacking list to tuple')",
        exercise: { task: "[Placeholder Task] Try writing code for Unpacking list to tuple", check: (out) => out.includes("Unpacking list to tuple") },
        quiz: { question: "[Placeholder Quiz] What does Unpacking list to tuple do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-4',
        title: "Unpacking String",
        content: "[Placeholder] Content for Unpacking String",
        initialCode: "# Placeholder Code for Unpacking String\\nprint('Unpacking String')",
        exercise: { task: "[Placeholder Task] Try writing code for Unpacking String", check: (out) => out.includes("Unpacking String") },
        quiz: { question: "[Placeholder Quiz] What does Unpacking String do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-5',
        title: "Set",
        content: "[Placeholder] Content for Set",
        initialCode: "# Placeholder Code for Set\\nprint('Set')",
        exercise: { task: "[Placeholder Task] Try writing code for Set", check: (out) => out.includes("Set") },
        quiz: { question: "[Placeholder Quiz] What does Set do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-6',
        title: "Dictionary",
        content: "[Placeholder] Content for Dictionary",
        initialCode: "# Placeholder Code for Dictionary\\nprint('Dictionary')",
        exercise: { task: "[Placeholder Task] Try writing code for Dictionary", check: (out) => out.includes("Dictionary") },
        quiz: { question: "[Placeholder Quiz] What does Dictionary do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-7',
        title: "Extended Unpacking (Python 3.5 \u1011\u102d \u1021\u1014\u102d\u1019\u1037\u103a\u1006\u102f\u1036\u1038 \u101c\u102d\u102f\u1021\u1015\u103a\u1015\u102b\u1010\u101a\u103a)",
        content: "[Placeholder] Content for Extended Unpacking (Python 3.5 \u1011\u102d \u1021\u1014\u102d\u1019\u1037\u103a\u1006\u102f\u1036\u1038 \u101c\u102d\u102f\u1021\u1015\u103a\u1015\u102b\u1010\u101a\u103a)",
        initialCode: "# Placeholder Code for Extended Unpacking (Python 3.5 \u1011\u102d \u1021\u1014\u102d\u1019\u1037\u103a\u1006\u102f\u1036\u1038 \u101c\u102d\u102f\u1021\u1015\u103a\u1015\u102b\u1010\u101a\u103a)\\nprint('Extended Unpacking (Python 3.5 \u1011\u102d \u1021\u1014\u102d\u1019\u1037\u103a\u1006\u102f\u1036\u1038 \u101c\u102d\u102f\u1021\u1015\u103a\u1015\u102b\u1010\u101a\u103a)')",
        exercise: { task: "[Placeholder Task] Try writing code for Extended Unpacking (Python 3.5 \u1011\u102d \u1021\u1014\u102d\u1019\u1037\u103a\u1006\u102f\u1036\u1038 \u101c\u102d\u102f\u1021\u1015\u103a\u1015\u102b\u1010\u101a\u103a)", check: (out) => out.includes("Extended Unpacking (Python 3.5 ထိ အနိမ့်ဆုံး လိုအပ်ပါတယ်)") },
        quiz: { question: "[Placeholder Quiz] What does Extended Unpacking (Python 3.5 \u1011\u102d \u1021\u1014\u102d\u1019\u1037\u103a\u1006\u102f\u1036\u1038 \u101c\u102d\u102f\u1021\u1015\u103a\u1015\u102b\u1010\u101a\u103a) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-8',
        title: "List extended unpacking",
        content: "[Placeholder] Content for List extended unpacking",
        initialCode: "# Placeholder Code for List extended unpacking\\nprint('List extended unpacking')",
        exercise: { task: "[Placeholder Task] Try writing code for List extended unpacking", check: (out) => out.includes("List extended unpacking") },
        quiz: { question: "[Placeholder Quiz] What does List extended unpacking do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-9',
        title: "String extended unpacking",
        content: "[Placeholder] Content for String extended unpacking",
        initialCode: "# Placeholder Code for String extended unpacking\\nprint('String extended unpacking')",
        exercise: { task: "[Placeholder Task] Try writing code for String extended unpacking", check: (out) => out.includes("String extended unpacking") },
        quiz: { question: "[Placeholder Quiz] What does String extended unpacking do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-10',
        title: "Tuple extending unpacking",
        content: "[Placeholder] Content for Tuple extending unpacking",
        initialCode: "# Placeholder Code for Tuple extending unpacking\\nprint('Tuple extending unpacking')",
        exercise: { task: "[Placeholder Task] Try writing code for Tuple extending unpacking", check: (out) => out.includes("Tuple extending unpacking") },
        quiz: { question: "[Placeholder Quiz] What does Tuple extending unpacking do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-11',
        title: "list extended unpacking using tuple",
        content: "[Placeholder] Content for list extended unpacking using tuple",
        initialCode: "# Placeholder Code for list extended unpacking using tuple\\nprint('list extended unpacking using tuple')",
        exercise: { task: "[Placeholder Task] Try writing code for list extended unpacking using tuple", check: (out) => out.includes("list extended unpacking using tuple") },
        quiz: { question: "[Placeholder Quiz] What does list extended unpacking using tuple do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-12',
        title: "Arbitrary Arguments",
        content: "[Placeholder] Content for Arbitrary Arguments",
        initialCode: "# Placeholder Code for Arbitrary Arguments\\nprint('Arbitrary Arguments')",
        exercise: { task: "[Placeholder Task] Try writing code for Arbitrary Arguments", check: (out) => out.includes("Arbitrary Arguments") },
        quiz: { question: "[Placeholder Quiz] What does Arbitrary Arguments do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-13',
        title: "Positional arguments and Arbitrary arguments",
        content: "[Placeholder] Content for Positional arguments and Arbitrary arguments",
        initialCode: "# Placeholder Code for Positional arguments and Arbitrary arguments\\nprint('Positional arguments and Arbitrary arguments')",
        exercise: { task: "[Placeholder Task] Try writing code for Positional arguments and Arbitrary arguments", check: (out) => out.includes("Positional arguments and Arbitrary arguments") },
        quiz: { question: "[Placeholder Quiz] What does Positional arguments and Arbitrary arguments do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-14',
        title: "List Pass to Function",
        content: "[Placeholder] Content for List Pass to Function",
        initialCode: "# Placeholder Code for List Pass to Function\\nprint('List Pass to Function')",
        exercise: { task: "[Placeholder Task] Try writing code for List Pass to Function", check: (out) => out.includes("List Pass to Function") },
        quiz: { question: "[Placeholder Quiz] What does List Pass to Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-15',
        title: "Keyword Argument a Deeper Look",
        content: "[Placeholder] Content for Keyword Argument a Deeper Look",
        initialCode: "# Placeholder Code for Keyword Argument a Deeper Look\\nprint('Keyword Argument a Deeper Look')",
        exercise: { task: "[Placeholder Task] Try writing code for Keyword Argument a Deeper Look", check: (out) => out.includes("Keyword Argument a Deeper Look") },
        quiz: { question: "[Placeholder Quiz] What does Keyword Argument a Deeper Look do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-16',
        title: "End of Positional Arguments ( * )",
        content: "[Placeholder] Content for End of Positional Arguments ( * )",
        initialCode: "# Placeholder Code for End of Positional Arguments ( * )\\nprint('End of Positional Arguments ( * )')",
        exercise: { task: "[Placeholder Task] Try writing code for End of Positional Arguments ( * )", check: (out) => out.includes("End of Positional Arguments ( * )") },
        quiz: { question: "[Placeholder Quiz] What does End of Positional Arguments ( * ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-17',
        title: "**kwargs",
        content: "[Placeholder] Content for **kwargs",
        initialCode: "# Placeholder Code for **kwargs\\nprint('**kwargs')",
        exercise: { task: "[Placeholder Task] Try writing code for **kwargs", check: (out) => out.includes("**kwargs") },
        quiz: { question: "[Placeholder Quiz] What does **kwargs do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-18',
        title: "End of positional argument and keyword argument",
        content: "[Placeholder] Content for End of positional argument and keyword argument",
        initialCode: "# Placeholder Code for End of positional argument and keyword argument\\nprint('End of positional argument and keyword argument')",
        exercise: { task: "[Placeholder Task] Try writing code for End of positional argument and keyword argument", check: (out) => out.includes("End of positional argument and keyword argument") },
        quiz: { question: "[Placeholder Quiz] What does End of positional argument and keyword argument do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-19',
        title: "Simple Function Timer",
        content: "[Placeholder] Content for Simple Function Timer",
        initialCode: "# Placeholder Code for Simple Function Timer\\nprint('Simple Function Timer')",
        exercise: { task: "[Placeholder Task] Try writing code for Simple Function Timer", check: (out) => out.includes("Simple Function Timer") },
        quiz: { question: "[Placeholder Quiz] What does Simple Function Timer do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-20',
        title: "Default Values",
        content: "[Placeholder] Content for Default Values",
        initialCode: "# Placeholder Code for Default Values\\nprint('Default Values')",
        exercise: { task: "[Placeholder Task] Try writing code for Default Values", check: (out) => out.includes("Default Values") },
        quiz: { question: "[Placeholder Quiz] What does Default Values do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-21',
        title: "Parameter Defaults problem",
        content: "[Placeholder] Content for Parameter Defaults problem",
        initialCode: "# Placeholder Code for Parameter Defaults problem\\nprint('Parameter Defaults problem')",
        exercise: { task: "[Placeholder Task] Try writing code for Parameter Defaults problem", check: (out) => out.includes("Parameter Defaults problem") },
        quiz: { question: "[Placeholder Quiz] What does Parameter Defaults problem do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-22',
        title: "Docstrings",
        content: "[Placeholder] Content for Docstrings",
        initialCode: "# Placeholder Code for Docstrings\\nprint('Docstrings')",
        exercise: { task: "[Placeholder Task] Try writing code for Docstrings", check: (out) => out.includes("Docstrings") },
        quiz: { question: "[Placeholder Quiz] What does Docstrings do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l6-23',
        title: "Function Annotations",
        content: "[Placeholder] Content for Function Annotations",
        initialCode: "# Placeholder Code for Function Annotations\\nprint('Function Annotations')",
        exercise: { task: "[Placeholder Task] Try writing code for Function Annotations", check: (out) => out.includes("Function Annotations") },
        quiz: { question: "[Placeholder Quiz] What does Function Annotations do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p7',
    title: "Lambda Expressions/function",
    lessons: [
      {
        id: 'l7-1',
        title: "Lambda Expressions/function",
        content: "[Placeholder] Content for Lambda Expressions/function",
        initialCode: "# Placeholder Code for Lambda Expressions/function\\nprint('Lambda Expressions/function')",
        exercise: { task: "[Placeholder Task] Try writing code for Lambda Expressions/function", check: (out) => out.includes("Lambda Expressions/function") },
        quiz: { question: "[Placeholder Quiz] What does Lambda Expressions/function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-2',
        title: "Declaration of lambda function",
        content: "[Placeholder] Content for Declaration of lambda function",
        initialCode: "# Placeholder Code for Declaration of lambda function\\nprint('Declaration of lambda function')",
        exercise: { task: "[Placeholder Task] Try writing code for Declaration of lambda function", check: (out) => out.includes("Declaration of lambda function") },
        quiz: { question: "[Placeholder Quiz] What does Declaration of lambda function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-3',
        title: "More Example For lambda with two parameters",
        content: "[Placeholder] Content for More Example For lambda with two parameters",
        initialCode: "# Placeholder Code for More Example For lambda with two parameters\\nprint('More Example For lambda with two parameters')",
        exercise: { task: "[Placeholder Task] Try writing code for More Example For lambda with two parameters", check: (out) => out.includes("More Example For lambda with two parameters") },
        quiz: { question: "[Placeholder Quiz] What does More Example For lambda with two parameters do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-4',
        title: "Higher-Order Function",
        content: "[Placeholder] Content for Higher-Order Function",
        initialCode: "# Placeholder Code for Higher-Order Function\\nprint('Higher-Order Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Higher-Order Function", check: (out) => out.includes("Higher-Order Function") },
        quiz: { question: "[Placeholder Quiz] What does Higher-Order Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-5',
        title: "Lambda Function with *args and **kwargs",
        content: "[Placeholder] Content for Lambda Function with *args and **kwargs",
        initialCode: "# Placeholder Code for Lambda Function with *args and **kwargs\\nprint('Lambda Function with *args and **kwargs')",
        exercise: { task: "[Placeholder Task] Try writing code for Lambda Function with *args and **kwargs", check: (out) => out.includes("Lambda Function with *args and **kwargs") },
        quiz: { question: "[Placeholder Quiz] What does Lambda Function with *args and **kwargs do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-6',
        title: "Lambda",
        content: "[Placeholder] Content for Lambda",
        initialCode: "# Placeholder Code for Lambda\\nprint('Lambda')",
        exercise: { task: "[Placeholder Task] Try writing code for Lambda", check: (out) => out.includes("Lambda") },
        quiz: { question: "[Placeholder Quiz] What does Lambda do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-7',
        title: "args and sum() function",
        content: "[Placeholder] Content for args and sum() function",
        initialCode: "# Placeholder Code for args and sum() function\\nprint('args and sum() function')",
        exercise: { task: "[Placeholder Task] Try writing code for args and sum() function", check: (out) => out.includes("args and sum() function") },
        quiz: { question: "[Placeholder Quiz] What does args and sum() function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-8',
        title: "Lambda with Sorted ()",
        content: "[Placeholder] Content for Lambda with Sorted ()",
        initialCode: "# Placeholder Code for Lambda with Sorted ()\\nprint('Lambda with Sorted ()')",
        exercise: { task: "[Placeholder Task] Try writing code for Lambda with Sorted ()", check: (out) => out.includes("Lambda with Sorted ()") },
        quiz: { question: "[Placeholder Quiz] What does Lambda with Sorted () do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-9',
        title: "Ascending dictionary with Lambda and sorted()",
        content: "[Placeholder] Content for Ascending dictionary with Lambda and sorted()",
        initialCode: "# Placeholder Code for Ascending dictionary with Lambda and sorted()\\nprint('Ascending dictionary with Lambda and sorted()')",
        exercise: { task: "[Placeholder Task] Try writing code for Ascending dictionary with Lambda and sorted()", check: (out) => out.includes("Ascending dictionary with Lambda and sorted()") },
        quiz: { question: "[Placeholder Quiz] What does Ascending dictionary with Lambda and sorted() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-10',
        title: "Ascending last elements",
        content: "[Placeholder] Content for Ascending last elements",
        initialCode: "# Placeholder Code for Ascending last elements\\nprint('Ascending last elements')",
        exercise: { task: "[Placeholder Task] Try writing code for Ascending last elements", check: (out) => out.includes("Ascending last elements") },
        quiz: { question: "[Placeholder Quiz] What does Ascending last elements do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-11',
        title: "Random Module",
        content: "[Placeholder] Content for Random Module",
        initialCode: "# Placeholder Code for Random Module\\nprint('Random Module')",
        exercise: { task: "[Placeholder Task] Try writing code for Random Module", check: (out) => out.includes("Random Module") },
        quiz: { question: "[Placeholder Quiz] What does Random Module do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-12',
        title: "Uniform from random",
        content: "[Placeholder] Content for Uniform from random",
        initialCode: "# Placeholder Code for Uniform from random\\nprint('Uniform from random')",
        exercise: { task: "[Placeholder Task] Try writing code for Uniform from random", check: (out) => out.includes("Uniform from random") },
        quiz: { question: "[Placeholder Quiz] What does Uniform from random do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-13',
        title: "Randint from random",
        content: "[Placeholder] Content for Randint from random",
        initialCode: "# Placeholder Code for Randint from random\\nprint('Randint from random')",
        exercise: { task: "[Placeholder Task] Try writing code for Randint from random", check: (out) => out.includes("Randint from random") },
        quiz: { question: "[Placeholder Quiz] What does Randint from random do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-14',
        title: "Randrange from random",
        content: "[Placeholder] Content for Randrange from random",
        initialCode: "# Placeholder Code for Randrange from random\\nprint('Randrange from random')",
        exercise: { task: "[Placeholder Task] Try writing code for Randrange from random", check: (out) => out.includes("Randrange from random") },
        quiz: { question: "[Placeholder Quiz] What does Randrange from random do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-15',
        title: "Choice from random",
        content: "[Placeholder] Content for Choice from random",
        initialCode: "# Placeholder Code for Choice from random\\nprint('Choice from random')",
        exercise: { task: "[Placeholder Task] Try writing code for Choice from random", check: (out) => out.includes("Choice from random") },
        quiz: { question: "[Placeholder Quiz] What does Choice from random do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-16',
        title: "Random",
        content: "[Placeholder] Content for Random",
        initialCode: "# Placeholder Code for Random\\nprint('Random')",
        exercise: { task: "[Placeholder Task] Try writing code for Random", check: (out) => out.includes("Random") },
        quiz: { question: "[Placeholder Quiz] What does Random do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l7-17',
        title: "sorted and lambda",
        content: "[Placeholder] Content for sorted and lambda",
        initialCode: "# Placeholder Code for sorted and lambda\\nprint('sorted and lambda')",
        exercise: { task: "[Placeholder Task] Try writing code for sorted and lambda", check: (out) => out.includes("sorted and lambda") },
        quiz: { question: "[Placeholder Quiz] What does sorted and lambda do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p8',
    title: "Function Introspection",
    lessons: [
      {
        id: 'l8-1',
        title: "Function Introspection",
        content: "[Placeholder] Content for Function Introspection",
        initialCode: "# Placeholder Code for Function Introspection\\nprint('Function Introspection')",
        exercise: { task: "[Placeholder Task] Try writing code for Function Introspection", check: (out) => out.includes("Function Introspection") },
        quiz: { question: "[Placeholder Quiz] What does Function Introspection do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-2',
        title: "__name__",
        content: "[Placeholder] Content for __name__",
        initialCode: "# Placeholder Code for __name__\\nprint('__name__')",
        exercise: { task: "[Placeholder Task] Try writing code for __name__", check: (out) => out.includes("__name__") },
        quiz: { question: "[Placeholder Quiz] What does __name__ do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-3',
        title: "__default__",
        content: "[Placeholder] Content for __default__",
        initialCode: "# Placeholder Code for __default__\\nprint('__default__')",
        exercise: { task: "[Placeholder Task] Try writing code for __default__", check: (out) => out.includes("__default__") },
        quiz: { question: "[Placeholder Quiz] What does __default__ do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-4',
        title: "__kwdefaults__",
        content: "[Placeholder] Content for __kwdefaults__",
        initialCode: "# Placeholder Code for __kwdefaults__\\nprint('__kwdefaults__')",
        exercise: { task: "[Placeholder Task] Try writing code for __kwdefaults__", check: (out) => out.includes("__kwdefaults__") },
        quiz: { question: "[Placeholder Quiz] What does __kwdefaults__ do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-5',
        title: "__code__ attribute",
        content: "[Placeholder] Content for __code__ attribute",
        initialCode: "# Placeholder Code for __code__ attribute\\nprint('__code__ attribute')",
        exercise: { task: "[Placeholder Task] Try writing code for __code__ attribute", check: (out) => out.includes("__code__ attribute") },
        quiz: { question: "[Placeholder Quiz] What does __code__ attribute do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-6',
        title: "Co_varnames",
        content: "[Placeholder] Content for Co_varnames",
        initialCode: "# Placeholder Code for Co_varnames\\nprint('Co_varnames')",
        exercise: { task: "[Placeholder Task] Try writing code for Co_varnames", check: (out) => out.includes("Co_varnames") },
        quiz: { question: "[Placeholder Quiz] What does Co_varnames do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-7',
        title: "Co_argcount",
        content: "[Placeholder] Content for Co_argcount",
        initialCode: "# Placeholder Code for Co_argcount\\nprint('Co_argcount')",
        exercise: { task: "[Placeholder Task] Try writing code for Co_argcount", check: (out) => out.includes("Co_argcount") },
        quiz: { question: "[Placeholder Quiz] What does Co_argcount do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-8',
        title: "Inspect module",
        content: "[Placeholder] Content for Inspect module",
        initialCode: "# Placeholder Code for Inspect module\\nprint('Inspect module')",
        exercise: { task: "[Placeholder Task] Try writing code for Inspect module", check: (out) => out.includes("Inspect module") },
        quiz: { question: "[Placeholder Quiz] What does Inspect module do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-9',
        title: "Different between Function and Method",
        content: "[Placeholder] Content for Different between Function and Method",
        initialCode: "# Placeholder Code for Different between Function and Method\\nprint('Different between Function and Method')",
        exercise: { task: "[Placeholder Task] Try writing code for Different between Function and Method", check: (out) => out.includes("Different between Function and Method") },
        quiz: { question: "[Placeholder Quiz] What does Different between Function and Method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-10',
        title: "Getsource",
        content: "[Placeholder] Content for Getsource",
        initialCode: "# Placeholder Code for Getsource\\nprint('Getsource')",
        exercise: { task: "[Placeholder Task] Try writing code for Getsource", check: (out) => out.includes("Getsource") },
        quiz: { question: "[Placeholder Quiz] What does Getsource do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-11',
        title: "Getmodule",
        content: "[Placeholder] Content for Getmodule",
        initialCode: "# Placeholder Code for Getmodule\\nprint('Getmodule')",
        exercise: { task: "[Placeholder Task] Try writing code for Getmodule", check: (out) => out.includes("Getmodule") },
        quiz: { question: "[Placeholder Quiz] What does Getmodule do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-12',
        title: "Getcomments",
        content: "[Placeholder] Content for Getcomments",
        initialCode: "# Placeholder Code for Getcomments\\nprint('Getcomments')",
        exercise: { task: "[Placeholder Task] Try writing code for Getcomments", check: (out) => out.includes("Getcomments") },
        quiz: { question: "[Placeholder Quiz] What does Getcomments do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-13',
        title: "Callable",
        content: "[Placeholder] Content for Callable",
        initialCode: "# Placeholder Code for Callable\\nprint('Callable')",
        exercise: { task: "[Placeholder Task] Try writing code for Callable", check: (out) => out.includes("Callable") },
        quiz: { question: "[Placeholder Quiz] What does Callable do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-14',
        title: "Different Types of Callable",
        content: "[Placeholder] Content for Different Types of Callable",
        initialCode: "# Placeholder Code for Different Types of Callable\\nprint('Different Types of Callable')",
        exercise: { task: "[Placeholder Task] Try writing code for Different Types of Callable", check: (out) => out.includes("Different Types of Callable") },
        quiz: { question: "[Placeholder Quiz] What does Different Types of Callable do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-15',
        title: "Some Object are not callable",
        content: "[Placeholder] Content for Some Object are not callable",
        initialCode: "# Placeholder Code for Some Object are not callable\\nprint('Some Object are not callable')",
        exercise: { task: "[Placeholder Task] Try writing code for Some Object are not callable", check: (out) => out.includes("Some Object are not callable") },
        quiz: { question: "[Placeholder Quiz] What does Some Object are not callable do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-16',
        title: "Iterable",
        content: "[Placeholder] Content for Iterable",
        initialCode: "# Placeholder Code for Iterable\\nprint('Iterable')",
        exercise: { task: "[Placeholder Task] Try writing code for Iterable", check: (out) => out.includes("Iterable") },
        quiz: { question: "[Placeholder Quiz] What does Iterable do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-17',
        title: "map()",
        content: "[Placeholder] Content for map()",
        initialCode: "# Placeholder Code for map()\\nprint('map()')",
        exercise: { task: "[Placeholder Task] Try writing code for map()", check: (out) => out.includes("map()") },
        quiz: { question: "[Placeholder Quiz] What does map() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-18',
        title: "Map with Lambda expression",
        content: "[Placeholder] Content for Map with Lambda expression",
        initialCode: "# Placeholder Code for Map with Lambda expression\\nprint('Map with Lambda expression')",
        exercise: { task: "[Placeholder Task] Try writing code for Map with Lambda expression", check: (out) => out.includes("Map with Lambda expression") },
        quiz: { question: "[Placeholder Quiz] What does Map with Lambda expression do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-19',
        title: "Generator",
        content: "[Placeholder] Content for Generator",
        initialCode: "# Placeholder Code for Generator\\nprint('Generator')",
        exercise: { task: "[Placeholder Task] Try writing code for Generator", check: (out) => out.includes("Generator") },
        quiz: { question: "[Placeholder Quiz] What does Generator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-20',
        title: "Zip() Function",
        content: "[Placeholder] Content for Zip() Function",
        initialCode: "# Placeholder Code for Zip() Function\\nprint('Zip() Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Zip() Function", check: (out) => out.includes("Zip() Function") },
        quiz: { question: "[Placeholder Quiz] What does Zip() Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-21',
        title: "Filter ()",
        content: "[Placeholder] Content for Filter ()",
        initialCode: "# Placeholder Code for Filter ()\\nprint('Filter ()')",
        exercise: { task: "[Placeholder Task] Try writing code for Filter ()", check: (out) => out.includes("Filter ()") },
        quiz: { question: "[Placeholder Quiz] What does Filter () do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-22',
        title: "Reduce () function",
        content: "[Placeholder] Content for Reduce () function",
        initialCode: "# Placeholder Code for Reduce () function\\nprint('Reduce () function')",
        exercise: { task: "[Placeholder Task] Try writing code for Reduce () function", check: (out) => out.includes("Reduce () function") },
        quiz: { question: "[Placeholder Quiz] What does Reduce () function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-23',
        title: "Warning Our Reduce Function",
        content: "[Placeholder] Content for Warning Our Reduce Function",
        initialCode: "# Placeholder Code for Warning Our Reduce Function\\nprint('Warning Our Reduce Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Warning Our Reduce Function", check: (out) => out.includes("Warning Our Reduce Function") },
        quiz: { question: "[Placeholder Quiz] What does Warning Our Reduce Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-24',
        title: "Partial () Function",
        content: "[Placeholder] Content for Partial () Function",
        initialCode: "# Placeholder Code for Partial () Function\\nprint('Partial () Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Partial () Function", check: (out) => out.includes("Partial () Function") },
        quiz: { question: "[Placeholder Quiz] What does Partial () Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p9',
    title: "Operator Module",
    lessons: [
      {
        id: 'l9-1',
        title: "Operator Module",
        content: "[Placeholder] Content for Operator Module",
        initialCode: "# Placeholder Code for Operator Module\\nprint('Operator Module')",
        exercise: { task: "[Placeholder Task] Try writing code for Operator Module", check: (out) => out.includes("Operator Module") },
        quiz: { question: "[Placeholder Quiz] What does Operator Module do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l9-2',
        title: "Comparison operator from operator module",
        content: "[Placeholder] Content for Comparison operator from operator module",
        initialCode: "# Placeholder Code for Comparison operator from operator module\\nprint('Comparison operator from operator module')",
        exercise: { task: "[Placeholder Task] Try writing code for Comparison operator from operator module", check: (out) => out.includes("Comparison operator from operator module") },
        quiz: { question: "[Placeholder Quiz] What does Comparison operator from operator module do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p10',
    title: "Scope of Variable",
    lessons: [
      {
        id: 'l10-1',
        title: "Scope of Variable",
        content: "[Placeholder] Content for Scope of Variable",
        initialCode: "# Placeholder Code for Scope of Variable\\nprint('Scope of Variable')",
        exercise: { task: "[Placeholder Task] Try writing code for Scope of Variable", check: (out) => out.includes("Scope of Variable") },
        quiz: { question: "[Placeholder Quiz] What does Scope of Variable do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l10-2',
        title: "Nonlocal Variables",
        content: "[Placeholder] Content for Nonlocal Variables",
        initialCode: "# Placeholder Code for Nonlocal Variables\\nprint('Nonlocal Variables')",
        exercise: { task: "[Placeholder Task] Try writing code for Nonlocal Variables", check: (out) => out.includes("Nonlocal Variables") },
        quiz: { question: "[Placeholder Quiz] What does Nonlocal Variables do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l10-3',
        title: "Closure",
        content: "[Placeholder] Content for Closure",
        initialCode: "# Placeholder Code for Closure\\nprint('Closure')",
        exercise: { task: "[Placeholder Task] Try writing code for Closure", check: (out) => out.includes("Closure") },
        quiz: { question: "[Placeholder Quiz] What does Closure do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l10-4',
        title: "__closure__ Attribute",
        content: "[Placeholder] Content for __closure__ Attribute",
        initialCode: "# Placeholder Code for __closure__ Attribute\\nprint('__closure__ Attribute')",
        exercise: { task: "[Placeholder Task] Try writing code for __closure__ Attribute", check: (out) => out.includes("__closure__ Attribute") },
        quiz: { question: "[Placeholder Quiz] What does __closure__ Attribute do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p11',
    title: "Decorator",
    lessons: [
      {
        id: 'l11-1',
        title: "Decorator",
        content: "[Placeholder] Content for Decorator",
        initialCode: "# Placeholder Code for Decorator\\nprint('Decorator')",
        exercise: { task: "[Placeholder Task] Try writing code for Decorator", check: (out) => out.includes("Decorator") },
        quiz: { question: "[Placeholder Quiz] What does Decorator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-2',
        title: "Counter Application with Decorator",
        content: "[Placeholder] Content for Counter Application with Decorator",
        initialCode: "# Placeholder Code for Counter Application with Decorator\\nprint('Counter Application with Decorator')",
        exercise: { task: "[Placeholder Task] Try writing code for Counter Application with Decorator", check: (out) => out.includes("Counter Application with Decorator") },
        quiz: { question: "[Placeholder Quiz] What does Counter Application with Decorator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-3',
        title: "@Property",
        content: "[Placeholder] Content for @Property",
        initialCode: "# Placeholder Code for @Property\\nprint('@Property')",
        exercise: { task: "[Placeholder Task] Try writing code for @Property", check: (out) => out.includes("@Property") },
        quiz: { question: "[Placeholder Quiz] What does @Property do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-4',
        title: "Wraps",
        content: "[Placeholder] Content for Wraps",
        initialCode: "# Placeholder Code for Wraps\\nprint('Wraps')",
        exercise: { task: "[Placeholder Task] Try writing code for Wraps", check: (out) => out.includes("Wraps") },
        quiz: { question: "[Placeholder Quiz] What does Wraps do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-5',
        title: "Logger Application",
        content: "[Placeholder] Content for Logger Application",
        initialCode: "# Placeholder Code for Logger Application\\nprint('Logger Application')",
        exercise: { task: "[Placeholder Task] Try writing code for Logger Application", check: (out) => out.includes("Logger Application") },
        quiz: { question: "[Placeholder Quiz] What does Logger Application do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-6',
        title: "Timer Application Using Decorator",
        content: "[Placeholder] Content for Timer Application Using Decorator",
        initialCode: "# Placeholder Code for Timer Application Using Decorator\\nprint('Timer Application Using Decorator')",
        exercise: { task: "[Placeholder Task] Try writing code for Timer Application Using Decorator", check: (out) => out.includes("Timer Application Using Decorator") },
        quiz: { question: "[Placeholder Quiz] What does Timer Application Using Decorator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-7',
        title: "Cache Fibonacci using Decorator",
        content: "[Placeholder] Content for Cache Fibonacci using Decorator",
        initialCode: "# Placeholder Code for Cache Fibonacci using Decorator\\nprint('Cache Fibonacci using Decorator')",
        exercise: { task: "[Placeholder Task] Try writing code for Cache Fibonacci using Decorator", check: (out) => out.includes("Cache Fibonacci using Decorator") },
        quiz: { question: "[Placeholder Quiz] What does Cache Fibonacci using Decorator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-8',
        title: "Fibonacci Using Recursive",
        content: "[Placeholder] Content for Fibonacci Using Recursive",
        initialCode: "# Placeholder Code for Fibonacci Using Recursive\\nprint('Fibonacci Using Recursive')",
        exercise: { task: "[Placeholder Task] Try writing code for Fibonacci Using Recursive", check: (out) => out.includes("Fibonacci Using Recursive") },
        quiz: { question: "[Placeholder Quiz] What does Fibonacci Using Recursive do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-9',
        title: "Factorial with Decorator",
        content: "[Placeholder] Content for Factorial with Decorator",
        initialCode: "# Placeholder Code for Factorial with Decorator\\nprint('Factorial with Decorator')",
        exercise: { task: "[Placeholder Task] Try writing code for Factorial with Decorator", check: (out) => out.includes("Factorial with Decorator") },
        quiz: { question: "[Placeholder Quiz] What does Factorial with Decorator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-10',
        title: "@lru_cache",
        content: "[Placeholder] Content for @lru_cache",
        initialCode: "# Placeholder Code for @lru_cache\\nprint('@lru_cache')",
        exercise: { task: "[Placeholder Task] Try writing code for @lru_cache", check: (out) => out.includes("@lru_cache") },
        quiz: { question: "[Placeholder Quiz] What does @lru_cache do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-11',
        title: "Modules",
        content: "[Placeholder] Content for Modules",
        initialCode: "# Placeholder Code for Modules\\nprint('Modules')",
        exercise: { task: "[Placeholder Task] Try writing code for Modules", check: (out) => out.includes("Modules") },
        quiz: { question: "[Placeholder Quiz] What does Modules do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-12',
        title: "Globals Function",
        content: "[Placeholder] Content for Globals Function",
        initialCode: "# Placeholder Code for Globals Function\\nprint('Globals Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Globals Function", check: (out) => out.includes("Globals Function") },
        quiz: { question: "[Placeholder Quiz] What does Globals Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l11-13',
        title: "Delete Module",
        content: "[Placeholder] Content for Delete Module",
        initialCode: "# Placeholder Code for Delete Module\\nprint('Delete Module')",
        exercise: { task: "[Placeholder Task] Try writing code for Delete Module", check: (out) => out.includes("Delete Module") },
        quiz: { question: "[Placeholder Quiz] What does Delete Module do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p12',
    title: "Object and Class",
    lessons: [
      {
        id: 'l12-1',
        title: "Object and Class",
        content: "[Placeholder] Content for Object and Class",
        initialCode: "# Placeholder Code for Object and Class\\nprint('Object and Class')",
        exercise: { task: "[Placeholder Task] Try writing code for Object and Class", check: (out) => out.includes("Object and Class") },
        quiz: { question: "[Placeholder Quiz] What does Object and Class do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l12-2',
        title: "Adding attributes",
        content: "[Placeholder] Content for Adding attributes",
        initialCode: "# Placeholder Code for Adding attributes\\nprint('Adding attributes')",
        exercise: { task: "[Placeholder Task] Try writing code for Adding attributes", check: (out) => out.includes("Adding attributes") },
        quiz: { question: "[Placeholder Quiz] What does Adding attributes do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l12-3',
        title: "Adding Behaviors",
        content: "[Placeholder] Content for Adding Behaviors",
        initialCode: "# Placeholder Code for Adding Behaviors\\nprint('Adding Behaviors')",
        exercise: { task: "[Placeholder Task] Try writing code for Adding Behaviors", check: (out) => out.includes("Adding Behaviors") },
        quiz: { question: "[Placeholder Quiz] What does Adding Behaviors do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l12-4',
        title: "Self",
        content: "[Placeholder] Content for Self",
        initialCode: "# Placeholder Code for Self\\nprint('Self')",
        exercise: { task: "[Placeholder Task] Try writing code for Self", check: (out) => out.includes("Self") },
        quiz: { question: "[Placeholder Quiz] What does Self do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l12-5',
        title: "Update Attribute",
        content: "[Placeholder] Content for Update Attribute",
        initialCode: "# Placeholder Code for Update Attribute\\nprint('Update Attribute')",
        exercise: { task: "[Placeholder Task] Try writing code for Update Attribute", check: (out) => out.includes("Update Attribute") },
        quiz: { question: "[Placeholder Quiz] What does Update Attribute do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l12-6',
        title: "Class Attribute",
        content: "[Placeholder] Content for Class Attribute",
        initialCode: "# Placeholder Code for Class Attribute\\nprint('Class Attribute')",
        exercise: { task: "[Placeholder Task] Try writing code for Class Attribute", check: (out) => out.includes("Class Attribute") },
        quiz: { question: "[Placeholder Quiz] What does Class Attribute do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l12-7',
        title: "Class Function",
        content: "[Placeholder] Content for Class Function",
        initialCode: "# Placeholder Code for Class Function\\nprint('Class Function')",
        exercise: { task: "[Placeholder Task] Try writing code for Class Function", check: (out) => out.includes("Class Function") },
        quiz: { question: "[Placeholder Quiz] What does Class Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p13',
    title: "Inheritance",
    lessons: [
      {
        id: 'l13-1',
        title: "Inheritance",
        content: "[Placeholder] Content for Inheritance",
        initialCode: "# Placeholder Code for Inheritance\\nprint('Inheritance')",
        exercise: { task: "[Placeholder Task] Try writing code for Inheritance", check: (out) => out.includes("Inheritance") },
        quiz: { question: "[Placeholder Quiz] What does Inheritance do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l13-2',
        title: "Multiple Inheritance",
        content: "[Placeholder] Content for Multiple Inheritance",
        initialCode: "# Placeholder Code for Multiple Inheritance\\nprint('Multiple Inheritance')",
        exercise: { task: "[Placeholder Task] Try writing code for Multiple Inheritance", check: (out) => out.includes("Multiple Inheritance") },
        quiz: { question: "[Placeholder Quiz] What does Multiple Inheritance do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l13-3',
        title: "Multi-level Inheritance",
        content: "[Placeholder] Content for Multi-level Inheritance",
        initialCode: "# Placeholder Code for Multi-level Inheritance\\nprint('Multi-level Inheritance')",
        exercise: { task: "[Placeholder Task] Try writing code for Multi-level Inheritance", check: (out) => out.includes("Multi-level Inheritance") },
        quiz: { question: "[Placeholder Quiz] What does Multi-level Inheritance do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l13-4',
        title: "Issubclass () method",
        content: "[Placeholder] Content for Issubclass () method",
        initialCode: "# Placeholder Code for Issubclass () method\\nprint('Issubclass () method')",
        exercise: { task: "[Placeholder Task] Try writing code for Issubclass () method", check: (out) => out.includes("Issubclass () method") },
        quiz: { question: "[Placeholder Quiz] What does Issubclass () method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l13-5',
        title: "isinstance(obj",
        content: "[Placeholder] Content for isinstance(obj",
        initialCode: "# Placeholder Code for isinstance(obj\\nprint('isinstance(obj')",
        exercise: { task: "[Placeholder Task] Try writing code for isinstance(obj", check: (out) => out.includes("isinstance(obj") },
        quiz: { question: "[Placeholder Quiz] What does isinstance(obj do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l13-6',
        title: "class ) method",
        content: "[Placeholder] Content for class ) method",
        initialCode: "# Placeholder Code for class ) method\\nprint('class ) method')",
        exercise: { task: "[Placeholder Task] Try writing code for class ) method", check: (out) => out.includes("class ) method") },
        quiz: { question: "[Placeholder Quiz] What does class ) method do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p14',
    title: "Encapsulation",
    lessons: [
      {
        id: 'l14-1',
        title: "Encapsulation",
        content: "[Placeholder] Content for Encapsulation",
        initialCode: "# Placeholder Code for Encapsulation\\nprint('Encapsulation')",
        exercise: { task: "[Placeholder Task] Try writing code for Encapsulation", check: (out) => out.includes("Encapsulation") },
        quiz: { question: "[Placeholder Quiz] What does Encapsulation do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-2',
        title: "Private",
        content: "[Placeholder] Content for Private",
        initialCode: "# Placeholder Code for Private\\nprint('Private')",
        exercise: { task: "[Placeholder Task] Try writing code for Private", check: (out) => out.includes("Private") },
        quiz: { question: "[Placeholder Quiz] What does Private do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-3',
        title: "Polymorphism",
        content: "[Placeholder] Content for Polymorphism",
        initialCode: "# Placeholder Code for Polymorphism\\nprint('Polymorphism')",
        exercise: { task: "[Placeholder Task] Try writing code for Polymorphism", check: (out) => out.includes("Polymorphism") },
        quiz: { question: "[Placeholder Quiz] What does Polymorphism do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-4',
        title: "Polymorphism with class method",
        content: "[Placeholder] Content for Polymorphism with class method",
        initialCode: "# Placeholder Code for Polymorphism with class method\\nprint('Polymorphism with class method')",
        exercise: { task: "[Placeholder Task] Try writing code for Polymorphism with class method", check: (out) => out.includes("Polymorphism with class method") },
        quiz: { question: "[Placeholder Quiz] What does Polymorphism with class method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-5',
        title: "Operator Overloading",
        content: "[Placeholder] Content for Operator Overloading",
        initialCode: "# Placeholder Code for Operator Overloading\\nprint('Operator Overloading')",
        exercise: { task: "[Placeholder Task] Try writing code for Operator Overloading", check: (out) => out.includes("Operator Overloading") },
        quiz: { question: "[Placeholder Quiz] What does Operator Overloading do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-6',
        title: "Method Overloading",
        content: "[Placeholder] Content for Method Overloading",
        initialCode: "# Placeholder Code for Method Overloading\\nprint('Method Overloading')",
        exercise: { task: "[Placeholder Task] Try writing code for Method Overloading", check: (out) => out.includes("Method Overloading") },
        quiz: { question: "[Placeholder Quiz] What does Method Overloading do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-7',
        title: "Method Overriding",
        content: "[Placeholder] Content for Method Overriding",
        initialCode: "# Placeholder Code for Method Overriding\\nprint('Method Overriding')",
        exercise: { task: "[Placeholder Task] Try writing code for Method Overriding", check: (out) => out.includes("Method Overriding") },
        quiz: { question: "[Placeholder Quiz] What does Method Overriding do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-8',
        title: "Abstraction",
        content: "[Placeholder] Content for Abstraction",
        initialCode: "# Placeholder Code for Abstraction\\nprint('Abstraction')",
        exercise: { task: "[Placeholder Task] Try writing code for Abstraction", check: (out) => out.includes("Abstraction") },
        quiz: { question: "[Placeholder Quiz] What does Abstraction do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-9',
        title: "Abstraction For What?",
        content: "[Placeholder] Content for Abstraction For What?",
        initialCode: "# Placeholder Code for Abstraction For What?\\nprint('Abstraction For What?')",
        exercise: { task: "[Placeholder Task] Try writing code for Abstraction For What?", check: (out) => out.includes("Abstraction For What?") },
        quiz: { question: "[Placeholder Quiz] What does Abstraction For What? do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-10',
        title: "Abstract Method and Class",
        content: "[Placeholder] Content for Abstract Method and Class",
        initialCode: "# Placeholder Code for Abstract Method and Class\\nprint('Abstract Method and Class')",
        exercise: { task: "[Placeholder Task] Try writing code for Abstract Method and Class", check: (out) => out.includes("Abstract Method and Class") },
        quiz: { question: "[Placeholder Quiz] What does Abstract Method and Class do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l14-11',
        title: "Super()",
        content: "[Placeholder] Content for Super()",
        initialCode: "# Placeholder Code for Super()\\nprint('Super()')",
        exercise: { task: "[Placeholder Task] Try writing code for Super()", check: (out) => out.includes("Super()") },
        quiz: { question: "[Placeholder Quiz] What does Super() do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p15',
    title: "File Handling",
    lessons: [
      {
        id: 'l15-1',
        title: "File Handling",
        content: "[Placeholder] Content for File Handling",
        initialCode: "# Placeholder Code for File Handling\\nprint('File Handling')",
        exercise: { task: "[Placeholder Task] Try writing code for File Handling", check: (out) => out.includes("File Handling") },
        quiz: { question: "[Placeholder Quiz] What does File Handling do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-2',
        title: "Reading From File",
        content: "[Placeholder] Content for Reading From File",
        initialCode: "# Placeholder Code for Reading From File\\nprint('Reading From File')",
        exercise: { task: "[Placeholder Task] Try writing code for Reading From File", check: (out) => out.includes("Reading From File") },
        quiz: { question: "[Placeholder Quiz] What does Reading From File do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-3',
        title: "Readlines and Readline",
        content: "[Placeholder] Content for Readlines and Readline",
        initialCode: "# Placeholder Code for Readlines and Readline\\nprint('Readlines and Readline')",
        exercise: { task: "[Placeholder Task] Try writing code for Readlines and Readline", check: (out) => out.includes("Readlines and Readline") },
        quiz: { question: "[Placeholder Quiz] What does Readlines and Readline do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-4',
        title: "Writing the File",
        content: "[Placeholder] Content for Writing the File",
        initialCode: "# Placeholder Code for Writing the File\\nprint('Writing the File')",
        exercise: { task: "[Placeholder Task] Try writing code for Writing the File", check: (out) => out.includes("Writing the File") },
        quiz: { question: "[Placeholder Quiz] What does Writing the File do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-5',
        title: "Creating a File",
        content: "[Placeholder] Content for Creating a File",
        initialCode: "# Placeholder Code for Creating a File\\nprint('Creating a File')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a File", check: (out) => out.includes("Creating a File") },
        quiz: { question: "[Placeholder Quiz] What does Creating a File do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-6',
        title: "File Accessing Mode",
        content: "[Placeholder] Content for File Accessing Mode",
        initialCode: "# Placeholder Code for File Accessing Mode\\nprint('File Accessing Mode')",
        exercise: { task: "[Placeholder Task] Try writing code for File Accessing Mode", check: (out) => out.includes("File Accessing Mode") },
        quiz: { question: "[Placeholder Quiz] What does File Accessing Mode do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-7',
        title: "With Statement with File",
        content: "[Placeholder] Content for With Statement with File",
        initialCode: "# Placeholder Code for With Statement with File\\nprint('With Statement with File')",
        exercise: { task: "[Placeholder Task] Try writing code for With Statement with File", check: (out) => out.includes("With Statement with File") },
        quiz: { question: "[Placeholder Quiz] What does With Statement with File do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-8',
        title: "File Pointer",
        content: "[Placeholder] Content for File Pointer",
        initialCode: "# Placeholder Code for File Pointer\\nprint('File Pointer')",
        exercise: { task: "[Placeholder Task] Try writing code for File Pointer", check: (out) => out.includes("File Pointer") },
        quiz: { question: "[Placeholder Quiz] What does File Pointer do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l15-9',
        title: "seek() Function",
        content: "[Placeholder] Content for seek() Function",
        initialCode: "# Placeholder Code for seek() Function\\nprint('seek() Function')",
        exercise: { task: "[Placeholder Task] Try writing code for seek() Function", check: (out) => out.includes("seek() Function") },
        quiz: { question: "[Placeholder Quiz] What does seek() Function do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p16',
    title: "Exception",
    lessons: [
      {
        id: 'l16-1',
        title: "Exception",
        content: "[Placeholder] Content for Exception",
        initialCode: "# Placeholder Code for Exception\\nprint('Exception')",
        exercise: { task: "[Placeholder Task] Try writing code for Exception", check: (out) => out.includes("Exception") },
        quiz: { question: "[Placeholder Quiz] What does Exception do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l16-2',
        title: "Handling Exception",
        content: "[Placeholder] Content for Handling Exception",
        initialCode: "# Placeholder Code for Handling Exception\\nprint('Handling Exception')",
        exercise: { task: "[Placeholder Task] Try writing code for Handling Exception", check: (out) => out.includes("Handling Exception") },
        quiz: { question: "[Placeholder Quiz] What does Handling Exception do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l16-3',
        title: "Try",
        content: "[Placeholder] Content for Try",
        initialCode: "# Placeholder Code for Try\\nprint('Try')",
        exercise: { task: "[Placeholder Task] Try writing code for Try", check: (out) => out.includes("Try") },
        quiz: { question: "[Placeholder Quiz] What does Try do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l16-4',
        title: "except",
        content: "[Placeholder] Content for except",
        initialCode: "# Placeholder Code for except\\nprint('except')",
        exercise: { task: "[Placeholder Task] Try writing code for except", check: (out) => out.includes("except") },
        quiz: { question: "[Placeholder Quiz] What does except do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l16-5',
        title: "finally",
        content: "[Placeholder] Content for finally",
        initialCode: "# Placeholder Code for finally\\nprint('finally')",
        exercise: { task: "[Placeholder Task] Try writing code for finally", check: (out) => out.includes("finally") },
        quiz: { question: "[Placeholder Quiz] What does finally do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l16-6',
        title: "Raise",
        content: "[Placeholder] Content for Raise",
        initialCode: "# Placeholder Code for Raise\\nprint('Raise')",
        exercise: { task: "[Placeholder Task] Try writing code for Raise", check: (out) => out.includes("Raise") },
        quiz: { question: "[Placeholder Quiz] What does Raise do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l16-7',
        title: "Creating Own Exception",
        content: "[Placeholder] Content for Creating Own Exception",
        initialCode: "# Placeholder Code for Creating Own Exception\\nprint('Creating Own Exception')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating Own Exception", check: (out) => out.includes("Creating Own Exception") },
        quiz: { question: "[Placeholder Quiz] What does Creating Own Exception do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p17',
    title: "JSON (JavaScript Object Notation)",
    lessons: [
      {
        id: 'l17-1',
        title: "JSON (JavaScript Object Notation)",
        content: "[Placeholder] Content for JSON (JavaScript Object Notation)",
        initialCode: "# Placeholder Code for JSON (JavaScript Object Notation)\\nprint('JSON (JavaScript Object Notation)')",
        exercise: { task: "[Placeholder Task] Try writing code for JSON (JavaScript Object Notation)", check: (out) => out.includes("JSON (JavaScript Object Notation)") },
        quiz: { question: "[Placeholder Quiz] What does JSON (JavaScript Object Notation) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l17-2',
        title: "JSON Values To Python",
        content: "[Placeholder] Content for JSON Values To Python",
        initialCode: "# Placeholder Code for JSON Values To Python\\nprint('JSON Values To Python')",
        exercise: { task: "[Placeholder Task] Try writing code for JSON Values To Python", check: (out) => out.includes("JSON Values To Python") },
        quiz: { question: "[Placeholder Quiz] What does JSON Values To Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l17-3',
        title: "Serialization JSON",
        content: "[Placeholder] Content for Serialization JSON",
        initialCode: "# Placeholder Code for Serialization JSON\\nprint('Serialization JSON')",
        exercise: { task: "[Placeholder Task] Try writing code for Serialization JSON", check: (out) => out.includes("Serialization JSON") },
        quiz: { question: "[Placeholder Quiz] What does Serialization JSON do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l17-4',
        title: "Dump and Dumps",
        content: "[Placeholder] Content for Dump and Dumps",
        initialCode: "# Placeholder Code for Dump and Dumps\\nprint('Dump and Dumps')",
        exercise: { task: "[Placeholder Task] Try writing code for Dump and Dumps", check: (out) => out.includes("Dump and Dumps") },
        quiz: { question: "[Placeholder Quiz] What does Dump and Dumps do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l17-5',
        title: "Deserializing JSON",
        content: "[Placeholder] Content for Deserializing JSON",
        initialCode: "# Placeholder Code for Deserializing JSON\\nprint('Deserializing JSON')",
        exercise: { task: "[Placeholder Task] Try writing code for Deserializing JSON", check: (out) => out.includes("Deserializing JSON") },
        quiz: { question: "[Placeholder Quiz] What does Deserializing JSON do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l17-6',
        title: "Load and Loads",
        content: "[Placeholder] Content for Load and Loads",
        initialCode: "# Placeholder Code for Load and Loads\\nprint('Load and Loads')",
        exercise: { task: "[Placeholder Task] Try writing code for Load and Loads", check: (out) => out.includes("Load and Loads") },
        quiz: { question: "[Placeholder Quiz] What does Load and Loads do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l17-7',
        title: "Project Using Weather API",
        content: "[Placeholder] Content for Project Using Weather API",
        initialCode: "# Placeholder Code for Project Using Weather API\\nprint('Project Using Weather API')",
        exercise: { task: "[Placeholder Task] Try writing code for Project Using Weather API", check: (out) => out.includes("Project Using Weather API") },
        quiz: { question: "[Placeholder Quiz] What does Project Using Weather API do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p18',
    title: "Database With MySQL",
    lessons: [
      {
        id: 'l18-1',
        title: "Database With MySQL",
        content: "[Placeholder] Content for Database With MySQL",
        initialCode: "# Placeholder Code for Database With MySQL\\nprint('Database With MySQL')",
        exercise: { task: "[Placeholder Task] Try writing code for Database With MySQL", check: (out) => out.includes("Database With MySQL") },
        quiz: { question: "[Placeholder Quiz] What does Database With MySQL do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-2',
        title: "Connecting to MySQL Database",
        content: "[Placeholder] Content for Connecting to MySQL Database",
        initialCode: "# Placeholder Code for Connecting to MySQL Database\\nprint('Connecting to MySQL Database')",
        exercise: { task: "[Placeholder Task] Try writing code for Connecting to MySQL Database", check: (out) => out.includes("Connecting to MySQL Database") },
        quiz: { question: "[Placeholder Quiz] What does Connecting to MySQL Database do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-3',
        title: "Creating Database",
        content: "[Placeholder] Content for Creating Database",
        initialCode: "# Placeholder Code for Creating Database\\nprint('Creating Database')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating Database", check: (out) => out.includes("Creating Database") },
        quiz: { question: "[Placeholder Quiz] What does Creating Database do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-4',
        title: "Creating a Table",
        content: "[Placeholder] Content for Creating a Table",
        initialCode: "# Placeholder Code for Creating a Table\\nprint('Creating a Table')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a Table", check: (out) => out.includes("Creating a Table") },
        quiz: { question: "[Placeholder Quiz] What does Creating a Table do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-5',
        title: "Adding More column",
        content: "[Placeholder] Content for Adding More column",
        initialCode: "# Placeholder Code for Adding More column\\nprint('Adding More column')",
        exercise: { task: "[Placeholder Task] Try writing code for Adding More column", check: (out) => out.includes("Adding More column") },
        quiz: { question: "[Placeholder Quiz] What does Adding More column do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-6',
        title: "Adding Data to the Table",
        content: "[Placeholder] Content for Adding Data to the Table",
        initialCode: "# Placeholder Code for Adding Data to the Table\\nprint('Adding Data to the Table')",
        exercise: { task: "[Placeholder Task] Try writing code for Adding Data to the Table", check: (out) => out.includes("Adding Data to the Table") },
        quiz: { question: "[Placeholder Quiz] What does Adding Data to the Table do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-7',
        title: "Insert Many Data to the Table",
        content: "[Placeholder] Content for Insert Many Data to the Table",
        initialCode: "# Placeholder Code for Insert Many Data to the Table\\nprint('Insert Many Data to the Table')",
        exercise: { task: "[Placeholder Task] Try writing code for Insert Many Data to the Table", check: (out) => out.includes("Insert Many Data to the Table") },
        quiz: { question: "[Placeholder Quiz] What does Insert Many Data to the Table do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-8',
        title: "Fetching",
        content: "[Placeholder] Content for Fetching",
        initialCode: "# Placeholder Code for Fetching\\nprint('Fetching')",
        exercise: { task: "[Placeholder Task] Try writing code for Fetching", check: (out) => out.includes("Fetching") },
        quiz: { question: "[Placeholder Quiz] What does Fetching do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-9',
        title: "Fetching only one",
        content: "[Placeholder] Content for Fetching only one",
        initialCode: "# Placeholder Code for Fetching only one\\nprint('Fetching only one')",
        exercise: { task: "[Placeholder Task] Try writing code for Fetching only one", check: (out) => out.includes("Fetching only one") },
        quiz: { question: "[Placeholder Quiz] What does Fetching only one do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-10',
        title: "Format",
        content: "[Placeholder] Content for Format",
        initialCode: "# Placeholder Code for Format\\nprint('Format')",
        exercise: { task: "[Placeholder Task] Try writing code for Format", check: (out) => out.includes("Format") },
        quiz: { question: "[Placeholder Quiz] What does Format do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-11',
        title: "Using where",
        content: "[Placeholder] Content for Using where",
        initialCode: "# Placeholder Code for Using where\\nprint('Using where')",
        exercise: { task: "[Placeholder Task] Try writing code for Using where", check: (out) => out.includes("Using where") },
        quiz: { question: "[Placeholder Quiz] What does Using where do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-12',
        title: "Order",
        content: "[Placeholder] Content for Order",
        initialCode: "# Placeholder Code for Order\\nprint('Order')",
        exercise: { task: "[Placeholder Task] Try writing code for Order", check: (out) => out.includes("Order") },
        quiz: { question: "[Placeholder Quiz] What does Order do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-13',
        title: "Update",
        content: "[Placeholder] Content for Update",
        initialCode: "# Placeholder Code for Update\\nprint('Update')",
        exercise: { task: "[Placeholder Task] Try writing code for Update", check: (out) => out.includes("Update") },
        quiz: { question: "[Placeholder Quiz] What does Update do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-14',
        title: "Delete",
        content: "[Placeholder] Content for Delete",
        initialCode: "# Placeholder Code for Delete\\nprint('Delete')",
        exercise: { task: "[Placeholder Task] Try writing code for Delete", check: (out) => out.includes("Delete") },
        quiz: { question: "[Placeholder Quiz] What does Delete do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-15',
        title: "Join Table",
        content: "[Placeholder] Content for Join Table",
        initialCode: "# Placeholder Code for Join Table\\nprint('Join Table')",
        exercise: { task: "[Placeholder Task] Try writing code for Join Table", check: (out) => out.includes("Join Table") },
        quiz: { question: "[Placeholder Quiz] What does Join Table do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-16',
        title: "MySQL in CLOUD",
        content: "[Placeholder] Content for MySQL in CLOUD",
        initialCode: "# Placeholder Code for MySQL in CLOUD\\nprint('MySQL in CLOUD')",
        exercise: { task: "[Placeholder Task] Try writing code for MySQL in CLOUD", check: (out) => out.includes("MySQL in CLOUD") },
        quiz: { question: "[Placeholder Quiz] What does MySQL in CLOUD do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-17',
        title: "Connect To Cloud Database With Python",
        content: "[Placeholder] Content for Connect To Cloud Database With Python",
        initialCode: "# Placeholder Code for Connect To Cloud Database With Python\\nprint('Connect To Cloud Database With Python')",
        exercise: { task: "[Placeholder Task] Try writing code for Connect To Cloud Database With Python", check: (out) => out.includes("Connect To Cloud Database With Python") },
        quiz: { question: "[Placeholder Quiz] What does Connect To Cloud Database With Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l18-18',
        title: "Creating a Database Table in Cloud",
        content: "[Placeholder] Content for Creating a Database Table in Cloud",
        initialCode: "# Placeholder Code for Creating a Database Table in Cloud\\nprint('Creating a Database Table in Cloud')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a Database Table in Cloud", check: (out) => out.includes("Creating a Database Table in Cloud") },
        quiz: { question: "[Placeholder Quiz] What does Creating a Database Table in Cloud do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p19',
    title: "MongoDB with Python",
    lessons: [
      {
        id: 'l19-1',
        title: "MongoDB with Python",
        content: "[Placeholder] Content for MongoDB with Python",
        initialCode: "# Placeholder Code for MongoDB with Python\\nprint('MongoDB with Python')",
        exercise: { task: "[Placeholder Task] Try writing code for MongoDB with Python", check: (out) => out.includes("MongoDB with Python") },
        quiz: { question: "[Placeholder Quiz] What does MongoDB with Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-2',
        title: "Data Structure Between MySQL and MongoDB",
        content: "[Placeholder] Content for Data Structure Between MySQL and MongoDB",
        initialCode: "# Placeholder Code for Data Structure Between MySQL and MongoDB\\nprint('Data Structure Between MySQL and MongoDB')",
        exercise: { task: "[Placeholder Task] Try writing code for Data Structure Between MySQL and MongoDB", check: (out) => out.includes("Data Structure Between MySQL and MongoDB") },
        quiz: { question: "[Placeholder Quiz] What does Data Structure Between MySQL and MongoDB do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-3',
        title: "Connection MongoDB with Python",
        content: "[Placeholder] Content for Connection MongoDB with Python",
        initialCode: "# Placeholder Code for Connection MongoDB with Python\\nprint('Connection MongoDB with Python')",
        exercise: { task: "[Placeholder Task] Try writing code for Connection MongoDB with Python", check: (out) => out.includes("Connection MongoDB with Python") },
        quiz: { question: "[Placeholder Quiz] What does Connection MongoDB with Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-4',
        title: "MongoDB Primary Key",
        content: "[Placeholder] Content for MongoDB Primary Key",
        initialCode: "# Placeholder Code for MongoDB Primary Key\\nprint('MongoDB Primary Key')",
        exercise: { task: "[Placeholder Task] Try writing code for MongoDB Primary Key", check: (out) => out.includes("MongoDB Primary Key") },
        quiz: { question: "[Placeholder Quiz] What does MongoDB Primary Key do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-5',
        title: "Distinct",
        content: "[Placeholder] Content for Distinct",
        initialCode: "# Placeholder Code for Distinct\\nprint('Distinct')",
        exercise: { task: "[Placeholder Task] Try writing code for Distinct", check: (out) => out.includes("Distinct") },
        quiz: { question: "[Placeholder Quiz] What does Distinct do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-6',
        title: "insert_many()",
        content: "[Placeholder] Content for insert_many()",
        initialCode: "# Placeholder Code for insert_many()\\nprint('insert_many()')",
        exercise: { task: "[Placeholder Task] Try writing code for insert_many()", check: (out) => out.includes("insert_many()") },
        quiz: { question: "[Placeholder Quiz] What does insert_many() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-7',
        title: "Properties Zero",
        content: "[Placeholder] Content for Properties Zero",
        initialCode: "# Placeholder Code for Properties Zero\\nprint('Properties Zero')",
        exercise: { task: "[Placeholder Task] Try writing code for Properties Zero", check: (out) => out.includes("Properties Zero") },
        quiz: { question: "[Placeholder Quiz] What does Properties Zero do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-8',
        title: "Properties One",
        content: "[Placeholder] Content for Properties One",
        initialCode: "# Placeholder Code for Properties One\\nprint('Properties One')",
        exercise: { task: "[Placeholder Task] Try writing code for Properties One", check: (out) => out.includes("Properties One") },
        quiz: { question: "[Placeholder Quiz] What does Properties One do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-9',
        title: "MongoDB Query With Operator",
        content: "[Placeholder] Content for MongoDB Query With Operator",
        initialCode: "# Placeholder Code for MongoDB Query With Operator\\nprint('MongoDB Query With Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for MongoDB Query With Operator", check: (out) => out.includes("MongoDB Query With Operator") },
        quiz: { question: "[Placeholder Quiz] What does MongoDB Query With Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-10',
        title: "MongoDB REGEX",
        content: "[Placeholder] Content for MongoDB REGEX",
        initialCode: "# Placeholder Code for MongoDB REGEX\\nprint('MongoDB REGEX')",
        exercise: { task: "[Placeholder Task] Try writing code for MongoDB REGEX", check: (out) => out.includes("MongoDB REGEX") },
        quiz: { question: "[Placeholder Quiz] What does MongoDB REGEX do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-11',
        title: "Ascending and Descending Data",
        content: "[Placeholder] Content for Ascending and Descending Data",
        initialCode: "# Placeholder Code for Ascending and Descending Data\\nprint('Ascending and Descending Data')",
        exercise: { task: "[Placeholder Task] Try writing code for Ascending and Descending Data", check: (out) => out.includes("Ascending and Descending Data") },
        quiz: { question: "[Placeholder Quiz] What does Ascending and Descending Data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-12',
        title: "Delete",
        content: "[Placeholder] Content for Delete",
        initialCode: "# Placeholder Code for Delete\\nprint('Delete')",
        exercise: { task: "[Placeholder Task] Try writing code for Delete", check: (out) => out.includes("Delete") },
        quiz: { question: "[Placeholder Quiz] What does Delete do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-13',
        title: "Drop collection",
        content: "[Placeholder] Content for Drop collection",
        initialCode: "# Placeholder Code for Drop collection\\nprint('Drop collection')",
        exercise: { task: "[Placeholder Task] Try writing code for Drop collection", check: (out) => out.includes("Drop collection") },
        quiz: { question: "[Placeholder Quiz] What does Drop collection do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-14',
        title: "MongoDB CSV file",
        content: "[Placeholder] Content for MongoDB CSV file",
        initialCode: "# Placeholder Code for MongoDB CSV file\\nprint('MongoDB CSV file')",
        exercise: { task: "[Placeholder Task] Try writing code for MongoDB CSV file", check: (out) => out.includes("MongoDB CSV file") },
        quiz: { question: "[Placeholder Quiz] What does MongoDB CSV file do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-15',
        title: "Update",
        content: "[Placeholder] Content for Update",
        initialCode: "# Placeholder Code for Update\\nprint('Update')",
        exercise: { task: "[Placeholder Task] Try writing code for Update", check: (out) => out.includes("Update") },
        quiz: { question: "[Placeholder Quiz] What does Update do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-16',
        title: "Update Many",
        content: "[Placeholder] Content for Update Many",
        initialCode: "# Placeholder Code for Update Many\\nprint('Update Many')",
        exercise: { task: "[Placeholder Task] Try writing code for Update Many", check: (out) => out.includes("Update Many") },
        quiz: { question: "[Placeholder Quiz] What does Update Many do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-17',
        title: "limit()",
        content: "[Placeholder] Content for limit()",
        initialCode: "# Placeholder Code for limit()\\nprint('limit()')",
        exercise: { task: "[Placeholder Task] Try writing code for limit()", check: (out) => out.includes("limit()") },
        quiz: { question: "[Placeholder Quiz] What does limit() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l19-18',
        title: "Atlas Cloud",
        content: "[Placeholder] Content for Atlas Cloud",
        initialCode: "# Placeholder Code for Atlas Cloud\\nprint('Atlas Cloud')",
        exercise: { task: "[Placeholder Task] Try writing code for Atlas Cloud", check: (out) => out.includes("Atlas Cloud") },
        quiz: { question: "[Placeholder Quiz] What does Atlas Cloud do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p20',
    title: "Django( Web Development)",
    lessons: [
      {
        id: 'l20-1',
        title: "Django( Web Development)",
        content: "[Placeholder] Content for Django( Web Development)",
        initialCode: "# Placeholder Code for Django( Web Development)\\nprint('Django( Web Development)')",
        exercise: { task: "[Placeholder Task] Try writing code for Django( Web Development)", check: (out) => out.includes("Django( Web Development)") },
        quiz: { question: "[Placeholder Quiz] What does Django( Web Development) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-2',
        title: "First Project With Django",
        content: "[Placeholder] Content for First Project With Django",
        initialCode: "# Placeholder Code for First Project With Django\\nprint('First Project With Django')",
        exercise: { task: "[Placeholder Task] Try writing code for First Project With Django", check: (out) => out.includes("First Project With Django") },
        quiz: { question: "[Placeholder Quiz] What does First Project With Django do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-3',
        title: "First Step",
        content: "[Placeholder] Content for First Step",
        initialCode: "# Placeholder Code for First Step\\nprint('First Step')",
        exercise: { task: "[Placeholder Task] Try writing code for First Step", check: (out) => out.includes("First Step") },
        quiz: { question: "[Placeholder Quiz] What does First Step do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-4',
        title: "Second Step",
        content: "[Placeholder] Content for Second Step",
        initialCode: "# Placeholder Code for Second Step\\nprint('Second Step')",
        exercise: { task: "[Placeholder Task] Try writing code for Second Step", check: (out) => out.includes("Second Step") },
        quiz: { question: "[Placeholder Quiz] What does Second Step do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-5',
        title: "Third Step",
        content: "[Placeholder] Content for Third Step",
        initialCode: "# Placeholder Code for Third Step\\nprint('Third Step')",
        exercise: { task: "[Placeholder Task] Try writing code for Third Step", check: (out) => out.includes("Third Step") },
        quiz: { question: "[Placeholder Quiz] What does Third Step do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-6',
        title: "Django Template Language",
        content: "[Placeholder] Content for Django Template Language",
        initialCode: "# Placeholder Code for Django Template Language\\nprint('Django Template Language')",
        exercise: { task: "[Placeholder Task] Try writing code for Django Template Language", check: (out) => out.includes("Django Template Language") },
        quiz: { question: "[Placeholder Quiz] What does Django Template Language do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-7',
        title: "MongoDB and Django",
        content: "[Placeholder] Content for MongoDB and Django",
        initialCode: "# Placeholder Code for MongoDB and Django\\nprint('MongoDB and Django')",
        exercise: { task: "[Placeholder Task] Try writing code for MongoDB and Django", check: (out) => out.includes("MongoDB and Django") },
        quiz: { question: "[Placeholder Quiz] What does MongoDB and Django do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-8',
        title: "Template Inheritance",
        content: "[Placeholder] Content for Template Inheritance",
        initialCode: "# Placeholder Code for Template Inheritance\\nprint('Template Inheritance')",
        exercise: { task: "[Placeholder Task] Try writing code for Template Inheritance", check: (out) => out.includes("Template Inheritance") },
        quiz: { question: "[Placeholder Quiz] What does Template Inheritance do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-9',
        title: "Django Form Action",
        content: "[Placeholder] Content for Django Form Action",
        initialCode: "# Placeholder Code for Django Form Action\\nprint('Django Form Action')",
        exercise: { task: "[Placeholder Task] Try writing code for Django Form Action", check: (out) => out.includes("Django Form Action") },
        quiz: { question: "[Placeholder Quiz] What does Django Form Action do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-10',
        title: "GET",
        content: "[Placeholder] Content for GET",
        initialCode: "# Placeholder Code for GET\\nprint('GET')",
        exercise: { task: "[Placeholder Task] Try writing code for GET", check: (out) => out.includes("GET") },
        quiz: { question: "[Placeholder Quiz] What does GET do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l20-11',
        title: "POST",
        content: "[Placeholder] Content for POST",
        initialCode: "# Placeholder Code for POST\\nprint('POST')",
        exercise: { task: "[Placeholder Task] Try writing code for POST", check: (out) => out.includes("POST") },
        quiz: { question: "[Placeholder Quiz] What does POST do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p21',
    title: "Application With PostgreSQL",
    lessons: [
      {
        id: 'l21-1',
        title: "Application With PostgreSQL",
        content: "[Placeholder] Content for Application With PostgreSQL",
        initialCode: "# Placeholder Code for Application With PostgreSQL\\nprint('Application With PostgreSQL')",
        exercise: { task: "[Placeholder Task] Try writing code for Application With PostgreSQL", check: (out) => out.includes("Application With PostgreSQL") },
        quiz: { question: "[Placeholder Quiz] What does Application With PostgreSQL do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l21-2',
        title: "Migration",
        content: "[Placeholder] Content for Migration",
        initialCode: "# Placeholder Code for Migration\\nprint('Migration')",
        exercise: { task: "[Placeholder Task] Try writing code for Migration", check: (out) => out.includes("Migration") },
        quiz: { question: "[Placeholder Quiz] What does Migration do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l21-3',
        title: "Adding template in Application",
        content: "[Placeholder] Content for Adding template in Application",
        initialCode: "# Placeholder Code for Adding template in Application\\nprint('Adding template in Application')",
        exercise: { task: "[Placeholder Task] Try writing code for Adding template in Application", check: (out) => out.includes("Adding template in Application") },
        quiz: { question: "[Placeholder Quiz] What does Adding template in Application do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l21-4',
        title: "Application Design",
        content: "[Placeholder] Content for Application Design",
        initialCode: "# Placeholder Code for Application Design\\nprint('Application Design')",
        exercise: { task: "[Placeholder Task] Try writing code for Application Design", check: (out) => out.includes("Application Design") },
        quiz: { question: "[Placeholder Quiz] What does Application Design do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l21-5',
        title: "Adding Data To PostgreSQL",
        content: "[Placeholder] Content for Adding Data To PostgreSQL",
        initialCode: "# Placeholder Code for Adding Data To PostgreSQL\\nprint('Adding Data To PostgreSQL')",
        exercise: { task: "[Placeholder Task] Try writing code for Adding Data To PostgreSQL", check: (out) => out.includes("Adding Data To PostgreSQL") },
        quiz: { question: "[Placeholder Quiz] What does Adding Data To PostgreSQL do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l21-6',
        title: "Fetching Data From PostgreSQL",
        content: "[Placeholder] Content for Fetching Data From PostgreSQL",
        initialCode: "# Placeholder Code for Fetching Data From PostgreSQL\\nprint('Fetching Data From PostgreSQL')",
        exercise: { task: "[Placeholder Task] Try writing code for Fetching Data From PostgreSQL", check: (out) => out.includes("Fetching Data From PostgreSQL") },
        quiz: { question: "[Placeholder Quiz] What does Fetching Data From PostgreSQL do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l21-7',
        title: "Delete Items",
        content: "[Placeholder] Content for Delete Items",
        initialCode: "# Placeholder Code for Delete Items\\nprint('Delete Items')",
        exercise: { task: "[Placeholder Task] Try writing code for Delete Items", check: (out) => out.includes("Delete Items") },
        quiz: { question: "[Placeholder Quiz] What does Delete Items do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p22',
    title: "Practical RESTful API",
    lessons: [
      {
        id: 'l22-1',
        title: "Practical RESTful API",
        content: "[Placeholder] Content for Practical RESTful API",
        initialCode: "# Placeholder Code for Practical RESTful API\\nprint('Practical RESTful API')",
        exercise: { task: "[Placeholder Task] Try writing code for Practical RESTful API", check: (out) => out.includes("Practical RESTful API") },
        quiz: { question: "[Placeholder Quiz] What does Practical RESTful API do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-2',
        title: "Django REST Framework",
        content: "[Placeholder] Content for Django REST Framework",
        initialCode: "# Placeholder Code for Django REST Framework\\nprint('Django REST Framework')",
        exercise: { task: "[Placeholder Task] Try writing code for Django REST Framework", check: (out) => out.includes("Django REST Framework") },
        quiz: { question: "[Placeholder Quiz] What does Django REST Framework do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-3',
        title: "Migration",
        content: "[Placeholder] Content for Migration",
        initialCode: "# Placeholder Code for Migration\\nprint('Migration')",
        exercise: { task: "[Placeholder Task] Try writing code for Migration", check: (out) => out.includes("Migration") },
        quiz: { question: "[Placeholder Quiz] What does Migration do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-4',
        title: "Serializers",
        content: "[Placeholder] Content for Serializers",
        initialCode: "# Placeholder Code for Serializers\\nprint('Serializers')",
        exercise: { task: "[Placeholder Task] Try writing code for Serializers", check: (out) => out.includes("Serializers") },
        quiz: { question: "[Placeholder Quiz] What does Serializers do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-5',
        title: "Viewsets",
        content: "[Placeholder] Content for Viewsets",
        initialCode: "# Placeholder Code for Viewsets\\nprint('Viewsets')",
        exercise: { task: "[Placeholder Task] Try writing code for Viewsets", check: (out) => out.includes("Viewsets") },
        quiz: { question: "[Placeholder Quiz] What does Viewsets do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-6',
        title: "Routers and DefaultRouter",
        content: "[Placeholder] Content for Routers and DefaultRouter",
        initialCode: "# Placeholder Code for Routers and DefaultRouter\\nprint('Routers and DefaultRouter')",
        exercise: { task: "[Placeholder Task] Try writing code for Routers and DefaultRouter", check: (out) => out.includes("Routers and DefaultRouter") },
        quiz: { question: "[Placeholder Quiz] What does Routers and DefaultRouter do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-7',
        title: "Postman",
        content: "[Placeholder] Content for Postman",
        initialCode: "# Placeholder Code for Postman\\nprint('Postman')",
        exercise: { task: "[Placeholder Task] Try writing code for Postman", check: (out) => out.includes("Postman") },
        quiz: { question: "[Placeholder Quiz] What does Postman do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-8',
        title: "Django Form Login/out",
        content: "[Placeholder] Content for Django Form Login/out",
        initialCode: "# Placeholder Code for Django Form Login/out\\nprint('Django Form Login/out')",
        exercise: { task: "[Placeholder Task] Try writing code for Django Form Login/out", check: (out) => out.includes("Django Form Login/out") },
        quiz: { question: "[Placeholder Quiz] What does Django Form Login/out do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-9',
        title: "Django Admin",
        content: "[Placeholder] Content for Django Admin",
        initialCode: "# Placeholder Code for Django Admin\\nprint('Django Admin')",
        exercise: { task: "[Placeholder Task] Try writing code for Django Admin", check: (out) => out.includes("Django Admin") },
        quiz: { question: "[Placeholder Quiz] What does Django Admin do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-10',
        title: "LoginView",
        content: "[Placeholder] Content for LoginView",
        initialCode: "# Placeholder Code for LoginView\\nprint('LoginView')",
        exercise: { task: "[Placeholder Task] Try writing code for LoginView", check: (out) => out.includes("LoginView") },
        quiz: { question: "[Placeholder Quiz] What does LoginView do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l22-11',
        title: "is_authenticated",
        content: "[Placeholder] Content for is_authenticated",
        initialCode: "# Placeholder Code for is_authenticated\\nprint('is_authenticated')",
        exercise: { task: "[Placeholder Task] Try writing code for is_authenticated", check: (out) => out.includes("is_authenticated") },
        quiz: { question: "[Placeholder Quiz] What does is_authenticated do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p23',
    title: "NumPy",
    lessons: [
      {
        id: 'l23-1',
        title: "NumPy",
        content: "[Placeholder] Content for NumPy",
        initialCode: "# Placeholder Code for NumPy\\nprint('NumPy')",
        exercise: { task: "[Placeholder Task] Try writing code for NumPy", check: (out) => out.includes("NumPy") },
        quiz: { question: "[Placeholder Quiz] What does NumPy do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l23-2',
        title: "NumPy Ndarray",
        content: "[Placeholder] Content for NumPy Ndarray",
        initialCode: "# Placeholder Code for NumPy Ndarray\\nprint('NumPy Ndarray')",
        exercise: { task: "[Placeholder Task] Try writing code for NumPy Ndarray", check: (out) => out.includes("NumPy Ndarray") },
        quiz: { question: "[Placeholder Quiz] What does NumPy Ndarray do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l23-3',
        title: "Creating a ndarray function and object",
        content: "[Placeholder] Content for Creating a ndarray function and object",
        initialCode: "# Placeholder Code for Creating a ndarray function and object\\nprint('Creating a ndarray function and object')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a ndarray function and object", check: (out) => out.includes("Creating a ndarray function and object") },
        quiz: { question: "[Placeholder Quiz] What does Creating a ndarray function and object do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l23-4',
        title: "Dimensions",
        content: "[Placeholder] Content for Dimensions",
        initialCode: "# Placeholder Code for Dimensions\\nprint('Dimensions')",
        exercise: { task: "[Placeholder Task] Try writing code for Dimensions", check: (out) => out.includes("Dimensions") },
        quiz: { question: "[Placeholder Quiz] What does Dimensions do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l23-5',
        title: "Empty",
        content: "[Placeholder] Content for Empty",
        initialCode: "# Placeholder Code for Empty\\nprint('Empty')",
        exercise: { task: "[Placeholder Task] Try writing code for Empty", check: (out) => out.includes("Empty") },
        quiz: { question: "[Placeholder Quiz] What does Empty do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l23-6',
        title: "C - Contiguous layout",
        content: "[Placeholder] Content for C - Contiguous layout",
        initialCode: "# Placeholder Code for C - Contiguous layout\\nprint('C - Contiguous layout')",
        exercise: { task: "[Placeholder Task] Try writing code for C - Contiguous layout", check: (out) => out.includes("C - Contiguous layout") },
        quiz: { question: "[Placeholder Quiz] What does C - Contiguous layout do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p24',
    title: "Jupyter Notebook",
    lessons: [
      {
        id: 'l24-1',
        title: "Jupyter Notebook",
        content: "[Placeholder] Content for Jupyter Notebook",
        initialCode: "# Placeholder Code for Jupyter Notebook\\nprint('Jupyter Notebook')",
        exercise: { task: "[Placeholder Task] Try writing code for Jupyter Notebook", check: (out) => out.includes("Jupyter Notebook") },
        quiz: { question: "[Placeholder Quiz] What does Jupyter Notebook do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-2',
        title: "Cell Types",
        content: "[Placeholder] Content for Cell Types",
        initialCode: "# Placeholder Code for Cell Types\\nprint('Cell Types')",
        exercise: { task: "[Placeholder Task] Try writing code for Cell Types", check: (out) => out.includes("Cell Types") },
        quiz: { question: "[Placeholder Quiz] What does Cell Types do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-3',
        title: "Code",
        content: "[Placeholder] Content for Code",
        initialCode: "# Placeholder Code for Code\\nprint('Code')",
        exercise: { task: "[Placeholder Task] Try writing code for Code", check: (out) => out.includes("Code") },
        quiz: { question: "[Placeholder Quiz] What does Code do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-4',
        title: "Markdown Cells",
        content: "[Placeholder] Content for Markdown Cells",
        initialCode: "# Placeholder Code for Markdown Cells\\nprint('Markdown Cells')",
        exercise: { task: "[Placeholder Task] Try writing code for Markdown Cells", check: (out) => out.includes("Markdown Cells") },
        quiz: { question: "[Placeholder Quiz] What does Markdown Cells do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-5',
        title: "LaTeX equations",
        content: "[Placeholder] Content for LaTeX equations",
        initialCode: "# Placeholder Code for LaTeX equations\\nprint('LaTeX equations')",
        exercise: { task: "[Placeholder Task] Try writing code for LaTeX equations", check: (out) => out.includes("LaTeX equations") },
        quiz: { question: "[Placeholder Quiz] What does LaTeX equations do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-6',
        title: "Adding File or Image",
        content: "[Placeholder] Content for Adding File or Image",
        initialCode: "# Placeholder Code for Adding File or Image\\nprint('Adding File or Image')",
        exercise: { task: "[Placeholder Task] Try writing code for Adding File or Image", check: (out) => out.includes("Adding File or Image") },
        quiz: { question: "[Placeholder Quiz] What does Adding File or Image do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-7',
        title: "Raw NBconvert",
        content: "[Placeholder] Content for Raw NBconvert",
        initialCode: "# Placeholder Code for Raw NBconvert\\nprint('Raw NBconvert')",
        exercise: { task: "[Placeholder Task] Try writing code for Raw NBconvert", check: (out) => out.includes("Raw NBconvert") },
        quiz: { question: "[Placeholder Quiz] What does Raw NBconvert do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-8',
        title: "Nbextensions",
        content: "[Placeholder] Content for Nbextensions",
        initialCode: "# Placeholder Code for Nbextensions\\nprint('Nbextensions')",
        exercise: { task: "[Placeholder Task] Try writing code for Nbextensions", check: (out) => out.includes("Nbextensions") },
        quiz: { question: "[Placeholder Quiz] What does Nbextensions do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-9',
        title: "Collapsible Heading",
        content: "[Placeholder] Content for Collapsible Heading",
        initialCode: "# Placeholder Code for Collapsible Heading\\nprint('Collapsible Heading')",
        exercise: { task: "[Placeholder Task] Try writing code for Collapsible Heading", check: (out) => out.includes("Collapsible Heading") },
        quiz: { question: "[Placeholder Quiz] What does Collapsible Heading do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-10',
        title: "Autopep8",
        content: "[Placeholder] Content for Autopep8",
        initialCode: "# Placeholder Code for Autopep8\\nprint('Autopep8')",
        exercise: { task: "[Placeholder Task] Try writing code for Autopep8", check: (out) => out.includes("Autopep8") },
        quiz: { question: "[Placeholder Quiz] What does Autopep8 do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-11',
        title: "Hinterland",
        content: "[Placeholder] Content for Hinterland",
        initialCode: "# Placeholder Code for Hinterland\\nprint('Hinterland')",
        exercise: { task: "[Placeholder Task] Try writing code for Hinterland", check: (out) => out.includes("Hinterland") },
        quiz: { question: "[Placeholder Quiz] What does Hinterland do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-12',
        title: "NumPy.Zeros",
        content: "[Placeholder] Content for NumPy.Zeros",
        initialCode: "# Placeholder Code for NumPy.Zeros\\nprint('NumPy.Zeros')",
        exercise: { task: "[Placeholder Task] Try writing code for NumPy.Zeros", check: (out) => out.includes("NumPy.Zeros") },
        quiz: { question: "[Placeholder Quiz] What does NumPy.Zeros do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-13',
        title: "NumPy.ones",
        content: "[Placeholder] Content for NumPy.ones",
        initialCode: "# Placeholder Code for NumPy.ones\\nprint('NumPy.ones')",
        exercise: { task: "[Placeholder Task] Try writing code for NumPy.ones", check: (out) => out.includes("NumPy.ones") },
        quiz: { question: "[Placeholder Quiz] What does NumPy.ones do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-14',
        title: "Create NumPy Array With data",
        content: "[Placeholder] Content for Create NumPy Array With data",
        initialCode: "# Placeholder Code for Create NumPy Array With data\\nprint('Create NumPy Array With data')",
        exercise: { task: "[Placeholder Task] Try writing code for Create NumPy Array With data", check: (out) => out.includes("Create NumPy Array With data") },
        quiz: { question: "[Placeholder Quiz] What does Create NumPy Array With data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-15',
        title: "NumPy.frombuffer",
        content: "[Placeholder] Content for NumPy.frombuffer",
        initialCode: "# Placeholder Code for NumPy.frombuffer\\nprint('NumPy.frombuffer')",
        exercise: { task: "[Placeholder Task] Try writing code for NumPy.frombuffer", check: (out) => out.includes("NumPy.frombuffer") },
        quiz: { question: "[Placeholder Quiz] What does NumPy.frombuffer do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-16',
        title: "NumPy.fromiter",
        content: "[Placeholder] Content for NumPy.fromiter",
        initialCode: "# Placeholder Code for NumPy.fromiter\\nprint('NumPy.fromiter')",
        exercise: { task: "[Placeholder Task] Try writing code for NumPy.fromiter", check: (out) => out.includes("NumPy.fromiter") },
        quiz: { question: "[Placeholder Quiz] What does NumPy.fromiter do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-17',
        title: "Incremental Sequences",
        content: "[Placeholder] Content for Incremental Sequences",
        initialCode: "# Placeholder Code for Incremental Sequences\\nprint('Incremental Sequences')",
        exercise: { task: "[Placeholder Task] Try writing code for Incremental Sequences", check: (out) => out.includes("Incremental Sequences") },
        quiz: { question: "[Placeholder Quiz] What does Incremental Sequences do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-18',
        title: "Logarithmic Sequences",
        content: "[Placeholder] Content for Logarithmic Sequences",
        initialCode: "# Placeholder Code for Logarithmic Sequences\\nprint('Logarithmic Sequences')",
        exercise: { task: "[Placeholder Task] Try writing code for Logarithmic Sequences", check: (out) => out.includes("Logarithmic Sequences") },
        quiz: { question: "[Placeholder Quiz] What does Logarithmic Sequences do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-19',
        title: "Meshgrid Arrays",
        content: "[Placeholder] Content for Meshgrid Arrays",
        initialCode: "# Placeholder Code for Meshgrid Arrays\\nprint('Meshgrid Arrays')",
        exercise: { task: "[Placeholder Task] Try writing code for Meshgrid Arrays", check: (out) => out.includes("Meshgrid Arrays") },
        quiz: { question: "[Placeholder Quiz] What does Meshgrid Arrays do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-20',
        title: "Properties of other Arrays",
        content: "[Placeholder] Content for Properties of other Arrays",
        initialCode: "# Placeholder Code for Properties of other Arrays\\nprint('Properties of other Arrays')",
        exercise: { task: "[Placeholder Task] Try writing code for Properties of other Arrays", check: (out) => out.includes("Properties of other Arrays") },
        quiz: { question: "[Placeholder Quiz] What does Properties of other Arrays do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-21',
        title: "Full_like",
        content: "[Placeholder] Content for Full_like",
        initialCode: "# Placeholder Code for Full_like\\nprint('Full_like')",
        exercise: { task: "[Placeholder Task] Try writing code for Full_like", check: (out) => out.includes("Full_like") },
        quiz: { question: "[Placeholder Quiz] What does Full_like do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-22',
        title: "Matrix Arrays",
        content: "[Placeholder] Content for Matrix Arrays",
        initialCode: "# Placeholder Code for Matrix Arrays\\nprint('Matrix Arrays')",
        exercise: { task: "[Placeholder Task] Try writing code for Matrix Arrays", check: (out) => out.includes("Matrix Arrays") },
        quiz: { question: "[Placeholder Quiz] What does Matrix Arrays do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-23',
        title: "Indexing and Slicing",
        content: "[Placeholder] Content for Indexing and Slicing",
        initialCode: "# Placeholder Code for Indexing and Slicing\\nprint('Indexing and Slicing')",
        exercise: { task: "[Placeholder Task] Try writing code for Indexing and Slicing", check: (out) => out.includes("Indexing and Slicing") },
        quiz: { question: "[Placeholder Quiz] What does Indexing and Slicing do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-24',
        title: "Reshaping and Resizing",
        content: "[Placeholder] Content for Reshaping and Resizing",
        initialCode: "# Placeholder Code for Reshaping and Resizing\\nprint('Reshaping and Resizing')",
        exercise: { task: "[Placeholder Task] Try writing code for Reshaping and Resizing", check: (out) => out.includes("Reshaping and Resizing") },
        quiz: { question: "[Placeholder Quiz] What does Reshaping and Resizing do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-25',
        title: "flatten()",
        content: "[Placeholder] Content for flatten()",
        initialCode: "# Placeholder Code for flatten()\\nprint('flatten()')",
        exercise: { task: "[Placeholder Task] Try writing code for flatten()", check: (out) => out.includes("flatten()") },
        quiz: { question: "[Placeholder Quiz] What does flatten() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-26',
        title: "Newaxis",
        content: "[Placeholder] Content for Newaxis",
        initialCode: "# Placeholder Code for Newaxis\\nprint('Newaxis')",
        exercise: { task: "[Placeholder Task] Try writing code for Newaxis", check: (out) => out.includes("Newaxis") },
        quiz: { question: "[Placeholder Quiz] What does Newaxis do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-27',
        title: "Expand_dims",
        content: "[Placeholder] Content for Expand_dims",
        initialCode: "# Placeholder Code for Expand_dims\\nprint('Expand_dims')",
        exercise: { task: "[Placeholder Task] Try writing code for Expand_dims", check: (out) => out.includes("Expand_dims") },
        quiz: { question: "[Placeholder Quiz] What does Expand_dims do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-28',
        title: "Vstack",
        content: "[Placeholder] Content for Vstack",
        initialCode: "# Placeholder Code for Vstack\\nprint('Vstack')",
        exercise: { task: "[Placeholder Task] Try writing code for Vstack", check: (out) => out.includes("Vstack") },
        quiz: { question: "[Placeholder Quiz] What does Vstack do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-29',
        title: "hstack",
        content: "[Placeholder] Content for hstack",
        initialCode: "# Placeholder Code for hstack\\nprint('hstack')",
        exercise: { task: "[Placeholder Task] Try writing code for hstack", check: (out) => out.includes("hstack") },
        quiz: { question: "[Placeholder Quiz] What does hstack do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-30',
        title: "Concatenate",
        content: "[Placeholder] Content for Concatenate",
        initialCode: "# Placeholder Code for Concatenate\\nprint('Concatenate')",
        exercise: { task: "[Placeholder Task] Try writing code for Concatenate", check: (out) => out.includes("Concatenate") },
        quiz: { question: "[Placeholder Quiz] What does Concatenate do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-31',
        title: "Arithmetic Operations",
        content: "[Placeholder] Content for Arithmetic Operations",
        initialCode: "# Placeholder Code for Arithmetic Operations\\nprint('Arithmetic Operations')",
        exercise: { task: "[Placeholder Task] Try writing code for Arithmetic Operations", check: (out) => out.includes("Arithmetic Operations") },
        quiz: { question: "[Placeholder Quiz] What does Arithmetic Operations do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-32',
        title: "Element Wise Elementary Mathematical Functions",
        content: "[Placeholder] Content for Element Wise Elementary Mathematical Functions",
        initialCode: "# Placeholder Code for Element Wise Elementary Mathematical Functions\\nprint('Element Wise Elementary Mathematical Functions')",
        exercise: { task: "[Placeholder Task] Try writing code for Element Wise Elementary Mathematical Functions", check: (out) => out.includes("Element Wise Elementary Mathematical Functions") },
        quiz: { question: "[Placeholder Quiz] What does Element Wise Elementary Mathematical Functions do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-33',
        title: "Trigonometric Functions",
        content: "[Placeholder] Content for Trigonometric Functions",
        initialCode: "# Placeholder Code for Trigonometric Functions\\nprint('Trigonometric Functions')",
        exercise: { task: "[Placeholder Task] Try writing code for Trigonometric Functions", check: (out) => out.includes("Trigonometric Functions") },
        quiz: { question: "[Placeholder Quiz] What does Trigonometric Functions do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-34',
        title: "Unit Circle in Trigonometric",
        content: "[Placeholder] Content for Unit Circle in Trigonometric",
        initialCode: "# Placeholder Code for Unit Circle in Trigonometric\\nprint('Unit Circle in Trigonometric')",
        exercise: { task: "[Placeholder Task] Try writing code for Unit Circle in Trigonometric", check: (out) => out.includes("Unit Circle in Trigonometric") },
        quiz: { question: "[Placeholder Quiz] What does Unit Circle in Trigonometric do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-35',
        title: "Sine",
        content: "[Placeholder] Content for Sine",
        initialCode: "# Placeholder Code for Sine\\nprint('Sine')",
        exercise: { task: "[Placeholder Task] Try writing code for Sine", check: (out) => out.includes("Sine") },
        quiz: { question: "[Placeholder Quiz] What does Sine do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-36',
        title: "Cosine",
        content: "[Placeholder] Content for Cosine",
        initialCode: "# Placeholder Code for Cosine\\nprint('Cosine')",
        exercise: { task: "[Placeholder Task] Try writing code for Cosine", check: (out) => out.includes("Cosine") },
        quiz: { question: "[Placeholder Quiz] What does Cosine do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-37',
        title: "Tangent",
        content: "[Placeholder] Content for Tangent",
        initialCode: "# Placeholder Code for Tangent\\nprint('Tangent')",
        exercise: { task: "[Placeholder Task] Try writing code for Tangent", check: (out) => out.includes("Tangent") },
        quiz: { question: "[Placeholder Quiz] What does Tangent do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-38',
        title: "Rounding Functions",
        content: "[Placeholder] Content for Rounding Functions",
        initialCode: "# Placeholder Code for Rounding Functions\\nprint('Rounding Functions')",
        exercise: { task: "[Placeholder Task] Try writing code for Rounding Functions", check: (out) => out.includes("Rounding Functions") },
        quiz: { question: "[Placeholder Quiz] What does Rounding Functions do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-39',
        title: "Quadrants of the coordinate plane",
        content: "[Placeholder] Content for Quadrants of the coordinate plane",
        initialCode: "# Placeholder Code for Quadrants of the coordinate plane\\nprint('Quadrants of the coordinate plane')",
        exercise: { task: "[Placeholder Task] Try writing code for Quadrants of the coordinate plane", check: (out) => out.includes("Quadrants of the coordinate plane") },
        quiz: { question: "[Placeholder Quiz] What does Quadrants of the coordinate plane do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-40',
        title: "Two - variable linear equation introduction",
        content: "[Placeholder] Content for Two - variable linear equation introduction",
        initialCode: "# Placeholder Code for Two - variable linear equation introduction\\nprint('Two - variable linear equation introduction')",
        exercise: { task: "[Placeholder Task] Try writing code for Two - variable linear equation introduction", check: (out) => out.includes("Two - variable linear equation introduction") },
        quiz: { question: "[Placeholder Quiz] What does Two - variable linear equation introduction do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-41',
        title: "Intercepts",
        content: "[Placeholder] Content for Intercepts",
        initialCode: "# Placeholder Code for Intercepts\\nprint('Intercepts')",
        exercise: { task: "[Placeholder Task] Try writing code for Intercepts", check: (out) => out.includes("Intercepts") },
        quiz: { question: "[Placeholder Quiz] What does Intercepts do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-42',
        title: "Intro to slope",
        content: "[Placeholder] Content for Intro to slope",
        initialCode: "# Placeholder Code for Intro to slope\\nprint('Intro to slope')",
        exercise: { task: "[Placeholder Task] Try writing code for Intro to slope", check: (out) => out.includes("Intro to slope") },
        quiz: { question: "[Placeholder Quiz] What does Intro to slope do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-43',
        title: "Negative Slope",
        content: "[Placeholder] Content for Negative Slope",
        initialCode: "# Placeholder Code for Negative Slope\\nprint('Negative Slope')",
        exercise: { task: "[Placeholder Task] Try writing code for Negative Slope", check: (out) => out.includes("Negative Slope") },
        quiz: { question: "[Placeholder Quiz] What does Negative Slope do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-44',
        title: "Linear Regression Using Least Squares Method (Best Fit Line)",
        content: "[Placeholder] Content for Linear Regression Using Least Squares Method (Best Fit Line)",
        initialCode: "# Placeholder Code for Linear Regression Using Least Squares Method (Best Fit Line)\\nprint('Linear Regression Using Least Squares Method (Best Fit Line)')",
        exercise: { task: "[Placeholder Task] Try writing code for Linear Regression Using Least Squares Method (Best Fit Line)", check: (out) => out.includes("Linear Regression Using Least Squares Method (Best Fit Line)") },
        quiz: { question: "[Placeholder Quiz] What does Linear Regression Using Least Squares Method (Best Fit Line) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-45',
        title: "Correlation Coefficient \u00ae",
        content: "[Placeholder] Content for Correlation Coefficient \u00ae",
        initialCode: "# Placeholder Code for Correlation Coefficient \u00ae\\nprint('Correlation Coefficient \u00ae')",
        exercise: { task: "[Placeholder Task] Try writing code for Correlation Coefficient \u00ae", check: (out) => out.includes("Correlation Coefficient ®") },
        quiz: { question: "[Placeholder Quiz] What does Correlation Coefficient \u00ae do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-46',
        title: "Python Program (LSR)",
        content: "[Placeholder] Content for Python Program (LSR)",
        initialCode: "# Placeholder Code for Python Program (LSR)\\nprint('Python Program (LSR)')",
        exercise: { task: "[Placeholder Task] Try writing code for Python Program (LSR)", check: (out) => out.includes("Python Program (LSR)") },
        quiz: { question: "[Placeholder Quiz] What does Python Program (LSR) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-47',
        title: "Data Science Project Using Linear Regression",
        content: "[Placeholder] Content for Data Science Project Using Linear Regression",
        initialCode: "# Placeholder Code for Data Science Project Using Linear Regression\\nprint('Data Science Project Using Linear Regression')",
        exercise: { task: "[Placeholder Task] Try writing code for Data Science Project Using Linear Regression", check: (out) => out.includes("Data Science Project Using Linear Regression") },
        quiz: { question: "[Placeholder Quiz] What does Data Science Project Using Linear Regression do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-48',
        title: "Data Gathering and Cleaning",
        content: "[Placeholder] Content for Data Gathering and Cleaning",
        initialCode: "# Placeholder Code for Data Gathering and Cleaning\\nprint('Data Gathering and Cleaning')",
        exercise: { task: "[Placeholder Task] Try writing code for Data Gathering and Cleaning", check: (out) => out.includes("Data Gathering and Cleaning") },
        quiz: { question: "[Placeholder Quiz] What does Data Gathering and Cleaning do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-49',
        title: "Exploratory and Visualise the Data",
        content: "[Placeholder] Content for Exploratory and Visualise the Data",
        initialCode: "# Placeholder Code for Exploratory and Visualise the Data\\nprint('Exploratory and Visualise the Data')",
        exercise: { task: "[Placeholder Task] Try writing code for Exploratory and Visualise the Data", check: (out) => out.includes("Exploratory and Visualise the Data") },
        quiz: { question: "[Placeholder Quiz] What does Exploratory and Visualise the Data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-50',
        title: "Evaluation",
        content: "[Placeholder] Content for Evaluation",
        initialCode: "# Placeholder Code for Evaluation\\nprint('Evaluation')",
        exercise: { task: "[Placeholder Task] Try writing code for Evaluation", check: (out) => out.includes("Evaluation") },
        quiz: { question: "[Placeholder Quiz] What does Evaluation do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p25',
    title: "Matplotlib For Visualization",
    lessons: [
      {
        id: 'l25-1',
        title: "Matplotlib For Visualization",
        content: "[Placeholder] Content for Matplotlib For Visualization",
        initialCode: "# Placeholder Code for Matplotlib For Visualization\\nprint('Matplotlib For Visualization')",
        exercise: { task: "[Placeholder Task] Try writing code for Matplotlib For Visualization", check: (out) => out.includes("Matplotlib For Visualization") },
        quiz: { question: "[Placeholder Quiz] What does Matplotlib For Visualization do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-2',
        title: "Packages Management",
        content: "[Placeholder] Content for Packages Management",
        initialCode: "# Placeholder Code for Packages Management\\nprint('Packages Management')",
        exercise: { task: "[Placeholder Task] Try writing code for Packages Management", check: (out) => out.includes("Packages Management") },
        quiz: { question: "[Placeholder Quiz] What does Packages Management do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-3',
        title: "Matplotlib Example Project",
        content: "[Placeholder] Content for Matplotlib Example Project",
        initialCode: "# Placeholder Code for Matplotlib Example Project\\nprint('Matplotlib Example Project')",
        exercise: { task: "[Placeholder Task] Try writing code for Matplotlib Example Project", check: (out) => out.includes("Matplotlib Example Project") },
        quiz: { question: "[Placeholder Quiz] What does Matplotlib Example Project do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-4',
        title: "Character Description",
        content: "[Placeholder] Content for Character Description",
        initialCode: "# Placeholder Code for Character Description\\nprint('Character Description')",
        exercise: { task: "[Placeholder Task] Try writing code for Character Description", check: (out) => out.includes("Character Description") },
        quiz: { question: "[Placeholder Quiz] What does Character Description do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-5',
        title: "Character Colour",
        content: "[Placeholder] Content for Character Colour",
        initialCode: "# Placeholder Code for Character Colour\\nprint('Character Colour')",
        exercise: { task: "[Placeholder Task] Try writing code for Character Colour", check: (out) => out.includes("Character Colour") },
        quiz: { question: "[Placeholder Quiz] What does Character Colour do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-6',
        title: "Bar Charts",
        content: "[Placeholder] Content for Bar Charts",
        initialCode: "# Placeholder Code for Bar Charts\\nprint('Bar Charts')",
        exercise: { task: "[Placeholder Task] Try writing code for Bar Charts", check: (out) => out.includes("Bar Charts") },
        quiz: { question: "[Placeholder Quiz] What does Bar Charts do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-7',
        title: "Bar Charts and CSV",
        content: "[Placeholder] Content for Bar Charts and CSV",
        initialCode: "# Placeholder Code for Bar Charts and CSV\\nprint('Bar Charts and CSV')",
        exercise: { task: "[Placeholder Task] Try writing code for Bar Charts and CSV", check: (out) => out.includes("Bar Charts and CSV") },
        quiz: { question: "[Placeholder Quiz] What does Bar Charts and CSV do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-8',
        title: "Pie Chart",
        content: "[Placeholder] Content for Pie Chart",
        initialCode: "# Placeholder Code for Pie Chart\\nprint('Pie Chart')",
        exercise: { task: "[Placeholder Task] Try writing code for Pie Chart", check: (out) => out.includes("Pie Chart") },
        quiz: { question: "[Placeholder Quiz] What does Pie Chart do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-9',
        title: "Matplotlib Circle ( Donut Chart)",
        content: "[Placeholder] Content for Matplotlib Circle ( Donut Chart)",
        initialCode: "# Placeholder Code for Matplotlib Circle ( Donut Chart)\\nprint('Matplotlib Circle ( Donut Chart)')",
        exercise: { task: "[Placeholder Task] Try writing code for Matplotlib Circle ( Donut Chart)", check: (out) => out.includes("Matplotlib Circle ( Donut Chart)") },
        quiz: { question: "[Placeholder Quiz] What does Matplotlib Circle ( Donut Chart) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-10',
        title: "Matplotlib Real Time Data",
        content: "[Placeholder] Content for Matplotlib Real Time Data",
        initialCode: "# Placeholder Code for Matplotlib Real Time Data\\nprint('Matplotlib Real Time Data')",
        exercise: { task: "[Placeholder Task] Try writing code for Matplotlib Real Time Data", check: (out) => out.includes("Matplotlib Real Time Data") },
        quiz: { question: "[Placeholder Quiz] What does Matplotlib Real Time Data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-11',
        title: "Wave Form (FuncAnimation)",
        content: "[Placeholder] Content for Wave Form (FuncAnimation)",
        initialCode: "# Placeholder Code for Wave Form (FuncAnimation)\\nprint('Wave Form (FuncAnimation)')",
        exercise: { task: "[Placeholder Task] Try writing code for Wave Form (FuncAnimation)", check: (out) => out.includes("Wave Form (FuncAnimation)") },
        quiz: { question: "[Placeholder Quiz] What does Wave Form (FuncAnimation) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l25-12',
        title: "3D Plot",
        content: "[Placeholder] Content for 3D Plot",
        initialCode: "# Placeholder Code for 3D Plot\\nprint('3D Plot')",
        exercise: { task: "[Placeholder Task] Try writing code for 3D Plot", check: (out) => out.includes("3D Plot") },
        quiz: { question: "[Placeholder Quiz] What does 3D Plot do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  },
  {
    id: 'p26',
    title: "Image Processing Project",
    lessons: [
      {
        id: 'l26-1',
        title: "Image Processing Project",
        content: "[Placeholder] Content for Image Processing Project",
        initialCode: "# Placeholder Code for Image Processing Project\\nprint('Image Processing Project')",
        exercise: { task: "[Placeholder Task] Try writing code for Image Processing Project", check: (out) => out.includes("Image Processing Project") },
        quiz: { question: "[Placeholder Quiz] What does Image Processing Project do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-2',
        title: "Why Gray?",
        content: "[Placeholder] Content for Why Gray?",
        initialCode: "# Placeholder Code for Why Gray?\\nprint('Why Gray?')",
        exercise: { task: "[Placeholder Task] Try writing code for Why Gray?", check: (out) => out.includes("Why Gray?") },
        quiz: { question: "[Placeholder Quiz] What does Why Gray? do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-3',
        title: "MedianBlur ( Median Filtering )",
        content: "[Placeholder] Content for MedianBlur ( Median Filtering )",
        initialCode: "# Placeholder Code for MedianBlur ( Median Filtering )\\nprint('MedianBlur ( Median Filtering )')",
        exercise: { task: "[Placeholder Task] Try writing code for MedianBlur ( Median Filtering )", check: (out) => out.includes("MedianBlur ( Median Filtering )") },
        quiz: { question: "[Placeholder Quiz] What does MedianBlur ( Median Filtering ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-4',
        title: "Median mask",
        content: "[Placeholder] Content for Median mask",
        initialCode: "# Placeholder Code for Median mask\\nprint('Median mask')",
        exercise: { task: "[Placeholder Task] Try writing code for Median mask", check: (out) => out.includes("Median mask") },
        quiz: { question: "[Placeholder Quiz] What does Median mask do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-5',
        title: "Simple Thresholding",
        content: "[Placeholder] Content for Simple Thresholding",
        initialCode: "# Placeholder Code for Simple Thresholding\\nprint('Simple Thresholding')",
        exercise: { task: "[Placeholder Task] Try writing code for Simple Thresholding", check: (out) => out.includes("Simple Thresholding") },
        quiz: { question: "[Placeholder Quiz] What does Simple Thresholding do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-6',
        title: "Binary Inverted Thresholding",
        content: "[Placeholder] Content for Binary Inverted Thresholding",
        initialCode: "# Placeholder Code for Binary Inverted Thresholding\\nprint('Binary Inverted Thresholding')",
        exercise: { task: "[Placeholder Task] Try writing code for Binary Inverted Thresholding", check: (out) => out.includes("Binary Inverted Thresholding") },
        quiz: { question: "[Placeholder Quiz] What does Binary Inverted Thresholding do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-7',
        title: "Truncate Thresholding",
        content: "[Placeholder] Content for Truncate Thresholding",
        initialCode: "# Placeholder Code for Truncate Thresholding\\nprint('Truncate Thresholding')",
        exercise: { task: "[Placeholder Task] Try writing code for Truncate Thresholding", check: (out) => out.includes("Truncate Thresholding") },
        quiz: { question: "[Placeholder Quiz] What does Truncate Thresholding do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-8',
        title: "ToZero Thresholding",
        content: "[Placeholder] Content for ToZero Thresholding",
        initialCode: "# Placeholder Code for ToZero Thresholding\\nprint('ToZero Thresholding')",
        exercise: { task: "[Placeholder Task] Try writing code for ToZero Thresholding", check: (out) => out.includes("ToZero Thresholding") },
        quiz: { question: "[Placeholder Quiz] What does ToZero Thresholding do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-9',
        title: "ToZero Invert Thresholding",
        content: "[Placeholder] Content for ToZero Invert Thresholding",
        initialCode: "# Placeholder Code for ToZero Invert Thresholding\\nprint('ToZero Invert Thresholding')",
        exercise: { task: "[Placeholder Task] Try writing code for ToZero Invert Thresholding", check: (out) => out.includes("ToZero Invert Thresholding") },
        quiz: { question: "[Placeholder Quiz] What does ToZero Invert Thresholding do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-10',
        title: "Adaptive Thresholding",
        content: "[Placeholder] Content for Adaptive Thresholding",
        initialCode: "# Placeholder Code for Adaptive Thresholding\\nprint('Adaptive Thresholding')",
        exercise: { task: "[Placeholder Task] Try writing code for Adaptive Thresholding", check: (out) => out.includes("Adaptive Thresholding") },
        quiz: { question: "[Placeholder Quiz] What does Adaptive Thresholding do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-11',
        title: "Gaussian Kernel and Filtering",
        content: "[Placeholder] Content for Gaussian Kernel and Filtering",
        initialCode: "# Placeholder Code for Gaussian Kernel and Filtering\\nprint('Gaussian Kernel and Filtering')",
        exercise: { task: "[Placeholder Task] Try writing code for Gaussian Kernel and Filtering", check: (out) => out.includes("Gaussian Kernel and Filtering") },
        quiz: { question: "[Placeholder Quiz] What does Gaussian Kernel and Filtering do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l26-12',
        title: "CV2.bitwise_and()",
        content: "[Placeholder] Content for CV2.bitwise_and()",
        initialCode: "# Placeholder Code for CV2.bitwise_and()\\nprint('CV2.bitwise_and()')",
        exercise: { task: "[Placeholder Task] Try writing code for CV2.bitwise_and()", check: (out) => out.includes("CV2.bitwise_and()") },
        quiz: { question: "[Placeholder Quiz] What does CV2.bitwise_and() do?", options: ["A", "B", "C", "D"], answer: 0 }
      }
    ]
  }
];

// --- MAIN APP COMPONENT ---
export default function App() {
  const [mIdx, setMIdx] = useState(0);
  const [lIdx, setLIdx] = useState(0);
  const [code, setCode] = useState('');
  const [terminal, setTerminal] = useState({ output: '', passed: false });
  const [tab, setTab] = useState('learn'); // learn, exercise, ide, quiz
  const [sidebar, setSidebar] = useState(true);
  const [ans, setAns] = useState(null);
  const [res, setRes] = useState(false);
  const [progress, setProgress] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const scrollRef = useRef(null);
  const lesson = CYBER_BOOK[mIdx].lessons[lIdx];

  useEffect(() => {
    setCode(lesson.initialCode);
    setTerminal({ output: '', passed: false });
    setAns(null);
    setRes(false);
    setTab('learn');
    if (scrollRef.current) scrollRef.current.scrollTo(0, 0);
  }, [mIdx, lIdx, lesson]);

  const runCode = () => {
    const result = executeMockPython(code, tab === 'exercise' ? lesson.exercise : null);
    setTerminal(result);
    if (tab === 'exercise' && result.passed) {
      const id = `${mIdx}-${lIdx}`;
      if (!progress.includes(id)) setProgress([...progress, id]);
    }
  };

  const submitQuiz = (i) => {
    setAns(i);
    setRes(true);
    if (i === lesson.quiz.answer) {
      const id = `${mIdx}-${lIdx}-quiz`;
      if (!progress.includes(id)) setProgress([...progress, id]);
    }
  };

  const next = () => {
    if (lIdx < CYBER_BOOK[mIdx].lessons.length - 1) setLIdx(lIdx + 1);
    else if (mIdx < CYBER_BOOK.length - 1) { setMIdx(mIdx + 1); setLIdx(0); }
  };

  const totalLessons = CYBER_BOOK.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const perc = Math.round((progress.filter(p => !p.includes('quiz')).length / totalLessons) * 100);

  const filtered = CYBER_BOOK.filter(m =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.lessons.some(l => l.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const tabsConfig = [
    { id: 'learn', label: 'Briefing', icon: Book },
    { id: 'exercise', label: 'Simulation', icon: Zap },
    { id: 'ide', label: 'Terminal', icon: Terminal },
    { id: 'quiz', label: 'Auth Check', icon: Shield }
  ];

  return (
    <div className="flex h-screen bg-[#010101] text-[#00FF41] font-mono overflow-hidden selection:bg-[#00FF41] selection:text-black">

      {/* SIDEBAR */}
      <aside className={`${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 fixed md:relative z-50 w-80 h-full bg-[#080808] border-r border-[#111] flex flex-col shadow-2xl`}>
        <div className="p-6 border-b border-[#111] bg-gradient-to-b from-[#0a0a0a] to-[#010101]">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-[#00FF41] animate-pulse" size={28} />
            <h1 className="text-xl font-black tracking-tighter uppercase leading-tight">Python Ninja<br /><span className="text-[10px] text-[#444] tracking-[0.2em]">Deep Dive v6.0</span></h1>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[8px] uppercase tracking-widest text-[#444] mb-1 font-bold">
              <span>Security Clearance</span>
              <span>{perc}%</span>
            </div>
            <div className="w-full bg-[#111] h-1.5 rounded-full overflow-hidden border border-[#222]">
              <div className="bg-[#00FF41] h-full shadow-[0_0_15px_#00FF41] transition-all duration-1000" style={{ width: `${perc}%` }}></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 text-[#222]" size={14} />
            <input
              type="text"
              placeholder="SEARCH PROTOCOLS..."
              className="w-full pl-10 pr-4 py-2.5 bg-black border border-[#111] rounded-lg text-[10px] focus:border-[#00FF41] outline-none text-[#00FF41] uppercase tracking-widest"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filtered.map((mod) => {
            const originalMIdx = CYBER_BOOK.findIndex(m => m.id === mod.id);
            return (
              <div key={mod.id} className="space-y-1">
                <h3 className="text-[9px] text-[#444] font-bold uppercase tracking-[0.2em] mb-2 px-2 flex items-center gap-2"><Lock size={8} /> {mod.title}</h3>
                <div className="space-y-1">
                  {mod.lessons.map((les) => {
                    const originalLIdx = mod.lessons.findIndex(l => l.id === les.id);
                    const active = originalMIdx === mIdx && originalLIdx === lIdx;
                    return (
                      <button key={les.id} onClick={() => { setMIdx(originalMIdx); setLIdx(originalLIdx); if (window.innerWidth < 768) setSidebar(false); }} className={`w-full text-left p-3 rounded-lg text-[10px] transition-all flex items-center justify-between border ${active ? 'bg-[#00FF41] text-black font-bold border-[#00FF41] shadow-[0_0_10px_rgba(0,255,65,0.2)]' : 'border-transparent hover:bg-[#111] text-[#666]'}`}>
                        <span className="truncate pr-2">{originalLIdx + 1}. {les.title}</span>
                        {progress.includes(`${originalMIdx}-${originalLIdx}`) && <CheckCircle size={12} className={active ? 'text-black' : 'text-[#00FF41]'} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="pt-4 pb-10 text-center">
            <p className="text-[8px] text-[#333] uppercase tracking-[0.2em]">End of Archive.</p>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        {!sidebar && <button onClick={() => setSidebar(true)} className="absolute top-4 left-4 z-40 p-2 bg-[#00FF41] text-black rounded-lg md:hidden shadow-lg shadow-[#00FF41]/20 border border-black"><Menu size={20} /></button>}

        {/* TAB SWITCHER */}
        <header className="bg-[#0a0a0a] border-b border-[#111] p-3 flex gap-2 pl-14 md:pl-6 overflow-x-auto no-scrollbar shadow-2xl relative z-10">
          {tabsConfig.map(t => {
            const IconComp = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all ${tab === t.id ? 'bg-[#00FF41] text-black shadow-[0_0_15px_rgba(0,255,65,0.4)]' : 'text-[#555] hover:text-[#00FF41] hover:bg-[#111]'}`}>
                <IconComp size={12} /> {t.label}
              </button>
            );
          })}
        </header>

        {/* DYNAMIC CONTENT */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.02)_0%,rgba(0,0,0,1)_100%)]">
          <div className="max-w-4xl mx-auto space-y-12 pb-32">

            <header className="space-y-2 border-l-2 border-[#00FF41] pl-6 animate-in slide-in-from-left duration-500">
              <p className="text-[#333] font-black text-[9px] uppercase tracking-[0.5em]">{CYBER_BOOK[mIdx].title}</p>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter flex items-center gap-4">{lesson.title} <Activity className="text-[#00FF41] animate-pulse" size={24} /></h2>
            </header>

            {tab === 'learn' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="bg-[#0a0a0a] p-8 md:p-14 rounded-2xl border border-[#111] text-[#999] leading-relaxed text-lg md:text-xl whitespace-pre-wrap shadow-3xl relative overflow-hidden group border-t-2 border-t-[#00FF41]/20">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 pointer-events-none transition-all duration-1000"><Ghost size={160} /></div>
                  {lesson.content.split(/(?:<CODE_BLOCK>)([\s\S]*?)(?:<\/?CODE_BLOCK>)/g).map((part, idx) => {
                    if (part.trim().toLowerCase().startsWith('sample program')) {
                      return (
                        <div key={idx} className="my-8 bg-[#001100] border border-[#00FF41]/30 p-6 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.05)] border-l-4 border-l-[#00FF41]">
                          <div className="flex items-center gap-3 mb-4 text-[#00FF41] border-b border-[#00FF41]/20 pb-3">
                             <Code size={18} /> <span className="font-bold text-[12px] uppercase tracking-widest">Code Sample</span>
                          </div>
                          <pre className="text-[#00FF41] font-mono text-sm leading-relaxed whitespace-pre-wrap">{part}</pre>
                        </div>
                      );
                    }
                    return <span key={idx}>{part}</span>;
                  })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-black p-8 rounded-2xl border border-[#111] shadow-xl relative"><div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/5 to-transparent pointer-events-none"></div><div className="flex items-center gap-3 text-[#00FF41] font-black text-[9px] uppercase tracking-widest mb-4"><Info size={14} /> Data Archive Source</div><p className="text-[#555] text-sm leading-relaxed italic font-bold">ဤအချက်အလက်များသည် Win Htut ၏ "Deep Dive Into Python" စာအုပ်ပါ မူရင်းရှင်းလျှင်းချက်များ (Verbatim) အတိုင်း ဖြစ်ပါသည်။</p></div>
                  <div className="bg-[#00FF41]/5 p-8 rounded-2xl border border-[#00FF41]/20 flex flex-col justify-center items-center text-center shadow-lg"><p className="text-[#00FF41] font-black text-[10px] mb-4 uppercase tracking-[0.2em]">Ready for action?</p><button onClick={() => setTab('exercise')} className="bg-[#00FF41] text-black px-10 py-4 rounded-xl font-black text-[10px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_#00FF41] w-full max-w-xs">START SIMULATION</button></div>
                </div>
              </div>
            )}

            {tab === 'exercise' && (
              <div className="space-y-8 animate-in zoom-in-95 duration-500">
                <div className="bg-[#001100] border border-[#00FF41]/30 p-8 rounded-2xl flex items-center gap-6 shadow-[0_0_30px_rgba(0,255,65,0.05)] border-l-4 border-l-[#00FF41]"><div className="w-14 h-14 bg-[#00FF41] text-black rounded-full flex-shrink-0 flex items-center justify-center animate-pulse"><Zap size={28} /></div><div className="flex-1"><h4 className="text-[#00FF41] font-black text-[8px] uppercase tracking-[0.4em] mb-2 font-bold">Mission Objective</h4><p className="text-white text-xl font-bold leading-snug">{lesson.exercise.task}</p><p className="text-[#00FF41]/60 text-xs mt-2 italic">Hint: {lesson.exercise.hint}</p></div></div>
                <div className="bg-black rounded-3xl overflow-hidden border border-[#111] shadow-2xl">
                  <div className="bg-[#0a0a0a] px-8 py-4 flex justify-between items-center border-b border-[#111]"><div className="flex items-center gap-3 text-[#333] font-mono text-[10px] font-bold uppercase tracking-widest"><Terminal size={12} className="text-[#00FF41]" /> exploit_dev.py</div><button onClick={runCode} className="bg-[#00FF41] text-black px-8 py-2.5 rounded-full text-[9px] font-black flex items-center gap-2 shadow-[0_0_10px_#00FF41] active:scale-90 transition-all">EXECUTE PAYLOAD</button></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-[420px]">
                    <textarea value={code} onChange={(e) => setCode(e.target.value)} className="p-10 bg-black text-[#00FF41] font-mono text-lg focus:outline-none resize-none border-b lg:border-b-0 lg:border-r border-[#111] custom-scrollbar leading-relaxed" spellCheck="false" placeholder="# Inject payload code here..." />
                    <div className="p-10 bg-[#010101] overflow-y-auto font-mono text-sm flex flex-col"><p className="text-[#222] text-[9px] font-black uppercase mb-6 tracking-[0.3em] font-bold">Telemetry Stream</p><pre className="text-emerald-500 flex-1 whitespace-pre-wrap leading-relaxed text-base italic">{terminal.output || ">>> LISTENING FOR SIGNALS..."}</pre>{terminal.passed && <div className="mt-6 p-5 bg-[#00FF41]/10 border border-[#00FF41]/40 text-[#00FF41] rounded-xl flex items-center gap-4 animate-bounce shadow-[0_0_20px_rgba(0,255,65,0.1)]"><CheckCircle size={24} /> <span className="font-black text-[10px] tracking-widest uppercase">Target Compromised! Success.</span></div>}</div>
                  </div>
                </div>
                {terminal.passed && <div className="flex justify-center pt-8"><button onClick={() => setTab('quiz')} className="bg-white text-black px-12 py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] shadow-2xl hover:bg-[#00FF41] transition-all border border-[#00FF41]">PROCEED TO VERIFICATION</button></div>}
              </div>
            )}

            {tab === 'ide' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-black rounded-3xl overflow-hidden border border-[#00FF41]/10 shadow-2xl flex flex-col h-[600px]">
                  <div className="bg-[#0a0a0a] px-8 py-5 flex justify-between items-center border-b border-[#111]"><h4 className="text-[#00FF41] text-[9px] font-black uppercase tracking-widest font-bold">Secure Sandbox Environment</h4><button onClick={() => setTerminal(executeMockPython(code, null))} className="bg-[#00FF41] text-black px-8 py-2.5 rounded-full font-black text-[9px] shadow-[0_0_20px_#00FF41] active:scale-95 transition-all">RUN SCRIPT</button></div>
                  <textarea value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 p-10 bg-black text-[#00FF41] font-mono text-lg focus:outline-none resize-none" placeholder="# Experiment with Python code here..." spellCheck="false" />
                  <div className="h-48 bg-[#020202] border-t border-[#111] p-8 font-mono text-[#00FF41] overflow-y-auto custom-scrollbar shadow-inner"><p className="text-[#222] text-[9px] uppercase mb-4 font-black tracking-widest">Syslog Output</p><pre className="text-sm font-medium leading-relaxed">{terminal.output || ">>> System Ready. Waiting for commands."}</pre></div>
                </div>
              </div>
            )}

            {tab === 'quiz' && (
              <div className="bg-[#0a0a0a] p-10 md:p-24 rounded-[3rem] border border-[#111] animate-in fade-in zoom-in-95 duration-700 flex flex-col justify-center min-h-[600px] shadow-3xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00FF41]/10 animate-pulse"></div>
                <div className="mb-14 text-center"><div className="inline-block px-5 py-2 bg-[#00FF41]/10 text-[#00FF41] rounded-full text-[8px] font-black uppercase tracking-[0.5em] mb-6 border border-[#00FF41]/20">Authentication Required</div><p className="text-2xl md:text-4xl text-white font-black leading-tight tracking-tighter max-w-3xl mx-auto">{lesson.quiz.question}</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                  {lesson.quiz.options.map((opt, i) => {
                    let st = "text-left p-8 rounded-3xl border transition-all font-bold text-lg flex items-center gap-6 ";
                    if (res) {
                      if (i === lesson.quiz.answer) st += "bg-[#00FF41]/10 border-[#00FF41] text-[#00FF41] shadow-[0_0_30px_rgba(0,255,65,0.2)] scale-[1.02]";
                      else if (i === ans) st += "bg-rose-900/10 border-rose-900 text-rose-500";
                      else st += "border-[#111] text-[#222] opacity-30";
                    } else st += "border-[#111] hover:border-[#00FF41] hover:bg-[#00FF41]/5 text-[#555] hover:text-[#00FF41]";
                    return (
                      <button key={i} onClick={() => !res && submitQuiz(i)} className={st}>
                        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border text-[10px] font-black ${res && i === lesson.quiz.answer ? 'bg-[#00FF41] text-black border-[#00FF41]' : 'bg-[#111] text-[#333]'}`}>{String.fromCharCode(65 + i)}</div>{opt}
                      </button>
                    );
                  })}
                </div>
                {res && (
                  <div className={`mt-20 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 ${ans === lesson.quiz.answer ? 'bg-[#00FF41] text-black' : 'bg-rose-900 text-white shadow-3xl'}`}>
                    <div className="flex items-center gap-6 font-black text-2xl uppercase tracking-tighter">{ans === lesson.quiz.answer ? <><Eye size={56} /> CLEARANCE GRANTED.</> : <><X size={56} /> CLEARANCE DENIED.</>}</div>
                    {ans === lesson.quiz.answer && <button onClick={next} className="bg-black text-[#00FF41] px-14 py-5 rounded-2xl font-black text-[10px] tracking-widest transition-all shadow-lg shadow-black active:scale-95 border border-[#00FF41]/30">NEXT PHASE <ChevronRight size={18} /></button>}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* BOTTOM NAV */}
        <footer className="bg-black border-t border-[#111] p-5 px-10 flex justify-between items-center z-30 shadow-2xl relative">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00FF41] animate-ping"></div><span className="text-[#333] font-black text-[8px] tracking-[0.3em] uppercase">Node: Active</span></div>
            <div className="text-[11px] font-black text-[#00FF41] tracking-tighter border border-[#00FF41]/20 px-4 py-1.5 rounded-md bg-[#050505]">PHASE {mIdx + 1}.{lIdx + 1} <span className="text-[#222] mx-2">|</span> {totalLessons}</div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => { if (lIdx > 0) setLIdx(lIdx - 1); else if (mIdx > 0) { setMIdx(mIdx - 1); setLIdx(CYBER_BOOK[mIdx - 1].lessons.length - 1); } }} className="p-4 rounded-xl bg-[#0a0a0a] text-[#333] hover:text-[#00FF41] border border-[#111] active:scale-90 shadow-sm transition-all"><ChevronRight size={24} className="rotate-180" /></button>
            <button onClick={next} className="bg-[#00FF41] text-black px-12 py-4 rounded-2xl font-black text-[10px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all uppercase shadow-[0_0_15px_#00FF41]">PROCEED <ChevronRight size={18} /></button>
          </div>
        </footer>
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #151515; border-radius: 10px; border: 1px solid transparent; background-clip: content-box; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #00FF41; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        textarea { caret-color: #00FF41; }
      `}</style>
    </div>
  );
}