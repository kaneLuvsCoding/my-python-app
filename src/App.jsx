import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal, Shield, Lock, Cpu, Layers, CheckCircle, ChevronRight, Menu, X,
  Play, Award, Book, Database, Globe, BarChart, Zap, Eye, Ghost, Activity, Info, Search, Code, AlertTriangle, Box, Server, TrendingUp, Key, Sun, Moon
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
        content: "Booleans\n\nBooleans data type ထဲမှာတော့ True နှင့် False တို့ ပါဝင်မှာ ဖြစ်ပါတယ်။ True ကို number အနေဖြင့် ပြောမယ်ဆိုရင် 1 ဖြစ်ပြီး False သည် 0 ဖြစ်ပါတယ်။\n\nbool(1) ဆိုသည့် code ကိုရေးလိုက်ရင် result အနေနဲ့ True ဆိုတာကို ရရှိမှာ ဖြစ်ပါတယ်။ ရှေ့က bool ဆိုတာကတော့ သူ့ရဲ့ data type ဖြစ်ပါတယ်။ bool(0) လို့ ရေးလိုက်ရင် False ဆိုတဲ့ result ကိုရရှိမှာ ဖြစ်ပါတယ်။ ဒသမကိန်းတွေထည့်ရင်လည်း number တစ်ခုခု ဖြစ်နေခဲ့ရင် True ဆိုတဲ့ result ကိုပဲရရှိမှာ ဖြစ်ပါတယ်။ bool(-2) ထိုကဲ့သို့ အနှုတ်ကိန်းတွေ ထည့်ခဲ့ရင်လည်း True ကိုပဲ ရရှိမှာ ဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for Booleans\\nprint('Booleans')",
        exercise: { task: "[Placeholder Task] Try writing code for Booleans", check: (out) => out.includes("Booleans") },
        quiz: { question: "[Placeholder Quiz] What does Booleans do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-7',
        title: "Type Conversion",
        content: "Type Conversion\n\nPython တွင်မည်သည့် value မှာမဆို data type တွေရှိပါတယ်။ Data Type တွေဆိုတာ data တွေကိုခွဲခြားထားခြင်းဖြစ်ပြီး compiler or interpreter အား data တွေကို ဘယ်လိုပုံစံဖြင့် အသုံးပြုမည်ဖြစ်ကြောင်း ပြောကြားခြင်း ဖြစ်ပါတယ်။ Type Conversion ဆိုသည်မှာ data type တစ်ခုကနေ အခြား data type တစ်ခုသို့ ပြောင်းလဲခြင်းကို ဆိုလိုပါတယ်။ Data တွေကို ကိုင်တွယ်တဲ့နေရာမှာ type တွေကို လိုသလိုပြောင်းလဲခြင်းဖြင့် ပိုမိုအသုံးပြုရ လွယ်ကူစေပါတယ်။ Type conversion မှာဆိုရင် implicit and explicit ဆိုပြီး နှစ်မျိုးရှိပါတယ်။",
        initialCode: "# Placeholder Code for Type Conversion\\nprint('Type Conversion')",
        exercise: { task: "[Placeholder Task] Try writing code for Type Conversion", check: (out) => out.includes("Type Conversion") },
        quiz: { question: "[Placeholder Quiz] What does Type Conversion do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-8',
        title: "Implicit Type Conversion or coercion",
        content: "Implicit Type Conversion or coercion\n\nImplicit Type Conversion သည် runtime မှာ python ကနေပြီး data တွေကို တိုက်ရိုက် conversion ပြုလုပ်ခြင်း ဖြစ်ပါတယ်။ user ကနေပြုလုပ်ပေးစရာ မလိုပါဘူး။ data များအား မည်သည့် data type ဖြစ်သည်ကို သိလိုပါက type() function ကိုအသုံးပြုနိုင်ပါတယ်။ အောက်ပါ program တွင် c_sum ရဲ့ data type ကိုသိနိုင်ရန် type() function ကိုသုံးထားပါတယ်။\n\n<CODE_BLOCK>Sample Program (6)\n\na_int = 1\nb_float = 1.0\nc_sum = a_int + b_float\nprint(c_sum) #2.0\nprint(type(c_sum)) #<class 'float'>\n</CODE_BLOCK>\n\nအထက်ပါ program (6) တွင် int and float တို့ကို ပေါင်းရာ၌ int သို့ပြောင်းလဲမသွားဘဲ output တွင် float data type သို့ ပြောင်းလဲသွားပါတယ်။ python တွင် int data size ထက် float data size က ပိုများပါတယ်။ float မှ int သို့ ပြောင်းလျှင် float တွင်ဝင်နေသော ဒသမကိန်းများ ပျောက်ဆုံးသွားနိုင်ပါတယ်။",
        initialCode: "# Placeholder Code for Implicit Type Conversion or coercion\\nprint('Implicit Type Conversion or coercion')",
        exercise: { task: "[Placeholder Task] Try writing code for Implicit Type Conversion or coercion", check: (out) => out.includes("Implicit Type Conversion or coercion") },
        quiz: { question: "[Placeholder Quiz] What does Implicit Type Conversion or coercion do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-9',
        title: "Explicit Type Conversion",
        content: "Explicit Type Conversion\n\nExplicit Type Conversion သည် user မှ data များကို လိုသလိုပြောင်းလဲခြင်း ဖြစ်ပါတယ်။ python တွင်မူ int(), float(), str() စသည့် function များကို explicit type conversion တွင်အသုံးပြုနိုင်ပါတယ်။ Explicit Type Conversion ကို type casting လို့လည်း ခေါ်ဆိုပါသည်။\n\n<CODE_BLOCK>Sample Program (7)\n\na_int = 1\nb_float = 1.0\nc_sum = a_int + b_float\n\n#in this case the type is float\nprint(type(c_sum))\n\n#converting float to int using int()\nnew_int=int(c_sum)\nprint(type(new_int))\n\n#output\n#<class 'float'>\n#<class 'int'>\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (7) run ကြည့်လျှင် output အနေဖြင့် data type နှစ်ခု ထွက်လာပါမည်။ ပထမတစ်ခုသည် python မှ handle လုပ်ထားသော implicit type ဖြစ်ပြီး ဒုတိယတစ်ခုဖြစ်သည့် int သည် user မှ handle လုပ်ထားသော explicit type ဖြစ်သည်။\n\nသတိပြုရန် အချက်များမှာ:\n• Implicit type တွင် data loss ဖြစ်ခြင်းကို ကာကွယ်နိုင်ရန် python interpreter သည် data size သေးရာမှ ကြီးရာသို့ ပြောင်းပေးသည်။\n• Explicit type သည် data loss ဖြစ်နိုင်ပါသည်။ အဘယ်ကြောင့်ဆိုသော် user မှ predefined function များကိုသုံးပြီး data type များအား လိုသလို ပြောင်းလဲခြင်း ကြောင့် ဖြစ်သည်။",
        initialCode: "# Placeholder Code for Explicit Type Conversion\\nprint('Explicit Type Conversion')",
        exercise: { task: "[Placeholder Task] Try writing code for Explicit Type Conversion", check: (out) => out.includes("Explicit Type Conversion") },
        quiz: { question: "[Placeholder Quiz] What does Explicit Type Conversion do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-10',
        title: "Data type conversion with string",
        content: "Data type conversion with string\n\nString \u1006\u102d\u102f\u1010\u102c character \u1010\u1005\u103a\u101c\u102f\u1036\u1038\u1010\u100a\u103a\u1038 \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a \u1010\u1005\u103a\u101c\u102f\u1036\u1038\u1011\u1000\u103a\u1015\u102d\u102f\u1015\u103c\u102e\u1038 \u1005\u102f\u1015\u1031\u102b\u1004\u103a\u1038\u1011\u102c\u1038\u1001\u103c\u1004\u103a\u1038\u1000\u102d\u102f string \u101f\u102f\u1001\u1031\u102b\u103a\u1015\u102b\u101e\u100a\u103a\u104b string \u1010\u103d\u1004\u103a letters, numbers and symbols \u1010\u102d\u102f\u1037 \u1015\u102b\u101d\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (8)\n(integer type \u1016\u103c\u1004\u1037\u103a \u1014\u1031\u102c\u1000\u103a\u1006\u102f\u1036\u1038 \u1005\u102c\u1000\u103c\u1031\u102c\u1004\u103a\u1038\u1010\u103d\u1004\u103a printing \u101c\u102f\u1015\u103a\u1011\u102c\u1038\u1015\u102b\u101e\u100a\u103a)\n\nint_one = 15\nint_two = 10\ntotal = int_one + int_two\n\n#printing like integer type\nprint('The total is', total)\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (8) run \u1000\u103c\u100a\u1037\u103a\u101c\u103b\u103e\u1004\u103a output 25 \u1000\u102d\u102f \u101b\u1015\u102b\u1019\u100a\u103a \u104b program error \u1010\u1000\u103a\u1019\u100a\u103a \u1019\u101f\u102f\u1010\u103a\u1015\u102b\u104b \u101a\u1001\u102f\u101b\u1031\u1038\u1011\u102c\u1038\u101e\u1031\u102c integer type \u1021\u102c\u1038 string type \u1016\u103c\u1004\u1037\u103a \u1021\u1031\u102c\u1000\u103a\u1015\u102b\u1021\u1010\u102d\u102f\u1004\u103a\u1038 \u1015\u103c\u1014\u103a\u101c\u100a\u103a \u101b\u1031\u1038\u101e\u102c\u1038\u1015\u102b\u1019\u100a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (9)\n\nint_one = 15\nint_two = 10\ntotal = int_one + int_two\n\n#printing like integer type\nprint('The total is'+total)\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (9) run \u1000\u103c\u100a\u1037\u103a\u101c\u103b\u103e\u1004\u103a \u1021\u1031\u102c\u1000\u103a\u1015\u102b\u1021\u1010\u102d\u102f\u1004\u103a\u1038 Type Error \u101b\u1015\u102b\u1019\u100a\u103a\u104b \u1006\u102d\u102f\u101c\u102d\u102f\u101e\u100a\u103a\u1019\u103e\u102c implicit \u1014\u100a\u103a\u1038\u101c\u1019\u103a\u1038\u1014\u1032\u1037 integer \u1019\u103e\u1010\u1005\u103a\u1006\u1004\u1037\u103a string \u101e\u102d\u102f\u1037 \u1019\u1015\u103c\u1031\u102c\u1004\u103a\u1038\u101c\u1032\u1014\u102d\u102f\u1004\u103a\u1000\u103c\u1031\u102c\u1004\u103a\u1038 \u1016\u1031\u102c\u103a\u1015\u103c\u1011\u102c\u1038\u1001\u103c\u1004\u103a\u1038\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>#output\n# Traceback (most recent call last):\n# File '.\\app.py', line 5, in <module>\n# print('The total is'+total)\n# TypeError: can only concatenate str (not 'int') to str\n</CODE_BLOCK>\n\nExplicit \u1014\u100a\u103a\u1038\u101c\u1019\u103a\u1038\u1000\u102d\u102f\u101e\u102f\u1036\u1038\u1015\u103c\u102e\u1038 int \u1019\u103e string \u101e\u102d\u102f\u1037 type casting \u1015\u103c\u102f\u101c\u102f\u1015\u103a\u1015\u102b\u1019\u100a\u103a\u104b \u1021\u1031\u102c\u1000\u103a\u1015\u102b program \u1000\u102d\u102f\u1000\u103c\u100a\u1037\u103a\u101c\u103b\u103e\u1004\u103a + operator \u1014\u103e\u1004\u1037\u103a , \u1010\u102d\u102f\u1037 \u1000\u103d\u102c\u1001\u103c\u102c\u1038\u101e\u103d\u102c\u1038\u101e\u100a\u103a\u1000\u102d\u102f \u1019\u103c\u1004\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u101e\u100a\u103a\u104b \u1021\u1031\u102c\u1000\u103a\u1010\u103d\u1004\u103a \u1016\u1031\u102c\u103a\u1015\u103c\u1011\u102c\u1038\u101e\u1031\u102c Sample Program(10) run \u1000\u103c\u100a\u1037\u103a\u101c\u103b\u103e\u1004\u103a output \u1021\u1014\u1031\u1016\u103c\u1004\u1037\u103a 25 \u1000\u102d\u102f\u101b\u1015\u102b\u1019\u100a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (10)\n\nint_one=15\nint_two=10\ntotal=int_one+int_two\n\n#printing like integer type\nprint('The total is '+str(total))\n\n#output\n#The total is 25\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Data type conversion with string\\nprint('Data type conversion with string')",
        exercise: { task: "[Placeholder Task] Try writing code for Data type conversion with string", check: (out) => out.includes("Data type conversion with string") },
        quiz: { question: "[Placeholder Quiz] What does Data type conversion with string do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-11',
        title: "String in Python",
        content: "String in Python\n\nPython programming \u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a string \u1000\u102d\u102f single quotes ('some thing') or double quotes (\"some thing\") \u1011\u1032\u1019\u103e\u102c\u1011\u100a\u1037\u103a\u1015\u103c\u102e\u1038 \u1010\u1005\u103a\u1005\u102f\u1010\u1005\u103a\u1005\u100a\u103a\u1038\u1011\u1032 \u101e\u1010\u103a\u1019\u103e\u1010\u103a\u1011\u102c\u1038\u1001\u103c\u1004\u103a\u1038\u1000\u102d\u102f \u1006\u102d\u102f\u101c\u102d\u102f\u1015\u102b\u1010\u101a\u103a\u104b \u1005\u102c\u101e\u102c\u1038\u1010\u103d\u1031\u1000\u102d\u102f single quote \u1011\u1032\u1019\u103e\u102c \u101b\u1031\u1038\u101b\u1004\u103a\u101c\u100a\u103a\u1038\u101b\u101e\u101c\u102d\u102f double quote \u1011\u1032\u1019\u103e\u102c\u101b\u1031\u1038\u101b\u1004\u103a\u101c\u100a\u103a\u1038 \u101b\u1015\u102b\u1010\u101a\u103a\u104b \u101e\u102d\u102f\u1037\u101e\u1031\u102c\u103a \u1019\u102d\u1019\u102d\u101b\u1031\u1038\u101e\u102c\u1038\u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u101e\u1031\u102c \u1005\u102c\u101e\u102c\u1038\u1011\u1032\u1019\u103e\u102c single quote \u1015\u102b\u1014\u1031\u1001\u1032\u1037\u1019\u101a\u103a\u1006\u102d\u102f\u101b\u1004\u103a double quote \u1000\u102d\u102f\u101e\u102f\u1036\u1038\u101e\u1004\u1037\u103a\u1015\u102b\u1010\u101a\u103a\u104b print(\"hello Myanmar's people\") \u1011\u102d\u102f\u1000\u1032\u1037\u101e\u102d\u102f\u1037 \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a Triple quote \u1000\u102d\u102f\u101c\u100a\u103a\u1038 \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u101c\u102d\u102f\u1037 \u101b\u1015\u102b\u101e\u1031\u1038\u1010\u101a\u103a\u104b\n\n\u1019\u102d\u1019\u102d\u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u101e\u1031\u102c \u1005\u102c\u101e\u102c\u1038\u1000\u102d\u102f variable \u1010\u1005\u103a\u1001\u102f\u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u103c\u102e\u1038\u101c\u100a\u103a\u1038 \u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u1037 \u101b\u1015\u102b \u101e\u1031\u1038\u1010\u101a\u103a\u104b\n\u1015\u1011\u1019 code \u1005\u102c\u1000\u103c\u1031\u102c\u1004\u103a\u1038\u1010\u103d\u1004\u103a Hello world \u1006\u102d\u102f\u101e\u100a\u1037\u103a \u1005\u102c\u101e\u102c\u1038\u1000\u102d\u102f mgmg \u1006\u102d\u102f\u101e\u100a\u1037\u103a variable \u1011\u1032\u101e\u102d\u102f\u1037 = (equal to) \u1006\u102d\u102f\u101e\u100a\u1037\u103a assignment operator \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u103c\u102e\u1038 \u1011\u100a\u1037\u103a\u101c\u102d\u102f\u1000\u103a\u101e\u100a\u103a\u104b \u1011\u102d\u102f\u1037\u1000\u103c\u1031\u102c\u1004\u1037\u103a mgmg \u1006\u102d\u102f\u101e\u100a\u1037\u103a variable \u1000\u102d\u102f program \u1011\u1032\u1019\u103e\u102c \u1019\u103c\u1004\u103a\u1010\u102d\u102f\u1004\u103a\u1038 Hello world \u1006\u102d\u102f\u101e\u100a\u1037\u103a \u1005\u102c\u1000\u103c\u1031\u102c\u1004\u103a\u1038\u1000\u102d\u102f\u1015\u1032 \u1011\u102f\u1010\u103a\u1015\u1031\u1038\u1019\u100a\u103a\u1016\u103c\u1005\u103a\u101e\u100a\u103a\u104b \u1012\u102f\u1010\u102d\u101a\u1005\u102c\u1000\u103c\u1031\u102c\u1004\u103a\u1038\u1010\u103d\u1004\u103a mgmg \u1006\u102d\u102f\u101e\u100a\u1037\u103a variable \u1000\u102d\u102f \u1001\u1031\u102b\u103a\u101e\u1031\u102c\u1000\u103c\u1031\u102c\u1004\u1037\u103a result \u1021\u1014\u1031\u1014\u103e\u1004\u1037\u103a Hello world \u1006\u102d\u102f\u101e\u100a\u1037\u103a \u1005\u102c\u101e\u102c\u1038\u1000\u102d\u102f \u101b\u101b\u103e\u102d\u1001\u103c\u1004\u103a\u1038\u1016\u103c\u1005\u103a\u101e\u100a\u103a\u104b len \u1000\u102d\u102f\u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u103c\u102e\u1038 \u1005\u102c\u101e\u102c\u1038\u1010\u103d\u1031\u101b\u1032\u1037 \u1021\u101b\u1031\u1021\u1010\u103d\u1000\u103a\u1000\u102d\u102f \u1011\u102f\u1010\u103a\u1015\u102b\u1019\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (11)\n\nmgmg = ('Hello world')\nprint(len(mgmg))\n</CODE_BLOCK>\n\nlen(length) \u101e\u100a\u103a \u1019\u102d\u1019\u102d\u1011\u102f\u1010\u103a\u101c\u102d\u102f\u1000\u103a\u1010\u1032\u1037 variable \u1011\u1032\u1019\u103e\u102c\u101b\u103e\u102d\u101e\u1031\u102c \u1005\u102c\u101e\u102c\u1038\u101b\u1032\u1037 \u1021\u101c\u102f\u1036\u1038\u1021\u101b\u1031\u1021\u1010\u103d\u1000\u103a\u1000\u102d\u102f \u1015\u103c\u1015\u1031\u1038\u1015\u102b\u1010\u101a\u103a\u104b space \u1000\u102d\u102f\u1015\u102b character \u1010\u1005\u103a\u1001\u102f\u1021\u1014\u1031\u1014\u1032\u1037 \u1011\u100a\u1037\u103a\u101e\u103d\u1004\u103a\u1038\u101b\u1031\u1010\u103d\u1000\u103a\u1015\u102b\u1010\u101a\u103a\u104b \u1021\u1011\u1000\u103a\u1015\u102b program \u1000\u102d\u102f run \u101c\u102d\u102f\u1000\u103a\u101b\u1004\u103a output \u1021\u1014\u1031\u1014\u1032\u1037 11 \u1000\u102d\u102f\u101b\u101b\u103e\u102d\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Example\n\nstr= 'Hello World' # (or)\nstr= 'Hello World'\n</CODE_BLOCK>\n\nPython \u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a slice operator \u1010\u103d\u1031\u1000\u102d\u102f\u101e\u102f\u1036\u1038\u1015\u103c\u102e\u1038 \u1005\u102c\u101e\u102c\u1038\u1010\u103d\u1031\u1000\u102d\u102f \u1010\u1005\u103a\u101c\u102f\u1036\u1038\u1001\u103b\u1004\u103a\u1038\u1005\u102e \u1016\u1031\u102c\u103a\u1015\u103c\u1001\u102d\u102f\u1004\u103a\u1038\u101c\u102d\u102f\u1037 \u101b\u1015\u102b\u1010\u101a\u103a\u104b \u101e\u1030\u1037\u101b\u1032\u1037 index \u1010\u103d\u1031\u1000\u102d\u102f zero \u1000\u1014\u1031\u1015\u1032\u1005\u1015\u103c\u102e\u1038 \u101b\u1031\u1010\u103d\u1000\u103a\u1015\u102b\u1010\u101a\u103a\u104b",
        initialCode: "# Placeholder Code for String in Python\\nprint('String in Python')",
        exercise: { task: "[Placeholder Task] Try writing code for String in Python", check: (out) => out.includes("String in Python") },
        quiz: { question: "[Placeholder Quiz] What does String in Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-12',
        title: "Accessing the Character using Slice operator",
        content: "Accessing the Character using Slice operator\n\n[ ] = \u1010\u1005\u103a\u101c\u102f\u1036\u1038\u1001\u103c\u1004\u103a\u1038\u1005\u102e\u1000\u102d\u102f \u101e\u102e\u1038\u1001\u103c\u102c\u1038\u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u1010\u1032\u1037\u1021\u1001\u102b\u1019\u103e\u102c \u101e\u102f\u1036\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>print (str[0])\n</CODE_BLOCK>\n\n\u101a\u1001\u102f program \u1000\u102d\u102f\u101b\u1031\u1038\u1000\u103c\u100a\u1037\u103a \u101c\u102d\u102f\u1000\u103a\u1019\u101a\u103a\u1006\u102d\u102f\u101b\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 1 \u1000\u102d\u102f\u101b\u101b\u103e\u102d\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (12)\n\nstr = ('Hello world')\nprint(str[10])\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (12) run \u1000\u103c\u100a\u1037\u103a\u1019\u101a\u103a\u1006\u102d\u102f\u101b\u1004\u103a\u101c\u100a\u103a\u1038 result \u1021\u1014\u1031\u1014\u1032\u1037 character d \u1000\u102d\u102f \u101b\u101b\u103e\u102d\u1019\u103e\u102c \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (13)\n\nstr = ('Hello world')\nprint(len(str[11]))\n\n#output\n# Traceback (most recent call last):\n# File '.\\app.py', line 4, in <module>\n# print(len(str[11]))\n# IndexError: string index out of range\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (13) run \u1000\u103c\u100a\u1037\u103a\u1019\u101a\u103a\u1006\u102d\u102f\u101b\u1004\u103a out of range \u1006\u102d\u102f\u1010\u1032\u1037 error \u1000\u102d\u102f \u1019\u103c\u1004\u103a\u1010\u103d\u1031\u1037\u101b\u1019\u103e\u102c\u1015\u102b\u104b \u1018\u102c\u1000\u103c\u1031\u102c\u1004\u1037\u103a\u101c\u1032\u1006\u102d\u102f\u1010\u1031\u102c\u1037 \u1005\u102f\u1005\u102f\u1015\u1031\u102b\u1004\u103a\u1038 character 11 \u101c\u102f\u1036\u1038\u101e\u102c\u1015\u102b\u101d\u1004\u103a\u1015\u103c\u102e\u1038 index 10 \u101e\u100a\u103a \u1021\u1019\u103b\u102c\u1038\u1006\u102f\u1036\u1038\u1016\u103c\u1005\u103a\u1014\u1031\u1010\u1032\u1037\u1021\u1010\u103d\u1000\u103a\u1015\u102b\u104b\n\nStr = \u1005\u102c\u101e\u102c\u1038\u1010\u103d\u1031\u1021\u102c\u1038\u101c\u102f\u1036\u1038\u1000\u102d\u102f \u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u1010\u1032\u1037\u1021\u1001\u102b\u1019\u103e\u102c \u101e\u102f\u1036\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (14)\n\nstr = ('Hello world')\nprint(str)\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (14) run \u101c\u102d\u102f\u1000\u103a\u101b\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 Hello world \u1006\u102d\u102f\u1010\u1032\u1037 \u1005\u102c\u101e\u102c\u1038 \u1021\u1015\u103c\u100a\u1037\u103a\u1021\u1005\u102f\u1036\u1000\u102d\u102f \u101b\u101b\u103e\u102d\u1019\u103e\u102c\u1015\u102b\u104b\n\nprint(str[0:5]) \u101b\u103e\u1031\u1037\u1000 0 \u101e\u100a\u103a \u1005\u1019\u1032\u1037 index number \u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 5 \u101e\u100a\u103a \u1006\u102f\u1036\u1038\u1019\u1032\u1037 index number \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (15)\n\nstr = ('Hello world')\nprint(str[0:5])\n\n#output\n#Hello\n</CODE_BLOCK>\n\n\u101a\u1001\u102f Sample Program (15) run \u1000\u103c\u100a\u1037\u103a\u1019\u101a\u103a\u1006\u102d\u102f\u101b\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 Hello \u1006\u102d\u102f\u1010\u102c\u1000\u102d\u102f \u101b\u101b\u103e\u102d\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b index \u1021\u1005\u1000\u1014\u1031\u1021\u1006\u102f\u1036\u1038\u1011\u102d character \u1010\u103d\u1031\u1000\u102d\u102f\u1011\u102f\u1010\u103a\u1015\u1031\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\u1015\u102d\u102f\u1015\u103c\u102e\u1038\u1014\u102c\u1038\u101c\u100a\u103a\u101e\u103d\u102c\u1038\u1021\u1031\u102c\u1004\u103a \u1021\u1031\u102c\u1000\u103a\u1000 program \u101c\u1031\u1038\u1010\u103d\u1031\u1000\u102d\u102f \u1006\u1000\u103a\u101b\u1031\u1038\u1000\u103c\u100a\u1037\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n[2:5] = \u1005\u102c\u101e\u102c\u1038\u1010\u103d\u1031\u1000\u102d\u102f \u1019\u102d\u1019\u102d\u101c\u102d\u102f\u1001\u103b\u1004\u103a\u101e\u101c\u1031\u102c\u1000\u103a\u1015\u1032 \u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u101e\u1031\u102c\u1021\u1001\u102b\u1019\u103b\u102d\u102f\u1038\u1019\u103e\u102c \u101e\u102f\u1036\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (16)\n\nstr = ('Hello world')\nprint(str[2:5])\n\n#output\n#llo\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (16) run \u101c\u102d\u102f\u1000\u103a\u101b\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 llo \u1006\u102d\u102f\u1010\u1032\u1037 character \u101e\u102f\u1036\u1038\u101c\u102f\u1036\u1038\u1000\u102d\u102f \u101b\u101b\u103e\u102d\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b \u101b\u103e\u1031\u1037\u1000 2 \u101e\u100a\u103a\u1005\u1019\u1032\u1037 index number \u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 \u1014\u1031\u102c\u1000\u103a\u1000 5 \u101e\u100a\u103a \u1006\u102f\u1036\u1038\u1019\u1032\u1037 index number \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n[2: ] = \u101e\u1010\u103a\u1019\u103e\u1010\u103a\u1011\u102c\u1038\u1010\u1032\u1037 index number \u1000\u1014\u1031 \u1000\u103b\u1014\u103a\u1010\u1032\u1037\u1021\u1006\u102f\u1036\u1038\u1011\u102d \u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u101e\u1031\u102c \u1021\u1001\u102b\u1019\u103b\u102d\u102f\u1038\u1019\u103e\u102c \u101e\u102f\u1036\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (17)\n\nstr = ('Hello world')\nprint(str[2:])\n\n#output\n#llo world\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (17) run \u101c\u102d\u102f\u1000\u103a\u101b\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 llo world \u1006\u102d\u102f\u1010\u102c\u1000\u102d\u102f \u101b\u101b\u103e\u102d\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b \u1011\u100a\u1037\u103a\u1015\u1031\u1038\u101c\u102d\u102f\u1000\u103a\u1010\u1032\u1037 index number \u1000\u1014\u1031\u1005\u1015\u103c\u102e\u1038 \u1014\u1031\u102c\u1000\u103a\u1015\u102d\u102f\u1004\u103a\u1038\u1019\u103e\u102c\u101b\u103e\u102d\u1010\u1032\u1037 \u1005\u102c\u101c\u102f\u1036\u1038\u1010\u103d\u1031 \u1021\u102c\u1038\u101c\u102f\u1036\u1038\u1000\u102d\u102f \u1016\u1031\u102c\u103a\u1015\u103c\u1015\u1031\u1038\u1019\u103e\u102c \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n[ :5] = \u1011\u100a\u1037\u103a\u1015\u1031\u1038\u101c\u102d\u102f\u1000\u103a\u1010\u1032\u1037 index number \u101b\u1032\u1037 \u1021\u101b\u103e\u1031\u1037\u1011\u102d \u1005\u102c\u101e\u102c\u1038\u1021\u102c\u1038\u101c\u102f\u1036\u1038\u1000\u102d\u102f \u1016\u1031\u102c\u103a\u1015\u103c\u1015\u1031\u1038\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b \u1014\u1031\u102c\u1000\u103a\u1015\u102d\u102f\u1004\u103a\u1038\u1005\u102c\u101c\u102f\u1036\u1038\u1010\u103d\u1031\u1000\u102d\u102f\u1010\u1031\u102c\u1037 \u1016\u1031\u102c\u103a\u1015\u103c\u1015\u1031\u1038\u1019\u103e\u102c \u1019\u101f\u102f\u1010\u103a\u1015\u102b\u1018\u1030\u1038\u104b\n\n<CODE_BLOCK>Sample Program (18)\n\nstr = ('Hello world')\nprint(str[:5])\n\n#output\n#Hello\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (18) run \u101c\u102d\u102f\u1000\u103a\u1019\u101a\u103a\u1006\u102d\u102f\u101b\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 Hello \u1000\u102d\u102f\u101b\u101b\u103e\u102d\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\nprint(str * 2 ) = \u1005\u102c\u101e\u102c\u1038\u1010\u103d\u1031\u1000\u102d\u102f \u1014\u103e\u1005\u103a\u1000\u103c\u102d\u1019\u103a\u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u101e\u1031\u102c\u1021\u1001\u102b\u1019\u103b\u102d\u102f\u1038\u1019\u103e\u102c \u101e\u102f\u1036\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (19)\n\nstr = ('Hello Green Hackers')\nprint(str*2)\n\n#Output\n#Hello Green HackersHello Green Hackers\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (19) run \u1000\u103c\u100a\u1037\u103a\u101b\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 \u1005\u102c\u101e\u102c\u1038\u1000\u102d\u102f \u1014\u103e\u1005\u103a\u1000\u103c\u102d\u1019\u103a \u1016\u1031\u102c\u103a\u1015\u103c\u1011\u102c\u1038\u1010\u102c\u1000\u102d\u102f \u1019\u103c\u1004\u103a\u101b\u1019\u103e\u102c\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\nprint (str + 'WinHtut') = \u1005\u102c\u101e\u102c\u1038\u1010\u103d\u1031\u1000\u102d\u102f \u1010\u1005\u103a\u1001\u102f\u1014\u1032\u1037\u1010\u1005\u103a\u1001\u102f\u1015\u1031\u102b\u1004\u103a\u1038\u1015\u103c\u102e\u1038 \u1016\u1031\u102c\u103a\u1015\u103c\u101c\u102d\u102f\u1010\u1032\u1037 \u1021\u1001\u102b\u1019\u103e\u102c\u101e\u102f\u1036\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (20)\n\nstr = ('Hello Green Hackers')\nprint(str+'Win Htut')\n\n#Output\n#Hello Green HackersWin Htut\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (20) \u1010\u103d\u1004\u103a result \u1021\u1014\u1031\u1014\u1032\u1037 \u1005\u102c\u101e\u102c\u1038\u1014\u103e\u1005\u103a\u1001\u102f\u101c\u102f\u1036\u1038\u1000\u102d\u102f \u1016\u1031\u102c\u103a\u1015\u103c\u1015\u1031\u1038\u1011\u102c\u1038\u1010\u102c\u1000\u102d\u102f \u1019\u103c\u1004\u103a\u101b\u1019\u103e\u102c\u1015\u102b\u104b String Handling \u1010\u103d\u1031\u1011\u1032\u1000 built\u2013in method \u1010\u103d\u1031\u1016\u103c\u1005\u103a\u1010\u1032\u1037 upper and lower \u1021\u1000\u103c\u1031\u102c\u1004\u103a\u1038\u1000\u102d\u102f \u1006\u1000\u103a\u101e\u103d\u102c\u1038\u1015\u102b\u1019\u101a\u103a\u104b",
        initialCode: "# Placeholder Code for Accessing the Character using Slice operator\\nprint('Accessing the Character using Slice operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Accessing the Character using Slice operator", check: (out) => out.includes("Accessing the Character using Slice operator") },
        quiz: { question: "[Placeholder Quiz] What does Accessing the Character using Slice operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-13',
        title: "upper()",
        content: "upper()\n\nPython programming မှာဆိုရင် upper() သည် built-in method ဖြစ်ပြီး string တွေကို လိုအပ်သလို handle လုပ်ဖို့ အသုံးပြုပါတယ်။ lowercase နဲ့ရေးထားတဲ့ characters တွေအားလုံးကို uppercase (အကြီး)အဖြစ် ပြောင်းလဲပေးလိုက်ပါတယ်။ တကယ်လို့ စာသားတွေထဲမှာ uppercase (အကြီး)တွေ ပါနေခဲ့မယ်ဆိုရင် မူလအတိုင်း အကြီးတွေကိုပဲ ပြန်လည်ဖော်ပြပေးမှာပါ။\n\nSyntax: String.upper()\n\nParameter: upper() (မည်သည့် parameter မှ မပါဝင်ပါ)\n\nReturn: စာလုံးအသေးတွေကို အကြီးအဖြစ် ပြောင်းလဲပေးပါတယ်။\n\n<CODE_BLOCK>Sample Program (21)\n\nstr = ('Hello Green Hackers')\nprint(str.upper())\n\n#output\n#HELLO GREEN HACKERS\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (21) အရ စာလုံးအကြီးတွေကို ပြန်ဖော်ပြပေးတာ မြင်ရမှာဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for upper()\\nprint('upper()')",
        exercise: { task: "[Placeholder Task] Try writing code for upper()", check: (out) => out.includes("upper()") },
        quiz: { question: "[Placeholder Quiz] What does upper() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-14',
        title: "lower()",
        content: "lower()\n\nPython programming မှာဆိုရင် lower() သည် built-in method ဖြစ်ပြီး string တွေကို လိုအပ်သလို handle လုပ်ဖို့ အသုံးပြုပါတယ်။ uppercase နဲ့ရေးထားတဲ့ characters တွေအားလုံးကို lowercase (အသေး)အဖြစ် ပြောင်းလဲပေးလိုက်ပါတယ်။ တကယ်လို့ စာသားတွေထဲမှာ lowercase (အသေး)တွေ ပါနေခဲ့မယ်ဆိုရင် မူလအတိုင်း အသေးတွေကိုပဲ ပြန်လည်ဖော်ပြပေးမှာပါ။\n\nSyntax: String.lower()\n\nParameter: lower() (မည်သည့် parameter မှ မပါဝင်ပါ)\n\nReturn: စာလုံးအကြီးတွေကို အသေးတွေအဖြစ် ပြောင်းပေးပါတယ်။\n\n<CODE_BLOCK>Sample Program (22)\n\nstr = ('Hello Green Hackers')\nprint(str.lower())\n\n#output\n#hello green hackers\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (22) အရ result အနေနဲ့ characters တွေအားလုံးကို lowercase (စာလုံးအသေး) တွေနဲ့ ဖော်ပြထားတာကို မြင်ရမှာပါ။\n\n<CODE_BLOCK>Sample Program (23)\n\nstr = ('Hello Green Hackers')\nprint(str.lower(1))\n\n#output\n#Traceback (most recent call last):\n# File '.\\app.py', line 5, in <module>\n# print(str.lower(1))\n# TypeError: lower() takes no arguments (1 given)\n</CODE_BLOCK>\n\nupper() or lower() ထဲမှာ အထက်ပါအတိုင်း argument တစ်ခုခု ထည့်လိုက်မယ်ဆိုရင် အထက်ပါ Sample Program (23) တွင်ပြထားသည့်အတိုင်း error message ကို မြင်တွေ့ရမှာဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for lower()\\nprint('lower()')",
        exercise: { task: "[Placeholder Task] Try writing code for lower()", check: (out) => out.includes("lower()") },
        quiz: { question: "[Placeholder Quiz] What does lower() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-15',
        title: "isupper()",
        content: "isupper()\n\nisupper() သည် python ရဲ့ built-in method ဖြစ်ပြီး string တွေကို handle လုပ်ဖို့ အတွက် အသုံးဝင်ပါတယ်။ တကယ်လို့ characters တွေအားလုံးဟာ အကြီးတွေချည်းပဲ ဖြစ်နေခဲ့မယ်ဆိုရင် True ဆိုတဲ့ return value ကိုပြန်ရမှာဖြစ်ပြီး characters တွေထဲမှာ အကြီးတွေရော အသေးတွေရော ပါဝင်နေခဲ့မယ်ဆိုရင်တော့ return value အနေနဲ့ False ကို ပြန်ရမှာဖြစ်ပါတယ်။\n\nSyntax: string.isupper()\n\nParameter: isupper() သည် မည့်သည့် parameter မှ မပါဝင်ပါ။\n\nReturns: Characters အားလုံးသည် အကြီးဖြစ်နေရင် return value အနေနဲ့ True ကိုရမှာဖြစ်ပြီး အသေးတွေပါဝင်နေခဲ့ရင်တော့ False ကိုရရှိမှာဖြစ်ပါတယ်။\n\n<CODE_BLOCK>Sample Program (25)\n\nstr = ('HELLOMYANMAR')\nprint(str.isupper())\n\n#output\n#True\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (25) run ကြည့်ရင် result အနေနဲ့ True ကိုရရှိမှာဖြစ်ပါတယ်။ characters တွေ အားလုံးအကြီးတွေ ဖြစ်နေလို့ပါ။",
        initialCode: "# Placeholder Code for isupper()\\nprint('isupper()')",
        exercise: { task: "[Placeholder Task] Try writing code for isupper()", check: (out) => out.includes("isupper()") },
        quiz: { question: "[Placeholder Quiz] What does isupper() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-16',
        title: "islower()",
        content: "islower()\n\nislower() သည် python ရဲ့ built-in method ဖြစ်ပြီး string တွေကို handle လုပ်ဖို့ အတွက် အသုံးဝင်ပါတယ်။ တကယ်လို့ characters တွေအားလုံးဟာ အသေးတွေချည်းပဲ ဖြစ်နေခဲ့မယ်ဆိုရင် True ဆိုတဲ့ return value ကိုပြန်ရမှာဖြစ်ပြီး characters တွေထဲမှာ အကြီးတွေရော အသေးတွေရော ပါဝင်နေခဲ့မယ်ဆိုရင်တော့ return value အနေနဲ့ False ကို ပြန်ရမှာဖြစ်ပါတယ်။\n\nSyntax: string.islower()\n\nParameter: islower() သည် မည့်သည့် parameter မှ မပါဝင်ပါ။\n\nReturns: Characters အားလုံးသည် အသေးဖြစ်နေရင် return value အနေနဲ့ True ကိုရမှာဖြစ်ပြီး အကြီးတွေပါဝင်နေခဲ့ရင်တော့ False ကိုရရှိမှာဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for islower()\\nprint('islower()')",
        exercise: { task: "[Placeholder Task] Try writing code for islower()", check: (out) => out.includes("islower()") },
        quiz: { question: "[Placeholder Quiz] What does islower() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-17',
        title: "count()",
        content: "count()\n\ncount() \u101e\u100a\u103a python programming \u104f built-in function \u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 parameter \u1021\u1014\u1031\u1014\u1032\u1037\u1011\u100a\u1037\u103a\u1015\u1031\u1038\u101c\u102d\u102f\u1000\u103a\u1010\u1032\u1037 character \u101b\u1032\u1037 \u1018\u101a\u103a\u1014\u103e\u1005\u103a\u101c\u102f\u1036\u1038\u101b\u103e\u102d\u101e\u101c\u1032 \u1006\u102d\u102f\u1010\u1032\u1037 \u1021\u101b\u1031\u1021\u1010\u103d\u1000\u103a\u1000\u102d\u102f return \u1021\u1014\u1031\u1014\u1032\u1037 \u1015\u103c\u1014\u103a\u1015\u1031\u1038\u1015\u102b\u1010\u101a\u103a\u104b\n\nSyntax: string.count(\"\u1019\u102d\u1019\u102d\u1011\u100a\u1037\u103a\u101c\u102d\u102f\u101e\u1031\u102c character\")\n\nParameter: \u1019\u102d\u1019\u102d \u101b\u103e\u102c\u101c\u102d\u102f\u101e\u1031\u102c character \u1000\u102d\u102f\u1011\u100a\u1037\u103a\u1015\u1031\u1038\u101b\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (28)\n\nstr = ('helloMyanmar')\nprint(str.count('l'))\n\n#output\n#2\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (28) \u1019\u103e\u102c\u1006\u102d\u102f\u101b\u1004\u103a character l \u101b\u1032\u1037 \u1018\u101a\u103a\u1014\u103e\u1005\u103a\u1000\u103c\u102d\u1019\u103a\u1015\u102b\u101c\u1032 \u1006\u102d\u102f\u1010\u1032\u1037 \u1021\u1000\u103c\u102d\u1019\u103a \u1021\u101b\u1031\u1021\u1010\u103d\u1000\u103a\u1000\u102d\u102f\u101b\u103e\u102c\u1011\u102c\u1038\u1015\u102b\u1010\u101a\u103a\u104b result \u1021\u1014\u1031\u1014\u1032\u1037 2 \u1000\u102d\u102f\u1015\u103c\u1014\u103a\u1015\u1031\u1038\u1015\u102b\u1010\u101a\u103a \u1018\u102c\u1000\u103c\u1031\u102c\u1004\u1037\u103a\u101c\u1032 \u1006\u102d\u102f\u1010\u1031\u102c\u1037 string \u1011\u1032\u1019\u103e\u102c ll \u1006\u102d\u102f\u1015\u103c\u102e\u1038 character \u1014\u103e\u1005\u103a\u101c\u102f\u1036\u1038\u1015\u102b\u1014\u1031\u1010\u1032\u1037 \u1021\u1010\u103d\u1000\u103a\u1000\u103c\u1031\u102c\u1004\u1037\u103a\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (29)\n\nstr = ('helloMyanmar')\nprint(str.count('ll'))\n\n#output\n#1\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (29) \u1000\u1010\u1031\u102c\u1037 character ll \u1006\u102d\u102f\u1010\u102c\u1000\u102d\u102f \u1018\u101a\u103a\u1014\u103e\u1005\u103a\u1001\u102b \u1015\u102b\u101c\u1032 \u1005\u1005\u103a\u1011\u102c\u1038\u1001\u103c\u1004\u103a\u1038 \u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b ll \u101e\u100a\u103a \u1010\u1005\u103a\u1001\u102b\u1010\u100a\u103a\u1038\u1015\u102b\u101e\u100a\u1037\u103a \u1021\u1010\u103d\u1000\u103a\u1000\u103c\u1031\u102c\u1004\u1037\u103a 1 \u1006\u102d\u102f\u1015\u103c\u102e\u1038 return value \u1015\u103c\u1014\u103a\u101b\u1001\u103c\u1004\u103a\u1038\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b\n\n<CODE_BLOCK>Sample Program (30)\n\nstr = ('helloMyanmar')\nprint(str.count('m'))\n\n#output\n#1\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b Sample Program (30) \u101e\u100a\u103a character m \u1018\u101a\u103a\u1014\u103e\u1005\u103a\u1000\u103c\u102d\u1019\u103a\u1015\u102b \u101e\u101c\u1032\u1006\u102d\u102f \u1010\u102c\u1000\u102d\u102f \u101b\u103e\u102c\u1011\u102c\u1038\u1001\u103c\u1004\u103a\u1038\u1016\u103c\u1005\u103a\u1015\u102b\u1010\u101a\u103a\u104b",
        initialCode: "# Placeholder Code for count()\\nprint('count()')",
        exercise: { task: "[Placeholder Task] Try writing code for count()", check: (out) => out.includes("count()") },
        quiz: { question: "[Placeholder Quiz] What does count() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-18',
        title: "find()",
        content: "find()\n\nfind() သည် python programming ၏ built-in function တစ်ခုဖြစ်ပြီး character တစ်လုံးရဲ့ index တည်နေရာကို ရှာပေးတဲ့ နေရာမှာ အသုံးဝင်လှပါတယ်။\n\nSyntax: string.find(\" မိမိ ရှာလိုသော character \")\n\nParameter: မိမိ ရှာလိုသော character ကိုထည့်ပေးရပါတယ်။\n\nReturn: ထည့်ပေးလိုက်သော character ၏ index နေရာ အတိအကျကို return value အနေနဲ့ ပြန်ပေးပါတယ်။\n\n<CODE_BLOCK>Sample Program (31)\n\nstr = ('helloMyanmar')\nprint(str.find('y'))\n\n#output\n#6\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (31) တွင် character y ကိုရှာထားပြီး result အနေနဲ့ y ရဲ့ Index တည်နေရာ အတိအကျ ကို ပြန်လည်ဖော်ပြပေးပါတယ်။",
        initialCode: "# Placeholder Code for find()\\nprint('find()')",
        exercise: { task: "[Placeholder Task] Try writing code for find()", check: (out) => out.includes("find()") },
        quiz: { question: "[Placeholder Quiz] What does find() do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l1-19',
        title: "replace()",
        content: "replace()\n\nreplace() ဆိုတာက python programming language ရဲ့ built-in function တစ်ခုဖြစ်ပါတယ်။ return အနေနဲ့ အစားထိုးလိုက်တဲ့ string တွေကို ပြန် ပေးပါတယ်။\n\nSyntax: string.replace(old,new)\n\nParameters:\n• old- အစားထိုးချ\u1004်တဲ့ စာသားကိုထည့်ပေးရပါတယ်။\n• new- အသစ်ပေါ်\u101cာစေခ\u103b\u1004်တဲ့ စာသားကို ထည့်ပေးရပါတယ်။\n\nReturn value: return အနေနဲ့ string တွေကို ပြန်ပေးပြီး ဘယ်လို string တွေလည်းဆိုရင် user ကနေ အဟော\u1004\u103a\u1038နေရာမှာ အစားထိုးလိုက်တဲ့ string အသစ်တွေပ\u102b။\n\n<CODE_BLOCK>Sample Program (32)\n\nstr = ('helloMyanmar WinHtut')\nnew_string = str.replace('WinHtut', 'GH')\nprint(new_string)\n\n#output\n#helloMyanmar GH\n</CODE_BLOCK>\n\nရှေ့က Sample Program (31) ကဲ့သို့ string ကို တိုက်ရိုက် print ထုတ်ရင်လည်း ရသလို ယခုကဲ့သို့ variable အသစ်ထဲကို လည်း assign လုပ်ပြီး print ထုတ်လို့ ရပါတယ်။",
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
        content: "Operators\n\nအခြေခံအားဖြင့် ပေါင်းခြင်း၍ နုတ်ခြင်း၍ စားခြင်း၍ မြှောက်ခြင်း၍ အကြွင်းရှာခြင်း၍ နှ\u102dု\u1004\u103a\u1038\u101a\u103e\u1009\u103aခြင်း စတဲ့ mathematical ဆို\u1004\u103a\u101b\u102c လုပ်ဆော\u1004\u103aချက်တွေကို လုပ်ဆော\u1004\u103aပေးတဲ့ သင\u103a\u1039\u1000\u1031\u1010 (symbols) တွေကို operators လို့ ခေါ်ပါတယ်။ operator ရဲ့ ဘေးတစ်ဘက်စီ သို့မဟုတ် ဘေးမှာ ရှိသော variable or value တွေကိုတော့ operand လို့ ခေါ်ပါတယ်။\n\nPython programming မှာ operator များကို ယေဘုယျ အားဖြ\u1004\u1037\u103a (၈) မျိုးခွဲခြ\u102cး နိုင်ပါသည်။\n1. Arithmetic Operators\n2. Relational Operators\n3. Logical Operators\n4. Bitwise Operators\n5. Assignment Operators\n6. Special Operators\n7. Identity Operators\n8. Membership Operators တို့ ဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for Operators\\nprint('Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Operators", check: (out) => out.includes("Operators") },
        quiz: { question: "[Placeholder Quiz] What does Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-2',
        title: "Arithmetic Operators",
        content: "Arithmetic Operators\n\nArithmetic Operators တွေကို mathematical operations တွေလုပ်ဆော\u1004\u103aဖို့ အတွက် အသုံးပြုပါတယ်။ ဥပမာ ပေါင်းခြင်း၍ နုတ်ခြင်း၍ စားခြင်း၍ မြှောက်ခြင်း တို့ ဖြစ်ပါတယ်။\n\nPython programming မှာ arithmetic operators တွေကို အခြေခံ အားဖြ\u1004\u1037\u103a 7 မျိုးခွဲခြ\u102cးနိုင်ပါတယ်။\n1. Add {a+b} (ပေါင်းပေးရာတွင် အသုံးပြုပါတယ်။ operands နှစ်ခု ဖြစ်နိုင်သလို unary plus တစ်ခုထဲလည်း ဖြစ်နိုင်ပါတယ်)\n2. Subtract {a-b} (နုတ်ပေးရာတွင် အသုံးပြုပါတယ်။ operands နှစ်ခုဖြစ်နိုင်သလို unary minus တစ်ခုထဲလည်း ဖြစ်နိုင်ပါတယ်)\n3. Multiply {a*b} (operands နှစ်ခုကို မြှောက်ရာတွင် အသုံးပြုပါတယ်)\n4. Divide {a/b} (ဘယ်ဘက်က operand ကို ညာဘက်က operand ကနေစားပါတယ် python programming မှာ float ဒသမ ကိန်းနဲ့ ပြန်လည် ဖော်ပြပေးပါတယ်)\n5. Modulus { x % y } (အကြွင်းရှာတဲ့ အချိန်မှာ အသုံးပြုပါတယ် ဘယ်ဘက်က operand ကို ညာဘက် operand ကနေ remainder လုပ်ပါတယ်)\n6. Floor division { x // y } (division လုပ်တာခြင်း တူသော်လည်းပဲ float ဒသမကိန်းဖြ\u1004\u1037\u103a ပြန်လည်ဖော်ပြခြင်းမျိုး မဟုတ်ပဲ ကိန်းပြည့်အနေဖြ\u1004\u1037\u103aသာ ပြန်လည် ဖော်ပြပေးပါတယ်။)\n7. Exponent { x**y } (y ကို x ရဲ့ power အနေဖြ\u1004\u1037\u103aထားပြီး မြှောက်တာပ\u102b 2**3 ဆိုလ\u103b\u103e\u1004\u103a 2 power 3 ဆိုတာမျိုးပ\u102b)\n\nSample program ကို output နှင့်တကွ ဖော်ပြထားပါတယ်။\n\n<CODE_BLOCK>Sample Program (33)\n\na = 13\nb = 4\nprint('a + b =', a+b)\n#add a + b = 17\n\nprint('a - b =', a-b)\n#subtract a - b = 9\n\nprint('a * b =', a*b)\n#Multiply a * b = 52\n\nprint('a / b =', a/b)\n#Divide a / b = 3.25\n\nprint('a % b =', a%b)\n#Modulus a % b = 1\n\nprint('a // b =', a//b)\n#floor division a // b = 3\n\nprint('a ** b =', a**b)\n#Exponent a ** b = 28561\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Arithmetic Operators\\nprint('Arithmetic Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Arithmetic Operators", check: (out) => out.includes("Arithmetic Operators") },
        quiz: { question: "[Placeholder Quiz] What does Arithmetic Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-3',
        title: "Relational Operator",
        content: "Relational Operator\n\nRelational Operator များကို အခြေခံအားဖြင့် (၆) မျိုးခွဲခြားနိုင်ပါသည်။ relational operator များကို operand များအား နှိုင်းယှဉ်လိုသည့် အခါမျိုးတွင် အသုံးပြုပါတယ်။\n\n1. Greater than { x > y } (left operand ဖြစ်သည့် x သည် right operand ဖြစ်သည့် y ထက် ကြီးလျှင် မှန်သည်)\n2. Less than { x < y } (left operand ဖြစ်သည့် x သည် right operand ဖြစ်သည့် y ထက် ငယ်လျှင် မှန်သည်)\n3. Equal to { x == y } (left operand နှင့် right operand သည် နှစ်ခုလုံးဟာ တူညီနေလျှင်မှန်သည်)\n4. Not equal to { x != y } (left operand နှင့် right operand သည် တစ်ခုနှင့် တစ်ခု မတူလျှင် မှန်သည်)\n5. Greater than or equal to { x >= y } (left operand သည် right operand ထက် ကြီးလျှင် သို့မဟုတ် left and right operand ညီနေလျှင် မှန်သည်)\n6. Less than or equal to { x <= y } (left operand သည် right operand ထက် ငယ်နေလျှင် သို့မဟုတ် left and right operand များ ညီနေလျှင် မှန်သည်)\n\nSample program နှင့် output ကို အောက်တွင် ဖော်ပြထားပါသည်။\n\n<CODE_BLOCK>Sample Program (34)\n\na = 13\nb = 4\n\nprint('a > b =', a>b)\n#Greater than output a > b = True\n\nprint('a < b =', a<b)\n#Less than output a < b = False\n\nprint('a == b =', a==b)\n#Equal than output a == b = False\n\nprint('a != b =', a!=b)\n#Not Equal than output a != b = True\n\nprint('a >= b =', a>=b)\n#Greater than or Equal output a >= b = True\n\nprint('a <= b =', a<=b)\n#Less than or equal output a <= b = False\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Relational Operator\\nprint('Relational Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Relational Operator", check: (out) => out.includes("Relational Operator") },
        quiz: { question: "[Placeholder Quiz] What does Relational Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-4',
        title: "Logical Operators",
        content: "Logical Operators\n\nPython programming မှာ logical operator သုံးမျိုးရှိပါတယ်။ သူတို့ သုံးမျိုးစလုံးသည် အခြားသော programming တော်တော်များများတွင် symbols များကို အသုံးပြုကြပြီး python တွင်မူ စာသားများဖြင့် ဖော်ပြပါတယ်။ logical operator သုံးမျိုးမှာ and, or, not တို့ ဖြစ်ပါတယ်။ and သည် left and right operands နှစ်ခုလုံးမှန်နေလျှင် true ဖြစ်ပြီး or သည် left and right operands နှစ်ခုမှ နှစ်ခုလုံး သို့မဟုတ် တစ်ခုမှန်နေလျှင် true ဖြစ်ပါသည်။ not သည် သူ့ဘေးမှ operand မဟုတ်ဘူးဆိုလျှင် true ဖြစ်ပါသည်။",
        initialCode: "# Placeholder Code for Logical Operators\\nprint('Logical Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Logical Operators", check: (out) => out.includes("Logical Operators") },
        quiz: { question: "[Placeholder Quiz] What does Logical Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-5',
        title: "And Logical Operator",
        content: "And Logical Operator\n\nKeyword အနေဖြင့် and ကိုအသုံးပြုပြီး အခြားသော programming language တော်တော်များများတွင် & ကို အသုံးပြုကြသည်။ ဘေးတစ်ဘက်စီတွင်ရှိသော conditions နှစ်ခုလုံးမှန်မှသာလျှင် output ကို ထုတ်ပေးပါသည်။ အောက်တွင် sample program ကိုဖော်ပြထားပါတယ်။\n\n<CODE_BLOCK>Sample Program (35)\n\na = 10\nb = 9\nc = 13\n\nif a > b and c > a:\n    print('Both conditions are True')\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for And Logical Operator\\nprint('And Logical Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for And Logical Operator", check: (out) => out.includes("And Logical Operator") },
        quiz: { question: "[Placeholder Quiz] What does And Logical Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-6',
        title: "Or Logical Operator",
        content: "Or Logical Operator\n\nKeyword အနေဖြင့် or ကို အသုံးပြုပြီး အခြားသော programming language တွေမှာဆိုရင် | ကိုသုံးပါသည်။ ဘေး တစ်ဘက်စီတွင် ရှိသော conditions နှစ်ခုထဲမှ တစ်ခု မဟုတ် တစ်ခု မှန်လျှင် အလုပ် လုပ်ပါသည်။\n\n<CODE_BLOCK>Sample Program (36)\n\na = 10\nb = 9\nc = 13\n\nif a > b or c > a:\n    print('At least one of the conditions is True')\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Or Logical Operator\\nprint('Or Logical Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Or Logical Operator", check: (out) => out.includes("Or Logical Operator") },
        quiz: { question: "[Placeholder Quiz] What does Or Logical Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-7',
        title: "Not Logical Operator",
        content: "Not Logical Operator\n\nKeyword အနေဖြင့် not ကို အသုံးပြုပြီး အခြားသော programming language များတွင်မူ symbol ဖြစ်သည့် ! ကို အသုံးပြုပါသည်။ ဆိုလိုသည်မှာ not နောက်မှ condition သည် true condition ဖြစ်နေလျှင် not true မမှန်ဘူးဟု ဆိုလိုခြင်းဖြစ်ပြီး output အနေဖြင့် မမှန်ဘူးဆိုသည့်အတိုင်း false ထွက်လာမှာဖြစ်ပါတယ်။ condition သည် မှားနေလျှင် not false မမှားဘူးဟု ဆိုလိုခြင်းဖြစ်ပြီး output အနေဖြင့် true ထွက်လာမှာ ဖြစ်ပါတယ်။\n\n<CODE_BLOCK>Sample Program (37)\n\nx = True\nprint('not x is ', not x)\n#not logical operator output x is false\n\n#Reverse program\nx=False\nprint('not x is ', not x)\n#not logical operator output not x is True\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Not Logical Operator\\nprint('Not Logical Operator')",
        exercise: { task: "[Placeholder Task] Try writing code for Not Logical Operator", check: (out) => out.includes("Not Logical Operator") },
        quiz: { question: "[Placeholder Quiz] What does Not Logical Operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-8',
        title: "Bitwise Operators",
        content: "Bitwise Operators\n\nOperands တွေနဲ့ bit တစ်ခုချင်းစီ bit by bit လုပ်ဆောင်တဲ့ operator တွေကို bitwise operators တွေလို့ ခေါ်ဆိုပါတယ်။ Python programming language မှာဆိုရင် bitwise operators (6) မျိုးရှိ ပါတယ်။\n\nBitwise AND ( & ) သည် 0 and 0 ဆိုရင် output အနေဖြင့် 0 ပြန်ပေးပြီး 0 and 1 ဆိုရင်တော့ 0 ပြန်ပေးသလို 1 and 1 ဆိုရင်လည်း output အနေဖြင့် 1 ပြန်ပေးပါတယ်။ အောက်တွင် ဖော်ပြ ထားသောပုံကို ကြည့်ခြင်းအားဖြင့် အလယ်တကူသဘောပေါက်နိုင်ပါတယ်။\n\n<IMG_BLOCK>/AND1.png</IMG_BLOCK>\n\n<CODE_BLOCK>Sample Program (38) for bitwise and ( & )\n\na = 60 #60 = 0011 1100\nb = 13 #13 = 0000 1101\nc = 0\nc = a & b #12 = 0000 1100\nprint('value of c is ' , c)\n</CODE_BLOCK>\n\nအထက်ပါအတိုင်း program ရေးပြီး run ကြည့်လျှင် output အနေဖြင့် 12 ထွက်လာသည်ကို မြင်ရပါမည်။ ဘာကြောင့် 12 ထွက်လာသနည်း။ a value ဖြစ်သည့် 60 သည် decimal value ဖြစ်ပြီး သူ့ရဲ့ binary value မှာ 8 bits ဖြင့်ကြည့်လျှင် 0011 1100 ဖြစ်သည်။ ထိုနည်းတူ b value ဖြစ်သည့် 13 ကို binary value 8 bits ဖြင့်ကြည့်လျှင် 0000 1101 ဖြစ်သည်။\n\n<IMG_BLOCK>/AND2.png</IMG_BLOCK>\n\nဖော်ပြပါ table အားကြည့်လျှင် output အနေဖြင့် 0000 1100 ထွက်လာသည်ကို မြင်ရပါမည်။ ထို binary value များအား decimal value အဖြစ် ပြန်ပြောင်းကြည့်လျှင် 12 ရပါမည်။ ထို့ကြောင့် ဖော်ပြပါ Python program အား run သော အချိန်တွင် output အဖြစ် 12 ကို ပြန်ရရှိ ခြင်း ဖြစ်ပါသည်။",
        initialCode: "# Placeholder Code for Bitwise Operators\\nprint('Bitwise Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise Operators", check: (out) => out.includes("Bitwise Operators") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-9',
        title: "Bitwise or ( | )",
        content: "Bitwise or ( | )\n\nbitwise or သည် 0 and 1 ဆိုလျှင် output အနေဖြင့် 1 ပြန်ပေးပြီး 1 and 1 ဆိုလျှင်လည်း 1 ပြန်ပေးသည် ထိုနည်းတူ 0 and 0 ဆိုလျှင် 0 ပြန်ပေးပါသည်။\n\n<IMG_BLOCK>/OR1.png</IMG_BLOCK>\n\n<CODE_BLOCK>Sample Program (39)\n\na = 60 #60 = 0011 1100\nb = 13 #13 = 0000 1101\nc = 0\nc = a | b #61 = 0011 1101\nprint('value of c is ' , c)\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (39) အား run ကြည့်လျှင် output အနေဖြင့် 61 ကို ပြန်ပေးပါမည်။\nbinary value အနေဖြင့် output တွင် 0011 1101 ကို ပြန်ရပါမည်။ ထို value အား decimal အနေဖြင့် 61 ကို ပြန်ရပါသည်။ ထို့ကြောင့် program အား run သော အချိန်တွင် output အနေဖြင့် 61 ရခြင်း ဖြစ်သည်။\n\n<IMG_BLOCK>/OR2.png</IMG_BLOCK>",
        initialCode: "# Placeholder Code for Bitwise or ( | )\\nprint('Bitwise or ( | )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise or ( | )", check: (out) => out.includes("Bitwise or ( | )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise or ( | ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-10',
        title: "Bitwise 1's complement ( ~ ) or Bitwise Not",
        content: "Bitwise 1's complement ( ~ ) or Bitwise Not\n\nBitwise 1's complement or Bitwise Not ကို အရိုးရှင်းဆုံး ပုံစံဖြင့် ရေးရမည်ဆိုလျှင် အောက်ပါအတိုင်း ဖြစ်သည်။\n\n<CODE_BLOCK>a = 10\nb = - (a+1)\nb = - ( 00001010 + 1 )\nb = -11 # (in decimal ဖြစ်သည် )\n</CODE_BLOCK>\n\nပိုသိလိုပါက အောက်ပါ တို့ ကို ဖတ်နိုင်ပါသည်။\n\nBitwise 1's complement operator သည် unary operator အမျိုးအစား ဖြစ်သည်။ (~x) unary operator ဆိုသည်မှာ operand တစ်ခုတည်းပါရှိသော operator ကို ဆိုလိုခြင်းဖြစ်သည်။ Bitwise NOT ကို binary 1's complement လုပ်တယ်လို့ လည်း ခေါ်ပါတယ်။ 1'complement လုပ်ခြင်းဆိုသည်မှာ binary value များကို ပြောင်းပြန်လှန် invert လုပ်ခြင်းနှင့် တူညီသည်။\n\nx = 10 ဟု ထားမည်ဆိုလျှင် 8 bit အနေဖြင့် 00001010 ရရှိ မည်။ ထို 00001010 အား ( ones complement ) ပြုလုပ်လျှင် 11110101 ပြန်လည်ရရှိ ပါမည်။\n\nအထက်တွင် ရရှိ လာသော 11110101 ကို 2's complement ပြန်လုပ်မှသာ python programming ရဲ့ ~ Bitwise Not operator or complement operator အဖြေကို ရရှိ မှာ ဖြစ်ပါတယ်။\n\n<IMG_BLOCK>/NOT.png</IMG_BLOCK>\n\n2's complement လုပ်လိုလျှင် 1's complement လုပ်ခြင်းမှ ရရှိ ခဲ့သော binary value ကို 1 ပေါင်းပေးခြင်းဖြင့် ရရှိ လာသော value သည် 2's complement ဖြစ်သည်။\n\nအထက်ပါ Complement method ကို binary value များအား positive and negative ပြောင်းလိုသော အခါများတွင် အသုံးပြုပါသည်။\n\n<CODE_BLOCK>Sample Program (40)\n\na = 10\nc = ~a;\nprint('Value of c is ' , c)\n#Value of c is -11\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Bitwise 1's complement ( ~ ) or Bitwise Not\\nprint('Bitwise 1\\'s complement ( ~ ) or Bitwise Not')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise 1's complement ( ~ ) or Bitwise Not", check: (out) => out.includes("Bitwise 1's complement ( ~ ) or Bitwise Not") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise 1's complement ( ~ ) or Bitwise Not do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-11',
        title: "Bitwise XOR ( ^ )",
        content: "Bitwise XOR ( ^ )\n\nBitwise XOR ( ^ ) သည် တူသည့် 1 and 1 ဆိုလျှင် 0 output ပေးပြီး မတူသည့် 0 and 1 ဆိုလျှင် 1 output ပေးပါသည် သို့သော် bitwise xor သည် 0 and 0 ဆိုလျှင်တော့ 0 သာ output ပေးပါသည်။ ဆိုလိုသည်မှာ input value တွေမှာ data မရှိ သောအခါတွင် 0 ကို output ပြန်ပေးခြင်းဖြစ်သည်။ ဥပမာ အနေဖြင့် a=5 (0000 0101) နှင့် b=3 (0000 0011) တို့အား XOR လုပ်ကြည့်လျှင် output အနေဖြင့် 0000 0110 ပြန်ရပါမည်။ decimal value အနေဖြင့် 6 ကို ပြန်ရပါမည်။\n\n<IMG_BLOCK>/XOR1.png</IMG_BLOCK>\n\n<CODE_BLOCK>Sample Program (41)\n\na = 5\nb = 3\nc = a ^ b;\nprint('Value of c is ' , c)\n#Value of c is 6\n</CODE_BLOCK>\n\n<IMG_BLOCK>/XOR2.png</IMG_BLOCK>",
        initialCode: "# Placeholder Code for Bitwise XOR ( ^ )\\nprint('Bitwise XOR ( ^ )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise XOR ( ^ )", check: (out) => out.includes("Bitwise XOR ( ^ )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise XOR ( ^ ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-12',
        title: "Bitwise right shift ( >> )",
        content: "Bitwise right shift ( >> )\n\nBitwise right shift operator သည် binary value များကို bit အလိုက် ကိုင်တွယ်ရာတွင် အလွန်အသုံးဝင်ပါသည်။ variable တစ်ခုကို x=10 (0000 1010) အဖြစ်ထားပါမည်။ y=x>>2 ဟုရေးမည် ဆိုလျှင် y value သည် 2 ရရှိပါမည်။\n\n>> 2 right shift 2 ဆိုသည်မှာ ညာဘက်မှ bit 2 လုံး ဖြတ်လိုက်ခြင်းဖြစ်သည်။ ဆိုလိုသည်မှာ ဘယ်ဘက်မှ 00 နှစ်လုံးဖြင့် တွန်းထုတ်လိုက်ခြင်းဖြစ်သည်။\n\nx = 10 (0000 1010) ညာဘက်မှ bit 2 လုံး ဖြတ်မှာ ဖြစ်သည့်အတွက် 0000 10 သာ ကျန်မည် 8 bit အနေဖြင့် ကြည့်လျှင် 0000 0010 ဟု သိနိုင်သည်။ ထို့ကြောင့် decimal value ဖြင့် ကြည့်လျှင် 2 ကို ရရှိ ခြင်းဖြစ်သည်။\n\n<IMG_BLOCK>/RIGHTSHIFT.png</IMG_BLOCK>\n\n<CODE_BLOCK>Sample Program (42)\n\na = 60\nc = a >> 2\nprint('Value of c is ', c)\n#Value of c is 15\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (42) အား run ကြည့်လျှင် output value အဖြစ် decimal 15 ကို ရရှိ ပါမည်။ အဘယ်ကြောင့် ဆိုသော် 60 binary အနေဖြင့် 0011 1100 ဖြစ်သည်။ ထိုထဲမှ 2 bit ကို right shift လုပ်မည်ဆိုလျှင် 0011 1100 နောက်မှ zero နှစ်လုံးကို ဖြတ်ပစ်ရမည် ဖြစ်သည်။ ထို့ကြောင့် binary value အနေဖြင့် 0011 11 decimal အနေဖြင့် 15 ရရှိခြင်းဖြစ်သည်။\n\n<CODE_BLOCK>Sample Program (43) for 3 bit right shift\n\na = 60\nc = a >> 3\nprint('Value of c is ', c)\n#Value of c is 7\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (43) ကို run ကြည့်လျှင်လည်း decimal အနေဖြင့် 7 ကို ရရှိ ပါမည်။ အဘယ်ကြောင့်ဆိုသော် 60 ရဲ့ binary value သည် 0011 1100 ဖြစ်ပြီး ထို value အား 3 bit right shift လုပ်လျှင် 0011 1100 ညာဘက်မှ bit သုံးခုကို ဖြတ်ပစ်ရမည် ဖြစ်သည်။ binary value အနေဖြင့် 0011 1 ကျန်ရှိမည်ဖြစ်ပြီး decimal အနေဖြင့် 7 ရရှိ ခြင်းဖြစ်ပါသည်။",
        initialCode: "# Placeholder Code for Bitwise right shift ( >> )\\nprint('Bitwise right shift ( >> )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise right shift ( >> )", check: (out) => out.includes("Bitwise right shift ( >> )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise right shift ( >> ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-13',
        title: "Bitwise Left ( << )",
        content: "Bitwise Left ( << )\n\nBitwise left သည် ဘယ်ဘက်မှ bit များအား ဖြတ်ထုတ်လိုက်ခြင်း ဖြစ်ပြီး တစ်နည်း အားဖြင့် ညာဘက်မှ bit များ တွန်းထည့်လိုက်ခြင်း ဖြစ်သည်။\n\nBitwise left တွင် ညာဘက်မှ zero တစ်လုံး 1 bit ထည့်လိုက်ပြီး ဘယ်ဘက်မှ zero တစ်လုံး 1 bit ထွက်သွားသောပုံကို အောက်တွင် ပြထားသည်။\n\n<IMG_BLOCK>/LEFTSHIFT.png</IMG_BLOCK>\n\nvariable တစ်ခုကို x=10 (0000 1010) အဖြစ်ထားပါမည်။ y=x << 2 ဟုရေးမည် ဆိုလျှင် y value သည် decimal အားဖြင့် 40 ရရှိမည် ဖြစ်ပြီး binary အားဖြင့် 0010 1000 ဖြစ်သည်။\n\n<CODE_BLOCK>Sample Program (44)\n\na = 60\nc = a << 2;\nprint('Value of c is ' , c)\n#value of c is 240\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (44) ကို run ကြည့်လျှင် output အနေဖြင့် 240 ရရှိ မည်။ အဘယ်ကြောင့်ဆိုသော် 60 သည် binary အားဖြင့် 0011 1100 ဖြစ်သည်။ bit နှစ်လုံး ညာဘက်မှ တွန်းထည့်လိုက်မည်ဆို လျှင် ဘယ်ဘက်မှ bit နှစ်လုံး ထွက်သွားမည် 0011 1100 8bit အနေဖြင့် ကြည့်လျှင် 1111 0000 ဖြစ်သည်။ decimal အားဖြင့် 240 ဖြစ်သည်။\n\n<CODE_BLOCK>Sample Program (45) 4 shift to the left\nဘယ်ဘက်သို့ <<4 ရေးပါမည်။ a= 60 (0011 1100) ဖြစ်သည်။\n\na = 60\nb = a<<4\nprint(b)\n#960\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (45) ကို run ကြည့်လျှင် output အနေဖြင့် 960 ကို ရရှိ ပါမည်။ အဘယ်ကြောင့်ဆိုသော် python programming တွင် int သည် 4 bytes နေရာ ယူသည်။ ယခင် သင်ခန်းစာများတွင် 8bit နဲ့သာ တွက်ခဲ့ကြသည်။ သို့သော် python သည် 4 bytes=32 bits ဖြစ်တဲ့ အတွက် right shift လုပ်သော အချိန်တွင် မသိသာသော်လည်း left shift လုပ်သော အချိန်တွင်မူ output သည် အရမ်းကို ကွာခြားပါသည်။\n\n32bits = 0000 0000 0000 0000 0000 0000 0000 0000\n0000 0000 0000 0000 0000 0011 1100 0000\n\nယခု ဖော်ပြထားသော binary value များသည် 60 ကို left shift 4 လုံး လုပ်ထားခြင်း ဖြစ်သည်။ 32 bits အနေနှင့် တွက်ချက်မှသာလျှင် အဖြေမှန်ကို ရရှိ မည် ဖြစ်သည်။\n\nBitwise operator များကို စာသားများဖြင့်သာ ဖတ်၌ နားလည်ရန် အနည်းငယ် ခက်ခဲနိုင်ပါသည်။ Bit များ မည်သို့ ရွေ့လျားသွားသည်ကို မျက်မြင်ကိုယ်တွေ့ စမ်းသပ်ကြည့်နိုင်ရန် exercise tab သို့သွားပြီး ကိုယ်တိုင်စမ်းကြည့်ပါ။",
        initialCode: "# Placeholder Code for Bitwise Left ( << )\\nprint('Bitwise Left ( << )')",
        exercise: { task: "[Placeholder Task] Try writing code for Bitwise Left ( << )", check: (out) => out.includes("Bitwise Left ( << )") },
        quiz: { question: "[Placeholder Quiz] What does Bitwise Left ( << ) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-14',
        title: "Assignment Operators",
        content: "Assignment Operators\n\nAssignment operators ဆိုတာကတော့ equation တစ်ကြောင်း သို့ မဟုတ် code line တစ်ခုရဲ့ ညာဘက်မှာရှိတဲ့ value တွေကို calculate or instruction အတိုင်း လုပ်ဆောင်ပြီး ဘယ်ဘက်မှာရှိသော variable တစ်ခုထဲသို့ assign ထည့်လိုက်ခြင်းပင် ဖြစ်ပါသည်။ a = 5 ဆိုလျှင် 5 ဆိုတဲ့ ညာဘက်က value တစ်ခုကို a ဆိုတဲ့ ဘယ်ဘက်က variable ထဲသို့ ထည့်လိုက်ခြင်းပင် ဖြစ်ပါသည်။\n\nAssignment operator ကိုအခြားသော operator တွေနဲ့ပေါင်းပြီး သုံးလို လည်း ရပါသေးတယ်။ ၎င်းတို့ ကို compound operator လို့ ခေါ်ပါတယ်။\n\na += 5 သည် a = a+5 ကိုပင် ဆိုလိုခြင်းဖြစ်သည်။\nထိုနည်းတူ a -= 5 သည် လည်း a=a-5 ပင်ဖြစ်သည်။\n\n<CODE_BLOCK>Sample Program - Compound Assignment Operators\n\n=   (Assign)              : a = 5\n+=  (Add and Assign)      : a += 5  means a = a + 5\n-=  (Subtract and Assign) : a -= 5  means a = a - 5\n*=  (Multiply and Assign) : a *= 5  means a = a * 5\n/=  (Divide and Assign)   : a /= 5  means a = a / 5\n%=  (Modulus and Assign)  : a %= 5  means a = a % 5\n//= (Floor Divide)        : a //= 5 means a = a // 5\n**= (Exponent)            : a **= 5 means a = a ** 5\n&=  (Bitwise AND)         : a &= 5  means a = a & 5\n|=  (Bitwise OR)          : a |= 5  means a = a | 5\n^=  (Bitwise XOR)         : a ^= 5  means a = a ^ 5\n>>= (Right Shift)         : a >>= 5 means a = a >> 5\n<<= (Left Shift)          : a <<= 5 means a = a << 5\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Assignment Operators\\nprint('Assignment Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Assignment Operators", check: (out) => out.includes("Assignment Operators") },
        quiz: { question: "[Placeholder Quiz] What does Assignment Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-15',
        title: "Special Operators",
        content: "Special Operators\n\nPython programming မှာ တစ်ခြား programming language တွေမှာလုံးဝ နီးပါး မတွေ့ရတဲ့ english letter ရေးသလို operators တွေ ပါ နေပါသေးတယ်။ identity operator and membership operator လို့ ခေါ်ပါတယ်။",
        initialCode: "# Placeholder Code for Special Operators\\nprint('Special Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Special Operators", check: (out) => out.includes("Special Operators") },
        quiz: { question: "[Placeholder Quiz] What does Special Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-16',
        title: "Identity Operators",
        content: "Identity Operators\n\nPython programming မှာ is နှင့် is not ဆိုတာတွေက identity operators တွေ ဖြစ်ပါတယ်။ identity operators တွေကို နေရာတိုင်းမှာတော့ မသုံးပါဘူး။ memory allocation လုပ်ခြင်း နေရာတူတဲ့ value or variable and object တွေကို စစ်တဲ့ နေရာတွေမှာသာ သုံးပါတယ်။\n\nmemory allocation တူတယ်ဆိုတာက memory ထဲမှာ program memory ဆိုတာ သပ်သပ် ထပ်ခွဲထားပါတယ်။ ထို program memory ထဲမှာမှ variable တွေကို သိမ်းတဲ့ နေရာ ဆိုပြီး သပ်သပ် ထပ်ခွဲ ထားပါသေးတယ်။\n\na=20, b=23 ဟု variable နှစ်ခုကို တည်ဆောက်လိုက်ပါသည်။ ထိုကဲ့သို့ variable များ တည်ဆောက်ပြီးသည်နှင့် တစ်ပြိုင်နက် ထို variable မှာ ကိုယ်ပိုင် address များ ပိုင်ဆိုင်သွားပါပြီ။ ဥပမာ a=20 (0x100), b=23 (0x200) ဟု မှတ်ယူကြည့်ပါ။\n\nidentity operators သည် ထို variable value များကို စစ်ခြင်း မဟုတ်ပဲ variable ရဲ့ address များကိုသာ စစ်ခြင်း ဖြစ်ပါသည်။ Python programming တွင် variable များသည် name မတူသော်လည်း value တူပါက address များ အတူတူပင် ဖြစ်သည်။\n\npython တွင် id() ဆိုသည့် method ကိုသုံးပြီး memory address များကိုကြည့်နိုင်သည်။\n\n<CODE_BLOCK>Sample Program (46)\n\na = 10\nb = 10\nc = 10\nprint(id(a),id(b),id(c))\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (46) အတိုင်း ရေးပြီး စမ်းကြည့်လျှင် output အနေဖြင့် memory address များ အတူတူ ထွက်လာသည်ကို မြင်ရပါမည်။ Identity operator သည် မှန်လျှင် true ပြန်ပေးပြီး မှားလျှင်တော့ false ပြန်ပေးပါသည်။\n\n<CODE_BLOCK>Sample Program (47)\n\na = 10\nb = 10\nc = a is b\nprint(c)\n#True\n</CODE_BLOCK>\n\na is b ဆိုလျှင် a နှင့် b သည် memory address တူသည့် အတွက် true ပြန်ပေးပါသည်။",
        initialCode: "# Placeholder Code for Identity Operators\\nprint('Identity Operators')",
        exercise: { task: "[Placeholder Task] Try writing code for Identity Operators", check: (out) => out.includes("Identity Operators") },
        quiz: { question: "[Placeholder Quiz] What does Identity Operators do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-17',
        title: "is not identity operator",
        content: "is not identity operator\n\nis not identity operator သည် operand နှစ်ခု မတူလျှင် true ပေးပြီး တူလျှင် false ပြန် ပေးပါသည်။\n\n<CODE_BLOCK>Sample Program (48)\n\na = 10\nb = 10\nc = a is not b\nprint(c)\n#False\n</CODE_BLOCK>\n\na is not b ဆိုလျှင် a နှင့် b သည် တူနေသည့်အတွက် false ပြန်ပေးပါမည်။\n\n<CODE_BLOCK>Sample Program (49)\n\na = 10\nb = 20\nc = a is not b\nprint(c)\n#True\n</CODE_BLOCK>\n\nSample Program (49) ကို run ကြည့်လျှင် true ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် a နှင့် b သည် မတူတော့ သောကြောင့် memory address များလည်း မတူတော့သည့်အတွက် a နှင့် b သည် မတူဘူးဟု ဆိုလျှင် true ဆိုသည့် output ကို ပြန်ရခြင်းဖြစ်သည်။\n\n၎င်းတို့ address များအား အောက်ပါ အတိုင်း id() method ကိုသုံးပြီး စစ်ဆေးနိုင်ပါသည်။\n\n<CODE_BLOCK>Sample Program (50)\n\na = 10\nb = 20\nc = a is not b\nprint(c)\nprint('a =', id(a), 'b = ', id(b))\n# True\n# a = 140710321199040 b = 140710321199360\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (50) ကို run ကြည့်လျှင် output အနေဖြင့် memory address များ မတူ သည်ကို မြင်တွေ့ရပါသည်။",
        initialCode: "# Placeholder Code for is not identity operator\\nprint('is not identity operator')",
        exercise: { task: "[Placeholder Task] Try writing code for is not identity operator", check: (out) => out.includes("is not identity operator") },
        quiz: { question: "[Placeholder Quiz] What does is not identity operator do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-18',
        title: "Dive to String",
        content: "Dive into String\n\nString များကိုလည်း အောက်ပါအတိုင်း နှိုင်းယှဉ်ကြည့်နိုင်ပါသည်။ ယခု program တွင် relational operator (==) ကိုပါ အသုံးပြုထားပါသည်။ သတိပြုရန်မှာ relational operator သည် value (တန်ဖိုး) များကိုသာ နှိုင်းယှဉ်စစ်ဆေးခြင်းဖြစ်ပြီး identity operator (is) ကတော့ memory address (ID) များကို နှိုင်းယှဉ်စစ်ဆေးခြင်းဖြစ်သည်။ output သည် True ရရှိပြီး memory address များလည်း တူညီသည်ကို အောက်ပါ program တွင် တွေ့ရပါမည်။\n\n<CODE_BLOCK>Sample Program (51)\n\nstring1 = 'hello'\nstring2 = 'hello'\n\nprint(id(string1), id(string2))\n\nstring3 = string1 is string2\nprint(string3)\n\nif string1 == string2:\n    print('They are same')\n\n#output\n#1671375414320 1671375414320\n#True\n#They are same\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Dive to String\\nprint('Dive to String')",
        exercise: { task: "[Placeholder Task] Try writing code for Dive to String", check: (out) => out.includes("Dive to String") },
        quiz: { question: "[Placeholder Quiz] What does Dive to String do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l2-19',
        title: "Membership Operators",
        content: "Membership Operators\n\nPython programming တွင် membership operators နှစ်မျိုးရှိသည်။ in နှင့် not in ဖြစ်သည်။ membership operators များကို string, list, tuple, set နှင့် dictionary တို့ထဲရှိ element များကို စစ်ဆေးရာတွင် အသုံးပြုပါသည်။\n\nဥပမာအားဖြင့် a ဆိုသည့် string တစ်ခုနှင့် l ဆိုသည့် list တစ်ခု တည်ဆောက်ပါမည်။ a = 'winhtut', l = [1, 2, 3, 4, 5]\n\na ဆိုသည့် string ထဲတွင် 'h' ဆိုသည့် စာလုံးပါဝင်သလား စစ်ချင်သော အခါတွင် membership operator ဖြစ်သည့် in ကို သုံးပြီး 'h' in a ဟု ရေးသားစစ်ဆေးနိုင်သည်။ a ထဲတွင် 'h' ပါဝင်နေပါက output အနေဖြင့် True ကို ထုတ်ပေးမည် ဖြစ်ပြီး မပါဝင်ပါက False ကို ထုတ်ပေးမည်ဖြစ်သည်။\n\nnot in သည်လည်း မိမိရှာလိုသော sequence (အစဉ်လိုက်ဒေတာ) ထဲမှာ မရှိလျှင် True ကို ပြန်ထုတ်ပေးပြီး ရှိနေလျှင် False ကို ပြန်ထုတ်ပေးပါသည်။\n\n<CODE_BLOCK>Sample Program (52)\n\nstring1 = [1, 2, 3, 4, 5, 'w']\nstring2 = [1, 2, 3, 4, 5]\n\nprint(1 in string1)\n\nif 'w' in string1 :\n    print('w is in string1')\n\nprint(2 not in string2)\n\nif 'w' not in string2 :\n    print('w is not in string2')\n\n#output\n#True\n#w is in string1\n#False\n#w is not in string2\n</CODE_BLOCK>",
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
        content: "Python Control Structure\n\nCondition and If Statement\n\n* Equals: a == b (a နှင့် b သည် အတူတူပင်ဖြစ်သည်။)\n* Not Equals: a != b (a နှင့် b သည် မတူပါ။)\n* Less than: a < b (a သည် b ထက် ငယ်သည်။)\n* Less than or equal to: a <= b (a သည် b ထက် ငယ်သည် သို့မဟုတ် ညီသည်။)\n* Greater than: a > b (a သည် b ထက် ကြီးသည်။)\n* Greater than or equal to: a >= b (a သည် b ထက် ကြီးသည် သို့မဟုတ် ညီသည်။)\n\n<CODE_BLOCK>Sample Program (53)\n\na = 33\nb = 200\nif b > a:\n    print('b is greater than a')\n</CODE_BLOCK>\n\nb သည် a ထက်ကြီးခဲ့ရင် 'b is greater than a' ဆိုသည့် စာသားကို ဖော်ပြပေးပါ ဟု ရေးသား ထားခြင်းဖြစ်ပါသည်။",
        initialCode: "# Placeholder Code for Python Control Structure\\nprint('Python Control Structure')",
        exercise: { task: "[Placeholder Task] Try writing code for Python Control Structure", check: (out) => out.includes("Python Control Structure") },
        quiz: { question: "[Placeholder Quiz] What does Python Control Structure do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-2',
        title: "Indentation Error - Sample Program (54)",
        content: "Indentation Error\n\n<CODE_BLOCK>Sample Program (54)\n\na = 33\nb = 200\nif b > a:\nprint('b is greater than a') # error!\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (54) ကို run ကြည့်ရင် indent error ကို ရရှိမှာ ဖြစ်ပါတယ်။ အဘယ်ကြောင့်ဆိုသော် python programming language သည် scope များကို သတ်မှတ်ရန် whitespace (နေရာလွတ်) များကို အသုံးပြုပါသည်။\n\nဥပမာ if statement အောက်မှ အလုပ်လုပ်ရန် ရေးသားသော code များသည် if အောက်တည့်တည့်တွင် ရှိနေလျှင် error တက်မည်ဖြစ်ပါသည်။ ထို if statement အောက်မှ အနည်းဆုံး space တစ်ချက် သို့မဟုတ် tab တစ်ချက် ခြားပေးထားရပါမည်။\n\nအခြားသော programming language တော်တော်များများဖြစ်သည့် C/C++, Java စသည် တို့သည် scope များကို curly-brackets { } များ ဖြင့် သတ်မှတ်ကြပါသည်။",
        initialCode: "# Placeholder Code for Indentation Error - Sample Program (54)\\nprint('Indentation Error - Sample Program (54)')",
        exercise: { task: "[Placeholder Task] Try writing code for Indentation Error - Sample Program (54)", check: (out) => out.includes("Indentation Error - Sample Program (54)") },
        quiz: { question: "[Placeholder Quiz] What does Indentation Error - Sample Program (54) do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-3',
        title: "elif",
        content: "elif\n\nအခြားသော programming language များတွင်တော့ else if လို့ သုံးကြပါတယ်။ elif သည် သူ့ရှေ့မှာရှိသော condition တစ်ခုကို အရင်စစ်ဆေးပြီးမှ ထို condition မမှန်မှသာ elif ကို လာစစ်ပါသည်။ ထို့ကြောင့် elif ကို second option အနေဖြင့် အသုံးပြုပါသည်။\n\n<CODE_BLOCK>Sample Program (55)\n\na = 33\nb = 33\nif b > a:\n    print('b is greater than a')\nelif a == b:\n    print('a and b are equal')\n\n#output\n#a and b are equal\n</CODE_BLOCK>\n\nနှစ်ခုထက်များသော condition များကို စစ်ဆေးလိုသော အခါမျိုးများတွင်လည်း အသုံးပြုပါသည်။\n\n<CODE_BLOCK>Sample Program (56)\n\na = 35\nb = 33\nif b > a:\n    print('b is greater than a')\nelif a == b:\n    print('a and b are equal')\nelif a != b:\n    print('a is less than b')\n\n#output\n#a is less than b\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for elif\\nprint('elif')",
        exercise: { task: "[Placeholder Task] Try writing code for elif", check: (out) => out.includes("elif") },
        quiz: { question: "[Placeholder Quiz] What does elif do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-4',
        title: "else statement",
        content: "else statement\n\nelse statement သည် သူ့အထက်တွင် ရေးသားထားသော စစ်ဆေးချက်များ တစ်ခုမှ အလုပ် မလုပ်တော့သော အခါတွင် နောက်ဆုံး option တစ်ခု အနေဖြင့် အလုပ် လုပ်ပါသည်။\n\n<CODE_BLOCK>Sample Program (57)\n\na = 200\nb = 33\nif b > a:\n    print('b is greater than a')\nelif a == b:\n    print('a and b are equal')\nelse:\n    print('a is greater than b')\n\n#output\n#a is greater than b\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (57) တွင် if and elif တို့သည် တစ်ခုမှ အလုပ် မလုပ်လျှင် else ဆိုသည့် နောက်ဆုံး statement သည် အလုပ်လုပ် သွားပါမည်။",
        initialCode: "# Placeholder Code for else statement\\nprint('else statement')",
        exercise: { task: "[Placeholder Task] Try writing code for else statement", check: (out) => out.includes("else statement") },
        quiz: { question: "[Placeholder Quiz] What does else statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-5',
        title: "Loops",
        content: "Loops\n\nPython မှာ loop နှစ်မျိုးရှိပါတယ် for loop and while loop ဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for Loops\\nprint('Loops')",
        exercise: { task: "[Placeholder Task] Try writing code for Loops", check: (out) => out.includes("Loops") },
        quiz: { question: "[Placeholder Quiz] What does Loops do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-6',
        title: "While loop",
        content: "While loop\n\nWhile loop သည် သူ့နောက်မှာ ရှိသော condition မှန်နေသရွေ့ statement များကို အလုပ် လုပ်ပါတယ်။\n\n<CODE_BLOCK>Sample Program (58)\n\ni = 1\nwhile i < 6:\n    print(i)\n    i += 1\n\n#output\n#1 2 3 4 5\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for While loop\\nprint('While loop')",
        exercise: { task: "[Placeholder Task] Try writing code for While loop", check: (out) => out.includes("While loop") },
        quiz: { question: "[Placeholder Quiz] What does While loop do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-7',
        title: "while loop with the break statement",
        content: "while loop with the break statement\n\nWhile loop သည် condition မမှန်တော့သည့် အချိန်မှာလည်း အဆုံးသတ်နိုင်သလို break statement ဖြင့်လည်း အဆုံးသတ်နိုင်ပါသည်။ break statement သည် အတွင်းဆုံး loop တွင် ရှိနေလျှင် ထိုအတွင်းဆုံး loop တစ်ခု တည်းကိုသာ terminate (ရပ်တန့်) လုပ်ပါသည်။\n\n<CODE_BLOCK>Sample Program (59)\n\ni = 1\nwhile i < 6:\n    print(i)\n    if i == 3:\n        break\n    i += 1\n\n#output\n#1 2 3\n</CODE_BLOCK>\n\nအထက်ပါ program တွင် i တန်ဖိုး 3 သို့ ရောက်သောအခါတွင် program အဆုံးသတ်သွားမည် ဖြစ်ပါသည်။ i တန်ဖိုးသည် 3 နှင့်တူခဲ့လျှင် break ဆိုပြီး program (while loop) ကို ရပ်မည်ဟု ရေးထားသောကြောင့် ဖြစ်သည်။",
        initialCode: "# Placeholder Code for while loop with the break statement\\nprint('while loop with the break statement')",
        exercise: { task: "[Placeholder Task] Try writing code for while loop with the break statement", check: (out) => out.includes("while loop with the break statement") },
        quiz: { question: "[Placeholder Quiz] What does while loop with the break statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-8',
        title: "For loop",
        content: "For loop\n\nPython ရဲ့ for loop ဟာ အခြား programming language တွေရဲ့ for loop နဲ့ တော်တော်ကွဲပြားပါတယ်။ python မှာ ရေးရတာ အရမ်းရိုးရှင်းပြီး လွယ်ကူပါတယ်။ keyword အနေဖြင့် for ကိုသာ အသုံးပြုပါတယ်။ list, tuple, set တို့ထဲကလည်း data များကို အလွယ်တကူ ထုတ်ယူနိုင်ပါတယ်။\n\n<CODE_BLOCK>Sample Program (60)\n\nfruits = ['apple', 'banana', 'cherry']\nfor x in fruits:\n    print(x)\n\n# output\n# apple\n# banana\n# cherry\n</CODE_BLOCK>\n\nအထက်ပါ Sample Program (60) တွင် fruits ဆိုသည့် list တစ်ခုကို တည်ဆောက်ထားပြီး ထို list ထဲတွင် apple, banana, cherry စတဲ့ data များကို ထည့်ထားပါတယ်။ ထို list ထဲမှ data များကို ထုတ်ရန် program မှာ for x in fruits: သာ ဖြစ်သည်။",
        initialCode: "# Placeholder Code for For loop\\nprint('For loop')",
        exercise: { task: "[Placeholder Task] Try writing code for For loop", check: (out) => out.includes("For loop") },
        quiz: { question: "[Placeholder Quiz] What does For loop do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-9',
        title: "For loops through a String",
        content: "For loops through a String\n\n<CODE_BLOCK>Sample Program (61)\n\nfor x in 'banana':\n    print(x)\n\n# output\n# b\n# a\n# n\n# a\n# n\n# a\n</CODE_BLOCK>\n\n'banana' ဆိုတဲ့ string ထဲမှာ ရှိတဲ့ စာလုံးများကို တစ်လုံးချင်းစီ ထုတ်ခြင်းဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for For loops through a String\\nprint('For loops through a String')",
        exercise: { task: "[Placeholder Task] Try writing code for For loops through a String", check: (out) => out.includes("For loops through a String") },
        quiz: { question: "[Placeholder Quiz] What does For loops through a String do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-10',
        title: "For loops with break statement",
        content: "For loops with break statement\n\nယခု program တွင် list တစ်ခု တည်ဆောက်မည်ဖြစ်ပြီး ထို list ထဲမှ data များကို print ထုတ်ရန် for loops ကို သုံးပါမည်။ print ထုတ်လို့ ရလာသော data များထဲမှ မိမိ check လုပ်လိုသော စကားလုံးနှင့် တူနေလျှင် program ကို break လုပ်ရန် အတွက် ရေးသားပါမည်။\n\n<CODE_BLOCK>Sample Program (62)\n\nfruits = ['aung', 'maung', 'winhtut', 'greenhackers']\nfor x in fruits:\n    print(x)\n    if x == 'winhtut':\n        break\n\n# OUTPUT\n# aung\n# maung\n# winhtut\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for For loops with break statement\\nprint('For loops with break statement')",
        exercise: { task: "[Placeholder Task] Try writing code for For loops with break statement", check: (out) => out.includes("For loops with break statement") },
        quiz: { question: "[Placeholder Quiz] What does For loops with break statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-11',
        title: "For loops with continue statement",
        content: "For loops with continue statement\n\n<CODE_BLOCK>Sample Program (63)\n\nfruits = ['aung', 'maung', 'winhtut', 'greenhackers']\nfor x in fruits:\n    if x == 'winhtut':\n        continue\n    print(x)\n\n# output\n# aung\n# maung\n# greenhackers\n</CODE_BLOCK>\n\nContinue statement သည် program ကို ရပ်လိုက်ခြင်းမျိုး မဟုတ်ပဲ သူ့အထက်မှ condition မှန်နေလျှင် သူ့အောက်မှ instruction ကို ဆက်မလုပ်တော့ပဲ အစသို့ ပြန်သွားခြင်းဖြစ်သည်။ ထို့ကြောင့် program ကို run ကြည့်သောအခါ output တွင် 'winhtut' ဆိုသည့် စာသားကို မတွေ့ရခြင်း ဖြစ်သည်။",
        initialCode: "# Placeholder Code for For loops with continue statement\\nprint('For loops with continue statement')",
        exercise: { task: "[Placeholder Task] Try writing code for For loops with continue statement", check: (out) => out.includes("For loops with continue statement") },
        quiz: { question: "[Placeholder Quiz] What does For loops with continue statement do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l3-12',
        title: "Pass",
        content: "Pass Statement\n\nPass statement ကို NOP (no operation) လို့လည်း ခေါ်သလို null statement လို့လည်း ခေါ်ပါတယ်။ null statement လို့ ပြောလိုက်လျှင် comment နှင့် တူသည်ဟု ထင်နိုင်သော်လည်း comment ကို python interpreter က ကျော်သွားပါသည်။ သို့သော် pass ကိုတော့ ကျော်မသွားပါဘူး။\n\nloop သို့မဟုတ် function တစ်ခုကို ကြေညာထားပြီး မည်သည့် အလုပ်မှ မလုပ်သေးသော အခါတွင် ၎င်းတို့ အထဲ၌ pass ကို ထည့်ထားတတ်ပါသည်။ အဘယ်ကြောင့်ဆိုသော် loop သို့မဟုတ် function တွေကို အလွတ်ကြီး ထားခဲ့လို့ မရသောကြောင့် ဖြစ်သည်။\n\nဥပမာ -\n\n<CODE_BLOCK>for char in 'Python':\n    # အလွတ်ထားလျှင် error တက်မည်\n    # IndentationError: expected an indented block\n</CODE_BLOCK>\n\nသို့သော် pass သုံးလျှင် error တက်မည် မဟုတ်ပါ။\n\n<CODE_BLOCK>for char in 'Python':\n    pass\n# error မတက်ပါ\n</CODE_BLOCK>\n\n<CODE_BLOCK>Sample Program (64)\n\nfor char in 'Python':\n    if char == 'h':\n        pass\n    print('Current character:', char)\n\n#output\n#Current character: P\n#Current character: y\n#Current character: t\n#Current character: h\n#Current character: o\n#Current character: n\n</CODE_BLOCK>",
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
        content: "List in Python\n\nPython မှာဆိုရင် list က နေရာတော်တော်များများမှာ သုံးတဲ့ compound data type ဖြစ်ပါသည်။ Python ရဲ့ list ဟာ တစ်ခြား programming မှာဆိုရင် array နဲ့ ဆင်တူသော်လည်းပဲ python ရဲ့ list ကတော့ powerful tool တစ်ခုဖြစ်ပါတယ်။\n\nList တစ်ခုတည်းမှာကိုပဲ data type တွေဖြစ်တဲ့ Integers, String, Double, စတာတွေ အားလုံး ပါဝင်နိုင်ပါတယ်။ Python မှာဆိုရင် list ထဲက data type တွေကို control လုပ်ဖို့ လွယ်ကူပါတယ်။\n\nထို့ကြောင့် Python မှာ list ကို တစ်ချိန်တည်းမှာ မတူညီတဲ့ data တွေ အများကြီး သိုလှောင်နိုင်သလို ထပ်ပေါင်းတာတွေႁ ဖယ်ထုတ်တာတွေႁ access လုပ်တာတွေ စတဲ့ Handling လုပ်ဖို့ လွယ်ကူပါတယ်။",
        initialCode: "# Placeholder Code for List in Python\\nprint('List in Python')",
        exercise: { task: "[Placeholder Task] Try writing code for List in Python", check: (out) => out.includes("List in Python") },
        quiz: { question: "[Placeholder Quiz] What does List in Python do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-2',
        title: "Declaring a List",
        content: "Declaring a List\n\nSyntax: List = [ ]\nယခုနည်းအတိုင်းပဲ square bracket ကို အသုံးပြုပြီးတော့ list ကို ကြေညာလို့ ရပါတယ်။\n\n<CODE_BLOCK>Sample Program (65)\n\nmy_list = []\nprint(my_list)\n\n#output\n#[]\n</CODE_BLOCK>\n\nအထက်ပါ program ကို run လိုက်တဲ့ အချိန်မှာ result အနေနဲ့ square bracket [] ကို ရရှိမှာဖြစ်ပါတယ်။",
        initialCode: "# Placeholder Code for Declaring a List\\nprint('Declaring a List')",
        exercise: { task: "[Placeholder Task] Try writing code for Declaring a List", check: (out) => out.includes("Declaring a List") },
        quiz: { question: "[Placeholder Quiz] What does Declaring a List do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-3',
        title: "Creating a list with Data",
        content: "Creating a list with Data\n\nList ထဲသို့ data တစ်ခု ထည့်လိုတဲ့ အခါ အောက်ပါ အတိုင်း ထည့်သွင်းပါတယ်။\n\n<CODE_BLOCK>Sample Program (66)\n\nmy_list = ['Hello world']\nprint(my_list)\n\n#output\n#['Hello world']\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Creating a list with Data\\nprint('Creating a list with Data')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a list with Data", check: (out) => out.includes("Creating a list with Data") },
        quiz: { question: "[Placeholder Quiz] What does Creating a list with Data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-4',
        title: "Creating a list with Multiple Data",
        content: "Creating a list with Multiple Data\n\nList တစ်ခုထဲသို့ data အများကြီး ထည့်လိုတဲ့အခါ comma (,) ခြားပြီး ထည့်ရုံပါပဲ။\n\n<CODE_BLOCK>Sample Program (67)\n\nmy_list = ['Hello world', 'Green', 'Hackers']\nprint(my_list)\n\n#output\n#['Hello world', 'Green', 'Hackers']\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Creating a list with Multiple Data\\nprint('Creating a list with Multiple Data')",
        exercise: { task: "[Placeholder Task] Try writing code for Creating a list with Multiple Data", check: (out) => out.includes("Creating a list with Multiple Data") },
        quiz: { question: "[Placeholder Quiz] What does Creating a list with Multiple Data do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l4-5',
        title: "Accessing data",
        content: "Accessing data\n\nList တစ်ခုထဲမှာ ရှိတဲ့ data တွေကို access (ရယူ) လိုတဲ့အခါမျိုးမှာဆိုရင် ၎င်းတို့ရဲ့ index number တွေကို သုံးပြီးတော့ ရယူနိုင်ပါတယ်။ index တွေကို ရေတွက်တဲ့အခါမှာ zero (0) ကနေ စတင်ပြီး ရေတွက်ရပါတယ်။\n\n<CODE_BLOCK>Sample Program (68)\n\nmy_list = ['Hello world', 'Green', 'Hackers']\nprint(my_list[0])\nprint(my_list[1])\nprint(my_list[2])\n\n#Output\n#Hello world\n#Green\n#Hackers\n</CODE_BLOCK>\n\nအထက်ပါ program မှာဆိုရင် 'Hello World' သည် index 0 ဖြစ်ပြီး ကျန်တဲ့ data များသည်လည်း အစဉ်လိုက် ဖြစ်ပါသည်။\n\n<CODE_BLOCK>Sample Program (69)\n\nmy_list = ['green', 'hackers', 'winhtut']\nprint(my_list[-1])\n\n#output\n#winhtut\n</CODE_BLOCK>\n\nList ကို ယခု ပုံစံ အတိုင်း negative index ဖြင့်လည်း နောက်ကနေ ပြန်ပြီး access လုပ်နိုင်ပါသေးသည်။ -1 သည် နောက်ဆုံး ဒေတာကို ရည်ညွှန်းပါသည်။",
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
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('pythonNinjaTheme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('pythonNinjaTheme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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
    <div data-theme={darkMode ? 'dark' : 'light'} className="flex h-screen font-mono overflow-hidden transition-colors duration-300" style={{ background: 'var(--bg-root)', color: 'var(--text-primary)', '--selection-bg': 'var(--accent)', '--selection-text': 'var(--bg-root)' }}>

      {/* SIDEBAR */}
      <aside className={`${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 fixed md:relative z-50 w-80 h-full flex flex-col shadow-2xl`} style={{ background: 'var(--bg-sidebar)', borderRight: '1px solid var(--border)' }}>
        <div className="p-6" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-sidebar-header)' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="animate-pulse" size={28} style={{ color: 'var(--accent)' }} />
            <h1 className="text-xl font-black tracking-tighter uppercase leading-tight">Python Ninja<br /><span className="text-[10px] tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Deep Dive v6.0</span></h1>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[8px] uppercase tracking-widest mb-1 font-bold" style={{ color: 'var(--text-muted)' }}>
              <span>Security Clearance</span>
              <span>{perc}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-progress-track)', border: '1px solid var(--border)' }}>
              <div className="h-full transition-all duration-1000" style={{ width: `${perc}%`, background: 'var(--accent)', boxShadow: 'var(--accent-glow)' }}></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar" style={{ scrollbarColor: 'var(--border) var(--bg-root)' }}>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5" size={14} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="SEARCH PROTOCOLS..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-[10px] outline-none uppercase tracking-widest"
              style={{ background: 'var(--bg-input)', border: '1px solid var(--border)', color: 'var(--accent)' }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filtered.map((mod) => {
            const originalMIdx = CYBER_BOOK.findIndex(m => m.id === mod.id);
            return (
              <div key={mod.id} className="space-y-1">
                <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] mb-2 px-2 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}><Lock size={8} /> {mod.title}</h3>
                <div className="space-y-1">
                  {mod.lessons.map((les) => {
                    const originalLIdx = mod.lessons.findIndex(l => l.id === les.id);
                    const active = originalMIdx === mIdx && originalLIdx === lIdx;
                    return (
                      <button key={les.id} onClick={() => { setMIdx(originalMIdx); setLIdx(originalLIdx); if (window.innerWidth < 768) setSidebar(false); }} className={`w-full text-left p-3 rounded-lg text-[10px] transition-all flex items-center justify-between border`} style={active ? { background: 'var(--accent)', color: 'var(--bg-root)', fontWeight: 'bold', borderColor: 'var(--accent)', boxShadow: 'var(--accent-glow-sm)' } : { borderColor: 'transparent', color: 'var(--text-dim)' }}>
                        <span className="truncate pr-2">{originalLIdx + 1}. {les.title}</span>
                        {progress.includes(`${originalMIdx}-${originalLIdx}`) && <CheckCircle size={12} style={{ color: active ? 'var(--bg-root)' : 'var(--accent)' }} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="pt-4 pb-10 text-center">
            <p className="text-[8px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>End of Archive.</p>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="flex-1 flex flex-col relative overflow-hidden" style={{ background: darkMode ? 'var(--bg-root) url(https://www.transparenttextures.com/patterns/carbon-fibre.png)' : 'var(--bg-root)' }}>
        {!sidebar && <button onClick={() => setSidebar(true)} className="absolute top-4 left-4 z-40 p-2 rounded-lg md:hidden shadow-lg" style={{ background: 'var(--accent)', color: 'var(--bg-root)' }}><Menu size={20} /></button>}

        {/* TAB SWITCHER */}
        <header className="p-3 flex gap-2 pl-14 md:pl-6 overflow-x-auto no-scrollbar shadow-2xl relative z-10" style={{ background: 'var(--bg-header)', borderBottom: '1px solid var(--border)' }}>
          {tabsConfig.map(t => {
            const IconComp = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all`} style={tab === t.id ? { background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow)' } : { color: 'var(--text-dim)' }}>
                <IconComp size={12} /> {t.label}
              </button>
            );
          })}
          <div className="ml-auto flex items-center">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2.5 rounded-lg transition-all" style={{ color: 'var(--text-dim)', border: '1px solid var(--border)' }} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </header>

        {/* DYNAMIC CONTENT */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar" style={{ background: 'var(--bg-content-gradient)' }}>
          <div className="max-w-4xl mx-auto space-y-12 pb-32">

            <header className="space-y-2 pl-6 animate-in slide-in-from-left duration-500" style={{ borderLeft: '2px solid var(--accent)' }}>
              <p className="font-black text-[9px] uppercase tracking-[0.5em]" style={{ color: 'var(--text-muted)' }}>{CYBER_BOOK[mIdx].title}</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter flex items-center gap-4" style={{ color: 'var(--text-heading)' }}>{lesson.title} <Activity className="animate-pulse" size={24} style={{ color: 'var(--accent)' }} /></h2>
            </header>

            {tab === 'learn' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="p-8 md:p-14 rounded-2xl leading-relaxed text-lg md:text-xl whitespace-pre-wrap shadow-3xl relative overflow-hidden group" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-body)', borderTop: '2px solid var(--accent-subtle)' }}>
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 pointer-events-none transition-all duration-1000" style={{ color: 'var(--text-muted)' }}><Ghost size={160} /></div>
                  {lesson.content.split(/(?:<CODE_BLOCK>|<IMG_BLOCK>)([\s\S]*?)(?:<\/(?:CODE_BLOCK|IMG_BLOCK)>)/g).map((part, idx) => {
                    if (part.trim().startsWith('/') && (part.trim().endsWith('.png') || part.trim().endsWith('.jpg') || part.trim().endsWith('.jpeg') || part.trim().endsWith('.gif') || part.trim().endsWith('.svg') || part.trim().endsWith('.webp'))) {
                      return (
                        <div key={idx} className="my-8 flex justify-center">
                          <img src={part.trim()} alt="Lesson illustration" className="rounded-xl max-w-full shadow-lg" style={{ border: '1px solid var(--accent-subtle)', maxHeight: '400px' }} />
                        </div>
                      );
                    }
                    if (part.trim().toLowerCase().startsWith('sample program') || part.trim().toLowerCase().startsWith('a =') || part.trim().toLowerCase().startsWith('example') || part.trim().toLowerCase().startsWith('#') || part.trim().toLowerCase().startsWith('print') || part.trim().toLowerCase().startsWith('1111') || part.trim().toLowerCase().startsWith('str')) {
                      return (
                        <div key={idx} className="my-8 p-6 rounded-xl" style={{ background: 'var(--bg-code)', border: '1px solid var(--accent-subtle)', borderLeft: '4px solid var(--accent)', boxShadow: 'var(--accent-glow-sm)' }}>
                          <div className="flex items-center gap-3 mb-4 pb-3" style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent-subtle)' }}>
                             <Code size={18} /> <span className="font-bold text-[12px] uppercase tracking-widest">Code Sample</span>
                          </div>
                          <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--accent)' }}>{part}</pre>
                        </div>
                      );
                    }
                    return <span key={idx}>{part}</span>;
                  })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl shadow-xl relative" style={{ background: 'var(--bg-root)', border: '1px solid var(--border)' }}><div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--accent-gradient-subtle)' }}></div><div className="flex items-center gap-3 font-black text-[9px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}><Info size={14} /> Data Archive Source</div><p className="text-sm leading-relaxed italic font-bold" style={{ color: 'var(--text-dim)' }}>ဤအချက်အလက်များသည် Win Htut ၏ "Deep Dive Into Python" စာအုပ်ပါ မူရင်းရှင်းလျှင်းချက်များ (Verbatim) အတိုင်း ဖြစ်ပါသည်။</p></div>
                  <div className="p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg" style={{ background: 'var(--accent-bg-light)', border: '1px solid var(--accent-subtle)' }}><p className="font-black text-[10px] mb-4 uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>Ready for action?</p><button onClick={() => setTab('exercise')} className="px-10 py-4 rounded-xl font-black text-[10px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all w-full max-w-xs" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow)' }}>START SIMULATION</button></div>
                </div>
              </div>
            )}

            {tab === 'exercise' && (
              <div className="space-y-8 animate-in zoom-in-95 duration-500">
                <div className="p-8 rounded-2xl flex items-center gap-6" style={{ background: 'var(--bg-code)', border: '1px solid var(--accent-subtle)', borderLeft: '4px solid var(--accent)', boxShadow: 'var(--accent-glow-sm)' }}><div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center animate-pulse" style={{ background: 'var(--accent)', color: 'var(--bg-root)' }}><Zap size={28} /></div><div className="flex-1"><h4 className="font-black text-[8px] uppercase tracking-[0.4em] mb-2 font-bold" style={{ color: 'var(--accent)' }}>Mission Objective</h4><p className="text-xl font-bold leading-snug" style={{ color: 'var(--text-heading)' }}>{lesson.exercise.task}</p><p className="text-xs mt-2 italic" style={{ color: 'var(--accent-muted)' }}>Hint: {lesson.exercise.hint}</p></div></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'var(--bg-root)', border: '1px solid var(--border)' }}>
                  <div className="px-8 py-4 flex justify-between items-center" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}><div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}><Terminal size={12} style={{ color: 'var(--accent)' }} /> exploit_dev.py</div><button onClick={runCode} className="px-8 py-2.5 rounded-full text-[9px] font-black flex items-center gap-2 active:scale-90 transition-all" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow-sm)' }}>EXECUTE PAYLOAD</button></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-[420px]">
                    <textarea value={code} onChange={(e) => setCode(e.target.value)} className="p-10 font-mono text-lg focus:outline-none resize-none custom-scrollbar leading-relaxed" style={{ background: 'var(--bg-root)', color: 'var(--accent)', borderRight: '1px solid var(--border)' }} spellCheck="false" placeholder="# Inject payload code here..." />
                    <div className="p-10 overflow-y-auto font-mono text-sm flex flex-col" style={{ background: 'var(--bg-terminal)' }}><p className="text-[9px] font-black uppercase mb-6 tracking-[0.3em] font-bold" style={{ color: 'var(--text-muted)' }}>Telemetry Stream</p><pre className="flex-1 whitespace-pre-wrap leading-relaxed text-base italic" style={{ color: 'var(--accent)' }}>{terminal.output || ">>> LISTENING FOR SIGNALS..."}</pre>{terminal.passed && <div className="mt-6 p-5 rounded-xl flex items-center gap-4 animate-bounce" style={{ background: 'var(--accent-bg-light)', border: '1px solid var(--accent-subtle)', color: 'var(--accent)', boxShadow: 'var(--accent-glow-sm)' }}><CheckCircle size={24} /> <span className="font-black text-[10px] tracking-widest uppercase">Target Compromised! Success.</span></div>}</div>
                  </div>
                </div>
                {terminal.passed && <div className="flex justify-center pt-8"><button onClick={() => setTab('quiz')} className="px-12 py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] shadow-2xl transition-all" style={{ background: 'var(--text-heading)', color: 'var(--bg-root)', border: '1px solid var(--accent)' }}>PROCEED TO VERIFICATION</button></div>}
              </div>
            )}

            {tab === 'ide' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]" style={{ background: 'var(--bg-root)', border: '1px solid var(--accent-subtle)' }}>
                  <div className="px-8 py-5 flex justify-between items-center" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}><h4 className="text-[9px] font-black uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>Secure Sandbox Environment</h4><button onClick={() => setTerminal(executeMockPython(code, null))} className="px-8 py-2.5 rounded-full font-black text-[9px] active:scale-95 transition-all" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow)' }}>RUN SCRIPT</button></div>
                  <textarea value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 p-10 font-mono text-lg focus:outline-none resize-none" style={{ background: 'var(--bg-root)', color: 'var(--accent)' }} placeholder="# Experiment with Python code here..." spellCheck="false" />
                  <div className="h-48 p-8 font-mono overflow-y-auto custom-scrollbar shadow-inner" style={{ background: 'var(--bg-terminal)', borderTop: '1px solid var(--border)', color: 'var(--accent)' }}><p className="text-[9px] uppercase mb-4 font-black tracking-widest" style={{ color: 'var(--text-muted)' }}>Syslog Output</p><pre className="text-sm font-medium leading-relaxed">{terminal.output || ">>> System Ready. Waiting for commands."}</pre></div>
                </div>
              </div>
            )}

            {tab === 'quiz' && (
              <div className="p-10 md:p-24 rounded-[3rem] animate-in fade-in zoom-in-95 duration-700 flex flex-col justify-center min-h-[600px] shadow-3xl relative" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="absolute top-0 left-0 w-full h-1 animate-pulse" style={{ background: 'var(--accent-subtle)' }}></div>
                <div className="mb-14 text-center"><div className="inline-block px-5 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.5em] mb-6" style={{ background: 'var(--accent-bg-light)', color: 'var(--accent)', border: '1px solid var(--accent-subtle)' }}>Authentication Required</div><p className="text-2xl md:text-4xl font-black leading-tight tracking-tighter max-w-3xl mx-auto" style={{ color: 'var(--text-heading)' }}>{lesson.quiz.question}</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                  {lesson.quiz.options.map((opt, i) => {
                    let st = "text-left p-8 rounded-3xl border transition-all font-bold text-lg flex items-center gap-6 ";
                    let inlineSt = {};
                    if (res) {
                      if (i === lesson.quiz.answer) { st += "scale-[1.02]"; inlineSt = { background: 'var(--accent-bg-light)', borderColor: 'var(--accent)', color: 'var(--accent)', boxShadow: 'var(--accent-glow)' }; }
                      else if (i === ans) st += "bg-rose-900/10 border-rose-900 text-rose-500";
                      else { st += "opacity-30"; inlineSt = { borderColor: 'var(--border)', color: 'var(--text-muted)' }; }
                    } else inlineSt = { borderColor: 'var(--border)', color: 'var(--text-dim)' };
                    return (
                      <button key={i} onClick={() => !res && submitQuiz(i)} className={st} style={inlineSt}>
                        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border text-[10px] font-black`} style={res && i === lesson.quiz.answer ? { background: 'var(--accent)', color: 'var(--bg-root)', borderColor: 'var(--accent)' } : { background: 'var(--bg-input)', color: 'var(--text-muted)', borderColor: 'var(--border)' }}>{String.fromCharCode(65 + i)}</div>{opt}
                      </button>
                    );
                  })}
                </div>
                {res && (
                  <div className={`mt-20 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 ${ans === lesson.quiz.answer ? '' : 'bg-rose-900 text-white shadow-3xl'}`} style={ans === lesson.quiz.answer ? { background: 'var(--accent)', color: 'var(--bg-root)' } : {}}>
                    <div className="flex items-center gap-6 font-black text-2xl uppercase tracking-tighter">{ans === lesson.quiz.answer ? <><Eye size={56} /> CLEARANCE GRANTED.</> : <><X size={56} /> CLEARANCE DENIED.</>}</div>
                    {ans === lesson.quiz.answer && <button onClick={next} className="px-14 py-5 rounded-2xl font-black text-[10px] tracking-widest transition-all shadow-lg active:scale-95" style={{ background: 'var(--bg-root)', color: 'var(--accent)', border: '1px solid var(--accent-subtle)' }}>NEXT PHASE <ChevronRight size={18} /></button>}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* BOTTOM NAV */}
        <footer className="p-5 px-10 flex justify-between items-center z-30 shadow-2xl relative" style={{ background: 'var(--bg-root)', borderTop: '1px solid var(--border)' }}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full animate-ping" style={{ background: 'var(--accent)' }}></div><span className="font-black text-[8px] tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>Node: Active</span></div>
            <div className="text-[11px] font-black tracking-tighter px-4 py-1.5 rounded-md" style={{ color: 'var(--accent)', border: '1px solid var(--accent-subtle)', background: 'var(--bg-input)' }}>PHASE {mIdx + 1}.{lIdx + 1} <span style={{ color: 'var(--text-muted)' }} className="mx-2">|</span> {totalLessons}</div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => { if (lIdx > 0) setLIdx(lIdx - 1); else if (mIdx > 0) { setMIdx(mIdx - 1); setLIdx(CYBER_BOOK[mIdx - 1].lessons.length - 1); } }} className="p-4 rounded-xl active:scale-90 shadow-sm transition-all" style={{ background: 'var(--bg-card)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}><ChevronRight size={24} className="rotate-180" /></button>
            <button onClick={next} className="px-12 py-4 rounded-2xl font-black text-[10px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all uppercase" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow)' }}>PROCEED <ChevronRight size={18} /></button>
          </div>
        </footer>
      </main>

      <style>{`
        /* === DARK THEME (default hacker aesthetic) === */
        [data-theme="dark"] {
          --bg-root: #010101;
          --bg-sidebar: #080808;
          --bg-sidebar-header: linear-gradient(to bottom, #0a0a0a, #010101);
          --bg-card: #0a0a0a;
          --bg-header: #0a0a0a;
          --bg-input: #000000;
          --bg-terminal: #010101;
          --bg-code: #001100;
          --bg-content-gradient: radial-gradient(circle at center, rgba(0,255,65,0.02) 0%, rgba(0,0,0,1) 100%);
          --bg-progress-track: #111;
          --border: #111;
          --accent: #00FF41;
          --accent-subtle: rgba(0,255,65,0.2);
          --accent-muted: rgba(0,255,65,0.6);
          --accent-bg-light: rgba(0,255,65,0.05);
          --accent-glow: 0 0 15px rgba(0,255,65,0.4);
          --accent-glow-sm: 0 0 10px rgba(0,255,65,0.2);
          --accent-gradient-subtle: linear-gradient(to bottom right, rgba(0,255,65,0.05), transparent);
          --text-primary: #00FF41;
          --text-heading: #ffffff;
          --text-body: #999;
          --text-dim: #666;
          --text-muted: #444;
        }

        /* === LIGHT THEME (clean modern look) === */
        [data-theme="light"] {
          --bg-root: #f8f9fb;
          --bg-sidebar: #ffffff;
          --bg-sidebar-header: linear-gradient(to bottom, #ffffff, #f0f1f5);
          --bg-card: #ffffff;
          --bg-header: #ffffff;
          --bg-input: #f0f1f5;
          --bg-terminal: #f0f1f5;
          --bg-code: #eef4ff;
          --bg-content-gradient: radial-gradient(circle at center, rgba(59,130,246,0.03) 0%, #f8f9fb 100%);
          --bg-progress-track: #e2e5ea;
          --border: #e2e5ea;
          --accent: #2563eb;
          --accent-subtle: rgba(37,99,235,0.15);
          --accent-muted: rgba(37,99,235,0.6);
          --accent-bg-light: rgba(37,99,235,0.06);
          --accent-glow: 0 2px 12px rgba(37,99,235,0.2);
          --accent-glow-sm: 0 1px 6px rgba(37,99,235,0.12);
          --accent-gradient-subtle: linear-gradient(to bottom right, rgba(37,99,235,0.05), transparent);
          --text-primary: #1e293b;
          --text-heading: #0f172a;
          --text-body: #475569;
          --text-dim: #64748b;
          --text-muted: #94a3b8;
        }

        ::selection {
          background: var(--accent);
          color: var(--bg-root);
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: var(--bg-root); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--accent); }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        textarea { caret-color: var(--accent); }
      `}</style>
    </div>
  );
}