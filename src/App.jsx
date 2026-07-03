import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal, Shield, Lock, Cpu, Layers, CheckCircle, ChevronRight, Menu, X,
  Play, Award, Book, Database, Globe, BarChart, Zap, Eye, Ghost, Activity, Info, Search, Code, AlertTriangle, Box, Server, TrendingUp, Key, Sun, Moon
} from 'lucide-react';
import { CYBER_BOOK } from './data/cyberbook.js';
import './App.css';

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
    <div data-theme={darkMode ? 'dark' : 'light'} className="flex h-screen overflow-hidden transition-colors duration-300" style={{ background: 'var(--bg-root)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', '--selection-bg': 'var(--accent)', '--selection-text': 'var(--bg-root)' }}>

      {/* SIDEBAR */}
      <aside className={`${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 fixed md:relative z-50 w-80 h-full flex flex-col shadow-2xl`} style={{ background: 'var(--bg-sidebar)', borderRight: '1px solid var(--border)' }}>
        <div className="p-6" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-sidebar-header)' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="animate-pulse" size={28} style={{ color: 'var(--accent)' }} />
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase leading-tight">Python Ninja<br /><span className="text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>Deep Dive v6.0</span></h1>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs uppercase tracking-wide mb-1 font-semibold" style={{ color: 'var(--text-muted)' }}>
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
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-xs outline-none uppercase tracking-wide font-semibold"
              style={{ background: 'var(--bg-input)', border: '1px solid var(--border)', color: 'var(--accent)' }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filtered.map((mod) => {
            const originalMIdx = CYBER_BOOK.findIndex(m => m.id === mod.id);
            return (
              <div key={mod.id} className="space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2 px-2 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}><Lock size={10} /> {mod.title}</h3>
                <div className="space-y-1">
                  {mod.lessons.map((les) => {
                    const originalLIdx = mod.lessons.findIndex(l => l.id === les.id);
                    const active = originalMIdx === mIdx && originalLIdx === lIdx;
                    return (
                      <button key={les.id} onClick={() => { setMIdx(originalMIdx); setLIdx(originalLIdx); if (window.innerWidth < 768) setSidebar(false); }} className={`w-full text-left p-3 rounded-lg text-xs transition-all flex items-center justify-between border`} style={active ? { background: 'var(--accent)', color: 'var(--bg-root)', fontWeight: '600', borderColor: 'var(--accent)', boxShadow: 'var(--accent-glow-sm)' } : { borderColor: 'transparent', color: 'var(--text-dim)' }}>
                        <span className="truncate pr-2">{originalLIdx + 1}. {les.title}</span>
                        {progress.includes(`${originalMIdx}-${originalLIdx}`) && <CheckCircle size={14} style={{ color: active ? 'var(--bg-root)' : 'var(--accent)' }} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="pt-4 pb-10 text-center">
            <p className="text-xs uppercase tracking-wide font-semibold" style={{ color: 'var(--text-muted)' }}>End of Archive.</p>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="flex-1 flex flex-col relative overflow-hidden" style={{ background: 'var(--bg-root)' }}>
        {!sidebar && <button onClick={() => setSidebar(true)} className="absolute top-4 left-4 z-40 p-2 rounded-lg md:hidden shadow-lg" style={{ background: 'var(--accent)', color: 'var(--bg-root)' }}><Menu size={20} /></button>}

        {/* TAB SWITCHER */}
        <header className="px-6 md:px-8 py-3 flex items-center gap-1.5 pl-14 md:pl-8 overflow-x-auto no-scrollbar relative z-10" style={{ background: 'var(--bg-header)', borderBottom: '1px solid var(--border)' }}>
          <nav className="flex items-center gap-1">
            {tabsConfig.map(t => {
              const IconComp = t.icon;
              const isActive = tab === t.id;
              return (
                <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2.5 px-4 py-2 rounded-lg font-semibold text-xs uppercase tracking-wide transition-all duration-200 ${isActive ? '' : 'hover:opacity-80'}`} style={isActive ? { background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow-sm)' } : { color: 'var(--text-dim)', background: 'transparent' }}>
                  <IconComp size={14} strokeWidth={isActive ? 2.5 : 2} /> {t.label}
                </button>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg transition-all duration-200 hover:opacity-80" style={{ color: 'var(--text-dim)', border: '1px solid var(--border)', background: 'var(--bg-input)' }} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </header>

        {/* DYNAMIC CONTENT */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar" style={{ background: 'var(--bg-content-gradient)' }}>
          <div className="max-w-4xl mx-auto space-y-12 pb-32">

            <header className="space-y-2 pl-6 animate-in slide-in-from-left duration-500" style={{ borderLeft: '2px solid var(--accent)' }}>
              <p className="font-semibold text-xs uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{CYBER_BOOK[mIdx].title}</p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight flex items-center gap-4" style={{ color: 'var(--text-heading)' }}>{lesson.title} <Activity className="animate-pulse" size={28} style={{ color: 'var(--accent)' }} /></h2>
            </header>

            {tab === 'learn' && (
  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
    <div className="p-8 md:p-14 rounded-2xl leading-relaxed text-[15px] md:text-base whitespace-pre-wrap shadow-3xl relative overflow-hidden group" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-body)', borderTop: '2px solid var(--accent-subtle)' }}>
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 pointer-events-none transition-all duration-1000" style={{ color: 'var(--text-muted)' }}><Ghost size={160} /></div>
      
      {/* Safe, tag-retaining tokenized content split loop */}
      {lesson.content.split(/(<CODE_BLOCK>[\s\S]*?<\/CODE_BLOCK>|<IMG_BLOCK>[\s\S]*?<\/IMG_BLOCK>|<TABLE_BLOCK>[\s\S]*?<\/TABLE_BLOCK>)/g).map((part, idx) => {
        
        // 1. Explicit Image Handling
        if (part.startsWith('<IMG_BLOCK>')) {
          const cleanImgPath = part.replace(/<\/?IMG_BLOCK>/g, '').trim();
          return (
            <div key={idx} className="my-8 flex justify-center">
              <img src={cleanImgPath} alt="Lesson illustration" className="rounded-xl max-w-full shadow-lg" style={{ border: '1px solid var(--accent-subtle)', maxHeight: '400px' }} />
            </div>
          );
        }
        
        // 2. Explicit Code Block Handling
        if (part.startsWith('<CODE_BLOCK>')) {
          const cleanCode = part.replace(/<\/?CODE_BLOCK>/g, '').trim();
          return (
            <div key={idx} className="cyber-code-wrapper my-8">
              <div className="cyber-code-header flex items-center gap-3 mb-4 pb-3">
                <Code size={16} className="cyber-code-accent" /> 
                <span className="cyber-code-accent font-semibold text-xs uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>Code Sample</span>
              </div>
              <pre className="cyber-code-text text-[13px] md:text-sm leading-relaxed whitespace-pre-wrap" style={{ fontFamily: 'var(--font-mono)', margin: 0 }}>{cleanCode}</pre>
            </div>
          );
        }

        // 3. TABLE_BLOCK Handling — pipe-delimited rows, first row = header
        if (part.startsWith('<TABLE_BLOCK>')) {
          const tableRaw = part.replace(/<\/?TABLE_BLOCK>/g, '').trim();
          const rows = tableRaw.split('\n').map(r => r.split('|').map(c => c.trim()));
          const headers = rows[0];
          const bodyRows = rows.slice(1);
          return (
            <div key={idx} className="my-10 overflow-x-auto rounded-xl" style={{ border: '1px solid var(--accent-subtle)', boxShadow: 'var(--accent-glow-sm)' }}>
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: 'var(--accent)', borderBottom: '1px solid var(--accent-subtle)' }}>
                <Database size={14} style={{ color: 'var(--bg-root)' }} />
                <span className="font-semibold text-xs uppercase tracking-widest" style={{ color: 'var(--bg-root)' }}>ASCII Reference Table</span>
              </div>
              <table className="w-full text-xs border-collapse" style={{ fontFamily: 'var(--font-mono)' }}>
                <thead>
                  <tr style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '2px solid var(--accent-subtle)' }}>
                    {headers.map((h, hi) => (
                      <th key={hi} className="px-3 py-2 text-left font-bold uppercase tracking-wide whitespace-nowrap" style={{ color: 'var(--accent)', borderRight: hi < headers.length - 1 ? '1px solid var(--border)' : 'none' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, ri) => (
                    <tr key={ri} style={{ background: ri % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-root)', borderBottom: '1px solid var(--border)' }}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-3 py-1.5 whitespace-nowrap" style={{ color: ci === 2 ? 'var(--accent)' : ci === 5 ? '#f59e0b' : 'var(--text-body)', borderRight: ci < row.length - 1 ? '1px solid var(--border)' : 'none', fontWeight: ci === 2 || ci === 0 ? '600' : '400' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // 4. Plain Text / Paragraph Fallback
        return <span key={idx}>{part}</span>;
      })}
    </div>
    
    {/* Rest of the original info widgets remain exactly the same */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 rounded-2xl shadow-xl relative" style={{ background: 'var(--bg-root)', border: '1px solid var(--border)' }}><div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--accent-gradient-subtle)' }}></div><div className="flex items-center gap-3 font-semibold text-xs uppercase tracking-wide mb-4" style={{ color: 'var(--accent)' }}><Info size={16} /> Data Archive Source</div><p className="text-base leading-relaxed italic font-medium" style={{ color: 'var(--text-dim)' }}>ဤအချက်အလက်များသည် Win Htut ၏ "Deep Dive Into Python" စာအုပ်ပါ မူရင်းရှင်းလျှင်းချက်များ (Verbatim) အတိုင်း ဖြစ်ပါသည်။</p></div>
      <div className="p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg" style={{ background: 'var(--accent-bg-light)', border: '1px solid var(--accent-subtle)' }}><p className="font-semibold text-xs mb-4 uppercase tracking-wide" style={{ color: 'var(--accent)' }}>Ready for action?</p><button onClick={() => setTab('exercise')} className="px-10 py-4 rounded-xl font-semibold text-xs tracking-wide hover:scale-105 active:scale-95 transition-all w-full max-w-xs uppercase" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow)' }}>START SIMULATION</button></div>
    </div>
  </div>
)}

            {tab === 'exercise' && (
              <div className="space-y-8 animate-in zoom-in-95 duration-500">
                <div className="p-8 rounded-2xl flex items-center gap-6" style={{ background: 'var(--bg-code)', border: '1px solid var(--accent-subtle)', borderLeft: '4px solid var(--accent)', boxShadow: 'var(--accent-glow-sm)' }}><div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center animate-pulse" style={{ background: 'var(--accent)', color: 'var(--bg-root)' }}><Zap size={28} /></div><div className="flex-1"><h4 className="font-semibold text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--accent)' }}>Mission Objective</h4><p className="text-lg md:text-2xl font-semibold leading-snug" style={{ color: 'var(--text-heading)' }}>{lesson.exercise.task}</p><p className="text-xs mt-2 italic" style={{ color: 'var(--accent-muted)' }}>Hint: {lesson.exercise.hint}</p></div></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'var(--bg-root)', border: '1px solid var(--border)' }}>
                  <div className="px-8 py-4 flex justify-between items-center" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}><div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}><Terminal size={14} style={{ color: 'var(--accent)' }} /> exploit_dev.py</div><button onClick={runCode} className="px-8 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 active:scale-90 transition-all uppercase tracking-wide" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow-sm)' }}>EXECUTE PAYLOAD</button></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-[420px]">
                    <textarea value={code} onChange={(e) => setCode(e.target.value)} className="p-10 text-[13px] md:text-sm focus:outline-none resize-none custom-scrollbar leading-relaxed" style={{ background: 'var(--bg-root)', color: 'var(--accent)', borderRight: '1px solid var(--border)', fontFamily: 'var(--font-mono)' }} spellCheck="false" placeholder="# Inject payload code here..." />
                    <div className="p-10 overflow-y-auto text-sm flex flex-col" style={{ background: 'var(--bg-terminal)', fontFamily: 'var(--font-mono)' }}><p className="text-xs font-semibold uppercase mb-6 tracking-wide" style={{ color: 'var(--text-muted)' }}>Telemetry Stream</p><pre className="flex-1 whitespace-pre-wrap leading-relaxed text-[13px] md:text-sm" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{terminal.output || ">>> LISTENING FOR SIGNALS..."}</pre>{terminal.passed && <div className="mt-6 p-5 rounded-xl flex items-center gap-4 animate-bounce" style={{ background: 'var(--accent-bg-light)', border: '1px solid var(--accent-subtle)', color: 'var(--accent)', boxShadow: 'var(--accent-glow-sm)' }}><CheckCircle size={24} /> <span className="font-semibold text-xs tracking-wide uppercase">Target Compromised! Success.</span></div>}</div>
                  </div>
                </div>
                {terminal.passed && <div className="flex justify-center pt-8"><button onClick={() => setTab('quiz')} className="px-12 py-5 rounded-2xl font-semibold text-xs tracking-wide shadow-2xl transition-all uppercase" style={{ background: 'var(--text-heading)', color: 'var(--bg-root)', border: '1px solid var(--accent)' }}>PROCEED TO VERIFICATION</button></div>}
              </div>
            )}

            {tab === 'ide' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]" style={{ background: 'var(--bg-root)', border: '1px solid var(--accent-subtle)' }}>
                  <div className="px-8 py-5 flex justify-between items-center" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}><h4 className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--accent)' }}>Secure Sandbox Environment</h4><button onClick={() => setTerminal(executeMockPython(code, null))} className="px-8 py-2.5 rounded-full font-semibold text-xs active:scale-95 transition-all uppercase tracking-wide" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow)' }}>RUN SCRIPT</button></div>
                  <textarea value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 p-10 text-[13px] md:text-sm focus:outline-none resize-none" style={{ background: 'var(--bg-root)', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }} placeholder="# Experiment with Python code here..." spellCheck="false" />
                  <div className="h-48 p-8 overflow-y-auto custom-scrollbar shadow-inner" style={{ background: 'var(--bg-terminal)', borderTop: '1px solid var(--border)', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}><p className="text-xs uppercase mb-4 font-semibold tracking-wide" style={{ color: 'var(--text-muted)' }}>Syslog Output</p><pre className="text-[13px] md:text-sm font-medium leading-relaxed" style={{ fontFamily: 'var(--font-mono)' }}>{terminal.output || ">>> System Ready. Waiting for commands."}</pre></div>
                </div>
              </div>
            )}

            {tab === 'quiz' && (
              <div className="p-10 md:p-24 rounded-[3rem] animate-in fade-in zoom-in-95 duration-700 flex flex-col justify-center min-h-[600px] shadow-3xl relative" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="absolute top-0 left-0 w-full h-1 animate-pulse" style={{ background: 'var(--accent-subtle)' }}></div>
                <div className="mb-14 text-center"><div className="inline-block px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-6" style={{ background: 'var(--accent-bg-light)', color: 'var(--accent)', border: '1px solid var(--accent-subtle)' }}>Authentication Required</div><p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight max-w-3xl mx-auto" style={{ color: 'var(--text-heading)' }}>{lesson.quiz.question}</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                  {lesson.quiz.options.map((opt, i) => {
                    let st = "text-left p-8 rounded-3xl border transition-all font-medium text-base flex items-center gap-6 ";
                    let inlineSt = {};
                    if (res) {
                      if (i === lesson.quiz.answer) { st += "scale-[1.02]"; inlineSt = { background: 'var(--accent-bg-light)', borderColor: 'var(--accent)', color: 'var(--accent)', boxShadow: 'var(--accent-glow)' }; }
                      else if (i === ans) { st += ""; inlineSt = { background: 'rgba(239,68,68,0.1)', borderColor: '#EF4444', color: '#EF4444' }; }
                      else { st += "opacity-30"; inlineSt = { borderColor: 'var(--border)', color: 'var(--text-muted)' }; }
                    } else inlineSt = { borderColor: 'var(--border)', color: 'var(--text-dim)' };
                    return (
                      <button key={i} onClick={() => !res && submitQuiz(i)} className={st} style={inlineSt}>
                        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border text-xs font-semibold`} style={res && i === lesson.quiz.answer ? { background: 'var(--accent)', color: 'var(--bg-root)', borderColor: 'var(--accent)' } : { background: 'var(--bg-input)', color: 'var(--text-muted)', borderColor: 'var(--border)' }}>{String.fromCharCode(65 + i)}</div>{opt}
                      </button>
                    );
                  })}
                </div>
                {res && (
                  <div className={`mt-20 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8`} style={ans === lesson.quiz.answer ? { background: 'var(--accent)', color: 'var(--bg-root)' } : { background: '#EF4444', color: '#FFFFFF', boxShadow: '0 4px 24px rgba(239,68,68,0.3)' }}>
                    <div className="flex items-center gap-6 font-bold text-2xl uppercase tracking-tight">{ans === lesson.quiz.answer ? <><Eye size={48} /> CLEARANCE GRANTED.</> : <><X size={48} /> CLEARANCE DENIED.</>}</div>
                    {ans === lesson.quiz.answer && <button onClick={next} className="px-14 py-5 rounded-2xl font-semibold text-xs tracking-wide transition-all shadow-lg active:scale-95 uppercase" style={{ background: 'var(--bg-root)', color: 'var(--accent)', border: '1px solid var(--accent-subtle)' }}>NEXT PHASE <ChevronRight size={18} /></button>}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* BOTTOM NAV */}
        <footer className="p-5 px-10 flex justify-between items-center z-30 shadow-2xl relative" style={{ background: 'var(--bg-root)', borderTop: '1px solid var(--border)' }}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full animate-ping" style={{ background: 'var(--accent)' }}></div><span className="font-semibold text-xs tracking-wide uppercase" style={{ color: 'var(--text-muted)' }}>Node: Active</span></div>
            <div className="text-xs font-semibold tracking-wide px-4 py-1.5 rounded-md" style={{ color: 'var(--accent)', border: '1px solid var(--accent-subtle)', background: 'var(--bg-input)' }}>PHASE {mIdx + 1}.{lIdx + 1} <span style={{ color: 'var(--text-muted)' }} className="mx-2">|</span> {totalLessons}</div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => { if (lIdx > 0) setLIdx(lIdx - 1); else if (mIdx > 0) { setMIdx(mIdx - 1); setLIdx(CYBER_BOOK[mIdx - 1].lessons.length - 1); } }} className="p-4 rounded-xl active:scale-90 shadow-sm transition-all" style={{ background: 'var(--bg-card)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}><ChevronRight size={24} className="rotate-180" /></button>
            <button onClick={next} className="px-12 py-4 rounded-2xl font-semibold text-xs tracking-wide hover:scale-105 active:scale-95 transition-all uppercase" style={{ background: 'var(--accent)', color: 'var(--bg-root)', boxShadow: 'var(--accent-glow)' }}>PROCEED <ChevronRight size={18} /></button>
          </div>
        </footer>
      </main>

    </div>
  );
}