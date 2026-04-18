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
          try { outputLines.push(String(safeEval(content))); } catch(e) { outputLines.push(`NameError: name '${content}' is not defined`); }
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
    title: 'Phase 1: Introduction & Environment',
    lessons: [
      {
        id: 'l1-1',
        title: 'Deep Dive into Python (နိဒါန်း)',
        content: `ယခု စာအုပ်သည် သင်ထောက်ကူ အနေဖြင့် အသုံးပြုရန် Python Programming အကြောင်းအား အသေးစိတ် ရေးသားထားသော စာအုပ် ဖြစ်ပါတယ်။ 

Python ဆိုတာ High Level Programming Language တစ်ခုဖြစ်ပါတယ်။ ၁၉၈၀ ခုနှစ် အနှောင်းပိုင်းမှာ Guido van Rossum က စတင် အကောင်အထည် ဖော်ခဲ့တာ ဖြစ်ပါတယ်။ Python ရဲ့ အဓိက ရည်ရွယ်ချက်ကတော့ Code တွေကို ဖတ်ရလွယ်ကူစေဖို့နဲ့ ရေးရတာ ရှင်းလင်းစေဖို့ (Readability and Simplicity) ပဲ ဖြစ်ပါတယ်။

Python ဟာ Interpreted Language ဖြစ်ပါတယ်။ ဆိုလိုတာက ကျွန်တော်တို့ ရေးလိုက်တဲ့ Code တွေကို Machine Code အဖြစ် တစ်ခါတည်း Compile လုပ်မပစ်ဘဲ၊ Interpreter ကနေ တစ်ကြောင်းချင်းစီ ဖတ်ပြီး အလုပ်လုပ်သွားတာ ဖြစ်ပါတယ်။ ဒါကြောင့် Error ရှာရတာ လွယ်ကူပြီး၊ Code တွေကို ချက်ချင်း ပြင်ဆင်စမ်းသပ်လို့ ရပါတယ်။

Python ကို Web Development (Django, Flask), Data Science (NumPy, Pandas), Artificial Intelligence, Machine Learning နဲ့ Cybersecurity (Hacking, Automation) နယ်ပယ်တွေမှာ အဓိက အသုံးပြုကြပါတယ်။ ယနေ့ခေတ်မှာ Python မပါဘဲ IT နယ်ပယ်မှာ ရပ်တည်ဖို့ဆိုတာ အတော်လေး ခက်ခဲလာပါပြီ။`,
        initialCode: '# ကျွန်တော်တို့ရဲ့ ပထမဆုံး Python Code လေး စရေးကြည့်ရအောင်\nprint("Deep Dive Into Python ကို စတင်လေ့လာနေပါပြီ။")\nprint("Green Hackers / National Cyber City မှ ကြိုဆိုပါတယ်။")',
        exercise: { task: 'Screen ပေါ်တွင် "System Initialized: Ready to Dive" ဟု print() function ကို အသုံးပြု၍ ထုတ်ပြပါ။', check: (out) => out.includes("System Initialized: Ready to Dive") },
        quiz: { question: 'Python ဟာ ဘယ်လို Programming Language မျိုး ဖြစ်သလဲ?', options: ['Compiled Language', 'Interpreted Language', 'Assembly Language', 'Machine Language'], answer: 1 }
      },
      {
        id: 'l1-2',
        title: 'Python Installation & VS Code Setup',
        content: `**Python Installation:**
Python ကို အသုံးပြုဖို့အတွက် python.org မှာ သွားရောက် Download ရယူနိုင်ပါတယ်။ မိမိ OS (Windows, Mac, Linux) နဲ့ ကိုက်ညီတဲ့ Version ကို ရွေးချယ်ပါ။ Install လုပ်တဲ့အခါ အောက်ခြေမှာရှိတဲ့ "Add Python to PATH" ဆိုတဲ့ အကွက်လေးကို Check ပေးဖို့ လုံးဝ မမေ့ပါနဲ့။ ၎င်းကို Check မပေးခဲ့ရင် Command Prompt (Terminal) ကနေ Python ကို ခေါ်သုံးလို့ ရမှာ မဟုတ်ပါဘူး။

**Code Editor ရွေးချယ်ခြင်း:**
Python Code တွေကို ရေးဖို့ Notepad ကနေစပြီး ရေးလို့ရပေမယ့်၊ ပိုမိုမြန်ဆန်လွယ်ကူစေဖို့ Visual Studio Code (VS Code) ကို အသုံးပြုဖို့ တိုက်တွန်းထားပါတယ်။ VS Code ဟာ Microsoft ကနေ အခမဲ့ ထုတ်ဝေထားတဲ့ Editor တစ်ခုဖြစ်ပြီး Extensions တွေ အများကြီး ထည့်သွင်း အသုံးပြုနိုင်ပါတယ်။

VS Code ကို Install လုပ်ပြီးရင် ဘယ်ဘက်က Extensions tab မှာ "Python" လို့ ရှာပြီး Microsoft က ထုတ်ထားတဲ့ Python Extension ကို Install လုပ်ပေးပါ။ ဒါဆိုရင် Code တွေ ရေးတဲ့အခါ အရောင်လေးတွေနဲ့ ခွဲခြားပြတာ၊ Code တွေကို အလိုအလျောက် ဖြည့်ပေးတာ (Autocomplete) တွေ လုပ်ပေးမှာ ဖြစ်ပါတယ်။`,
        initialCode: '# Python Version ကို Terminal ကနေ python --version လို့ ရိုက်ပြီး စစ်ဆေးနိုင်ပါတယ်။\nprint("VS Code Environment Setup လုပ်ပြီးပါပြီ။")',
        exercise: { task: 'print() function အသုံးပြုပြီး "Python Path Added Successfully" ဟု ထုတ်ပြပါ။', check: (out) => out.includes("Python Path Added Successfully") },
        quiz: { question: 'Python Install လုပ်စဉ် မဖြစ်မနေ Check လုပ်ပေးရမည့် အရာမှာ အဘယ်နည်း?', options: ['Install for all users', 'Disable path length limit', 'Add Python to PATH', 'Create Desktop Shortcut'], answer: 2 }
      },
      {
        id: 'l1-3',
        title: 'Standard Input and Output',
        content: `Program တစ်ခုဟာ User ဆီက အချက်အလက်တွေကို လက်ခံရယူဖို့ လိုအပ်သလို၊ ရလာတဲ့ ရလဒ်တွေကိုလည်း ပြန်လည် ထုတ်ပြဖို့ လိုအပ်ပါတယ်။

**Output ထုတ်ခြင်း (print):**
Python မှာ print() function ကို အသုံးပြုပြီး Output ထုတ်ပါတယ်။ 
ဥပမာ - print("Hello World")
print() ထဲမှာ စာသားတွေ (Strings) တွေကို " " (Double Quotes) ဒါမှမဟုတ် ' ' (Single Quotes) နဲ့ ပိတ်ပြီး ရေးရပါတယ်။ Comma (,) ခံပြီး variable မျိုးစုံကို တွဲထုတ်နိုင်ပါတယ်။

**Input ယူခြင်း (input):**
User ဆီက data ယူဖို့ input() function ကို သုံးပါတယ်။ 
ဥပမာ - name = input("Enter your name: ")
အလွန် အရေးကြီးတဲ့ အချက်ကတော့ input() ကနေ ရလာတဲ့ data တွေဟာ အမြဲတမ်း **String (စာသား)** တွေပဲ ဖြစ်ပါတယ်။ အကယ်၍ ကျွန်တော်တို့က နံပါတ်တွေ တောင်းပြီး ပေါင်းချင်၊ နုတ်ချင်တယ်ဆိုရင် int() သို့မဟုတ် float() သုံးပြီး Data Type Conversion (အမျိုးအစား ပြောင်းလဲခြင်း) လုပ်ပေးရပါမယ်။`,
        initialCode: 'name = "Ninja_007" # Simulated input from user\nage_str = "25"\n\n# age_str သည် String ဖြစ်နေသောကြောင့် တွက်ချက်၍မရပါ။ int ပြောင်းပေးရမည်။\nage_int = int(age_str)\n\nprint("Welcome to the system,", name)\nprint("Next year, your age will be:", age_int + 1)',
        exercise: { task: 'user_rank ဆိုသော variable ထဲသို့ "Elite_Hacker" ကို ထည့်သွင်းပြီး print ထုတ်ပြပါ။', check: (out, vars) => vars.user_rank === "Elite_Hacker" },
        quiz: { question: 'input() function ကို အသုံးပြု၍ ရရှိလာသော အချက်အလက်သည် အမြဲတမ်း မည်သည့် အမျိုးအစား (Data Type) ဖြစ်သနည်း?', options: ['Integer (ကိန်းပြည့်)', 'Float (ဒသမကိန်း)', 'String (စာသား)', 'Boolean (အမှန်/အမှား)'], answer: 2 }
      }
    ]
  },
  {
    id: 'p2',
    title: 'Phase 2: Data Types (အသေးစိတ် လေ့လာခြင်း)',
    lessons: [
      {
        id: 'l2-1',
        title: 'Numbers (int, float, complex) & Booleans',
        content: `Python မှာ Numbers Type (၃) မျိုး အဓိက ရှိပါတယ်။ ၎င်းတို့မှာ int, float နဲ့ complex တို့ ဖြစ်ကြပါတယ်။

၁။ **int (Integer):** ကိန်းပြည့်များ ဖြစ်ပါတယ်။ အပေါင်းကိန်း၊ အနုတ်ကိန်း၊ သုည အားလုံး ပါဝင်ပါတယ်။ (ဥပမာ - 10, -50, 1000)။ Python 3 မှာ integer တွေဟာ memory ရှိသလောက် အကန့်အသတ်မရှိ (Unlimited length) သိမ်းဆည်းနိုင်ပါတယ်။
၂။ **float (Floating Point):** ဒသမကိန်းများ ဖြစ်ပါတယ်။ (ဥပမာ - 3.14, 2.0, -0.5)။ သိပ္ပံနည်းကျ ဖော်ပြချက်ဖြစ်တဲ့ e ကို သုံးပြီး (ဥပမာ - 1.5e2 ဆိုလျှင် 150.0) လည်း ရေးနိုင်ပါတယ်။
၃။ **complex (Complex Numbers):** သင်္ချာ ရှုပ်ထွေးကိန်းများ ဖြစ်ပါတယ်။ ဥပမာ - 2+3j (j ကို imaginary part အဖြစ် သုံးပါတယ်။ Python မှာ i အစား j ကို သုံးတာ သတိပြုပါ။)

**Boolean (bool):**
Boolean မှာ True နဲ့ False ဆိုပြီး တန်ဖိုး (၂) ခုပဲ ရှိပါတယ်။ Programming logic တွေမှာ အခြေအနေတစ်ခု မှန်သလား မှားသလား စစ်ဆေးတဲ့အခါ အသုံးဝင်ပါတယ်။ T နှင့် F ကို အမြဲတမ်း စာလုံးအကြီးဖြင့် ရေးရပါမည်။`,
        initialCode: 'a = 10\nb = 3.14\nc = 2 + 3j\nis_secure = True\n\nprint("Type of a:", type(a))\nprint("Type of b:", type(b))\nprint("Type of c:", type(c))\nprint("Type of is_secure:", type(is_secure))',
        exercise: { task: '100.5 ဆိုသော ကိန်း၏ Data Type ကို type() function အသုံးပြု၍ print ထုတ်ပြပါ။', check: (out) => out.includes("float") },
        quiz: { question: 'Python တွင် Complex Number များ ရေးသားရာ၌ Imaginary part ကို ကိုယ်စားပြုရန် မည်သည့် အက္ခရာကို သုံးသနည်း?', options: ['i', 'j', 'x', 'y'], answer: 1 }
      },
      {
        id: 'l2-2',
        title: 'String Data Type နှင့် Slicing',
        content: `String ဆိုတာ စာသားတွေ (Sequence of characters) ဖြစ်ပါတယ်။ Single Quote (' ') သို့မဟုတ် Double Quote (" ") ထဲမှာ ရေးရပါတယ်။ Python မှာ String တွေက **Immutable** ဖြစ်ပါတယ်။ ဆိုလိုတာက တစ်ခါ တည်ဆောက်ပြီးရင် အထဲက စာလုံးတွေကို ပြန်ပြင်လို့ မရပါဘူး။ အသစ်တစ်ခု ပြန်ဆောက်ရပါတယ်။

**String Slicing (စာသားများ ဖြတ်ထုတ်ခြင်း):**
String ထဲက အစိတ်အပိုင်းတွေကို လိုချင်တဲ့အခါ Index (နေရာညွှန်းကိန်း) ကို သုံးပြီး ဖြတ်ယူနိုင်ပါတယ်။ Index သည် 0 ကနေ စတင်ပါတယ်။ နောက်ဆုံးကနေ ပြန်ရေတွက်ချင်ရင် -1, -2 စသည်ဖြင့် သုံးနိုင်ပါတယ်။

Syntax: string_name[start : stop : step]
- start: စတင်မည့် နေရာ
- stop: ဆုံးမည့် နေရာ (stop index ပါဝင်မည် မဟုတ်ပါ)
- step: ခုန်မည့် အကွာအဝေး`,
        initialCode: 'text = "Cyber Security Expert"\n\nprint("First Letter:", text[0])\nprint("Slicing [0:5]:", text[0:5]) # Index 0 မှ 4 အထိ ယူမည်\nprint("Negative Index [-6:]:", text[-6:]) # နောက်ဆုံး 6 လုံးကို ယူမည်\nprint("Reverse String:", text[::-1]) # စာသားတစ်ခုလုံးကို ပြောင်းပြန်လှန်မည်',
        exercise: { task: 'secret_code = "AZ12345XYZ" ဆိုသော string မှ "12345" ကိုသာ slicing အသုံးပြု၍ ဖြတ်ထုတ်ပြပါ။', check: (out) => out.includes("12345") && !out.includes("AZ") },
        quiz: { question: 'String တစ်ခုကို ပြောင်းပြန်လှန်ရန် (Reverse) အလွယ်ကူဆုံးနည်းလမ်းမှာ အဘယ်နည်း?', options: ['text.reverse()', 'text[::-1]', 'text[-1:0]', 'reverse(text)'], answer: 1 }
      },
      {
        id: 'l2-3',
        title: 'String Methods (အသုံးဝင်သော လုပ်ဆောင်ချက်များ)',
        content: `Python မှာ String တွေကို ပြုပြင်ဖို့ built-in method တွေ အများကြီး ရှိပါတယ်။ စာအုပ်ထဲမှာ ဖော်ပြထားတဲ့ အသုံးအများဆုံး method တွေကတော့ -

- **upper()**: စာလုံးအားလုံးကို အကြီး (Uppercase) ပြောင်းပါတယ်။
- **lower()**: စာလုံးအားလုံးကို အသေး (Lowercase) ပြောင်းပါတယ်။
- **capitalize()**: ပထမဆုံး စာလုံးကိုသာ အကြီးပြောင်းပေးပါတယ်။
- **count(sub)**: စာသားထဲမှာ သတ်မှတ်ထားတဲ့ စာလုံး ဘယ်နှစ်ကြိမ် ပါလဲ ရေတွက်ပါတယ်။
- **find(sub)**: စာလုံးရဲ့ ပထမဆုံး တည်နေရာ (Index) ကို ရှာပေးပါတယ်။ မတွေ့ရင် -1 ပြန်ပေးပါတယ်။
- **replace(old, new)**: စာသား တစ်ခုကို နောက်တစ်ခုနဲ့ အစားထိုးပါတယ်။
- **strip()**: စာသားရဲ့ ရှေ့နောက်မှာ ရှိနေတဲ့ မလိုအပ်တဲ့ space များကို ဖယ်ရှားပါတယ်။ Data cleaning လုပ်ရာတွင် အလွန်အသုံးဝင်ပါတယ်။
- **split(separator)**: စာသားကို သတ်မှတ်ထားတဲ့ သင်္ကေတအလိုက် အစိတ်အပိုင်းများအဖြစ် ခွဲထုတ်ပြီး List အနေဖြင့် ပြန်ပေးပါတယ်။`,
        initialCode: 'log_data = "   ERROR: Unauthorized Access Detected in System   "\n\nclean_log = log_data.strip()\nprint("Cleaned:", clean_log)\nprint("Uppercase:", clean_log.upper())\nprint("Count ' + "'e'" + ':", clean_log.lower().count("e"))\nprint("Replaced:", clean_log.replace("ERROR", "WARNING"))\nprint("Splitted:", clean_log.split(":"))',
        exercise: { task: 'data = "admin_password" ဟု သတ်မှတ်ပြီး "password" ဟူသော စာသားကို "12345" သို့ replace() သုံး၍ အစားထိုးပြပါ။', check: (out) => out.includes("admin_12345"), hint: 'data.replace("password", "12345")' },
        quiz: { question: 'စာသားတစ်ခုအတွင်းရှိ ရှေ့နှင့်နောက်မှ Space အလွတ်များကို ဖယ်ရှားပေးသော Method မှာ မည်သည့်အရာဖြစ်သနည်း?', options: ['remove()', 'clear()', 'strip()', 'delete()'], answer: 2 }
      }
    ]
  },
  {
    id: 'p3',
    title: 'Phase 3: Operators & Bitwise Logic',
    lessons: [
      {
        id: 'l3-1',
        title: 'Arithmetic & Relational Operators',
        content: `**Arithmetic Operators (သင်္ချာတွက်ချက်ခြင်းများ):**
- **+ (Addition), - (Subtraction), * (Multiplication), / (Division)**
- **// (Floor Division):** အစားရလဒ်တွင် ဒသမကိန်းများကို ဖြုတ်ပစ်ပြီး ကိန်းပြည့်ကိုသာ ယူပါတယ်။ ဥပမာ 10 // 3 သည် 3 ရပါမည်။
- **% (Modulus):** အစားရလဒ်ရဲ့ အကြွင်းကိုသာ ယူပါတယ်။ ဥပမာ 10 % 3 သည် 1 ရပါမည်။ (စုံကိန်း၊ မကိန်း ရှာရာတွင် အဓိက သုံးပါတယ်)။
- **\*\* (Exponent):** ထပ်ညွှန်း (Power) တင်တာ ဖြစ်ပါတယ်။ ဥပမာ 2 ** 3 သည် 8 ရပါမည်။

**Relational Operators (နှိုင်းယှဉ်ခြင်းများ):**
တန်ဖိုး နှစ်ခုကို နှိုင်းယှဉ်ဖို့ သုံးပါတယ်။ ရလဒ်အနေဖြင့် Boolean (True သို့မဟုတ် False) ထွက်ပေါ်လာပါတယ်။
- **==** (ညီသလား)
- **!=** (မညီဘူးလား)
- **>** (ကြီးသလား) , **<** (ငယ်သလား)
- **>=** (ကြီးသည် သို့မဟုတ် ညီသလား) , **<=** (ငယ်သည် သို့မဟုတ် ညီသလား)`,
        initialCode: 'a = 20\nb = 6\n\nprint("Normal Division (20 / 6):", a / b)\nprint("Floor Division (20 // 6):", a // b)\nprint("Modulus (20 % 6):", a % b) # အကြွင်း 2\nprint("Exponent (2^4):", 2 ** 4)\n\nprint("Is a greater than b?", a > b)\nprint("Is a equal to 20?", a == 20)',
        exercise: { task: '25 ကို 7 ဖြင့် စား၍ ရသော အကြွင်း (Modulus) ကို print() ဖြင့် ထုတ်ပြပါ။', check: (out) => out.includes("4"), hint: 'print(25 % 7)' },
        quiz: { question: 'အစားတွက်ချက်ရာတွင် အကြွင်း (Remainder) ကိုသာ လိုချင်ပါက မည်သည့် Operator ကို အသုံးပြုရမည်နည်း?', options: ['/', '//', '%', '**'], answer: 2 }
      },
      {
        id: 'l3-2',
        title: 'Logical & Assignment Operators',
        content: `**Logical Operators (ယုတ္တိဗေဒ ဆက်စပ်မှုများ):**
Condition (အခြေအနေ) များကို ပေါင်းစပ်စစ်ဆေးရန် သုံးပါသည်။
- **and:** အခြေအနေ နှစ်ခုလုံး မှန်ကန်မှသာ (True) ရလဒ် ထွက်ပါမည်။ တစ်ခုမှားပါက False ဖြစ်သည်။
- **or:** အခြေအနေ နှစ်ခုအနက် တစ်ခုမှန်ရုံဖြင့် (True) ရလဒ် ထွက်ပါမည်။
- **not:** ရလဒ်ကို ပြောင်းပြန်လှန်ပစ်ပါသည်။ (True ဆိုလျှင် False, False ဆိုလျှင် True)။

**Assignment Operators (တန်ဖိုးသတ်မှတ်ခြင်းများ):**
Variable များထဲသို့ တန်ဖိုးထည့်ရာတွင် အတိုကောက် ရေးသားနည်းများ ဖြစ်ပါသည်။
- **=** (ရိုးရိုး ထည့်ခြင်း)
- **+=** (ဥပမာ x += 5 သည် x = x + 5 နှင့် အတူတူပင် ဖြစ်သည်)
- **-= , *= , /=** စသည်ဖြင့်လည်း အသုံးပြုနိုင်ပါသည်။`,
        initialCode: 'is_admin = True\nhas_password = False\n\nprint("AND Logic:", is_admin and has_password) # နှစ်ခုလုံး မှန်မှ True\nprint("OR Logic:", is_admin or has_password) # တစ်ခုမှန်ရင် True\nprint("NOT Logic:", not is_admin)\n\ncount = 10\ncount += 5 # count = count + 5\nprint("Count updated:", count)',
        exercise: { task: 'x = 100 ဟု သတ်မှတ်ပါ။ ထို့နောက် x ထဲမှ 20 ကို -= operator သုံး၍ နှုတ်ပြီး ရလဒ်ကို print ထုတ်ပြပါ။', check: (out, vars) => vars.x === 80, hint: 'x = 100 \n x -= 20' },
        quiz: { question: 'အခြေအနေ (Condition) နှစ်ခုလုံး မှန်ကန်မှသာ True အဖြစ် သတ်မှတ်ပေးသော Logical Operator မှာ အဘယ်နည်း?', options: ['not', 'or', 'and', 'xor'], answer: 2 }
      },
      {
        id: 'l3-3',
        title: 'Bitwise Operators (Cyber Encryption Logic)',
        content: `Bitwise Operators တွေဟာ ကိန်းဂဏန်းတွေကို Decimal (ဆယ်လီစိတ်) အနေနဲ့ မတွက်ဘဲ၊ Computer နားလည်တဲ့ Binary (0 နှင့် 1) အဆင့်မှာ တိုက်ရိုက် တွက်ချက်တာ ဖြစ်ပါတယ်။ Cybersecurity မှာ Data တွေကို Encryption/Decryption လုပ်တဲ့အခါ၊ Network Masking တွေ တွက်ချက်တဲ့အခါ အလွန်အရေးကြီးပါတယ်။

- **& (Bitwise AND):** Binary နှစ်ခုကို ယှဉ်ကြည့်ရာတွင် နှစ်ခုလုံး 1 ဖြစ်မှသာ 1 ရပါမည်။
- **| (Bitwise OR):** Binary နှစ်ခုကို ယှဉ်ကြည့်ရာတွင် တစ်ခု 1 ဖြစ်လျှင် 1 ရပါမည်။
- **^ (Bitwise XOR):** Binary နှစ်ခု မတူညီမှသာ 1 ရပါမည်။ (Cryptography တွင် အလွန်အသုံးဝင်သည်)
- **~ (Bitwise NOT):** 1 ကို 0, 0 ကို 1 သို့ ပြောင်းပြန်လှန်ပစ်သည်။
- **<< (Left Shift):** Binary ဂဏန်းများကို ဘယ်ဘက်သို့ ရွှေ့သည်။ (တန်ဖိုးအား 2 ဆ မြှောက်ခြင်းနှင့် ညီသည်)။
- **>> (Right Shift):** Binary ဂဏန်းများကို ညာဘက်သို့ ရွှေ့သည်။ (တန်ဖိုးအား 2 ဖြင့် စားခြင်းနှင့် ညီသည်)။`,
        initialCode: '# 10 ၏ Binary မှာ 1010 ဖြစ်သည်\n# 4 ၏ Binary မှာ  0100 ဖြစ်သည်\na = 10\nb = 4\n\nprint("Bitwise AND (a & b):", a & b) # 0000 -> 0\nprint("Bitwise OR (a | b):", a | b)  # 1110 -> 14\nprint("Bitwise XOR (a ^ b):", a ^ b) # 1110 -> 14\nprint("Left Shift (a << 1):", a << 1) # 10100 -> 20',
        exercise: { task: 'Bitwise Left Shift (<<) ကို အသုံးပြု၍ 5 ကို ဘယ်ဘက်သို့ 2 နေရာ ရွှေ့ပြပါ။ (ရလဒ် 20 ရရပါမည်)', check: (out) => out.includes("20"), hint: 'print(5 << 2)' },
        quiz: { question: 'Binary အဆင့်တွင် တွက်ချက်ရာ၌ Binary တန်ဖိုး နှစ်ခု မတူညီမှသာ 1 ရလဒ်ထွက်သော Operator မှာ အဘယ်နည်း?', options: ['AND (&)', 'OR (|)', 'XOR (^)', 'NOT (~)'], answer: 2 }
      }
    ]
  },
  {
    id: 'p4',
    title: 'Phase 4: Control Flow (စီးဆင်းမှု ထိန်းချုပ်ခြင်း)',
    lessons: [
      {
        id: 'l4-1',
        title: 'Conditional Statements (If, Elif, Else)',
        content: `Program တစ်ခု အလုပ်လုပ်ရာတွင် အမြဲတမ်း အပေါ်မှအောက်သို့ တန်းစီပြီး အလုပ်လုပ်သွားမည် မဟုတ်ပါ။ အခြေအနေ (Condition) တစ်ခုပေါ် မူတည်ပြီး Code တွေကို လမ်းခွဲကာ အလုပ်လုပ်စေချင်ရင် If statement များကို သုံးပါတယ်။

Python ၏ အထင်ရှားဆုံး အချက်မှာ **Indentation (ရှေ့က Space သို့မဟုတ် Tab ခြားခြင်း)** ဖြစ်ပါတယ်။ အခြား Language များတွင် Code Block တစ်ခုကို သတ်မှတ်ရန် {} များကို သုံးသော်လည်း Python တွင် Indentation ကိုသာ သုံးရပါသည်။ Indentation မှားယွင်းပါက IndentationError တက်ပါလိမ့်မည်။

- **if:** အခြေအနေ မှန်ကန်လျှင် လုပ်ဆောင်မည်။
- **elif (Else If):** ပထမ အခြေအနေ မှားယွင်းပြီး၊ ဒုတိယ အခြေအနေတစ်ခု ထပ်မံစစ်ဆေးလိုလျှင် သုံးသည်။
- **else:** အထက်ပါ အခြေအနေများ တစ်ခုမှ မမှန်ကန်တော့လျှင် နောက်ဆုံး လုပ်ဆောင်မည်။`,
        initialCode: 'user_role = "moderator"\n\nif user_role == "admin":\n    print("Full Access Granted. Welcome Admin.")\nelif user_role == "moderator":\n    print("Partial Access. Can Edit Posts.")\nelse:\n    print("Access Denied. Guests are not allowed.")',
        exercise: { task: 'network_status = "Online" ဖြစ်လျှင် "Ping Success" ဟု print ထုတ်သော if statement တစ်ခု ရေးပါ။', check: (out) => out.includes("Ping Success"), hint: 'network_status = "Online"\nif network_status == "Online": print("Ping Success")' },
        quiz: { question: 'Python တွင် Code များကို Block တစ်ခုတည်းဖြစ်ကြောင်း (Group ဖွဲ့ကြောင်း) မည်ကဲ့သို့ သတ်မှတ်သနည်း?', options: ['Curly Braces {} ကို သုံးခြင်း', 'Indentation (Space/Tab) ကို သုံးခြင်း', 'Semicolon ; ကို သုံးခြင်း', 'Parentheses () ကို သုံးခြင်း'], answer: 1 }
      },
      {
        id: 'l4-2',
        title: 'Loops (While Loop & For Loop)',
        content: `အလုပ်တစ်ခုကို တစ်ကြိမ်တည်းမဟုတ်ဘဲ ထပ်ခါတလဲလဲ အကြိမ်များစွာ လုပ်ဆောင်စေချင်လျှင် Loop များကို အသုံးပြုရပါသည်။

**၁။ While Loop:**
သတ်မှတ်ထားသော Condition တစ်ခု မှန်ကန်နေသရွေ့ (True ဖြစ်နေသရွေ့) ဆက်တိုက် အလုပ်လုပ်နေပါမည်။ Condition မှားယွင်းသွားမှသာ ရပ်တန့်ပါမည်။ Condition ဘယ်တော့မှ မမှားလျှင် Infinite Loop (အဆုံးမရှိ ပတ်နေခြင်း) ဖြစ်သွားပါမည်။

**၂။ For Loop:**
List, String, Tuple သို့မဟုတ် Range ကဲ့သို့သော အစီအစဉ် (Sequence) တစ်ခုခုအတွင်းရှိ အရာများကို တစ်ခုချင်းစီ ထုတ်ယူပြီး အလုပ်လုပ်ရန် အသုံးပြုပါသည်။ range() function ကို အကြိမ်ရေ အတိအကျ သတ်မှတ်၍ ပတ်လိုသောအခါ သုံးပါသည်။
range(start, stop, step) ဟု ပါဝင်ပြီး၊ stop တန်ဖိုးကို loop အတွင်း ထည့်သွင်းမည် မဟုတ်ပါ။ (ဥပမာ range(5) သည် 0 မှ 4 အထိသာ ပတ်ပါမည်။)`,
        initialCode: 'print("--- While Loop Simulation ---")\nretry_count = 0\nwhile retry_count < 3:\n    print("Attempting to connect... Try:", retry_count + 1)\n    retry_count += 1\n\nprint("\\n--- For Loop & Range ---")\n# 1 မှ 4 အထိသာ ပတ်မည်\nfor i in range(1, 5):\n    print("Scanning Port:", i)',
        exercise: { task: '1 မှ 5 အထိ ကိန်းဂဏန်းများကို for loop နှင့် range() အသုံးပြု၍ print ထုတ်ပြပါ။ (1 လည်းပါရမည်၊ 5 လည်း ပါရမည်)', check: (out) => out.includes("1") && out.includes("5") && !out.includes("6"), hint: 'for i in range(1, 6): print(i)' },
        quiz: { question: 'range(1, 10) ဟု ရေးသားပါက Loop သည် မည်သည့် ဂဏန်းအထိ အလုပ်လုပ်မည်နည်း?', options: ['1 မှ 10 အထိ', '1 မှ 9 အထိ', '0 မှ 10 အထိ', '0 မှ 9 အထိ'], answer: 1 }
      },
      {
        id: 'l4-3',
        title: 'Loop Control (Break, Continue, Pass)',
        content: `Loop များ ပတ်နေစဉ်အတွင်း အခြေအနေတစ်ခုခုကြောင့် Loop ၏ စီးဆင်းမှုကို ပြောင်းလဲချင်ပါက Control Keywords များကို သုံးရပါသည်။

- **break:** Loop ပတ်နေခြင်းကို ချက်ချင်း ရပ်တန့်ပြီး၊ Loop အပြင်သို့ ထွက်သွားစေပါသည်။ (ဥပမာ - ရှာနေတဲ့ Password ကို တွေ့သွားရင် ဆက်ရှာနေဖို့ မလိုတော့ပါဘူး)
- **continue:** လက်ရှိ အလုပ်လုပ်နေသော အလှည့် (Iteration) ကို ရပ်တန့်ပြီး၊ နောက်တစ်လှည့်သို့ တန်းကျော်သွားစေပါသည်။ အောက်တွင်ရှိသော Code များကို ဆက်မလုပ်တော့ပါ။
- **pass:** မည်သည့်အရာမှ မလုပ်ဆောင်ပါ။ နေရာလွတ် ချန်မထားချင်သောကြောင့် Placeholder အနေဖြင့် ထည့်ထားခြင်း ဖြစ်ပါသည်။ (Syntax Error မတက်စေရန် သုံးသည်)`,
        initialCode: 'print("--- Break Example ---")\nfor i in range(1, 10):\n    if i == 5:\n        print("Target Found! Stopping loop.")\n        break\n    print("Searching...", i)\n\nprint("\\n--- Continue Example ---")\nfor num in range(1, 6):\n    if num == 3:\n        print("Skipping 3")\n        continue\n    print("Number:", num)',
        exercise: { task: 'for i in range(1, 6): ဆိုသော loop အတွင်း i သည် 4 နှင့် ညီပါက loop မှ လုံးဝ ထွက်သွားစေရန် (break) ရေးပြပါ။', check: (out) => out.includes("1") && out.includes("3") && !out.includes("5"), hint: 'if i == 4: break' },
        quiz: { question: 'Loop အတွင်း လက်ရှိအလှည့်ကို ကျော်သွားပြီး နောက်တစ်လှည့်သို့ ဆက်လက် အလုပ်လုပ်စေရန် မည်သည့် Keyword ကို သုံးသနည်း?', options: ['stop', 'break', 'continue', 'pass'], answer: 2 }
      }
    ]
  },
  {
    id: 'p5',
    title: 'Phase 5: Advanced Data Structures',
    lessons: [
      {
        id: 'l5-1',
        title: 'Lists (စာရင်းများ)',
        content: `Data အမြောက်အမြားကို စနစ်တကျ စုစည်းသိမ်းဆည်းရန် Data Structures များကို သုံးရပါသည်။

**List:** Square Brackets [] ဖြင့် ရေးသားရပါသည်။
- List သည် **Ordered** ဖြစ်သည် (ထည့်သွင်းထားသော အစီအစဉ်အတိုင်း တည်ရှိသည်)။ Index သည် 0 မှ စတင်သည်။
- List သည် **Mutable** ဖြစ်သည် (တည်ဆောက်ပြီးနောက်မှ အထဲရှိ data များကို အတိုး၊ အလျှော့၊ အပြောင်းအလဲ လုပ်နိုင်သည်)။
- Data အမျိုးအစား မတူညီသည်များကိုလည်း ရောနှော သိမ်းဆည်းနိုင်သည်။

**List Methods များ:**
- \`.append(item)\`: List ၏ နောက်ဆုံးတွင် item အသစ် ထပ်ထည့်သည်။
- \`.insert(index, item)\`: လိုချင်သော နေရာ (index) တွင် ထည့်သည်။
- \`.remove(item)\`: သတ်မှတ်ထားသော item ကို ဖျက်သည်။
- \`.pop()\`: နောက်ဆုံး item ကို ဆွဲထုတ်ဖျက်ပစ်သည်။
- \`.sort()\`: အစဉ်လိုက် စီစဉ်ပေးသည်။`,
        initialCode: 'ports = [80, 443, 22]\nprint("Original List:", ports)\n\nports.append(8080) # နောက်ဆုံးမှာ ထည့်မယ်\nports.insert(1, 21) # Index 1 နေရာမှာ 21 ကို ဝင်ထည့်မယ်\nprint("Updated List:", ports)\n\npopped_port = ports.pop() # နောက်ဆုံးတစ်ခုကို ထုတ်ယူမယ်\nprint("Popped:", popped_port)\nprint("Final List:", ports)',
        exercise: { task: 'malware_list = ["Trojan", "Worm"] ဆိုသော list အတွင်းသို့ "Ransomware" ကို append() အသုံးပြု၍ ထည့်သွင်းပြပါ။', check: (out, vars) => vars.malware_list && vars.malware_list.includes("Ransomware"), hint: 'malware_list.append("Ransomware")' },
        quiz: { question: 'List တစ်ခုအတွင်းရှိ နောက်ဆုံး item ကို ထုတ်ယူပြီး ဖျက်ပစ်ရန် မည်သည့် method ကို အသုံးပြုသနည်း?', options: ['remove()', 'clear()', 'pop()', 'delete()'], answer: 2 }
      },
      {
        id: 'l5-2',
        title: 'Tuples & Unpacking',
        content: `**Tuple:**
Tuple များသည် List များနှင့် အလွန်ဆင်တူသော်လည်း၊ Parentheses () ဖြင့် ရေးသားရပါသည်။ အဓိက ကွာခြားချက်မှာ Tuple များသည် **Immutable** ဖြစ်ပါသည်။ ဆိုလိုသည်မှာ တစ်ခါ တည်ဆောက်ပြီးပါက အတွင်းရှိ ဒေတာများကို လုံးဝ ပြင်ဆင်၍ မရတော့ပါ။ (App ၏ Configuration settings များ၊ လုံခြုံရေးအရ ပြင်ခွင့်မပေးလိုသော Data များ သိမ်းရာတွင် သုံးသည်)။ ပြင်လို့မရသောကြောင့် List ထက် အလုပ်လုပ်ရာတွင် ပိုမို မြန်ဆန်ပါသည်။

**Unpacking (ဒေတာများ ခွဲထုတ်ခြင်း):**
List သို့မဟုတ် Tuple များအတွင်းရှိ အချက်အလက်များကို Variable များထဲသို့ တစ်ခါတည်း အလွယ်တကူ ခွဲထုတ်ထည့်သွင်းခြင်းကို Unpacking ဟု ခေါ်ပါသည်။ Variables အရေအတွက်နှင့် Collection အတွင်းရှိ items အရေအတွက် ညီမျှရန် လိုအပ်ပါသည်။`,
        initialCode: 'server_info = ("192.168.1.100", 8080, "Active")\nprint("Tuple Data:", server_info)\n\n# Unpacking Tuple into Variables\nip, port, status = server_info\nprint(f"Target IP: {ip}, Port: {port}, Status: {status}")\n\n# server_info[1] = 80 # ဤကဲ့သို့ ပြင်ဆင်ရန် ကြိုးစားပါက Error တက်ပါမည်',
        exercise: { task: 'coords = [10.5, 20.8] ဆိုသော list ကို x, y ဟူသော variable များသို့ Unpacking ပြုလုပ်ပြီး x ကို print ထုတ်ပြပါ။', check: (out, vars) => vars.x === 10.5, hint: 'x, y = coords \n print(x)' },
        quiz: { question: 'တည်ဆောက်ပြီးပါက ဒေတာများကို ထပ်မံပြင်ဆင်ခွင့်မပြုသော (Immutable) Data Structure မှာ အဘယ်နည်း?', options: ['List', 'Tuple', 'Dictionary', 'Set'], answer: 1 }
      },
      {
        id: 'l5-3',
        title: 'Dictionaries & Sets',
        content: `**Dictionary (dict):**
Dictionary သည် Data များကို စဉ်ဆက်မပြတ် သိမ်းဆည်းခြင်းမဟုတ်ဘဲ၊ **Key: Value** (သော့ချက်: တန်ဖိုး) တွဲလုံးများဖြင့် သိမ်းဆည်းပါသည်။ Curly Braces {} ဖြင့် ရေးသားရပါသည်။ Dictionary ထဲတွင် Key များသည် ထပ်နေ၍ မရပါ (Unique ဖြစ်ရပါမည်)။ Data များကို Index နံပါတ်ဖြင့် မရှာဘဲ Key နံမည်ဖြင့် တိုက်ရိုက် ရှာဖွေနိုင်သောကြောင့် အလွန်မြန်ဆန်ပါသည်။
- dict.keys(): Key များကိုသာ ထုတ်ပေးသည်။
- dict.values(): Value များကိုသာ ထုတ်ပေးသည်။
- dict.items(): Key-Value တွဲလုံးများကို ထုတ်ပေးသည်။

**Set:**
Set သည် အစုအဝေးများအတွက် ဖြစ်ပြီး Curly Braces {} ဖြင့်ပင် ရေးပါသည်။ Set ၏ အဓိက ထူးခြားချက်မှာ **Duplicate Data (ထပ်နေသော ဒေတာများ) ကို လုံးဝ လက်မခံပါ**။ ထို့ပြင် Order (အစီအစဉ်) လည်း မရှိပါ။ ဒေတာများ ထပ်မထပ် စစ်ဆေးရာတွင် အလွန်အသုံးဝင်ပါသည်။`,
        initialCode: 'admin_user = {\n    "username": "root_master",\n    "clearance": "level_5",\n    "active": True\n}\nprint("Username is:", admin_user["username"])\n\n# Adding new Key-Value\nadmin_user["last_login"] = "Today"\nprint(admin_user)\n\n# Set Example (Notice the duplicates are removed automatically)\nip_addresses = {"1.1.1.1", "8.8.8.8", "1.1.1.1"}\nprint("Unique IPs Set:", ip_addresses)',
        exercise: { task: 'config = {"timeout": 30} ဆိုသော dictionary အတွင်းသို့ "retries": 5 ကို အသစ်ထပ်ထည့်ပြပါ။', check: (out, vars) => vars.config && vars.config.retries === 5, hint: 'config["retries"] = 5' },
        quiz: { question: 'ဒေတာများကို Key နှင့် Value တွဲလုံးများအဖြစ် သိမ်းဆည်းပေးသော Data Structure မှာ အဘယ်နည်း?', options: ['List', 'Dictionary', 'Set', 'Tuple'], answer: 1 }
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
            <h1 className="text-xl font-black tracking-tighter uppercase leading-tight">Python Ninja<br/><span className="text-[10px] text-[#444] tracking-[0.2em]">Deep Dive v6.0</span></h1>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[8px] uppercase tracking-widest text-[#444] mb-1 font-bold">
              <span>Security Clearance</span>
              <span>{perc}%</span>
            </div>
            <div className="w-full bg-[#111] h-1.5 rounded-full overflow-hidden border border-[#222]">
              <div className="bg-[#00FF41] h-full shadow-[0_0_15px_#00FF41] transition-all duration-1000" style={{width: `${perc}%`}}></div>
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
                      <button key={les.id} onClick={() => { setMIdx(originalMIdx); setLIdx(originalLIdx); if(window.innerWidth < 768) setSidebar(false); }} className={`w-full text-left p-3 rounded-lg text-[10px] transition-all flex items-center justify-between border ${active ? 'bg-[#00FF41] text-black font-bold border-[#00FF41] shadow-[0_0_10px_rgba(0,255,65,0.2)]' : 'border-transparent hover:bg-[#111] text-[#666]'}`}>
                        <span className="truncate pr-2">{originalLIdx+1}. {les.title}</span>
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
                  {lesson.content}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-black p-8 rounded-2xl border border-[#111] shadow-xl relative"><div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/5 to-transparent pointer-events-none"></div><div className="flex items-center gap-3 text-[#00FF41] font-black text-[9px] uppercase tracking-widest mb-4"><Info size={14} /> Data Archive Source</div><p className="text-[#555] text-sm leading-relaxed italic font-bold">ဤအချက်အလက်များသည် Win Htut ၏ "Deep Dive Into Python" စာအုပ်ပါ မူရင်းရှင်းလင်းချက်များ (Verbatim) အတိုင်း ဖြစ်ပါသည်။</p></div>
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
             <button onClick={() => { if(lIdx > 0) setLIdx(lIdx-1); else if(mIdx > 0) { setMIdx(mIdx-1); setLIdx(CYBER_BOOK[mIdx-1].lessons.length-1); } }} className="p-4 rounded-xl bg-[#0a0a0a] text-[#333] hover:text-[#00FF41] border border-[#111] active:scale-90 shadow-sm transition-all"><ChevronRight size={24} className="rotate-180" /></button>
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