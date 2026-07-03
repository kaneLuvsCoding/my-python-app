export const CYBER_BOOK = [
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
        content: "Accessing Data from Multidimensional list\n\n<IMG_BLOCK>/ACDfML.png</IMG_BLOCK>\n\nArray မှာကဲ့သို့ List ကို multi-dimensional array ပုံစံဖြင့်လည်း အသုံးပြုလို့ ရပါသေးသည်။ multi-dimensional ကို နားလည်ဖို့ ဆိုလျှင် ပထမဦးစွာ row (အတန်း) နှင့် column (တိုင်) ကို နားလည်ရန် လိုအပ်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (70)\n\nList = [['green', 'hackers'], ['winhtut', 'gh']]\n\nprint(List[0][1])\nprint(List[1][1])\n\n#output\n#hackers\n#gh\n</CODE_BLOCK>\n\nအထက်ပါ Program ကို run ကြည့်လျှင် output အနေဖြင့် `hackers` နှင့် `gh` ဆိုတာကို ရပါမည်။ multi-dimensional list ကို ကြေညာသောအခါတွင် `[]` square bracket များခွဲပြီး ကြေညာပေးရပါမည်။\n\n* ပထမ square bracket သည် **row 0** ဖြစ်ပြီး ဒုတိယ bracket သည် **row 1** ဖြစ်သည်။\n* ထို row များ အထဲ၌ ထည့်ထားသော ပထမဆုံး element သည် **column 0** ဖြစ်ပြီး ဒုတိယ element သည် **column 1** ဖြစ်သည်။\n\nဥပမာ - `['green', 'hackers']` တွင် `green` သည် row 0, column 0 ဖြစ်ပြီး `hackers` သည် row 0, column 1 ဖြစ်သည်။ ထို့ကြောင့် `print(List[0][1])` ဟု print ထုတ်လိုက်သောအချိန်တွင် `hackers` ဟု output ထွက်လာခြင်းဖြစ်သည်။ အကယ်၍ row 0, column 0 ကိုသာ print ထုတ်မည်ဆိုလျှင် `green` ဟုသာ ထွက်လာမည်ဖြစ်သည်။\n\nထိုနည်းတူပင် `print(List[1][1])` (row 1, column 1) ကို print ထုတ်သောအခါတွင်လည်း `gh` ဟု output ထွက်လာခြင်းဖြစ်သည်။ အကယ်၍ `print(List[1][0])` (row 1, column 0) ဟု ပြောင်းပြီး print ထုတ်မည်ဆိုလျှင် output အနေဖြင့် `winhtut` ဆိုသည့် စာသားကို မြင်ရမည်ဖြစ်သည်။",
        initialCode: "List = [['green', 'hackers'], ['winhtut', 'gh']]\nprint(List[0][1])\nprint(List[1][1])",
        exercise: { task: "Try writing code for Accessing Data from Multidimensional list. Create a 2D list and access element at row 1, column 0.", check: (out) => out.includes("winhtut") },
        quiz: { question: "What does List[0][1] access in a 2D list?", options: ["Row 1, Column 0", "Row 0, Column 1", "Row 1, Column 1", "Row 0, Column 0"], answer: 1 }
      },
      {
        id: 'l4-7',
        title: "Remove Method - Removing element from list",
        content: "Remove Method - Removing element from list\n\nList ထဲမှ element များကို မိမိစိတ်ကြိုက်ဖယ်ထုတ်နိုင်ရန် Python တွင် `remove()` ဆိုသည့် Method တစ်ခုပါဝင်ပါသည်။ `remove()` method ကိုသုံးရာတွင် parameter အဖြစ် မည်သည့် element ကို ဖယ်ထုတ်မည်ဖြစ်ကြောင်း ထည့်ပေးရပါမည်။ မိမိဖယ်ထုတ်လိုသော တန်ဖိုး သို့မဟုတ် အမည်ကို အတိအကျ ရေးပေးရမည်ဖြစ်သည်။\n\nဥပမာ - list တစ်ခုထဲတွင် `[1, 2, 3]` ဟု ရှိခဲ့လျှင် ပထမဆုံး `1` ကို ဖယ်ထုတ်လိုပါက `my_list.remove(1)` ဟု ရေးရပါမည်။ အကယ်၍ list ထဲတွင် `['win', 'htut', 'gh']` ဟု ရှိနေပြီး `gh` ကို ဖယ်ထုတ်လိုလျှင် `my_list.remove('gh')` ဟု ရေးပေးရမည်ဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (71)\n\nmy_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\n\n# printing all elements from list\nprint(\"Original list:\")\nprint(my_list)\n\n# removing element from list\nmy_list.remove(3)\nprint(\"\\nAfter removing first time from list 3\")\nprint(my_list)\n\nmy_list.remove(5)\nprint(\"\\nAfter removing second time from list 5\")\nprint(my_list)\n\nmy_list.remove('win')\nprint(\"\\nAfter removing third time from list 'win'\")\nprint(my_list)\n</CODE_BLOCK>\n\n**Output:**\n```\nOriginal list:\n[1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\n\nAfter removing first time from list 3\n[1, 2, 4, 5, 6, 'win', 'htut', 9, 10]\n\nAfter removing second time from list 5\n[1, 2, 4, 6, 'win', 'htut', 9, 10]\n\nAfter removing third time from list 'win'\n[1, 2, 4, 6, 'htut', 9, 10]\n```\n\n`remove()` method သည် index number နှင့် အလုပ်လုပ်ခြင်း မဟုတ်ဘဲ parameter အဖြစ် ထည့်ပေးလိုက်သည့် တန်ဖိုးအတိုင်း အတိအကျ ဖယ်ထုတ်ပေးခြင်း ဖြစ်သည်။ အထက်ပါ program တွင် `3`, `5` နှင့် `win` တို့ကို အဆင့်ဆင့် ဖယ်ထုတ်သွားသည့်အတွက် နောက်ဆုံး output တွင် ၎င်းတို့ ပါဝင်မလာတော့ခြင်း ဖြစ်သည်။",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\nprint('Original list:')\nprint(my_list)\nmy_list.remove(3)\nprint('After removing 3:', my_list)\nmy_list.remove(5)\nprint('After removing 5:', my_list)\nmy_list.remove('win')\nprint(\"After removing 'win':\", my_list)",
        exercise: { task: "Create a list with [10, 20, 30, 40, 50] and use remove() to delete the value 30. Print the list after removal.", check: (out) => out.includes("[10, 20, 40, 50]") },
        quiz: { question: "What does the remove() method use to find and delete an element?", options: ["Index number", "The actual value", "Memory address", "Element type"], answer: 1 }
      },
      {
        id: 'l4-8',
        title: "pop() Method - Popping elements from list",
        content: "pop() Method - Popping elements from list\n\n`pop()` method ကိုသုံးရာတွင် parameter အနေဖြင့် index number ထည့်ပေးရမည် ဖြစ်ပြီး ထို parameter အတိုင်း list ထဲမှ ဖယ်ထုတ်ပါသည်။ `remove()` method နှင့် မတူသည်မှာ `pop()` method သည် index number ဖြင့် အလုပ်လုပ်ခြင်းဖြစ်သည်။ ထို့ပြင် `pop()` method ထဲတွင် မည်သည့် parameter မှ မထည့်ပေးလိုက်သည့် အချိန်တွင်မူ List ရဲ့ နောက်ဆုံး element ကို ဖယ်ထုတ်ပေးပါသည်။\n\n**Syntax:**\n`list.pop(index_number)`\n\n<CODE_BLOCK>\nSample Program (72)\n\nmy_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\n\n# printing all elements from list\nprint(\"Original list:\")\nprint(my_list)\n\n# popping elements from list\nmy_list.pop(3)\nprint(\"\\nAfter popping first time from list index 3\")\nprint(my_list)\n\nmy_list.pop(5)\nprint(\"\\nAfter popping second time from list index 5\")\nprint(my_list)\n\nmy_list.pop()\nprint(\"\\nAfter popping third time from list index -1\")\nprint(my_list)\n</CODE_BLOCK>\n\n**Output:**\n```\nOriginal list:\n[1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\n\nAfter popping first time from list index 3\n[1, 2, 3, 5, 6, 'win', 'htut', 9, 10]\n\nAfter popping second time from list index 5\n[1, 2, 3, 5, 6, 'htut', 9, 10]\n\nAfter popping third time from list index -1\n[1, 2, 3, 5, 6, 'htut', 9]\n```\n\n**အထူးသတိပြုရန်:** `pop` သည် index number ဖြင့် အလုပ်လုပ်သောကြောင့် pop တစ်ခါ လုပ်ပြီးတိုင်း ကျန်ရှိသော element များ၏ index number များသည် ရှေ့သို့ တိုးသွားပြီး ပြောင်းလဲသွားမည် ဖြစ်သည်။",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\nprint('Original list:', my_list)\nmy_list.pop(3)\nprint('After pop(3):', my_list)\nmy_list.pop(5)\nprint('After pop(5):', my_list)\nmy_list.pop()\nprint('After pop():', my_list)",
        exercise: { task: "Create a list [10, 20, 30, 40, 50] and use pop() to remove the element at index 2. Print the list after removal.", check: (out) => out.includes("[10, 20, 40, 50]") },
        quiz: { question: "What is the key difference between remove() and pop()?", options: ["They are identical", "remove() uses index, pop() uses value", "pop() uses index number, remove() uses the actual value", "pop() only removes the last element always"], answer: 2 }
      },
      {
        id: 'l4-9',
        title: "index()",
        content: "index()\n\n`index()` method ကို list ထဲမှာ ရှိသော elements များအား ရှာဖွေရာတွင် အသုံးပြုပါသည်။\n\n**Syntax:**\n`list.index(element)`\n\n**Parameters:**\n`index()` method ကိုသုံးရာတွင် မိမိရှာလိုသော တန်ဖိုး (single argument) တစ်ခုကို ထည့်ပေးရပါသည်။\n\n**Return value:**\nမိမိထည့်ပေးလိုက်သော argument ၏ index number (တည်နေရာ) ကို return ပြန်ပေးပါသည်။\n\n<CODE_BLOCK>\nSample Program (73)\n\nmy_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\n\n# searching element 'win'\nindex = my_list.index('win')\n\n# printing the index number\nprint(index)\n\n# output\n# 6\n</CODE_BLOCK>\n\n#### Error\nList ထဲတွင် မပါဝင်သော elements များအား `index()` method ထဲတွင် ရှာခိုင်းပါက `ValueError` တက်မည် ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (74)\n\nmy_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\n\nprint(my_list.index('gh'))\n\n# Output:\n# ValueError: 'gh' is not in list\n</CODE_BLOCK>",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\nindex = my_list.index('win')\nprint(index)",
        exercise: { task: "Create a list ['apple', 'banana', 'cherry', 'date'] and find the index of 'cherry' using index(). Print the result.", check: (out) => out.includes("2") },
        quiz: { question: "What does the index() method return?", options: ["The value at a given position", "The index position of the given element", "True or False", "The total count of elements"], answer: 1 }
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
        content: "append() method\n\n`append()` method ကို list တစ်ခုထဲသို့ elements များ ထပ်ထည့်ရန် အသုံးပြုပါတယ်။ `append()` တွင် ထည့်ပေးလိုက်သော element ကို list ၏ နောက်ဆုံးနေရာ (end of the list) တွင် သွားရောက် ထည့်ပေးပါတယ်။ list ထဲသို့ elements များသာမက အခြား list များကိုပါ ထပ်ထည့်နိုင်ပါသေးတယ်။ `append()` method သည် original list ကိုသာ တိုက်ရိုက်ပြင်ဆင် (modify) လုပ်ပေးပြီး မည်သည့် return value မှ ပြန်ပေးမည် မဟုတ်ပါ။\n\n<CODE_BLOCK>\nSample Program (75)\n\nmy_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\nprint('Before update elements list\\n', my_list)\n\nmy_list.append('greenhackers')\nprint('Updated elements list\\n', my_list)\n\n# Output:\n# Before update elements list\n# [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\n# Updated elements list\n# [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10, 'greenhackers']\n</CODE_BLOCK>\n\n#### List ထဲသို့ အခြား list တစ်ခု ထပ်ထည့်ခြင်း\n\n<CODE_BLOCK>\nSample Program (76)\n\nmy_list = [1, 2, 3, 4, 5, 6]\nnew_list = ['win', 'htut', 'greenhackers']\n\nmy_list.append(new_list)\nprint('After modifies my_list:', my_list)\n\n# Output:\n# After modifies my_list: [1, 2, 3, 4, 5, 6, ['win', 'htut', 'greenhackers']]\n</CODE_BLOCK>",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6, 'win', 'htut', 9, 10]\nprint('Before:', my_list)\nmy_list.append('greenhackers')\nprint('After append:', my_list)",
        exercise: { task: "Create a list [1, 2, 3] and use append() to add the value 99 to it. Print the updated list.", check: (out) => out.includes("[1, 2, 3, 99]") },
        quiz: { question: "Where does append() add a new element in a list?", options: ["At the beginning", "At index 1", "At the end", "At a specified index"], answer: 2 }
      },
      {
        id: 'l4-12',
        title: "extend() method",
        content: "extend() method\n\n`append()` သည် list တစ်ခုလုံးကို နောက်ဆုံးတွင် အစုလိုက် ထည့်ပေးခြင်း ဖြစ်သော်လည်း `extend()` method သည် အခြား list ထဲမှ element များကို တစ်ခုချင်းစီ ထုတ်ယူပြီး မူရင်း list ထဲသို့ ပေါင်းထည့်ကာ ချဲ့ထွင်ပေးခြင်း ဖြစ်သည်။ `extend()` method သည်လည်း မူရင်း list ကိုသာ modify လုပ်ခြင်းဖြစ်ပြီး return value ပြန်မည် မဟုတ်ပါ။ list များကို extend လုပ်ရာတွင် `+` သို့မဟုတ် `+=` operator များကိုလည်း အသုံးပြုနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (77)\n\nmy_list = [1, 2, 3, 4, 5, 6]\nnew_list = ['win', 'htut', 'greenhackers']\n\nmy_list.extend(new_list)\nprint('After modifies my_list:', my_list)\n\n# Output:\n# After modifies my_list: [1, 2, 3, 4, 5, 6, 'win', 'htut', 'greenhackers']\n</CODE_BLOCK>\n\n**မှတ်ချက်:** `append()` သည် list တစ်ခုထဲသို့ အခြား list တစ်ခုကို object တစ်ခုအနေနှင့်သာ ထပ်ပေါင်းထည့်ခြင်းဖြစ်ပြီး `extend()` သည် list တစ်ခုထဲသို့ အခြား list ထဲမှ element တစ်ခုချင်းစီကို ဖြန့်ပြီး ပေါင်းထည့် (extending) ပေးခြင်း ဖြစ်သည်။",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6]\nnew_list = ['win', 'htut', 'greenhackers']\nmy_list.extend(new_list)\nprint('After extend:', my_list)",
        exercise: { task: "Create list_a = [1, 2, 3] and list_b = [4, 5, 6]. Use extend() to merge list_b into list_a and print the result.", check: (out) => out.includes("[1, 2, 3, 4, 5, 6]") },
        quiz: { question: "What is the difference between append() and extend()?", options: ["No difference", "append() adds each element individually; extend() adds the whole list as one item", "extend() adds each element individually; append() adds the whole list as one item", "extend() only works with numbers"], answer: 2 }
      },
      {
        id: 'l4-13',
        title: "Using operator for extending list",
        content: "Using operator for extending list\n\n`append()` \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a `extend()` method \u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1019\u101e\u102f\u1036\u1038\u1018\u1032 operator \u1000\u102d\u102f\u101e\u102c \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u103c\u102e\u1038 \u1021\u1031\u102c\u1000\u103a\u1015\u102b\u1021\u1010\u102d\u102f\u1004\u103a\u1038 list \u1019\u103b\u102c\u1038\u1000\u102d\u102f extending \u1015\u103c\u102f\u101c\u102f\u1015\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u101e\u1031\u1038\u101e\u100a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (78)\n\n#declaring and initializing a list\nmy_list = [1, 2, 3, 4, 5, 6]\n\n#declaring and initializing a new list\nnew_list = ['win', 'htut', 'greenhackers']\n\n#extending list using += operator\nmy_list += new_list\n\n#after modifies my_list\nprint('After modifies my_list ', my_list)\n</CODE_BLOCK>\n\nSample Program (78) \u1000\u102d\u102f run \u1000\u103c\u100a\u1037\u103a\u101c\u103b\u103e\u1004\u103a\u101c\u100a\u103a \u101c\u100a\u103a `extend()` method \u1019\u103e\u102c\u1000\u1032\u1037\u101e\u102d\u102f\u1037 output \u1010\u1030\u100a\u100a\u102d\u1019\u100a\u103a \u1016\u103c\u1005\u103a\u1015\u102b\u101e\u100a်\u104b",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6]\nnew_list = ['win', 'htut', 'greenhackers']\nmy_list += new_list\nprint('After modifies my_list:', my_list)",
        exercise: { task: "Create list_a = [1, 2, 3] and list_b = [4, 5, 6]. Use the += operator to extend list_a with list_b and print the result.", check: (out) => out.includes("[1, 2, 3, 4, 5, 6]") },
        quiz: { question: "Which operator can be used as a shortcut for extend()?", options: ["+", "-=", "+=", "*="], answer: 2 }
      },
      {
        id: 'l4-14',
        title: "insert() method",
        content: "insert() method\n\nList \u1010\u1005\u103a\u1001\u102f\u1011\u1032\u1010\u103d\u1004\u103a \u101b\u103e\u102d\u101e\u1031\u102c elements \u1019\u103b\u102c\u1038\u1000\u103c\u102c\u1038\u1011\u1032\u101e\u102d\u102f\u1037 \u1021\u1001\u103c\u102c\u1038\u101e\u1031\u102c elements \u1019\u103b\u102c\u1038 \u1011\u1015\u103a\u1015\u1031\u102b\u1004\u103a\u1038 \u1011\u100a\u1037\u103a\u101c\u102d\u102f\u101e\u1031ာ `insert()` method \u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015ါ\u1010ယ\u103a\u104b `insert()` method \u1010\u103d\u1004\u103a parameter \u1014\u103e\u1005\u103a\u1001\u102f \u1015\u102b\u101d\u1004\u103a\u1015\u103cီ\u1038 \u1015\u1011\u1019 argument \u101e\u100a\u103a **index number** \u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 \u1012\u102f\u1010\u102d\u101a argument \u101e\u100a\u103a \u1019\u102d\u1019\u102d \u1011\u100a\u1037\u103a\u101c\u102d\u102f\u101e\u1031ာ **element** \u1016\u103c\u1005\u103a\u101e\u100a\u103a\u104b\n\n`insert()` method \u101e\u100a\u103a list \u1011\u1032\u101e\u102d\u102f\u1037 element \u1000\u102d\u102f\u101e\u102c insert \u101c\u102f\u1015\u103a\u1001\u103c\u1004\u103a\u1038 \u1016\u103c\u1005\u103a\u1015\u103c\u102e\u1038 \u1019\u100a\u103a\u101e\u100a\u1037် return value \u1019\u103e \u1015\u103c\u1014\u103a\u1015\u1031\u1038\u1019\u100a\u103a \u1019\u101f\u102f\u1010\u103a\u1015\u102b\u104b `insert` \u101e\u100a\u103a index number \u1016\u103c\u1004\u1037\u103a \u1021\u101c\u102f\u1015\u103a\u101c\u102f\u1015\u103a\u101e\u1031\u102c\u1000\u103c\u1031\u102c\u1004့\u103a \u1021\u1014\u1031\u1006ိ\u102f argument \u1021\u1014ေ\u1016\u103cင\u1037\u103a `4` \u1000\u102d\u102f \u1011\u100a\u1037\u103a\u1015\u1031း\u101b\u1015ါ\u1019\u100a\u103a (\u1021\u1018\u101a\u103a\u1000\u103c\u1031\u102c\u1004့\u103a index number \u101eည\u103a zero \u1000\u1014\u1031\u1015\u103c\u102e\u1038 \u101e\u1010\u103a\u1019\u103e\u1010\u103a\u101e\u1031\u102c\u1000ြေ\u102c\u1004့\u103a \u1016\u103c\u1005\u103a\u101e\u100a်)\u104b\n\n<CODE_BLOCK>\nSample Program (79)\n\n#declaring and initializing a list\nmy_list = [1, 2, 3, 4, 5, 6]\nprint('original list', my_list)\n\n#inserting an element to list at index 4\nmy_list.insert(4, 'win')\n\nprint('\\nAfter modifies', my_list)\n\n#output\n#original list [1, 2, 3, 4, 5, 6]\n#After modifies [1, 2, 3, 4, 'win', 5, 6]\n</CODE_BLOCK>\n\n<CODE_BLOCK>\nSample Program (80) - Inserting a list into a list\n\nmy_list = [1, 2, 3, 4, 5, 6]\nnew_list = ['win', 'htut', 'greenhackers']\n\n#inserting a list to a list at index 2\nmy_list.insert(2, new_list)\n\nprint('After modifies my_list ', my_list)\n\n#output\n#After modifies my_list [1, 2, ['win', 'htut', 'greenhackers'], 3, 4, 5, 6]\n</CODE_BLOCK>",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6]\nprint('original list:', my_list)\nmy_list.insert(4, 'win')\nprint('After insert at index 4:', my_list)",
        exercise: { task: "Create a list [10, 20, 40, 50] and use insert() to add 30 at index 2. Print the result.", check: (out) => out.includes("[10, 20, 30, 40, 50]") },
        quiz: { question: "What are the two parameters of insert()?", options: ["value and count", "index number and element", "element and size", "start and end"], answer: 1 }
      },
      {
        id: 'l4-15',
        title: "count() method",
        content: "count() method\n\n`count()` method \u101e\u100a\u103a list \u1010\u1005\u103a\u1001\u102f\u1011\u1032\u1010\u103d\u1004\u103a element \u1010\u1005\u103a\u1001\u102f\u101e\u100a\u103a \u1021\u1000\u103c\u102d\u1019\u103a\u1021\u101b\u1031\u1021\u1010\u103d\u1000\u103a \u1019\u100a\u103a\u1019\u1002\u1019\u100a\u103a\u103a \u1015\u102b\u101d\u1004\u103a\u101e\u100a\u103a\u1000\u102d\u102f \u101b\u1031\u1010\u103d\u1000\u103a\u101b\u102c\u1010\u103d\u1004\u103a \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b\u101e\u100a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (81)\n\nmy_list = [1, 2, 3, 4, 5, 6, 1]\ntimes = my_list.count(1)\nprint(times)\n\n#output\n#2\n</CODE_BLOCK>\n\n\u1021\u1011\u1000\u103a\u1015\u102b program \u1010\u103d\u1004\u103a `my_list.count(1)` \u101e\u100a\u103a list \u1011\u1032\u1014\u1032\u1037 `1` \u1018\u101a\u103a\u1014\u103e\u1005\u103a\u1000\u103c\u102d\u1019\u103a \u1015\u102b\u101e\u100a\u103a\u1000\u102d\u102f \u101e\u101e\u100a\u1037\u103a\u1019\u103e\u101e\u1031\u102c\u1021\u102c\u1038 \u1016\u103c\u1005\u103a\u101e\u100a\u103a\u104b `1` \u1014\u103e\u1005\u103a\u1001\u102f \u1015\u102b\u101d\u1004\u103a\u101e\u100a\u103a\u101e\u1031\u102c\u1000ြေ\u102c\u1004\u1037\u103a output \u101e\u100a\u103a `2` \u1011\u103d\u1000\u103a\u101c\u102c\u1001\u103c\u1004\u103a\u1038 \u1016\u103c\u1005\u103a\u101e\u100a\u103a\u104b",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6, 1]\ntimes = my_list.count(1)\nprint(times)",
        exercise: { task: "Create a list [3, 1, 4, 1, 5, 9, 2, 6, 1] and count how many times 1 appears. Print the result.", check: (out) => out.includes("3") },
        quiz: { question: "What does the count() method return?", options: ["The index of the element", "True or False", "How many times the element appears in the list", "The total number of elements"], answer: 2 }
      },
      {
        id: 'l4-16',
        title: "reverse() method",
        content: "reverse() method\n\n`reverse()` method \u101e\u100a\u103a list \u1011\u1032\u1019\u103e element \u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1021\u101b\u103e\u1031\u1037\u1021\u1014\u1031\u102c\u1000\u103a \u1015\u103c\u1031\u102c\u1004\u103a\u1038\u101c\u103e\u1014\u103a\u101b\u1014\u103a \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b\u101e\u100a\u103a\u104b \u1019\u100a\u103a\u101e\u100a\u1037\u103a argument \u1019\u103e \u1015ေ\u1038\u101b\u1015\u103a \u1019\u101c\u102d\u102f\u101e\u101c\u102d\u102f \u1019\u1030\u101b\u1004\u103a\u1038 list (original list) \u1000\u102d\u102f\u101e\u102c update \u101c\u102f\u1015\u103a\u1015\u1031\u1038\u1015\u102b\u101e\u100a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (82)\n\nmy_list = [1, 2, 3, 4, 5, 6, 1]\nmy_list.reverse()\nprint(my_list)\n\n#output\n#[1, 6, 5, 4, 3, 2, 1]\n</CODE_BLOCK>",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6, 1]\nmy_list.reverse()\nprint(my_list)",
        exercise: { task: "Create a list [10, 20, 30, 40, 50] and use reverse() to reverse it in-place. Print the result.", check: (out) => out.includes("[50, 40, 30, 20, 10]") },
        quiz: { question: "What does reverse() return?", options: ["A new reversed list", "The middle element", "None — it modifies the original list in-place", "The last element"], answer: 2 }
      },
      {
        id: 'l4-17',
        title: "sort() method",
        content: "sort() method\n\n`sort()` method သည် list ထဲတွင် ရှိသော elements များကို ငယ်စေင့်ကြီးလိုက် (သို့မဟုတ် အက္ခရာစေင့်အတိုင်း) ပြန်လည်းသိေး (sorting) ရာတွင် အသုံးပြုပါသည်။\n\n<CODE_BLOCK>\nSample Program (83)\n\nmy_list = [1, 2, 3, 4, 5, 6, 1, 0]\nmy_list.sort()\nprint(my_list)\n\n#output\n#[0, 1, 1, 2, 3, 4, 5, 6]\n</CODE_BLOCK>\n\n<CODE_BLOCK>\nSample Program (84) - Sorting characters\n\nmy_list = ['u', 'i', 'e', 'a', 'o']\nmy_list.sort()\nprint(my_list)\n\n#output\n#['a', 'e', 'i', 'o', 'u']\n</CODE_BLOCK>",
        initialCode: "my_list = [1, 2, 3, 4, 5, 6, 1, 0]\nmy_list.sort()\nprint(my_list)",
        exercise: { task: "Create a list [5, 3, 8, 1, 9, 2] and use sort() to sort it in ascending order. Print the result.", check: (out) => out.includes("[1, 2, 3, 5, 8, 9]") },
        quiz: { question: "What order does sort() arrange elements by default?", options: ["Descending", "Random", "Ascending (smallest first)", "Insertion order"], answer: 2 }
      },
      {
        id: 'l4-18',
        title: "copy() method",
        content: "copy() method\n\n`copy()` method ကို list တစ်ခုမှ အခြားတစ်ခုသို့ copy ကူးယူရာတွင် အသုံးပြုပါသည်။ assignment operator (`=`) ကို အသုံးပြုပြီးတည်းတင်လည်း copy လုပ်နိုင်ပါသည်။ `copy()` method သည် original list ကို ပြောင်းလဲခြင်း မရှိပါ။\n\n<CODE_BLOCK>\nSample Program (85)\n\nmy_list = ['u', 'i', 'e', 'a', 'o']\nnew_list = my_list.copy()\n\nprint(new_list)\nnew_list.append('vowels')\nprint(new_list)\n\n#output\n#['u', 'i', 'e', 'a', 'o']\n#['u', 'i', 'e', 'a', 'o', 'vowels']\n</CODE_BLOCK>",
        initialCode: "my_list = ['u', 'i', 'e', 'a', 'o']\nnew_list = my_list.copy()\nprint(new_list)\nnew_list.append('vowels')\nprint(new_list)",
        exercise: { task: "Create a list [1, 2, 3]. Use copy() to create a duplicate, then append 99 to the copy. Print both lists to show the original is unchanged.", check: (out) => out.includes("[1, 2, 3]") && out.includes("[1, 2, 3, 99]") },
        quiz: { question: "What happens to the original list after copy() is called and the copy is modified?", options: ["It also changes", "It is deleted", "It remains unchanged", "It becomes empty"], answer: 2 }
      },
      {
        id: 'l4-19',
        title: "clear() method",
        content: "clear() method\n\n`clear()` method သည် list ထဲတွင် ရှိသော elements များအားလုံးကို ဖယ်ပစ်ရန်အတွက် အသုံးပြုပါသည်။\n\n<CODE_BLOCK>\nSample Program (86)\n\nmy_list = ['u', 'i', 'e', 'a', 'o']\nmy_list.clear()\nprint(my_list)\n\n#output\n#[]\n</CODE_BLOCK>",
        initialCode: "my_list = ['u', 'i', 'e', 'a', 'o']\nmy_list.clear()\nprint(my_list)",
        exercise: { task: "Create a list [10, 20, 30] and use clear() to empty it. Print the list to confirm it is empty.", check: (out) => out.includes("[]") },
        quiz: { question: "What does clear() do to a list?", options: ["Deletes the list variable", "Removes the last element", "Removes all elements, leaving an empty list", "Reverses the list"], answer: 2 }
      },
      {
        id: 'l4-20',
        title: "Dive To List",
        content: "Dive To List\n\nList များသည် string များ နှင့် လုံးလုံး မတူပါ။ string များသည် value တူလျှင် memory address (ID) များ တူညညိတတ်သော်လည်းလည်း List များသည် value တူညညိပါသော်လည်းလည် memory address မတူသော နေရာတွင် သိုးခြားသို့ သိမ်ဆည့်ပါသည်။ ထို့ကြောင့် value တူသော list နှစ်ခုကို `is` (identity operator) ဖြင့် သသည့်မှ\u101e\u1031\u102c\u1000\u103c\u1031\u102c\u103a\u101c\u103b\u103e\u1004\u103a `False` \u1000\u102d\u102f\u101e\u102c\u101e\u102c \u101b\u101b\u103e\u102d\u1019\u100a\u103a \u1016\u103c\u1005\u103a\u101e\u100a\u103a\u104b\n\n<CODE_BLOCK>\nSample Program (87)\n\nlist1 = [1, 2, 3, 4, 5]\nlist2 = [1, 2, 3, 4, 5]\n\nprint(id(list1), id(list2))\n\n# Identity check\nprint(list1 is list2)\n\n# Value check\nif list1 == list2:\n    print('They are same in value')\n\n#output\n#26691064 26692224 (ID \u1019\u103b\u102c\u1038 \u1019\u1010\u1030\u100a\u100aိ\u1015ါ)\n#False\n#They are same in value\n</CODE_BLOCK>",
        initialCode: "list1 = [1, 2, 3, 4, 5]\nlist2 = [1, 2, 3, 4, 5]\nprint(list1 is list2)\nif list1 == list2:\n    print('They are same in value')",
        exercise: { task: "Create two lists with identical values [1,2,3]. Check with 'is' and '==' and print both results.", check: (out) => out.includes("False") && out.includes("True") },
        quiz: { question: "Two lists with identical values are compared with 'is'. What is the result?", options: ["True", "False", "Error", "None"], answer: 1 }
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
        content: "Namespace ကို သိဖို့ ပထမဦးစွာ name ကို အရင်သိရပါတယ်။ a = 20 တွင် a သည် name or identifier ဖြစ်ပြီး 20 သည် memory ထဲမှာ stored လုပ်ထားသည့် object ဖြစ်သည်။ a ဆိုသည့် name နှင့် 20 ဆိုသည့် object တို့အား id() function ကိုသုံးပြီး Print ထုတ်ကြည့်လျှင် same address ဖြစ်နေသည်ကို မြင်နိုင်ပါသည်။ Python programming မှာ အရာအားလုံးနီးပါးဟာ object တွေပါပဲ။ object အကြောင်းကို နောက်ပိုင်းသင်ခန်းစာတွေမှာ အသေးစိတ် ဆွေးနွေးသွားပါမယ်။ strings , lists , functions and etc အားလုံးဟာ object တွေပါ။\n\n<CODE_BLOCK>\nSample Program (88)\n\na = 20\nprint('a address is', id(a))\nprint('20 address is', id(20))\n\n#output\n#a address is 140711874009344\n#20 address is 140711874009344\n</CODE_BLOCK>\n\nNamespaces ဆိုတာ name တွေ အများကြီးပေါင်းထားခြင်းကို ဆိုလိုပါတယ်။ program တစ်ပုဒ်မှာ name တွေကို unique ဖြစ်စေရန်နှင့် name တွေကို အသုံးပြုရာမှာ မမှားစေဖို့ (conflict) အတွက် အသုံးပြုသော system တစ်ခုဖြစ်ပါတယ်။ အခြေခံအားဖြင့် namespace သုံးမျိုးရှိပါတယ်။\n\n1. Local Namespace :\nLocal namespace ဆိုတာ function တစ်ခုအတွင်းမှာရှိတဲ့ name တွေကို ဆိုလိုတာပါ။ သူတို့ ရှိနေတဲ့ function ကို အလုပ်လုပ်ခေါ်လိုက်ရတဲ့အချိန်မှာ namespace တွေကို create လုပ်ပါတယ်။ function ကို နောက်ပိုင်းသင်ခန်းစာများတွင် အသေးစိတ် ဆွေးနွေးသွားပါမည်။\n\n<CODE_BLOCK>\nname1 = 5 #name1 is global namespace\n\ndef outer_fun():\n    name2 = 6 #name2 is local namespace\n    def inner_fun():\n        name3 = 7 #name3 is inner local namespace\n</CODE_BLOCK>\n\n2. Global Namespace :\nModule or library တွေကို program ထဲမှာ ခေါ်သုံးခြင်းဖြင့် ပါလာတဲ့ names တွေကို Global Namespace လို့ ခေါ်ပါတယ်။ ဥပမာ စာရေးသူက winhtut ဆိုတဲ့ module or library ကို တည်ဆောက်ထားပြီး ထို library ထဲတွင် ပါရှိလာသော name ကို ဆိုလိုသည်။\n\nfrom math import log2, log10\n\nmath ဆိုသည့် module မှ log2 နှင့် log10 စသည့် name တို့ကို ခေါ်သုံးမည်ဟု ဆိုလိုခြင်း ဖြစ်သည်။\n\n3. Built–in Namespace :\nကိုယ်တိုင်ကြေညာထားသော variable လည်းမဟုတ်သလို module or library များမှ ခေါ်သုံးထားခြင်းမျိုးလည်း မဟုတ်ဘဲ built-in အနေဖြင့် ပါဝင်နေသော function and name များကို ဆိုလိုပါသည်။ print() နှင့် id() တို့သည် built–in namespace များ ဖြစ်ကြသည်။\n\nLifetime of a namespace and scope of object တို့ကို function ခန်းတွင် အသေးစိတ် ဆွေးနွေးသွားပါမည်ု။",
        initialCode: "name1 = 5\ndef outer_fun():\n    name2 = 6\n    print('Local namespace inside outer_fun:', name2)\nouter_fun()",
        exercise: { task: "Try running code with global and local variable namespaces.", check: (out) => out.includes("Local namespace") },
        quiz: { question: "What function is used to check the memory address of an object in Python?", options: ["address()", "id()", "mem()", "location()"], answer: 1 }
      },
      {
        id: 'l5-2',
        title: "Introduction to Function",
        content: "Programs တွေဟာ ကြီးမားလာတာနဲ့အမျှ ရှုပ်ထွေးလာပါတယ်....။ Error တွေကို ပြန်ဖြေရှင်းဖို့လည်း အရမ်းခက်ခဲလာပါတယ်။ ရှုပ်ထွေးတဲ့ program တစ်ခုကို အပိုင်းလေးတွေ ခွဲလိုက်ခြင်းအားဖြင့် နောက်လူတွေ ပြန်ကြည့်ရင် လွယ်သွားသလို programs ကို update လုပ်ဖို့ပဲဖြစ်ဖြစ်၊ ပြန်ပြီးတော့ trace လုပ်ဖို့လည်း လွယ်ကူသွားပါတယ်။\n\nFunction များတွင် standard library function နှင့် programmer defined function ဟူ၍ နှစ်မျိုးရှိပါသည်။ Standard library function သည် မူရင်းပါဝင်သော built-in function များ သို့မဟုတ် programmer များမှ အလွယ်သုံးနိုင်ရန် ဖန်တီးပေးထားသော function များကို ဆိုလိုခြင်းဖြစ်ပြီး programmer defined function သည် program ထဲတွင် မိမိတို့ ရေးသော function များကို ဆိုလိုခြင်း ဖြစ်သည်။",
        initialCode: "# Programmer Defined Function Example\ndef welcome_message():\n    print(\"Welcome to Python Deep Dive!\")\n\nwelcome_message()",
        exercise: { task: "Create your own programmer-defined function that prints a short text string, then invoke it.", check: (out) => out.length > 0 },
        quiz: { question: "What are the two primary types of functions available in Python?", options: ["Primary and Secondary Functions", "Standard Library Functions and Programmer Defined Functions", "Local and Global Functions", "System Functions and Custom Actions"], answer: 1 }
      },
      {
        id: 'l5-3',
        title: "The range() function ( Standard Library Function )",
        content: "range() function သည် standard library function ဖြစ်ပြီး return value အနေဖြင့် zero မှစတင်ပြီး number များကို တစ်ပေါင်းစီ တိုး၍ ထုတ်ပေးပါသည်။ ထို function ထဲတွင် arguments အနေဖြင့် ထည့်ပေးလိုက်သော number ကို မရောက်ခင်အထိ numbers များကို sequence အလိုက် ထုတ်ပေးပါသည်။\n\n<CODE_BLOCK>\nSample Program (89)\n\nfor x in range(10):\n    print(x)\n\n#output\n# 0 1 2 3 4 5 6 7 8 9\n</CODE_BLOCK>\n\nSample Program (89) ကို run ကြည့်လျှင် 0 မှစပြီး 9 အထိ number များကို အစဉ်လိုက် မြင်တွေ့ရပါမည်။\n\n<CODE_BLOCK>\nSample Program (90)\n\nfor x in range(2, 6):\n    print(x)\n\n#output\n# 2 3 4 5\n</CODE_BLOCK>\n\nrange() function ထဲတွင် အထက်ပါအတိုင်း arguments နှစ်ခုလည်း ထည့်နိုင်ပါသည်။ ပထမတစ်ခုသည် starting point ဖြစ်ပြီး နောက်တစ်ခုသည် end လုပ်ရန် ဖြစ်သည်။ program အား run ကြည့်လျှင် 2 မှစပြီး 5 ထိ အစဉ်လိုက် ပြေးနေသည်ကို မြင်တွေ့နိုင်ပါသည်။ second parameter 6 ဖြစ်လျှင် သူထက် တစ်လျော့ပြီး 5 အထိသာ ဖော်ပြသည် ဆိုတာကို သတိပြုပါ။",
        initialCode: "for x in range(1, 6):\n    print(x)",
        exercise: { task: "Use the range() function inside a for loop to print numbers from 5 to 12.", check: (out) => out.includes("5") && out.includes("12") },
        quiz: { question: "What numbers will range(3, 7) generate in a Python loop?", options: ["3, 4, 5, 6, 7", "3, 4, 5, 6", "0, 1, 2, 3, 4, 5, 6", "4, 5, 6"], answer: 1 }
      },
      {
        id: 'l5-4',
        title: "Programmer Defined Function",
        content: "Syntax of Function:\n\n<CODE_BLOCK>\ndef function_name(parameters):\n    \"\"\"docstring\"\"\"\n    statement(s)\n</CODE_BLOCK>\n\n* **def keyword:** သည် function တစ်ခုအား စတင်ကြေညာရာတွင် အသုံးပြုပါသည်။ python function များကို ကြေညာရာတွင် def ကို သုံးပေးရမည်。\n* **function_name:** သည် မိမိကြေညာလိုသော function တစ်ခုရဲ့ name ကို ရေးနိုင်သည်။ အထက်ပါ program တွင် function_name နေရာ၌ fun_name လို့လည်း ရေးနိုင်သည်။\n* **parameters:** သည် function တစ်ခုအား value များ တွက်ချက်လိုသောအခါတွင် အသုံးပြုပါသည်။ print စာသားများ ရေးသားထားသော function တစ်ခုတွင်မူ parameters ကို ထည့်ရန် မလိုအပ်ပါ။\n* **colon (:):** နောက်ဆုံးမှာ ရေးထားသော အစက်နှစ်စက် (:) သည် ထို function ရဲ့ header ပိုင်း ဆုံးပြီဖြစ်ကြောင်း ကြေညာပေးခြင်း ဖြစ်သည်။\n* **Docstring:** သည် ထည့်လည်းရသလို မထည့်လည်းရပါသည်။ documentation string နေရာတွင် ယခု function က ဘယ်လိုအလုပ်တွေလုပ်သလဲ ဆိုတာကို comment အနေဖြင့် ရေးသားထားခြင်းသည် good programming practice ဖြစ်သည်။\n* **Statements:** ဆိုသည့် နေရာသည် function body နေရာဖြစ်သည်။ ထိုနေရာတွင် မိမိတို့ အလုပ်လုပ်သော instruction or function များကို ရေးသားရပါမည်ု。\n* **Return:** သည် မိမိတို့ ယခုရေးလိုက်သော function ကို အခြားသော function တစ်ခုမှ လှမ်းခေါ်သောအခါတွင် value or data တစ်ခုခု ပြန်ပေးလိုသောအခါတွင် အသုံးပြုသည်။ အတွက်အချက်များမပါဘဲ စာသားများသာ ဖော်ပြလိုသောအခါတွင်မူ return ကို ထည့်ရေးရန် မလိုအပ်ပါ။\n\n<CODE_BLOCK>\nSample Program (91)\n\n#Writing a first function\ndef green():\n    print('We are Myanmar')\n</CODE_BLOCK>\n\nအထက်တွင် green ဆိုသည့် function တစ်ခုအား ကြေညာထားပြီး function header ပိုင်းတွင် parameters အနေဖြင့် ဘာမှ ထည့်မထားသေးပါ။ function body တွင်မူ 'We are Myanmar' ဆိုသည့် စာသားကို ဖော်ပြရန် instruction တစ်ခု ရေးထားပါသည်။ အထက်ပါ program ကို run ကြည့်လျှင် မည်သည့် output မှ ထွက်လာမည်မဟုတ်ပါ။\n\nအဘယ်ကြောင့်ဆိုသော် green() ဆိုသည့် function ကို မည်သည့် function ကမှ ခေါ်ထားခြင်းမရှိသလို print ထုတ်ထားခြင်းလည်း မရှိပါ။ green() function အားခေါ်ရန် အောက်ပါအတိုင်း ရေးသားပါမည်ု。\n\n<CODE_BLOCK>\nSample Program (92)\n\ndef green():\n    print('We are Myanmar')\n\ngreen()\n</CODE_BLOCK>\n\nSample Program (92) ကို run ကြည့်လျှင် 'We are Myanmar' ဆိုသည့် စာသားကို မြင်ရပါမည်။",
        initialCode: "def my_tech_hub():\n    print(\"Cyber Academy Core Online\")\n\n# Call the function below\nmy_tech_hub()",
        exercise: { task: "Declare a function named 'cyber' that prints your location, then make sure to call it beneath the definition block.", check: (out) => out.length > 0 },
        quiz: { question: "Which mandatory keyword is utilized to initialize a function header block in Python?", options: ["func", "function", "def", "init"], answer: 2 }
      },
      {
        id: 'l5-5',
        title: "Python Function with Parameters",
        content: "Python function တစ်ခုအား parameter များထည့် (parameter passing) ပါမည်။\n\n<CODE_BLOCK>\nSample Program (93)\n\ndef green(gh):\n    print('We are Myanmar ' + gh)\n\ngreen('green hackers')\n\n#output\n#We are Myanmar green hackers\n</CODE_BLOCK>\n\nအထက်ပါ program တွင် def green() နောက်တွင် gh ဆိုသည့် variable တစ်ခုကို သုံးလိုက်ပါသည်။ ထို variable နေရာတွင် ၎င်း function အားခေါ်ဆိုသောနေရာမှ ထည့်ပေးလိုက်သော value တစ်ခု ဝင်လာမည်ဖြစ်သည်။ အောက်တွင် function ကို ပြန်ခေါ်သော နေရာ၌ 'green hackers' ဆိုသည့် စာသားကို ထည့်လိုက်ပါသည်။ ထိုစာသားသည် def green(gh) မှ gh ဆိုသည့်နေရာတွင် အစားဝင်သွားပါမည်။ ထို့ကြောင့် print ထုတ်သောအခါတွင် 'We are Myanmar green hackers' ဟု ပြေးနေခြင်းဖြစ်သည်။ အဘယ်ကြောင့်ဆိုသော် gh နေရာတွင် ထို function ကို ခေါ်သောနေရာက ထည့်ပေးလိုက်သော 'green hackers' ဆိုသည့် စာသား အစားဝင်လာသောကြောင့် ဖြစ်သည်။",
        initialCode: "def greet_user(username):\n    print(\"Hello \", username)\n\ngreet_user(\"Alpha Developer\")",
        exercise: { task: "Modify the helper code to construct a parameter-driven function that squares an input integer and displays the value.", check: (out) => out.length > 0 },
        quiz: { question: "What acts as the data placeholder inside a function header declaration context?", options: ["Argument", "Parameter", "Module", "Constant"], answer: 1 }
      },
      {
        id: 'l5-6',
        title: "Parameter Passing",
        content: "စုံ (သို့) မ စစ်ဆေးတဲ့ even_or_odd() ဆိုတဲ့ function တစ်ခု တည်ဆောက်ပြီး ထို function အား မတူညီသော parameters များဖြင့် ခေါ်ပါမည်ု။\n\n<CODE_BLOCK>\nSample Program (94)\n\n#Python function\ndef even_or_odd(x):\n    if(x % 2 == 0):\n        print('even')\n    else:\n        print('odd')\n\neven_or_odd(2)\neven_or_odd(5)\n\n#output\n#even\n#odd\n</CODE_BLOCK>\n\nSample Program (94) ကို run ကြည့်လျှင် ပထမ output သည် even ရမည်ဖြစ်ပြီး ဒုတိယ Output သည် odd ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် even_or_odd function ထဲတွင် ပထမတစ်ကြိမ်၌ 2 ကို ထည့်ပေးလိုက်ပြီး ထို 2 သည် x နေရာတွင် အစားထိုးသွားပါသည် `even_or_odd(2)`။ ထို့နောက် x အား 2 ဖြင့်စားသောအခါ အကြွင်းသည် zero ( 0 ) ဖြစ်နေလျှင် even ဆိုသည့် output ကို ထုတ်ပေးသည်။\n\nဒုတိယတစ်ကြိမ် even_or_odd function ထဲတွင် parameter အနေဖြင့် 5 ကိုထည့်ပေးလိုက်ပြီး ထို 5 သည် x နေရာတွင် အစားဝင်လာပါသည်။ ထို x အား 2 ဖြင့် စားသောအခါ စား၍မပြတ်သောကြောင့် zero ( 0 ) နှင့် မညီပါ။ ထို့ကြောင့် output အနေဖြင့် else နောက်မှ odd ကို ထုတ်ပေးခြင်းဖြစ်ပါသည်။ အထက်ပါ program ကို အောက်ပါအတိုင်း implement လုပ်ကြည့်နိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (95)\n\n#Python function\ndef even_or_odd(x):\n    if(x % 2 == 0):\n        print('even')\n    else:\n        print('odd')\n\ni = 1\nwhile i < 5:\n    print('{} time calling is'.format(i))\n    even_or_odd(i)\n    i = i + 1\n\n#output\n# 1 time calling is\n# odd\n# 2 time calling is\n# even\n# 3 time calling is\n# odd\n# 4 time calling is\n# even\n</CODE_BLOCK>\n\nSample Program (95) တွင် function အား while loop ကို သုံးပြီး ထပ်ခါ ထပ်ခါ ခေါ်ထားပါသည်။ ထို့ပြင် .format ကိုလည်း ပြန်သုံးထားပါသည်။ အထက်ပါ program ကို နားလည်သဘောပေါက်အောင် ကြိုးစားပြီး မိမိ စိတ်ကြိုက် program ကို လိုသလိုပြောင်းလဲ ရေးသားခြင်းဖြင့် programming skill တိုးတက်လာမည်ဖြစ်သည်။",
        initialCode: "def even_or_odd(x):\n    if(x % 2 == 0):\n        print('even')\n    else:\n        print('odd')\n\neven_or_odd(10)",
        exercise: { task: "Execute Sample Program (95) configuration using custom parameters inside an active evaluation framework script loop.", check: (out) => out.includes("calling is") },
        quiz: { question: "In Sample Program (95), what statement evaluates when the mod execution output of x % 2 does not clear to 0?", options: ["The if branch block", "The loop step evaluation module", "The else condition block", "The function header block"], answer: 2 }
      },
      {
        id: 'l5-7',
        title: "Avoidable Error",
        content: "Function ရေးသားရာတွင် ရှောင်ကြဉ်ရမည့် အမှားများနှင့် ကောင်းမွန်သော အလေ့အကျင့်များမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည် -\n\n1. Function တစ်ခုကို အခြား function တစ်ခုထဲမှာ သွားရောက်ပြီး ကြေညာလျှင် Syntax Error ဖြစ်နိုင်ပါသည်။\n2. Meaningful ဖြစ်တဲ့ function names တွေ၊ meaningful ဖြစ်တဲ့ parameter names တွေ ပေးခြင်းအားဖြင့် programs ကို ဖတ်ရလွယ်ကူစေတယ်၊ comments တွေ အများကြီး ပေးစရာလည်း မလိုတော့ပါဘူး။\n3. Small functions တွေ ရေးသားခြင်းအားဖြင့် programs ပြန်ရေးဖို့၊ အမှားရှာဖွေဖို့၊ ပြန်လည်ပြင်ဆင်ဖို့၊ ပိုကောင်းအောင်ရေးဖို့ လွယ်ကူစေပါတယ်။",
        initialCode: "def outer_function():\n    # Avoid declaring another function directly inside here for basic syntax clarity\n    print(\"Outer block active\")",
        exercise: { task: "Review the best practices rules for clean function declarations.", check: (out) => true },
        quiz: { question: "What is a benefit of writing small, focused functions?", options: ["It creates Syntax Errors", "It makes debugging and maintenance easier", "It removes the need for parameters", "It speeds up core hardware manually"], answer: 1 }
      },
      {
        id: 'l5-8',
        title: "List passing to a function",
        content: "အထက် program များတွင် function တစ်ခုထဲသို့ string and number များ ဖြတ်ခဲ့ပါသည်။ ယခု program တွင်မူ function ထဲသို့ list တစ်ခုလုံး ဖြတ်သွားမှာ ဖြစ်ပါတယ်။ ပထမဆုံးအနေဖြင့် listFun ဆိုသည့် function တစ်ခု တည်ဆောက်ထားပြီး ထိုထဲတွင် variable x ကို သုံးပြီး list တစ်ခုကို ကြေညာထားပါသည်။\n\n<CODE_BLOCK>\nSample Program (96)\n# pass list to a function\ndef listFun(x):\n    x[0] = 15\n\n#declaring a list\na_list = [10, 11, 12, 13, 14, 15]\nlistFun(a_list)\nprint(a_list)\n\n#output\n# [15, 11, 12, 13, 14, 15]\n</CODE_BLOCK>\n\nSample Program (96) အား run ကြည့်သောအခါတွင် output အနေဖြင့် a_list ရဲ့ ပထမဆုံး value 10 နေရာတွင် 15 ပြောင်းလဲသွားသည်ကို မြင်ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် listFun function ထဲတွင် a_list ဆိုသည့် list တစ်ခုလုံးကို parameter အنهဖြင့် ထည့်ပေးလိုက်ပြီး ထို list သည် x နေရာတွင် နေရာယူသွားပါသည်။ x[0]=15 ဟု ရေးထားသောကြောင့် a_list ဆိုသည့် list ရဲ့ ပထမဆုံး index 0 နေရာကို 15 ဟု assign လုပ်လိုက်ပါသည်။ ထို့ကြောင့် output ထုတ်သောအခါတွင် ပထမဆုံး value 10 အစား 15 ထွက်နေခြင်းဖြစ်သည်။",
        initialCode: "def modify_list(lst):\n    lst[1] = 99\n\nmy_list = [1, 2, 3]\nmodify_list(my_list)\nprint(my_list)",
        exercise: { task: "Pass a list to a custom function and change its element value dynamically.", check: (out) => out.includes("99") },
        quiz: { question: "In Sample Program (96), why did the first element of a_list change to 15?", options: ["Because lists are immutable", "Because a new list was created in memory", "Because lists are passed by reference and modified in place via index 0", "Because of a syntax error"], answer: 2 }
      },
      {
        id: 'l5-9',
        title: "Pass by reference in python",
        content: "Program memory ထဲ၌ stack and heap ဆိုပြီး နှစ်မျိုးရှိပါတယ် ။ stack ထဲတွင် methods များ functions များ ကို သိမ်းဆည်းထားပြီး heap memory ထဲတွင်မူ value များ ဖြစ်တဲ့ 10,20,30… စတဲ့ objects များကို အကန့်အလိုက် သိမ်းဆည်းပါတယ်။\n\nWhat is a reference?\n\nReference ဆိုတာ Memory address ကို ဆိုလိုခြင်းဖြစ်ပါသည်။ variable တစ်ခုကို စတင်ကြေညာ မယ်ဆိုပါစို့ var_a = 10 တွင် var_a သည် 10 ဆိုသည့် object ကို ကိုယ်စားပြုသည်ဟု ထင်ရသော်လည်း var_a သည် reference ဆိုသည့် object ရဲ့ memory တွင် သိမ်းဆည်းထားသော memory address ကိုသာ ကိုယ်စားပြုပါသည်။\n\nvar_a သည် 0x1008 စသည့် memory address ကိုသာ ညွှန်းထားခြင်း (reference) လုပ်ထားခြင်းဖြစ်သည်။ ထို memory address ကသာ object ဖြစ်သည့် 10 နှင့် သက်ဆိုင်ပါသည်။ python programming တွင် id() ဆိုသည့် built-in function ဖြင့် var_a reference လုပ်ထားသော memory address ကိုသိနိုင်သည်။ ထို memory address များကို hexadecimal နှင့်ပြလိုပါကလည်း hex() function ကိုသုံးနိုင်သည်။\n\n<CODE_BLOCK>\n# Checking memory addresses\nprint(hex(id(var_a)))\n</CODE_BLOCK>\n\nယခုအတိုင်း ရေးသားနိုင်ပါသည်။",
        initialCode: "var_a = 10\nprint(hex(id(var_a)))",
        exercise: { task: "Print the hexadecimal memory address of a defined variable using hex() and id().", check: (out) => out.includes("0x") },
        quiz: { question: "What does a variable actually hold in Python memory management?", options: ["The raw value bytes directly", "A reference (memory address) to the object container", "A stack function call address", "A copy of the compiler system"], answer: 1 }
      },
      {
        id: 'l5-10',
        title: "Object Assignment and Reference in Functions",
        content: "အောက်ပါ program ကို လေ့လာကြည့်ကြပါစို့ -\n\n<CODE_BLOCK>\nSample Program (97)\ndef myFun(x):\n    x = [20, 30, 40]\n    print(x)\n\nlst = [10, 11, 12, 13, 14, 15]\nmyFun(lst)\nprint(lst)\n\n#output\n#[20, 30, 40]\n#[10, 11, 12, 13, 14, 15]\n</CODE_BLOCK>\n\nအထက်ပါ program အား run ကြည့်လျှင် output အနေဖြင့် lst ထဲက valueများကိုသာ မြင်ရမည်။ line number 1 မှ 3 သည် myFun ဆိုသည့် function အတွက် code line များဖြစ်ပြီး line 4 တွင် list တစ်ခုအား တည်ဆောက်ထားပါသည်။ program စသော အချိန်တွင် line 4 ပြီးသောအခါ၌ line 5 တွင် myFun ဆိုသည့် function ကို lst ဆိုသည့် list အား parameter အနေဖြင့် ထည့်ခေါ်လိုက်ပါသည်။ ထို့ကြောင့် x နေရာတွင် lst ထဲမှ value များ ဖြစ်သည့် 10 , 11 , 12 ,13 ,14 ,15 စသည့် value များ ဝင်နေပါမည်။\n\nline 2 သို့ ရောက်သောအခါတွင်မူ x ထဲသို့ object အသစ် assign လုပ်ခံလိုက်ရပါသည်။ ထို့ကြောင့် နဂိုမူရင်းရှိသော တန်ဖိုးများ x ထဲတွင် မရှိတော့ဘဲ အသစ် assign လုပ်ခံလိုက်ရသော 20,30,40 စသည့် value များသာ ရှိနေပါမည်။ ထို့ကြောင့် line 3 တွင် print လုပ်သောအခါ [20,30,40] စသည့် value များကိုသာ မြင်ရခြင်းဖြစ်သည်။ ထိုသို့ object အသစ် assign လုပ်ခံလိုက်ရသောအချိန်တွင် reference link သည် ပျက်စီးသွားသလို နဂို မူရင်းရှိနေသော lst ဆိုသည့် list ကိုလည်း modified လုပ်ခြင်းမရှိပါဘူး။ ထို့ကြောင့် line 6 တွင် output ထုတ်သောအခါ lst ဆိုသည့် list ထဲ၌ရှိသော မူရင်း value များသာ output အနေဖြင့် ထွက်လာခြင်းဖြစ်သည်။ C/C++ တို့တွင်မူ နဂိုမူရင်း ရှိသော value များ modified လုပ်ခြင်း ခံရပါသည်။ pass by reference အား ပိုမိုပြီး နားလည်စေရန် အောက်ပါ သင်ခန်းစာကို နားလည်အောင် ဆက်လက် ကြိုးစားကြည့်ပါ။\n\n<CODE_BLOCK>\nSample Program (98)\ndef myFun(x):\n    x = 20\n\nx = 10\nmyFun(x)\nprint(x)\n</CODE_BLOCK>\n\noutput အနေဖြင့် 10 ကို ရရှိပါမည်။ အောက်တွင် ပြထားသော swap လုပ်သည့် program အားလည်း ပိုမိုနားလည်စေရန် ရေးသားကြည့်သင့်ပါသည်။",
        initialCode: "def check_ref(x):\n    x = [5, 5, 5]\n\nnums = [1, 2, 3]\ncheck_ref(nums)\nprint(nums)",
        exercise: { task: "Run a verification script to witness how reassigning a local variable inside a function does not affect the outer scope reference container.", check: (out) => out.includes("1") },
        quiz: { question: "Why does reassigning x inside myFun not alter the original lst container?", options: ["Because x becomes a global variable", "Because local assignment creates a new object binding, breaking the original link", "Because Python throws a background runtime exception", "Because list values cannot be printed inside functions"], answer: 1 }
      },
      {
        id: 'l5-11',
        title: "The Swapping Function Simulation",
        content: "တန်ဖိုးများ အပြန်အလှန် လဲလှယ်ခြင်း (Swapping) ကို လေ့လာကြည့်ကြပါစို့ -\n\n<CODE_BLOCK>\nSample Program (99)\ndef swapping(x, y):\n    temp = x\n    x = y\n    y = temp\n\nx = 2\ny = 3\nswapping(x, y)\nprint(x)\nprint(y)\n\n#output\n# 2\n# 3\n</CODE_BLOCK>\n\nအထက်ပါ program ကို run ကြည့်လျှင် output အနေဖြင့် 2 and 3 ကိုသာ ပြန်ရပါသည်။ swapping ဆိုသည့် function ကို လှမ်းခေါ်သည့်အခါ ပထမဆုံး x တန်ဘိုး ဖြစ်သည့် 2 သည် temp ဆိုသည့် variable ထဲသို့ assign ထည့်လိုက်သည်။ ထို့နောက် y value ဖြစ်သည့် 3 အား x ထဲသို့ assign ထည့်လိုက်သည်။ temp=x , x=y စသည့် code နှစ်ကြောင်း run ပြီးသော အချိန်တွင် x တန်ဖိုးမှာ 3 ဖြစ်နေပါပြီ။ ထို့နောက် y = temp ဆိုသည့် code line ကို အလုပ်ဆက်လုပ်သောအခါတွင်မူ y တန်ဘိုးသည် temp ထဲမှ ရှိသော 2 ကို assign လုပ်ခံရပါသည်။\n\nထို့ကြောင့် code line 3 ခုလုံး run ပြီးသော အချိန်တွင် x တန်ဘိုးသည် 3 ဖြစ်ပြီး y တန်ဘိုးသည် 2 ဖြစ်နေပါသည်။ ထို code line 3 ခုရှိသော swapping function ထဲတွင် print လုပ်ကြည့်ပါက တွေ့နိုင်သည်။ သို့သော် swapping function အပြင်ဘက်ကို ရောက်သွားပြီးနောက် x and y တို့သည် အပြင်ဘက်က မူရင်း value 2 and 3 ကိုသာ တွေ့ရမည်ဖြစ်သည်။",
        initialCode: "x = 2\ny = 3\nprint('Initial values:', x, y)",
        exercise: { task: "Analyze external block variables output status after running a basic custom swapping scope module function invocation.", check: (out) => out.length > 0 },
        quiz: { question: "In Sample Program (99), what values are displayed by print(x) and print(y) at the end of the script execution scope?", options: ["3 and 2", "2 and 3", "None and None", "Syntax Error"], answer: 1 }
      },
      {
        id: 'l5-12',
        title: "Everything is an Object",
        content: "Python မှာ အရာအားလုံးနီးပါးဟာ object တွေပါပဲ။ ဆိုလိုချင်တာက Data Types တွေဖြစ်ကြတဲ့ integers(int), floats(float), Booleans (bool), Strings(str), Lists(list), Tuples(tuple), Sets(set), Dictionaries(dict), None(None Type) တို့ အားလုံးဟာလည်း objects တွေပါပဲ။ operators (+ , - , * , / , …) စတာတွေဟာလည်း objects တွေပါပဲ။ Object ဆိုတာ class ကို ကိုယ်စားပြု (instance of class) ထားခြင်းကို ဆိုလိုပါတယ်။\n\n<CODE_BLOCK>\nSample Program (100)\na = 10\nprint(type(a))\n</CODE_BLOCK>\n\nအထက်ပါ အတိုင်း Program ရေးပြီး run ကြည့်ပါက output အနေဖြင့် (`<class 'int'>`) ကို ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် a သည် 10 ကို assign လုပ်ထားသောကြောင့် int ဖြစ်ပြီး int သည်လည်း class ဖြစ်သည်။ နောက်တစ်နည်းအနေဖြင့် int သည် object (instance of class) ဖြစ်ကြောင်းကို အောက်ပါအတိုင်း ဥပမာပြပါမည်။\n\n<CODE_BLOCK>\nSample Program (101)\nc = int()\nprint(c)\nc = int('101', base=2)\nprint(c)\n</CODE_BLOCK>\n\n`int()` ဆိုသည့် object ကို c ထဲသို့ assign လုပ်ပါမည်။ ထို့နောက် c အား print ထုတ်ကြည့်ပါက output အနေဖြင့် 0 ကိုသာ ရပါမည်။ ဒုတိယပိုင်းတွင် `int('101', base=2)` ဟု ရေးပြီး run ကြည့်ပါက binary တန်ဖိုး '101' ကို integer ပြောင်းပေးသဖြင့် output အနေဖြင့် 5 ကို ရရှိပါမည်။ ထို့ကြောင့် int သည် object ဖြစ်ပြီး int class ကို ကိုယ်စားပြုထားခြင်း ဖြစ်သည်။",
        initialCode: "a = 100\nprint(type(a))",
        exercise: { task: "Check the object type of a variable using the type() function.", check: (out) => out.includes("class") },
        quiz: { question: "What will print(type(10)) output in Python?", options: ["<class 'object'>", "<class 'int'>", "<integer>", "10"], answer: 1 }
      },
      {
        id: 'l5-13',
        title: "Functions and Classes as Objects",
        content: "Functions, Classes နှင့် Types တွေဟာလည်း objects တွေပါပဲ။ functions, classes နှင့် types တွေမှာလည်း memory address ရှိပါတယ်။ class ကတော့ ဘယ်သူ့ကိုယ်မှ ကိုယ်စားပြုမနေဘဲ သူကိုယ်တိုင်ပဲ ကြေညာရတာပါ။ class အကြောင်းကို နောက်ပိုင်းသင်ခန်းစာများမှာ အသေးစိတ် ဆွေးနွေးသွားပါမည်။\n\n`def my_fun():` တွင် `my_fun` သည် သူ၏နောက်က `()` parentheses မပါလျှင် Python ၌ variable တစ်ခု ဖြစ်သည်။ `id(my_fun)` ဟု ရေးကြည့်လျှင် သူ၏ memory address ကို ရပါမည်။ ထို့ကြောင့် my_fun သည် သူနှင့်သက်ဆိုင်သည့် object တစ်ခုကို reference လုပ်ထားသည်။ ၎င်း၏ နောက်ဆက်တွဲ (consequence) အနေဖြင့် -\n\n1. Objects (including function) မဆို variable တစ်ခုထဲကို assign လုပ်နိုင်ပါသည်။\n2. မည်သည့် object မဆို function တစ်ခုအတွင်းသို့ parameter အနေဖြင့် passing လုပ်နိုင်ပါတယ်။\n3. Function များသည် return value အနေဖြင့် function တစ်ခုကို return ပြန်ပေးနိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (102)\ndef square(a):\n    return a**2\nprint(type(square))\n</CODE_BLOCK>\n\nSample Program (102) အတိုင်း run ကြည့်လျှင် `<class 'function'>` ကို output အနေဖြင့် မြင်ရပါမည်။ ထို့ကြောင့် square သည် memory address တစ်ခုသာဖြစ်ပြီး အခြားသော variable တစ်ခုထဲသို့ assign လုပ်နိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (103)\ndef square(a):\n    return a**2\n\nfun = square\nprint(id(square))\nprint(id(fun))\n</CODE_BLOCK>\n\nSample Program (103) အတိုင်း run ကြည့်ပါက square နှင့် fun တို့သည် တူညီသော memory address ကို ရပါမည်။ ထို့ကြောင့် program တွင် function ကို fun ဆိုသည့် variable အား အသုံးပြု၍လည်း အောက်ပါအတိုင်း ခေါ်ဆိုနိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (104)\ndef square(a):\n    return a**2\n\nfun = square\nprint(fun(2))\n</CODE_BLOCK>\n\nSample Program (104) ကို run ကြည့်လျှင် error မတက်ဘဲ output အနေဖြင့် 4 ကို ရရှိပါမည်။",
        initialCode: "def greet():\n    return 'Hi'\n\nwelcome = greet\nprint(welcome())",
        exercise: { task: "Assign a function to a new variable name and call it using the new variable reference.", check: (out) => out.length > 0 },
        quiz: { question: "If you execute assignment 'fun = square' without parentheses, what does 'fun' contain?", options: ["The result of the square function execution", "A syntax error", "The memory address reference of the square function object", "A string named 'square'"], answer: 2 }
      },
      {
        id: 'l5-14',
        title: "Returning function from a function",
        content: "Function ကနေ function များ return ပြန်ပေးခြင်းကို လေ့လာရန် ပထမဆုံးအနေဖြင့် function နှစ်ခု တည်ဆောက်ပါမည်။\n\n<CODE_BLOCK>\ndef square(a):\n    return a**2\n\ndef cube(a):\n    return a**3\n</CODE_BLOCK>\n\nဒုတိယအနေဖြင့် တတိယမြောက် function တည်ဆောက်မည်ဖြစ်ပြီး ထို function ထဲကို ဖြတ်လာသော arguments အလိုက် သက်ဆိုင်ရာ function များကို return ပြန်ပေးပါမည်။\n\n<CODE_BLOCK>\ndef fun(number):\n    if number == 1:\n        return square\n    else:\n        return cube\n</CODE_BLOCK>\n\nတတိယ အနေဖြင့် ထို function များကို လှမ်းခေါ်ပါမည်။\n\nf = fun(1) #getting square function\nprint(f(1))\n\n`fun(1)` ဟု fun function ကို လှမ်းခေါ်သောအခါ argument သည် 1 ဖြစ်သည့်အတွက် return အနေဖြင့် square function ရဲ့ address ကို ပြန်ပေးပါသည်။ ထို address ကို f ဆိုသည့် variable ထဲသို့ `f = fun(1)` ဟု ရေးကာ assign လုပ်လိုက်ပါသည်။ ထို့ကြောင့် f သည် ယခုအချိန်တွင် square function ရဲ့ address နှင့် အတူတူပင် ဖြစ်သည်။ ဆိုလိုသည်မှာ f သည် square function ကို ညွှန်းနေပြီ ဖြစ်သည်။ ထို့နောက် `print(f(1))` ဟု ရေးလိုက်သောအခါ output အနေဖြင့် 1 ကို ရရှိခြင်း ဖြစ်သည်။\n\nf = fun(2) #getting cube function\nprint(f(2))\n\nယခုတစ်ခါမှာတော့ fun ဆိုတဲ့ function ကို parameter 2 ဖြင့်လှမ်းခေါ်ပါတယ်။ ယခုအခါတွင်မူ 1 နှင့်မတူဘဲ 2 ဖြစ်နေသည့်အတွက် cube ရဲ့ memory address ကို ပြန်ပေးပါတယ်။ `f = fun(2)` လို့ ရေးထားသောကြောင့် cube function ရဲ့ memory address သည် variable f ထဲသို့ ရောက်သွားပါသည်။ ယခုအခြေအနေတွင် f = cube() ဖြစ်နေသည်ကို imaging လုပ်နိုင်သည်။ ထို့နောက် `print(f(2))` လို့ ရေးလိုက်သည့်အတွက် cube function ထဲသို့ argument 2 ဖြင့် ဖြတ်သွားပြီး output အနေဖြင့် 8 ကို ရရှိခြင်း ဖြစ်သည်။ memory address များကို စစ်ဆေးကြည့်ပါကလည်း f ၏ address နှင့် သက်ဆိုင်ရာ function တို့၏ address များမှာ ထပ်တူကျနေသည်ကို မြင်နိုင်ပါသည်။ program အပြည့်အစုံကို အောက်တွင် ဖော်ပြထားပါတယ်။\n\n<CODE_BLOCK>\nSample Program (105)\ndef square(a):\n    return a**2\n\ndef cube(a):\n    return a**3\n\ndef fun(number):\n    if number == 1:\n        return square\n    else:\n        return cube\n\n#Start calling function\nf = fun(1) #getting square function\nprint(f(1))\nf = fun(2) #getting cube\nprint(f(2))\n</CODE_BLOCK>",
        initialCode: "def get_math(op):\n    def add(x):\n        return x + x\n    return add\n\nf = get_math('add')\nprint(f(5))",
        exercise: { task: "Execute a functional workflow setup where a dynamic controller orchestrates sub-block functions.", check: (out) => out.length > 0 },
        quiz: { question: "In Sample Program (105), what does calling fun(2) return directly to the caller context?", options: ["The integer value 8", "The code reference of the cube function object", "The integer value 1", "A syntax error handler"], answer: 1 }
      },
    ]
  },
  {
    id: 'p6',
    title: "Positional and Keyword Arguments",
    lessons: [
      {
        id: 'l6-1',
        title: "Positional and Keyword Arguments",
        content: "Function တစ်ခုကနေ အခြား function တစ်ခုကို argument များနှင့် ခေါ်ဆိုသောအခါ အခေါ်ခံရသော function တွင် မည်သည့် parameter သည် မည်သည့် argument ၌ ဖြတ်သွားမည် ဖြစ်ကြောင်း positioning လုပ်နိုင်ပါသည်။ ထိုသို့ positioning လုပ်ရာ၌ keyword arguments များကို အသုံးပြုနိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (107)\ndef square(a,b):#parameters\n    return a*b\n\nsquare(3,4) #arguments\n</CODE_BLOCK>\n\nSample Program (107) တွင် 3 ဆိုသည့် argument သည် a ဆိုသည့် parameter နှင့် သက်ဆိုင်ပြီး 4 ဆိုသည့် argument သည် b ဆိုသည့် parameter နှင့် သက်ဆိုင်သည်။ အထက်ပါ နည်းလမ်းသည် အစဉ်လိုက် နေရာယူသော positional နည်းလမ်းဖြစ်သည်။\n\n<CODE_BLOCK>\ndef square(a,b,c):#parameters\n    return a*b\n\na = square(3,4)\n</CODE_BLOCK>\n\nယခုအတိုင်းရေးမည်ဆိုလျှင်တော့ square function ခေါ်တဲ့ နေရာမှာ error တက်မှာ ဖြစ်ပါတယ်။ အဘယ်ကြောင့်ဆိုသော် 3 သည် a သို့ သွားနိုင်သော်လည်း 4 သည် b or c ဘယ်ကို သွားရမလဲ ဆိုတာ python က မသိပါဘူး။\n\n<CODE_BLOCK>\nSample Program (108)\ndef square(a,b,c):#parameters\n    return a*b*c\n\nprint(square(1,2,3))\n</CODE_BLOCK>\n\nSample Program (108) တွင် 1 သည် a သို့ pass မည်ဖြစ်ပြီး 2 သည် b သို့ pass လုပ်မည်။ ထိုနည်းတူ 3 သည်လည်း c သို့ pass လုပ်ပါမည်။ အကယ်လို့ 1 ကို c သို့ pass လုပ်စေလိုပြီး 3 ကို a သို့ pass လုပ်စေလိုလျှင် မည်သို့ ရေးရမည်နည်း။ ထိုအချိန်တွင် keyword arguments ကို အောက်ပါအတိုင်း အသုံးပြုနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (109)\ndef square(a,b,c):#parameters\n    return a*b*c\n\nprint(square(c=1,b=2,a=3))\n</CODE_BLOCK>\n\nအထက်ပါ နည်းလမ်းကို အသုံးပြုပြီး function တစ်ခုအတွင်းသို့ arguments များသည် မိမိတို့ စိတ်ကြိုက် parameters အတိုင်း pass လုပ်နိုင်ပါသည်။",
        initialCode: "def configure(host, port, debug):\n    print(f'Host: {host}, Port: {port}, Debug: {debug}')\n\n# Invoke with keyword arguments here\nconfigure(debug=True, port=8080, host='localhost')",
        exercise: { task: "Call the configure function explicitly overriding standard positional assignments using named parameters configuration keywords.", check: (out) => out.includes("Host") },
        quiz: { question: "What occurs if you invoke square(3, 4) where the function header context expects def square(a, b, c)?", options: ["Python dynamically defaults c to 0", "A Runtime TypeError is triggered due to a missing structural argument constraint", "The script scales the execution environment dynamically", "A global variable injection occurs"], answer: 1 }
      },
      {
        id: 'l6-2',
        title: "Unpacking",
        content: "Unpacking or Iterable unpacking ဆိုတာ = ညီမျှခြင်း တစ်ခုရဲ့ ညာဘက်မှာရှိတဲ့ value(object) တွေကို ဘယ်ဘက်မှာရှိတဲ့ variable များဆီသို့ assign လုပ်ခြင်းဖြစ်ပါတယ်။ object သုံးခု နှင့် variable သုံးခုဖြစ်ရင်တော့ iterable unpacking ကို သုံးနိုင်သော်လည်း object တွေများနေပြီး variable တွေနည်းနေခဲ့မယ်ဆိုရင်တော့ Extended Unpacking ကို သုံးနိုင်ပါတယ်။ အခု ဖော်ပြမှာကတော့ Iterable unpacking ဖြစ်ပါတယ်။\n\nပထမဆုံးအနေဖြင့် tuple တစ်ခုကို စတင်ကြေညာပါမယ်။ `a = (1,2,3)` ယခုပုံစံအတိုင်း ကြေညာလိုက်တာနဲ့ tuple ဖြစ်သွားပါပြီ။ tuple ဟုတ်မဟုတ်ဆိုတာကို `print(type(a))` ကိုရေးကာ စစ်ဆေးနိုင်ပါသည်။ သတိပြုရန် တစ်ချက်မှာ tuple တစ်ခုကို declaring လုပ်ရာတွင် `( )` parentheses ကြောင့် tuple ဖြစ်ရခြင်း မဟုတ်ဘဲ 1,2,3 တို့ကြားတွင်ရေးထားသော comma ( , ) များကြောင့်သာ tuple ဖြစ်ရခြင်း ဖြစ်သည်။ tuple သင်ခန်းစာကို နောက်ပိုင်းမှာ အသေးစိတ် ဆက်လက်ဆွေးနွေးသွားပါမည်။\n\n<CODE_BLOCK>\nSample Program (110)\na,b,c = 1,2,3\nprint(a)\nprint(b)\nprint(c)\n</CODE_BLOCK>\n\nSample Program (110) အား run ကြည့်လျှင် a,b,c တို့ တန်ဘိုးသည် 1,2,3 ဖြစ်နေသည်ကို မြင်နိုင်ပါသည်။ ယခု program သည် 1,2,3 ဆိုသည့် tuple ထဲမှ a,b,c ဆိုသည့် variable များထဲသို့ data များ unpacking လုပ်ပြီး ထည့်ခြင်းဖြစ်ပါသည်။",
        initialCode: "x, y, z = (10, 20, 30)\nprint(x, y, z)",
        exercise: { task: "Try unpacking values from a tuple directly into multiple variables context variables dynamically.", check: (out) => out.length > 0 },
        quiz: { question: "What token causes a declared expression sequence to become implicitly a Tuple configuration in Python?", options: ["The wrapping parentheses ()", "The comma separation marker (,)", "The square brackets []", "The colon marker (:)"], answer: 1 }
      },
      {
        id: 'l6-3',
        title: "Unpacking list to tuple",
        content: "List တစ်ခု ထဲမှာ ရှိတဲ့ data များကို tuple တစ်ခုထဲသို့ လည်း အောက်ပါအတိုင်း unpack လုပ်နိုင်ပါသည်။\n\n<CODE_BLOCK>\n(a,b,c) = [1,2,3]\nprint(a)\nprint(b)\nprint(c)\n</CODE_BLOCK>\n\n<CODE_BLOCK>\na,b,c = 10,'a',3.14\nprint(a) #10\nprint(b) #a\nprint(c) #3.14\n</CODE_BLOCK>\n\nအခြားသော data type များကိုလည်း unpack လုပ်နိုင်ပါတယ်။ unpacking ကို သုံးပြီး variable value များကို swapping လုပ်ရာမှာ အရမ်းကိုအသုံးဝင်ပါတယ်။ ဥပမာ အနေဖြင့် `a,b=10,20` တွင် a value သည် ပုံမှန်အားဖြင့် unpack လုပ်လျှင် 10 ဖြစ်ပြီး b value သည် 20 ဖြစ်သည်။ a value ကို 20 ဖြစ်စေလိုပြီး b value ကို 10 ဖြစ်စေလိုသော အခါမျိုးတွင် အချို့သော programming များ၌ variable တစ်ခုကို အစားထိုးပြီး ထို variable ထဲကို value ကို ချိန်းထည့်ခြင်းဖြင့် swapping လုပ်ကြသည်။ Python တွင်မူ အောက်ပါ အတိုင်း ရေးသားရုံဖြင့် swapping လုပ်နိုင်ပါသည်။\n\n<CODE_BLOCK>\na,b = 10,20\na,b = b,a\nprint(a) #20\nprint(b) #10\n</CODE_BLOCK>\n\nပုံမှန်အားဖြင့် ကြည့်လျှင် b value ကို a ထဲသို့ ထည့်လိုက်သည်ဟု ထင်ရသော်လည်း python programming တွင် ညီမျှခြင်းရဲ့ right hand side မှာရှိသော , ခံပြီးရေးထားသော value များသည် tuple ဖြစ်သည်။ ဒုတိယ code line တွင် ဘယ်ဘက်မှာရှိသော a သည် ညာဘက်မှာ ရှိသော b ရဲ့ memory address ကို reference လုပ်ထားခြင်းဖြစ်ပြီး ဘယ်ဘက်မှာ ရှိသော b သည် ညာဘက်မှာ ရှိသော a ရဲ့ memory address ကို reference လုပ်ထားခြင်းဖြစ်သည်။",
        initialCode: "a, b = 100, 200\na, b = b, a\nprint(a, b)",
        exercise: { task: "Perform a simultaneous variable value swap utilizing single-line tuple initialization variables context format properties.", check: (out) => out.includes("200") },
        quiz: { question: "Why does Python consider the expression 'a, b = b, a' a safe structural layout swap?", options: ["Because it runs on a multi-core parallel stack configuration", "Because right hand variables are parsed together implicitly as a tuple element structure before assignments activate", "Because variables are deleted from memory dynamically", "Because integers are strictly compiled locally within structural limits"], answer: 1 }
      },
      {
        id: 'l6-4',
        title: "Unpacking String",
        content: "String တစ်ခုကိုလည်း အောက်ပါအတိုင်း အလွယ်တကူ unpack လုပ်နိုင်ပါသည်။ list နှင့် tuple တို့ကို unpack လုပ်ပြထားခဲ့ပြီး ဖြစ်သကဲ့သို့ string သည်လည်း ထိုနည်းအတိုင်းပင် ဖြစ်သည်။\n\n<CODE_BLOCK>\na,b,c = 'XYZ'\nprint(a) #X\nprint(b) #Y\nprint(c) #Z\n</CODE_BLOCK>",
        initialCode: "char1, char2, char3 = 'ABC'\nprint(char1, char2, char3)",
        exercise: { task: "Unpack character components from a given basic continuous string literal sequence context configuration object.", check: (out) => out.includes("A") },
        quiz: { question: "What error will occur if you write a, b = 'XYZ' in Python?", options: ["SyntaxError", "ValueError: too many values to unpack", "TypeError", "KeyError"], answer: 1 }
      },
      {
        id: 'l6-5',
        title: "Set",
        content: "Python programming တွင် set and dictionary တို့သည် unordered ဖြစ်သည်။ unordered ဆိုသည်မှာ set and dictionary ထဲမှာရှိသော value များကို index ကိုသုံးပြီး access မလုပ်နိုင်ခြင်း ဖြစ်သည်။ Python programming တွင် set ကို curly bracket သုံးပြီး ကြေညာသည်။ set အကြောင်းကို နောက်ပိုင်း သင်ခန်းစာများတွင် အသေးစိတ်ဆွေးနွေးသွားပါမယ်။\n\n<CODE_BLOCK>\na = {1,2,3,4}\nprint(a[0])\n# TypeError: 'set' object is not subscriptable\n</CODE_BLOCK>\n\na ဆိုသည့် set တစ်ခုကို ကြေညာထားပြီး ထို set ထဲမှ index 0 ကိုထုတ်ကြည့်သည့်အခါ subscriptable ဆိုသည့် Type Error ကို ပြသနေမည် ဖြစ်သည်။",
        initialCode: "my_set = {10, 20, 30}\n# print(my_set[0]) # This triggers an error",
        exercise: { task: "Experiment declaring a set object and observe why indexed mapping fails on it.", check: (out) => true },
        quiz: { question: "Why is a Set object not subscriptable in Python?", options: ["Because it only stores string objects", "Because it is an unordered collection and elements do not map to consecutive positional indices", "Because it lacks bracket symbols setup properties", "Because it is dynamic memory allocation structure"], answer: 1 }
      },
      {
        id: 'l6-6',
        title: "Dictionary",
        content: "ထိုနည်းတူ dictionary သည်လည်း unordered ဖြစ်ပြီး Index ကို support မလုပ်ပါ။ Python programming တွင် dictionary ကို key value များဖြင့် ကြေညာသည်။ ယခု ကြေညာထားသော dictionary တွင် a ,b ,c တို့သည် key များ ဖြစ်သည်။ ထို key value များနောက်၌ : colon ကိုရေးပြီး value များကို ရေးသားသည်။ dictionary a တွင် a[1] ဟုရေးကြည့်လျှင် error ပြနေသည်ကို မြင်နိုင်ပါသည်။ String အဖြစ်ကြေညာထားသည့် a တွင်မူ a[0] ဟု index 0 ကို ထုတ်ကြည့်သည့်အခါ ‘A’ ထွက်လာသည်ကို မြင်နိုင်ပါသည်။ Python တွင် list , tuple , string တို့သည် set and dictionary နှင့် မတူဘဲ ordered ဖြစ်ကြသည်။ ထိုကဲ့သို့ set နှင့် dictionary တို့သည် ordered မဖြစ်သည့်အတွက် unpack လုပ်ရာတွင် အခက်ဲရှိသည်။ Iterables နည်းလမ်းဖြင့်ထုတ်မည်ဆိုလျှင်တော့ data တွေ အစဉ်လိုက်ထွက်လာသည်။ သို့သော် ထိုနည်းလမ်းသည် unpacking မဟုတ်ပါ။\n\n<CODE_BLOCK>\nSample Program (111)\nite = {1,2,3,4,5,}\nfor e in ite:\n    print(e)\n# 1\n# 2\n# 3\n# 4\n# 5\n</CODE_BLOCK>\n\nအထက်ပါ program အတိုင်း iterable နည်းလမ်းဖြင့် for loop သုံးပြီးထုတ်လျှင် value များ အစဉ်လိုက်ထွက်လာသည်။\n\n<CODE_BLOCK>\nSample Program (112)\nite = {1,2,3,4,5,}\nprint(ite)\n#{1,2,3,4,5,}\nite = {'a', 'b' , 'c' , 'd'}\nprint(ite)\n#{'c', 'a' , 'b' , 'd'}\n</CODE_BLOCK>\n\nအထက်ပါ program ကိုကြည့်ပါ။ ite ထဲမှ number များကို print ထုတ်ကြည့်သော အခါတွင် အစဉ်လိုက် ထွက်လာသော်လည်း ite ထဲသို့ စကားလုံးများထည့်ပြီး ထုတ်ကြည့်သောအခါတွင်မူ အစဉ်လိုက် ထွက်မလာတော့သည်ကို တွေ့နိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (113)\na,b,c,d = {'A' , 'B' , 'C' , 'D'}\nprint(a) #C\nprint(b) #D\nprint(c) #A\nprint(d) #B\n</CODE_BLOCK>\n\n<CODE_BLOCK>\nSample Program (114)\nd = {'A', 'B' , 'C' , 'D' , 'E'}\nfor i in d:\n    print(d)\na,b,c,d,e = d\nprint(a) #E\nprint(b) #C\nprint(c) #A\nprint(d) #D\nprint(e) #B\n</CODE_BLOCK>\n\nSample Program (113) တွင် unpacking လုပ်သောအခါတွင် a သည် ပထမဆုံး C အကြီးကို ထုတ်ပေး သော်လည်း b အလှည့်တွင် D အကြီးကို ထုတ်ပေးပါသည်။ set ထဲတွင် value များ မည်သို့ နေရာ ယူနေသလဲ ဆိုတာကို သိနိုင်ရန် ပထမဆုံး variable တစ်ခုသို့ assign ထည့်ပါမည်။ ထို့နောက်မှ ထို variable အား iterable လုပ်ပြီး ထုတ်ကြည့်ပါမည်။ Sample Program (114) တွင်ကြည့်ပါ။ 'E', 'C', 'A', 'D', 'B' အဖြစ် နေရာ ယူနေသည်ကို တွေ့ရပါမည်။ ထို့နောက်မှ 'E', 'C', 'A', 'D', 'B' အား a,b,c,d,e ထဲသို့ unpack လုပ်ပါမည်။ ယခုနည်းအတိုင်း unpack လုပ်မည်ဆိုလျှင်တော့ မိမိလိုသလို value and variable များကို ချိန်ညှိ နိုင်သည်။ a နေရာမှာ A ထားနိုင်သလို b နေရာတွင် variable ကိုနေရာ ချိန်းခြင်းဖြင့် B ကိုထားနိုင်သည်။ သတိပြုရန်မှာ ပထမဆုံး iterable သို့မဟုတ် print ထုတ်ကြည့်ရန်လိုအပ်သည်။ သို့မှသာ မိမိလိုသလို ချိန်ညှိ နိုင်မည်ဖြစ်သည်။ အထက်တွင် ဖော်ပြထားသော နည်းလမ်း များ အတိုင်း dictionary ကိုလည်း unpack လုပ်နိုင်ပါသည်။",
        initialCode: "my_dict = {'a': 1, 'b': 2}\nprint(my_dict)",
        exercise: { task: "Loop over dictionary configuration key structures dynamically using iteration.", check: (out) => out.length > 0 },
        quiz: { question: "What error will be triggered if you request index notation my_dict[1] where 1 is not a declared key value?", options: ["TypeError", "KeyError", "IndexError", "SyntaxError"], answer: 1 }
      },
      {
        id: 'l6-7',
        title: "Extended Unpacking (Python 3.5 ထိ အနိမ့်ဆုံး လိုအပ်ပါတယ်)",
        content: "Iterable unpacking သင်ခန်းစာမှာ ညာဘက်မှာ ရှိတဲ့ objects တွေဟာ ဘယ်ဘက်မှာ ရှိတဲ့ variable တွေနဲ့ အရေအတွက် တူနေရင်တော့ အဆင်ပြေပါတယ်။ သို့သော် objects တွေများနေခဲ့မယ်ဆိုရင်တော့ Extending Unpacking ကိုသုံးနိုင်ပါတယ်။ Extended Unpacking အား symbol အနေဖြင့် * (asterisk) ကို သုံးပါတယ်။ Extending Unpacking ကို = ရဲ့ left hand side ရော right hand side မှာပါ အသုံးပြုနိုင်ပါတယ်။ Extended Unpacking မှာ star တစ်လုံးတည်းကိုသာ သုံးလျှင် Dictionary ကို unpack လုပ်သောအခါ Key ကိုသာ ရပါသည်။ Key’s value ကို မရပါ။ Dictionary တွင် Key တင်မကဘဲ Key’s value ပါ လိုချင်သောအခါတွင်မူ double star ( ** ) ကို အသုံးပြုပါတယ်။ သို့သော် သတိပြုရမည့် အရေးကြီးဆုံး အချက်မှာ ** operator ကို LHS ( left hand side) တွင် အသုံးပြုလို့ မရဘဲ RHS(right hand side ) တွင်သာ အသုံးပြုလို့ ရပါသည်။\n\nပထမဆုံးအနေဖြင့် l = [1,2,3,4,5,6] ဟု list တစ်ခု တည်ဆောက်လိုက်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (115)\nl = [1,2,3,4,5,6]\na, *b = l\nprint(a) #1\nprint(b) #[2, 3, 4, 5, 6]\n</CODE_BLOCK>\n\na, *b = l တွင် 1 သည် a ထဲသို့ assignment လုပ်မည်ဖြစ်ပြီး ကျန်သော object များအားလုံးသည် b ထဲသို့ list တစ်ခုအနေဖြင့် assignment လုပ်မည် ဖြစ်သည်။",
        initialCode: "l = [1, 2, 3, 4, 5, 6]\na, *b = l\nprint(a)\nprint(b)",
        exercise: { task: "Run extended unpacking leveraging the asterisk operator to absorb trailing items into a sub-list object container storage layer.", check: (out) => out.length > 0 },
        quiz: { question: "Which operator is strictly required on the RHS context to unpack dictionary values cleanly during dynamic extensions?", options: ["*", "**", "&", "++"], answer: 1 }
      },
      {
        id: 'l6-8',
        title: "List extended unpacking",
        content: "List နှင့် Set တို့ကိုလည်း unpack လုပ်နိုင်သည်။ သို့သော် Set သည် unordered ဖြစ်သောကြောင့် Set ထဲတွင်ရှိသော object များသည် list ကဲ့သို့ အစဉ်လိုက်ပြမည်မဟုတ်ပါ။ အောက်ပါ program ကိုကြည့်နိုင်ပါတယ်။\n\n<CODE_BLOCK>\n# Program 1 (List & String Unpacking)\nl = [1,2,3]\ns = 'XYZ'\nls = [*l, *s]\nprint(ls)\n#output\n#[1, 2, 3, 'X', 'Y', 'Z']\n</CODE_BLOCK>\n\n<CODE_BLOCK>\n# Program 2 (List & Set Unpacking)\nl = [1,2,3]\ns = {'a', 'b', 'c'}\nls = [*l, *s]\nprint(ls)\n#output\n#[1, 2, 3, 'a', 'c', 'b']\n</CODE_BLOCK>\n\nSet နှစ်ခုကိုပေါင်းမည်ဆိုလျှင်လည်း extending unpacking ကိုသုံးနိုင်ပါသေးသည်။ example အနေဖြင့် s1={1,2,3} နှင့် s2={3,4,5} နှစ်ခုကို ပေါင်းမည်ဆိုလျှင် c={ *s1,*s2} ဟု ရေးသားနိုင်သည်။ သို့မဟုတ် union function ကိုလည်း သုံးပြီးရေးသားနိုင်ပါသေးသည်။ c=s1.union(s2) ကို ယခုနည်းအတိုင်းလည်း ရေးသားနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (122)\ns1 = {1,2,3}\ns2 = {3,4,5}\nc = {*s1, *s2}\nprint(c)\nprint(s1.union(s2))\n# {1, 2, 3, 4, 5}\n# {1, 2, 3, 4, 5}\n</CODE_BLOCK>\n\n<CODE_BLOCK>\nSample Program (123)\ns1 = {1,2,3}\ns2 = {3,4,5}\ns3 = {5,6,7}\ns4 = {7,8,9}\nprint(s1.union(s2,s3,s4))\n# {1, 2, 3, 4, 5, 6, 7, 8, 9}\n</CODE_BLOCK>\n\nသတိပြုရန် အချက်မှာ set များကို set{ } ပုံစံဖြင့် unpacking လုပ်ကာ ပေါင်းလျှင်သော်လည်းကောင်း သို့မဟုတ် union ကိုသုံးကာ ပေါင်းလျှင်သော်လည်းကောင်း တူညီသော elements များကို ဖြတ်ထုတ်ပစ်သည်။ ထိုသို့ မဖြစ်စေလိုပါက list[ ] ပုံစံဖြင့် unpacking လုပ်ခြင်းကို သုံးနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (124)\ns1 = {1,2,3}\ns2 = {3,4,5}\ns3 = {5,6,7}\ns4 = {7,8,9}\nprint(s1.union(s2,s3,s4))\ntotal = [*s1, *s2, *s3, *s4]\nprint(total)\n# {1, 2, 3, 4, 5, 6, 7, 8, 9}\n# [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 7]\n</CODE_BLOCK>\n\nset နှင့် union သုံးထားသော Output တွင် 1,2,3,4 … ဟု အစဉ်လိုက်သွားသော်လည်း list ပုံစံဖြင့် unpacking လုပ်ထားသော output တွင်မူ 1,2,3,3,4,5,5….. ဟု အစဉ်လိုက်သွားသည်ကို တွေ့နိုင်ပါသည်။",
        initialCode: "s1 = {1, 2, 3}\ns2 = {3, 4, 5}\ntotal_list = [*s1, *s2]\nprint(total_list)",
        exercise: { task: "Unpack sets into a list wrapper to preserve duplicate elements across combined array sequences.", check: (out) => out.includes("3, 3") || out.length > 0 },
        quiz: { question: "What is the primary difference when combining sets inside a list configuration using * versus using the .union() method?", options: ["The list format keeps duplicates, while union filters them out", "The union method keeps duplicates", "The list format returns an error state", "The union method modifies original elements"], answer: 0 }
      },
      {
        id: 'l6-9',
        title: "String extended unpacking",
        content: "String များကိုလည်း extended unpacking ပြုလုပ်နိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (116)\ns = 'greenhackers'\na, *b = s\nprint(a) # g\nprint(b) # ['r', 'e', 'e', 'n', 'h', 'a', 'c', 'k', 'e', 'r', 's']\n</CODE_BLOCK>\n\nstring များကိုလည်း အထက်ပါ နည်းလမ်းအတိုင်း extended unpacking လုပ်နိုင်သည်။\n\n<CODE_BLOCK>\ns = 'WinHtut'\na, *b, c = s\nprint(a) # W\nprint(b) # ['i', 'n', 'H', 't', 'u']\nprint(c) # t\n</CODE_BLOCK>\n\nSample Program (116) အရ extended unpacking ကို အလယ်မှာထားသောအခါတွင် a သည် ပထမဆုံးစာလုံးကိုယူပြီး c သည် နောက်ဆုံးစာလုံးကို ယူပါသည်။ *b သည် အလယ်မှ ကျန်စာလုံးများအားလုံးကို ယူပါသည်။ နောက်ထပ် variable d အပိုတစ်လုံးထည့်ပြီး စမ်းမည်ဆိုလျှင် a သည် အရှေ့ဆုံးစာလုံး၊ c သည် နောက်ဆုံးအရှေ့ကတစ်လုံး၊ d သည် နောက်ဆုံးစာလုံးကို ယူပြီး *b သည် အလယ်မှ ကျန်စာလုံးများအားလုံးကို ယူပါမည်ု။",
        initialCode: "s = 'Cyber'\nfirst, *middle, last = s\nprint(first, middle, last)",
        exercise: { task: "Unpack a continuous string literal using dynamic placeholders to capture isolated head and tail string indexes.", check: (out) => out.length > 0 },
        quiz: { question: "In a,*b,c = 'WinHtut', what data type does variable 'b' absorb into memory?", options: ["A single string character", "A Python list array containing elements", "A continuous tuple reference", "An integer address link"], answer: 1 }
      },
      {
        id: 'l6-10',
        title: "Tuple extending unpacking",
        content: "Tuple ကိုလည်း extended unpacking လုပ်နိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (117)\nt = ('a', 'b', 'c')\na, *b = t\nprint(a) # a\nprint(b) # ['b', 'c']\n</CODE_BLOCK>\n\ntuple ကိုလည်း extended unpacking လုပ်နိုင်သည်။ သို့သော် ‘b’ , ’c’ သည် list တစ်ခု အနေဖြင့် b ထဲသို့ assignment လုပ်ပါသည်။\n\n( * ) ကို RHS (right hand side) ဘက်မှာ ရေးသားပြီးလည်း သုံးနိုင်သည်။ အောက်ပါ program တွင် list နှစ်ခုကို * သုံးပြီး တစ်ခုတည်းအဖြစ် ပေါင်းပြထားပါသည် -\n\n<CODE_BLOCK>\nl1 = [1,2,3]\nl2 = [4,5,6]\nl = [*l1 , *l2]\nprint(l) #[1,2,3,4,5,6]\n</CODE_BLOCK>\n\nlist နှင့် string တို့လည်း ယခုနည်းအတိုင်းသုံးပြီး ပေါင်းနိုင်ပါသည်။",
        initialCode: "l1 = [7, 8]\nl2 = [9, 10]\ncombined = [*l1, *l2]\nprint(combined)",
        exercise: { task: "Merge distinct sequential lists into a unified single list array using right-hand side dynamic extensions.", check: (out) => out.includes("7") },
        quiz: { question: "When unpacking a tuple structure using a,*b = t, what structure type is allocated to target b?", options: ["Tuple", "List", "Dictionary", "Set"], answer: 1 }
      },
      {
        id: 'l6-11',
        title: "list extended unpacking using tuple",
        content: "အောက်ပါအတိုင်း dynamic nested structures များဖြင့်လည်း unpack လုပ်နိုင်ပါသည် -\n\n<CODE_BLOCK>\nSample Program (118)\na, *b, (c, d, *e) = [1, 2, 3, 'python']\nprint(a) # 1\nprint(b) # [2, 3]\nprint(c) # p\nprint(d) # y\nprint(e) # ['t', 'h', 'o', 'n']\n</CODE_BLOCK>\n\na, *b, (c,d, *e) = [1,2,3,'python'] တွင် a သည် 1 ဖြစ်ပြီး *b သည် 2,3 ကို list တစ်ခု အနေဖြင့် Output ပေးမည်။ ထို့ပြင် c သည် p ဖြစ်ပြီး d သည် y ဖြစ်ပါသည်။ ကျန်သောစာလုံး အားလုံးသည် *e ဖြစ်ပါသည်။\n\nindexing ပုံစံဖြင့်လည်း unpack လုပ်နိုင်ပါသေးသည်။\n\n<CODE_BLOCK>\nSample Program (119)\nl = [1,2,3,'python']\nprint(l[0], l[1:-1] , l[-1][0] , l[-1][1], l[-1][2:])\n# output: 1 [2, 3] p y thon\n</CODE_BLOCK>\n\nSample Program (119) output ကိုကြည့်လျှင် thon သည် string ပုံစံဖြစ်နေပါသေးသည်။ list ပုံစံဖြင့် ရယူလိုပါက list function ကိုသုံးနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (120)\nl = [1,2,3,'python']\nprint(l[0], l[1:-1] , l[-1][0] , l[-1][1], list(l[-1][2:]))\n# output: 1 [2, 3] p y ['t', 'h', 'o', 'n']\n</CODE_BLOCK>\n\nအထက်ပါ ပုံစံ အတိုင်း list function ကို ထည့်ရေးကြည့်မည်ဆိုလျှင် output သည် list ဖြစ်နေပါမည်။ သို့သော် Output အားလုံးသည် ( ) ထဲတွင် ရှိနေပြီး tuple ဖြစ်နေပါသည်။ ထို့ကြောင့် tuple ထဲမှာရှိသော elements များကို အောက်ပါအတိုင်း variable များကိုသုံးပြီး tuple ကို ဖြတ်ထုတ်နိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (121)\nl = [1,2,3,'python']\na,b,c,d,e = l[0], l[1:-1] , l[-1][0] , l[-1][1], list(l[-1][2:])\nprint(a, b, c, d, e)\n#output\n# 1 [2, 3] p y ['t', 'h', 'o', 'n']\n</CODE_BLOCK>",
        initialCode: "l = [1, 2, 3, 'code']\na, *b, (c, *d) = l\nprint(a, b, c, d)",
        exercise: { task: "Run index segment extractions on nested complex variables and pipe the internal values to standard lists configuration targets.", check: (out) => out.length > 0 },
        quiz: { question: "In Sample Program (120), what data format container wrapper turns the suffix string sequence into explicit token array segments?", options: ["tuple()", "list()", "set()", "dict()"], answer: 1 }
      },
      {
        id: 'l6-12',
        title: "Arbitrary Arguments",
        content: "ကျွန်တော်တို့ ကြေညာထားတဲ့ function တစ်ခုထဲကို arguments ဘယ်လောက် ဖြတ်သွားမည်ကို မသိသော အခြေအနေမျိုးတွေမှာဆိုရင် parameters တွေကို ကြိုတင် ကြေညာထားဖို့ ခက်ခဲလှပါတယ်။ Python က ထိုသို့သော အခြေအနေမျိုးတွေကို အကောင်းဆုံး ကိုင်တွယ်ထားပါတယ်။ အဲဒါကတော့ *args ( arbitrary arguments ) ဖြစ်ပါတယ်။ Example အနေဖြင့် myFun ဆိုသည့် function တစ်ခု တည်ဆောက်ပါမည်။ ထို function ထဲသို့ arguments ဘယ်လောက် ဖြတ်လာမည်ကို မသိသောကြောင့် parameter အနေဖြင့် *args လို့သာ ကြေညာထားပါမည်။ `def myFun(*args)` ထို့နောက် ဖြတ်လာသော parameters များအား `print(args)` ဟုရေးကာ print ထုတ်လိုက်ပါမည်။ ထို့နောက် function ကို 1,2,3,4,5 ဆိုသည့် arguments များ ထည့်ပေးပြီး ခေါ်လိုက်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (125)\ndef myFun(*args):\n    print(args)\n\nmyFun(1,2,3,4,5)\n# (1,2,3,4,5)\n</CODE_BLOCK>\n\nSample Program (125) အား run ကြည့်လျှင် output အနေဖြင့် (1,2,3,4,5) ကို ပြန်ရပါမည်။ output ကို သေချာကြည့်လျှင် tuple အနေဖြင့် ပြန်ပေးခြင်းဖြစ်သည်။ list အနေဖြင့် မဟုတ်ပါ။ myFun အား မည်သည့် arguments မှ မထည့်ဘဲ `myFun()` ဟုခေါ်ကြည့်ပါက empty tuple တစ်ခု ရမည်ဖြစ်ပါသည်ု။",
        initialCode: "def custom_logger(*args):\n    print('Logged elements:', args)\n\ncustom_logger('A', 'B', 'C')",
        exercise: { task: "Construct an empty arbitrary argument function loop context block framework configuration structure template pipeline.", check: (out) => out.length > 0 },
        quiz: { question: "What core object structural data architecture is wrapped onto parameters intercepted by *args parameters setups inside Python?", options: ["A basic multi-value index list", "An unchangeable data tuple block layout object reference", "A hash-mapped key dictionary", "A dynamic system sorting set container"], answer: 1 }
      },
      {
        id: 'l6-13',
        title: "Positional arguments and Arbitrary arguments",
        content: "Positional arguments တွေနဲ့ arbitrary arguments နှစ်ခုလုံးကို သုံးပြီးတော့လည်း function တစ်ခုထဲကို pass လုပ်နိုင်ပါတယ်။ သို့သော် positional arguments တွေကို အရင်ရေးရမည် ဖြစ်ပြီး arbitrary argument နောက်တွင် positional argument ကိုထပ်ရေးလျှင် error တက်မည်ဖြစ်ပါသည်ု။\n\n<CODE_BLOCK>\nSample Program (126)\ndef myFun(a,b,*args):\n    print(a) #1\n    print(b) #2\n    print(args) #(3,4)\n\nmyFun(1,2,3,4)\n</CODE_BLOCK>\n\nSample Program (126) ကို run ကြည့်လျှင် output အနေဖြင့် 1 and 2 သည် ပုံမှန်အတိုင်း ရမည်ဖြစ်ပြီး 3,4 သည် tuple တစ်ခုအနေဖြင့် ရမည်ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (127)\ndef myFun(a,b,*args,c):\n    print(a)\n    print(b)\n    print(args)\n\n# myFun(1,2,3,4) # Running this will cause an error if 'c' is not targeted via keyword parameter keys\n</CODE_BLOCK>\n\nအထက်ပါ အတိုင်း arbitrary argument နောက်မှာ parameter တစ်ခု ထပ်ထည့်မည်ဆိုလျှင် error တက်မည်ဖြစ်ပါသည်။ နောက်ထပ် program တစ်ပုဒ်အနေဖြင့် len and sum function များကို အသုံးပြုပြီး average ရှာတဲ့ program တစ်ပုဒ်ရေးပါမည်။ len() function သည် အရေအတွက် ဘယ်လောက်ရှိသလဲ parameter ဘယ်နှစ်ခုရှိသလဲ ဆိုတာကို သိနိုင်သော function ဖြစ်ပြီး sumသည် ထို parameter အားလုံးကို ပေါင်းပေးသော function ဖြစ်သည်။ ဥပမာ အနေဖြင့် len(args) တွင် args ထဲတွင် ပါလာသော parameter အရေအတွက်ကို ပြန်ရမည်ဖြစ်သည်။ sum(args) ဟုသုံးလျှင် args ထဲတွင် ပါလာသော parameter အားလုံးပေါင်းခြင်းကို ရမှာ ဖြစ်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (128)\ndef avg(*args):\n    length = len(args)\n    total = sum(args)\n    return total/length\n\nresult = avg(1,2,3,4)\nprint(result) #2.5\n</CODE_BLOCK>\n\nSample Program (128) ကို run ကြည့်လျှင် output အနေဖြင့် 2.5 ကို ရမည်ဖြစ်သည်။ သတိပြုရန် အချက်မှာ avg() function အား မည်သည့် arguments မှ မထည့်ဘဲခေါ်မည်ဆိုလျှင် ZeroDivisionError ကို ရမည်ဖြစ်သည်။ အဘယ်ကြောင့်ဆိုသော် length သည် zero ဖြစ်နေသောကြောင့် total ကို မစားနိုင်သောကြောင့် ဖြစ်သည်။ ထို့ကြောင့် အထက်ပါ program အား if else ကို သုံးပြီး အောက်ပါအတိုင်း fix လုပ်နိုင်ပါသည်ု။ length သည် zero ဖြစ်နေလျှင် return value အနေဖြင့် zero ကို ပြန်ပေးမည်ဖြစ်ပြီး length သည် zero မဟုတ်မှသာ total ကို length ဖြင့်စားပြီး return value ပြန်ပေးပါမည်။\n\n<CODE_BLOCK>\nSample Program (129)\ndef avg(*args):\n    length = len(args)\n    total = sum(args)\n    if length == 0:\n        return 0\n    else:\n        return total/length\n\nresult = avg()\nprint(result)\n</CODE_BLOCK>\n\nအထက်ပါ program ကို run ကြည့်လျှင် output အနေဖြင့် zero ကိုသာ ရပါမည်။ function ထဲတွင် မည်သည့် arguments မှ မထည့်လိုက်သော်လည်း အရင် Program ကဲ့သို့ error တက်တော့မည် မဟုတ်ပါ။",
        initialCode: "def calc_average(*args):\n    if len(args) == 0: return 0\n    return sum(args) / len(args)\n\nprint(calc_average(10, 20, 30))",
        exercise: { task: "Implement an algorithmic function script capable of handling blank input arrays safely tracking error constraints.", check: (out) => out.length > 0 },
        quiz: { question: "Why does Sample Program (128) produce a ZeroDivisionError runtime exception when invoked without inputs?", options: ["Because sum calculation errors exit early", "Because variable length parses to 0, which cannot act as a mathematical divisor", "Because memory bounds exceed limit capacities", "Because of invalid local assignment bindings"], answer: 1 }
      },
      {
        id: 'l6-14',
        title: "List Pass to Function",
        content: "Python programming မှာ function တစ်ခုထဲကို list တစ်ခုက တိုက်ရိုက် ဖြတ်သွားလို့ ရသော်လည်း အခြားသော parameters များဖြင့် ဖြတ်လျှင်မူ missing argument required ဆိုတဲ့ error တက်ပါတယ်။ သို့သော် extending unpacking ကိုသုံးပြီးတော့ ဖြတ်နိုင်ပါတယ်။ အောက်တွင်ပြထားသော code သည် Error တက်ကြောင်းပြထားခြင်း ဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (130)\ndef myFun(a,b,c):\n    print(a)\n    print(b)\n    print(c)\n\nmyList = [10,20,30]\n# myFun(myList) # This will raise TypeError: missing 2 required positional arguments\n</CODE_BLOCK>\n\nExtended unpacking ကိုသုံးပြီး အောက်ပါအတိုင်းရေးမည် ဆိုလျှင်တော့ error တက်တော့မည် မဟုတ်ဘဲ 10,20,30 တို့ကို unpack လုပ်ပြီးသား output များကို ရပါမည်။\n\n<CODE_BLOCK>\nSample Program (131)\ndef myFun(a,b,c):\n    print(a)\n    print(b)\n    print(c)\n\nmyList = [10,20,30]\nmyFun(*myList)\n</CODE_BLOCK>\n\nSample Program (131) မှာ list ထဲတွင် elements သုံးခုသာရှိ တဲ့အတွက် myFun(a,b,c) ထဲကို ဖြတ်သော အခါ error မတက်ခြင်းဖြစ်သည်။ တကယ်လို့ list ထဲမှာ elements သုံးခု ထက် ပိုသွားသော အခါတွင်မူ ဖြတ်စရာ parameter လိုနေသည့်အတွက် error တက်ပါမည်။ ထိုကဲ့သို့သော ပြဿနာကို ဖြေရှင်းရန် *arbitrary arguments ကို နောက်ဆုံးတွင် ထားပေးခြင်းဖြင့် ဖြေရှင်းနိုင် ပါသည်။\n\n<CODE_BLOCK>\nSample Program (132)\ndef myFun(a,b,*c):\n    print(a) # 10\n    print(b) # 20\n    print(c) # (30, 40, 50, 60)\n\nmyList = [10,20,30,40,50,60]\nmyFun(*myList)\n</CODE_BLOCK>\n\nအထက်ပါ program အား run ကြည့်လျှင် a သည် 10 နှင့် b သည် 20 ကို သွားမည်ဖြစ်ပြီး ကျန်သည့် အားလုံးသည် *c ထဲသို့ သွားမည်ဖြစ်သည်။ု",
        initialCode: "def display_data(x, y, z):\n    print(f'X: {x}, Y: {y}, Z: {z}')\n\ndata_points = [5, 10, 15]\n# Pass it safely using extended unpacking array configuration tools down below\ndisplay_data(*data_points)",
        exercise: { task: "Map element values directly out of list elements containers targeting separate parameters elements explicitly.", check: (out) => out.includes("X:") },
        quiz: { question: "What configuration operator is required inside an execution call context to map array items to positional parameters?", options: ["& operator", "** prefix structural tag", "* asterisk prefix operator tag", "++ suffix mapping"], answer: 2 }
      },
      {
        id: 'l6-15',
        title: "Keyword Argument a Deeper Look",
        content: "Keyword argument အကြောင်းကို အထက်ပိုင်းသင်ခန်းစာတွေမှာ introduction ရေးသားခဲ့ပြီးပါပြီ။ python programming မှာ function တစ်ခုရဲ့ arbitrary arguments နောက်မှာပါလာတဲ့ parameter တွေကို ပုံမှန်တိုင်း ခေါ်ခဲ့မိရင် error တက်ကြောင်းကို အထက်သင်ခန်းစာမှာ ဖော်ပြပြီးပါပြီ။ သို့သော် function လှမ်းခေါ် တဲ့ အချိန်မှာ keyword argument ကို သုံးပြီး arbitrary argument နောက်က parameter ကိုလှမ်းခေါ်နိုင်သည်။ ထိုနည်းအတိုင်း မခေါ်ခဲ့ရင်တော့ required keyword-only argument ဆိုသည့် error တက်မှာပါ။\n\n<CODE_BLOCK>\nSample Program (133)\ndef myFun(a,b,*c,d):\n    print(a) # 1\n    print(b) # 2\n    print(c) # (3, 4, 5)\n    print(d) # 10\n\nmyFun(1,2,3,4,5,d=10)\n</CODE_BLOCK>\n\nSample Program (133) တွင် 1 and 2 သည် a နှင့် b သို့ သွားမည်ဖြစ်ပြီး keyword argument ဖြင့် ခေါ်ထားသော d မှလွဲကာကျန် number များသည် arbitrary argument ဖြစ်သည့် *c သို့ သွားမည်ဖြစ်ပါသည်။\n\nArbitrary argument နှင့် keyword argument ကိုတွဲသုံးလျှင် Python programming တွင် error အနည်းဆုံး ဖြစ်အောင် ရေးသားနိုင်သည်။ ဥပမာအားဖြင့် function ထဲတွင် parameter တစ်ခုတည်းကို သုံးပြီးတော့လည်း ခေါ်နိုင်သည်။ အောက်ပါ program တွင် ကြည့်ပါ။\n\n<CODE_BLOCK>\nSample Program (134)\ndef myFun(*c,d):\n    print(c,d)\n\nmyFun(d='a')\n</CODE_BLOCK>\n\nSample Program (134) အား run ကြည့်လျှင် output အနေဖြင့် empty tuple တစ်ခုနှင့် a ဆိုသည့် value တစ်ခုကို ပြန်ရလာပါမည်။ု",
        initialCode: "def search_node(*args, target):\n    print('Args:', args, 'Target node:', target)\n\nsearch_node(1, 2, 3, target='ALPHA')",
        exercise: { task: "Define an optimized runtime invocation that supplies values to variables placed past arbitrary argument catch blocks configuration contexts.", check: (out) => out.includes("Target") },
        quiz: { question: "In Sample Program (133), why must variable 'd' be assigned explicitly using named parameters syntax blocks?", options: ["Because it runs on global memory layouts", "Because it is situated trailing an arbitrary argument indicator, transforming it automatically into a keyword-only argument constraint", "Because it flags standard runtime indexing checks", "Because it defaults storage limits to zero arrays dynamically"], answer: 1 }
      },
      {
        id: 'l6-16',
        title: "End of Positional Arguments ( * )",
        content: "Python programming မှာ function တစ်ခုကို ခေါ်တဲ့အခါ ပုံမှန်အားဖြင့် positional အလိုက် ဖြတ်သန်းပါတယ်။ သို့သော် positional arguments ဖြတ်ခြင်းကို လက်မခံချင်သော အခြေအနေမျိုးမှာဆိုရင် ( * ) end of positional argument ကို သုံးပါတယ်။ def myFun(*, d) ဆိုပြီး define လုပ်ထားသည့် function မျိုးတွင် မည်သည့် positional arguments ကိုမှ လက်ခံမည်မဟုတ်ဘဲ keyword argument ဖြစ်သည့် d တစ်ခုတည်းကိုသာ လက်ခံမည် ဖြစ်ပါသည်။ * သည် end of positional argument ဖြစ်ပြီး သူ့အရှေ့မှာ အခြားသော positional arguments များ ရှိသေးပါက လက်ခံပြီး သူ့နောက်က မည်သည့် positional arguments ကိုမှ လက်မခံပါ။\n\n<CODE_BLOCK>\nSample Program (135)\ndef myFun(a,b,*,d):\n    print(a,b,d) # 1 2 a\n\nmyFun(1,2,d='a')\n</CODE_BLOCK>\n\nအထက်ပါ ပုံစံအတိုင်း သုံးနိုင်သည်။ 1,2 သည် a နှင့် b ထိ ရရှိပါသည်။ သို့သော် 1,2,3 ဖြစ်လာလျှင်တော့ မရတော့ပါ။ myFun ဆိုတဲ့ function ထဲတွင် positional arguments နှစ်ခုတည်းသာ ကြေညာထားကြောင်းနှင့် သူတို့ထဲသို့ နှစ်ခုထက် ပိုပြီး အဖြတ်မခံကြောင်း error log ကို မြင်ရပါမည်။ error sample program ကို အောက်တွင် ဖော်ပြထားပါသည်။\n\n<CODE_BLOCK>\nError Sample Program (136)\ndef myFun(a,b,*,d):\n    print(a,b,d)\n\nmyFun(1,2,3,d='a')\n\n#output\n# Traceback (most recent call last):\n# File \".\\app.py\", line 3, in <module>\n# myFun(1,2,3,d='a')\n# TypeError: myFun() takes 2 positional arguments but 3 positional arguments (and 1 keyword-only argument) were given\n</CODE_BLOCK>",
        initialCode: "def myFun(a,b,*,d):\n    print(a,b,d)\n\nmyFun(1,2,d='a')",
        exercise: { task: "Try running code for End of Positional Arguments ( * )", check: (out) => out.length > 0 },
        quiz: { question: "What does a bare * indicate in a function parameter list?", options: ["End of positional arguments", "Arbitrary arguments", "Keyword arguments", "Unpacking"], answer: 0 }
      },
      {
        id: 'l6-17',
        title: "**kwargs",
        content: "Python Function ကို ကြေညာရာမှာ နောက်ထပ် parameter အနေဖြင့် သုံးလို့ရတဲ့ **kwargs (keyword arguments) တစ်ခု ရှိပါသေးတယ်။ အရင်သင်ခန်းစာမှာ ရေးသားခဲ့တဲ့ *args ဆိုတဲ့ arbitrary argument သည် data များအား tuple အနေဖြင့် ပြန်ပေးပါသည်။ **kwargs (keyword argument) သည် dictionary အနေဖြင့် ပြန်ပေးပါသည်။ **kwargs ပြီးသွားတဲ့အခါမှာလည်း positional arguments များ ထပ်ပါလို့ မရပါဘူး။ def fun(**kwargs, not allowed)၊ **kwargs လို့ ကြေညာထားပြီး မည်သည့် arguments မှ ဝင်မလာသော အချိန်တွင်မူ empty dictionary ကို return ပြန်ပေးပါသည်။ function call လှမ်းခေါ်တဲ့နေရာမှာလည်း **kwargs နောက်မှာ အခြားသော positional arguments တွေကို ခွင့်မပြုပါဘူး။\n\nReturning dictionary\n\n<CODE_BLOCK>\nExample 1\ndef myFun(**kw):\n    print(kw)\n\nmyFun()\n#output\n#{}\n</CODE_BLOCK>\n\n<CODE_BLOCK>\nExample 2\ndef myFun(**kw):\n    print(kw)\n\nmyFun(a=10,b=20,c=30)\n#output\n#{'a': 10, 'b': 20, 'c': 30}\n</CODE_BLOCK>",
        initialCode: "def myFun(**kw):\n    print(kw)\n\nmyFun(x=10, y=20)",
        exercise: { task: "Try writing code for **kwargs", check: (out) => out.includes("{") },
        quiz: { question: "What data structure type does **kwargs represent inside the function block?", options: ["Tuple", "List", "Dictionary", "Set"], answer: 2 }
      },
      {
        id: 'l6-18',
        title: "End of positional argument and keyword argument",
        content: "End of positional argument ဖြစ်တဲ့ * နဲ့ keyword argument ဖြစ်တဲ့ ** တို့ကို နှစ်ခုကပ်ပြီး သုံးလို့မရပါဘူး။ သုံးမယ်ဆိုလျှင် ကြားထဲမှာ named argument တစ်ခု ရေးပေးရပါမယ်။ ထိုသို့ မထည့်ပေးလျှင် named arguments must follow bare * ဆိုပြီး error ရပါလိမ့်မယ်။\n\n<CODE_BLOCK>\nSample Program (137)\ndef myFun(a,b,*,**kw):\n    print(kw)\n\nmyFun(a=10,b=20,c=30)\n</CODE_BLOCK>\n\nSample Program (137) အတိုင်းရေးလျှင် error တက်မည်ဖြစ်ပါမည်။ ထို့ကြောင့် end of positional argument နှင့် keyword argument များကို အောက်ပါ နည်းလမ်းအတိုင်း တွဲဖက်သုံးရပါမည်။\n\n<CODE_BLOCK>\nSample Program (138)\ndef myFun(a,b,*,na,**kw):\n    print(a) # 10\n    print(b) # 11\n    print(na) # 101\n    print(kw) # {'c': 20}\n\nmyFun(10,11,c=20,na=101)\n</CODE_BLOCK>\n\nSample Program (138) function call ခေါ်ရာ၌ na သည် named argument ဖြစ်သည့်အတွက် positional argument များအတိုင်း အစဉ်လိုက် ထားစရာမလိုဘဲ မိမိအဆင်ပြေသလို ထားနိုင်ပါသည်။",
        initialCode: "def myFun(a,b,*,na,**kw):\n    print(a,b,na,kw)\n\nmyFun(10,11,na=5,status=True)",
        exercise: { task: "Try writing code for End of positional argument and keyword argument", check: (out) => out.length > 0 },
        quiz: { question: "Can a function signature contain a direct block transition like def myFun(*, **kw)?", options: ["Yes", "No", "Only if it returns a list", "Depends on Python version"], answer: 1 }
      },
      {
        id: 'l6-19',
        title: "Simple Function Timer",
        content: "Function call တွေ အားလုံး ခေါ်ပြီးတဲ့ ကြာချိန်ကို တွက်တဲ့ program တစ်ပုဒ် ရေးသားပါမည်။ ယခု Program တွင် time ဆိုသည့် module ကို ခေါ်သုံးပါမည်။ ပထမဆုံး function တစ်ခု တည်ဆောက်ပါမည်။ ထို function ထဲတွင် ပထမဆုံး parameter အနေဖြင့် function တစ်ခု ဖြတ်မည်ဖြစ်ပြီး ဒုတိယနှင့် တတိယသည် arbitrary argument နှင့် keyword argument တို့ ဖြတ်ပါမည်။ ပြီးလျှင် loop ပတ်ရန် rep ဆိုသည့် keyword-only argument တစ်ခု ဖြတ်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (139)\nimport time\ndef myFun(fn,*args,rep=1,**kwargs):\n    start = time.perf_counter()\n    for i in range(rep):\n        fn(*args,**kwargs)\n    end = time.perf_counter()\n    avTime = (end-start)/rep\n    fn(avTime)\n\nmyFun(print,1,2,3,sep=' - ',end=' *** \\n',rep=5)\n#output\n# 1 - 2 - 3 ***\n# 1 - 2 - 3 ***\n# 1 - 2 - 3 ***\n# 1 - 2 - 3 ***\n# 1 - 2 - 3 ***\n# 0.00016967999999999983\n</CODE_BLOCK>\n\nSample Program (139) တွင် line 1 သည် function များကို စခေါ်တဲ့အချိန်နဲ့ ခေါ်ပြီးလို့ ဆုံးသွားတဲ့အချိန်တွေကို သိနိုင်ဖို့ perf_counter() ဆိုတဲ့ function ကို သုံးရပါတယ်။ ထို function သည် time module ကို မိမိတို့ program တွင် ခေါ်သုံးမှသာ သုံးနိုင်ပါသည်။ line 3 တွင် ကြာချိန်စမှတ်ရန် start ဆိုသည့် variable ကို တည်ဆောက်ထားပြီး ထို variable ထဲသို့ perf_counter() မှရသော အချိန်ကို မှတ်ထားပါသည်။ line 4 တွင် for loop ကို သုံးထားပြီး ထို loop တွင် range() function ကို သုံးထားပါသည်။ range() function သည် သူရလာတဲ့ Parameter အကြိမ်အရေအတွက်အတိုင်း အလုပ်လုပ်ပါသည်။ Line 5 တွင် fn သည် function ဖြစ်သည်။ ထို fn နေရာတွင် print function ဝင်ရောက်လာမှာ ဖြစ်ပါတယ်။ line 6 တွင် program က အချိန်ကို perf_counter() function ကို သုံးကာ နောက်တစ်ကြိမ် ထပ်ယူလိုက်ပြီး end ဆိုသည့် variable ထဲသို့ သိမ်းထားပါသည်။\n\nယခု program တွင် perf_counter() function ကို နှစ်ခါသုံးထားပါသည်။ ပထမတစ်ခါသည်လည်း အချိန်တစ်ခုကိုယူပြီး ဒုတိယတစ်ခါသည်လည်း အချိန်တစ်ခုကို ယူပါသည်။ ပထမတစ်ခုအချိန်သည် function call မခေါ်ခင် အချိန်ဖြစ်ပြီး ဒုတိယတစ်ခါသည် function call ခေါ်ပြီးချိန်ဖြစ်ပါသည်။ ပထမအချိန်ထဲက ဒုတိယကြာချိန်ကို နှုတ်ရင် ကြာချိန်ရလာပါမည်။ ထိုကြာချိန်အား အကြိမ်အရေအတွက်ဖြင့် ပြန်စားလျှင် average ကြာချိန် ပြန်ရပါမည်။ ထိုအကြောင်းအရာကို Line 7 တွင် ရေးထားပါသည်။ line 8 သည် average time ကို ပြန်ထုတ်ပြခြင်း ဖြစ်သည်။ line 9 သည် လိုအပ်သော argument များ ထည့်ပြီး function call ခေါ်ခြင်း ဖြစ်သည်။\n\nProgram output ရဲ့ နောက်ဆုံးတွင် ဖော်ပြထားသော number များသည် average time ဖြစ်သည်။ ထိုအချိန်သည် မိမိတို့ သုံးထားသော environment သို့မဟုတ် version ပေါ်မှာ မူတည်ပြီး ကွဲပြားနိုင်ပါသည်။ ပထမတစ်ကြိမ် run သောအချိန်နှင့် ဒုတိယတစ်ကြိမ် run သော ကြာချိန်တို့မှာလည်း ကွဲပြားနိုင်ပါသည်။",
        initialCode: "import time\ndef myFun(fn,*args,rep=1,**kwargs):\n    start = time.perf_counter()\n    for i in range(rep):\n        fn(*args,**kwargs)\n    end = time.perf_counter()\n    fn((end-start)/rep)\n\nmyFun(print, 'Hello Code', rep=3)",
        exercise: { task: "Try writing code for Simple Function Timer", check: (out) => out.length > 0 },
        quiz: { question: "Which function from the time module is used in Sample Program (139) to measure system benchmark intervals accurately?", options: ["time.time()", "time.perf_counter()", "time.clock()", "time.sleep()"], answer: 1 }
      },
      {
        id: 'l6-20',
        title: "Default Values",
        content: "Default Values problem ကိုဖြေရှင်းရန် sample program တစ်ပုဒ် စတင်ရေးသားပါမည်။ ယခု program တွင် date and time ကိုလိုချင်တဲ့အတွက် Python programming ရဲ့ datetime module ကို ခေါ်သုံးပါမည်။ အခြားသော c/c++ programs များတွင် library or module များကိုခေါ်သုံးချင်ပါက #include ကိုသုံးပြီး node.js တွင်မူ require ကိုသုံးပါသည်။ Python programming တွင်မူ `from datetime import datetime` ဟုသုံးပါသည်။ from နောက်မှ စာသားသည် module name ဖြစ်သည်။ python တွင် datetime module ထဲမှ utcnow() ဆိုသည့် function ကိုခေါ်သုံးလျှင် ယခုလက်ရှိ နာရီ အချိန် နေ့ ရက် ခုနှစ်များကို ရရှိပါသည်။\n\n<CODE_BLOCK>\nSample Program (140)\nfrom datetime import datetime\ntime = datetime.utcnow() #object\nprint(time) #string representation\n</CODE_BLOCK>\n\nအထက် Sample Program (140) ကို run ကြည့်ပါက 2020-05-07 03:41:28.255490 date and time ကိုရပါမည်။ program ကို နောက်ထပ်တစ်ကိမ် ထပ် run ကြည့်ပါက မတူညီသည့်အချိန်ကို ထပ်ရပါမည်။ datetime.utcnow() ကို function parameter အနေဖြင့် အောက်ပါအတိုင်း သုံးပါမည်။\n\n<CODE_BLOCK>\nSample Program (141)\nfrom datetime import datetime\ndef time_fun(msg,*,dt=datetime.utcnow()):\n    print('{0}:{1}'.format(dt,msg))\n\ntime_fun('Text message1',dt='2019-09-22 00:00:12.0000')\n</CODE_BLOCK>\n\nSample Program (141) ကို run ကြည့်ပါက argument အနေဖြင့် ထည့်ပေးလိုက်သော time and date များကိုပြန်လည်ရရှိပါမည်။ အထက်တွင် ဖော်ပြထားသော program တွင် datetime.utcnow() function သည် time_fun() မှ ထည့်ခေါ်လိုက်သော keyword only argument အတိုင်း ပြန်လည်ဖော်ပြပေးပါသည်။ အကယ်၍သာ time_fun() ဆိုသည့် function call ခေါ်သည့်နေရာတွင် Text message ဆိုသည့် positional argument တစ်ခုတည်းကိုသာ ထည့်ပေးလိုက်ပါက Text message 1 ကိုလည်း ပြန်လည်ဖော်ပြပေးမည်ဖြစ်ပြီး ယခုလက်ရှိ အချိန်နှင့် နေ့ ရက်တို့ကိုလည်း ပြန်လည်ဖော်ပြပေးပါမည်။ အောက်ပါ program တွင် လေ့လာနိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (142)\nfrom datetime import datetime\ndef time_fun(msg,*,dt=datetime.utcnow()):\n    print('{0}:{1}'.format(dt,msg))\n\ntime_fun('Text message1')\n#output\n# 2020-05-07 03:43:14.667376:Text message1\n</CODE_BLOCK>\n\nအထက်ပါ program တွင် time_fun(‘Text message 2’) ဟုရေးပြီး program ကို ပြန် run ကြည့်ပါ။ output တွင် date and time တို့သည် လက်ရှိ current အချိန်ကို ဖော်ပြမလဲဘဲ အရင်တစ်ခေါက် run ထားသော date and time ကိုသာ ပြန်လည်ဖော်ပြပါသည်။\n\nထိုအကြောင်းခြင်းအရာကို default values problem ဟုခေါ်ဆိုခြင်းဖြစ်သည်။ ထိုပြဿနာ ဖြစ်ပွားလာရခြင်းမှာ time_fun ဆိုသည့် function ကို စတင်ကြေညာလိုက်ကတည်းက datetime.utcnow() နေရာတွင် value တစ်ခုကို create လုပ်ပြီးဖြစ်သည်။ ထို value သည် lifetime ရှိနေသောကြောင့် ပြန် run သောအခါတွင်လည်း အရင် value ကိုသာ ပြန်ရနေခြင်းဖြစ်သည်။ ထို default values problem ကို ဖြေရှင်းရန် function ကြေညာသောအချိန်၌ dt ဆိုသည့် keyword argument နေရာတွင် မည်သည့် value မှ assign မလုပ်ဘဲ None ဆိုပြီးသာ ကြေညာသင့်သည်။ ပြီးမှ ထို function body ထဲတွင် dt ထဲသို့ မိမိထည့်ချင်သော date and time များကို assign လုပ်ရပါမည်။ sample program ကိုအောက်တွင် ဖော်ပြထားသည်။\n\n<CODE_BLOCK>\nSample Program (143)\nfrom datetime import datetime\ndef time_fun(msg,*,dt=None):\n    if not dt:\n        dt=datetime.utcnow()\n    print('{0}:{1}'.format(dt,msg))\n\ntime_fun('Text message solved 1')\n#output\n# 2020-05-07 03:44:38.539994:Text message solved 1\n</CODE_BLOCK>\n\nSample Program (143) တွင်ရေးသားထားသော None သည် None datatype ဖြစ်ပြီး မည်သည့် value မှ assign မလုပ်လိုသောအခါတွင် အသုံးပြုပါသည်။ none သည် null ဖြစ်ပြီး မည်သည့် value မှ မဟုတ်သလို 0 zero လည်း မဟုတ်ပါ၊ Boolean အနေဖြင့် False လည်း မဟုတ်ပါ။ if not dt ဆိုလိုသည်မှာ dt သည်ဘာမှမဟုတ်ဘူးဆိုရင် သူအောက်က code များကို အလုပ်ဆက်လုပ်ပေးပါသည်။ တကယ်လို့သာ time_fun() ထဲတွင် dt=1 ဟုထည့်ပေးလိုက်ပါက return value အနေဖြင့် date and time ကိုပြန်မရတော့ဘဲ 1 ကိုသာပြန်ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် dt သည် 1 ဖြစ်သွားသောကြောင့် ဖြစ်သည်။ သတိပြုရန်မှာ dt သည် မည်သည့် value မှ မဟုတ်မှသာလျှင် dt ထဲသို့ date and time ကို assign လုပ်မည်ဖြစ်သည်။",
        initialCode: "from datetime import datetime\ndef time_fun(msg, *, dt=None):\n    if dt is None:\n        dt = datetime.utcnow()\n    print(f\"{dt}: {msg}\")\n\ntime_fun(\"Consolidated Dynamic Default Evaluation\")",
        exercise: { task: "Implement parameter initializations using None validation barriers to counter static evaluation traps.", check: (out) => out.length > 0 },
        quiz: { question: "Why do functions compiled with parameters like dt=datetime.utcnow() retain locked static values across repetitive calls?", options: ["Because memory leaks bypass evaluation states", "Because argument defaults are evaluated exactly once when the function is parsed/defined, rather than dynamically on execution loops", "Because global threads alter compiler channels", "Because numbers fall back to zero states"], answer: 1 }
      },
      {
        id: 'l6-21',
        title: "Parameter Defaults problem",
        content: "ယခုတစ်ခါတွင် ကောင်းမွန်သော Default Parameter ခေါ်ယူပုံနှင့် ဖြစ်ပွားတတ်သော ပြဿနာများကို လေ့လာကြည့်ပါမည်။ ပထမဆုံးအနေဖြင့် အောက်ပါ program ကို လေ့လာကြည့်ပါ။\n\n<CODE_BLOCK>\nSample Program (144)\ndef shop(name,quantity,unit,grocery_list):\n    grocery_list.append(\"{0} {1} {2}\".format(name,quantity,unit))\n    return grocery_list\n\nstore1 = []\nstore2 = []\nshop('banana',2,'units',store1)\nshop('milk',1,'liter',store2)\nprint(store1) # ['banana 2 units']\nprint(store2) # ['milk 1 liter']\n</CODE_BLOCK>\n\nSample Program (144) အား run ကြည့်လျှင် မိမိတို့ ထည့်ပေးလိုက်သော parameter များအတိုင်း အောက်ပါအတိုင်း ရရှိပါမည်။\n`['banana 2 units']`\n`['milk 1 liter']`\n\nLine number 6 shop function call တွင် normal arguments သုံးခုနှင့် list argument တစ်ခု ထည့်ပေးလိုက်သည်။ ထို့နောက် name , quantity and unit တို့သည် format အတိုင်း grocery_list ဆိုသည့် list ထဲသို့ အစဉ်လိုက် append (ထပ်ထည့်) ပါသည်။ ပြီးနောက် grocery_list ကို return ပြန်ပေးပါသည်။ သတိပြုရန်မှာ grocery_list သည် store1 ဆိုသည့် argument မှ လာခြင်းဖြစ်သည့်အတွက် grocery_list ထဲသို့ ထည့်လိုက်သော data များသည် store1 ဆိုသည့် list ထဲသို့ ရောက်ရှိသွားပါသည်။ print(store1) ဟုရေးလိုက်သောအခါ output အနေဖြင့် store1 ထဲတွင် append လုပ်ထားသော data များကို list အနေဖြင့် ပြန်လည်ဖော်ပြပေးခြင်းဖြစ်သည်။ ထိုနည်းတူပင် line number 7 တွင် milk,1,liter တို့သည်လည်း format အတိုင်း grocery_list ထဲသို့ append လုပ်ပါသည်။ ယခုတစ်ခါတွင် grocery_list သည် store2 ဖြစ်သည့်အတွက် store2 ကို print ထုတ်လိုက်သောအခါတွင် milk,1,liter တို့ကို list တစ်ခု အနေဖြင့် မြင်ရခြင်းဖြစ်သည်။\n\nprogram ကို ဒုတိယအကြိမ် ပြင်ဆင်ပြီး ထပ်မံလုပ်ဆောင်ကြည့်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (145)\ndef shop(name,quantity,unit,grocery_list=[]):\n    grocery_list.append(\"{0} {1} {2}\".format(name,quantity,unit))\n    return grocery_list\n\nstore1 = shop('python',1,'book')\nshop('java',1,'book',store1)\nprint(store1) #['python 1 book', 'java 1 book']\n</CODE_BLOCK>\n\nline number 4 တွင် shop function ကို parameter သုံးခုထည့်ပြီး လှမ်းခေါ်ပါသည်။ ထို့နောက် function မှ return ပြန်လာသော value ကို store1 ထဲတွင် သိမ်းထားပါသည်။ ထို့ကြောင့် store1 ထဲတွင် python 1 book ရှိနေပါမည်။ line number 5 တွင် shop function ကို နောက်တစ်ခါ ထပ်ခေါ်ပါသည်။ ယခုအခါတွင်မူ store1 ဆိုသည့် list တစ်ခုပါ ထပ်ပေးလိုက်ပါသည်။ store1 ဆိုသည့် List ထဲတွင် line 4 က python 1 book ရှိနှင့်နေပြီး နောက်တစ်ခေါက် function call ခေါ်သောအခါတွင် ပါဝင်သွားသော parameter တို့သည် နဂိုမူရင်းရှိပြီးသား data နောက်တွင် နေရာယူမည် ဖြစ်ပါသည်။ ထို့ကြောင့် အထက်ပါ program ကို run ပြီးသောအချိန်တွင် store1 ထဲ၌ python 1 book , java 1 book တို့ output အနေဖြင့် ထွက်လာသည်ကို မြင်ရပါသည်။\n\nယခု တတိယအကြိမ် ထပ်မံစမ်းသပ်ကြည့်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (146)\ndef shop(name,quantity,unit,grocery_list=[]):\n    grocery_list.append(\"{0} {1} {2}\".format(name,quantity,unit))\n    return grocery_list\n\nstore1 = shop('python',1,'book')\nshop('java',1,'book',store1)\nstore2 = shop('c++',1,'book')\nprint(store1)\nprint(store2)\n</CODE_BLOCK>\n\nအထက်ပါ အတိုင်းရေးပြီး program ကို run ကြည့်လျှင် အောက်ပါအတိုင်း ထူးဆန်းစွာ ရရှိပါမည် -\n`['python 1 book', 'java 1 book', 'c++ 1 book']`\n`['python 1 book', 'java 1 book', 'c++ 1 book']`\n\nLine number 6 တွင် shop function ကို လှမ်းခေါ်သောအချိန်၌ c++ 1 book တို့ကို parameter အနေဖြင့် ထည့်ပေးလိုက်သော်လည်း line number 8 တွင် print ထုတ်သောအခါ၌ အရင် run ထားသော data များပါ output အနေဖြင့် ပြန်လည်ပါဝင်လာသည်ကို တွေ့ရသည်။ အဘယ်ကြောင့်ဆိုသော် shop ဆိုသည့် function ကို ကြေညာလိုက်သည်နှင့် တပြိုင်နက် default list တစ်ခုတည်းကိုသာ memory ပေါ်တွင် ဆောက်လိုက်သောကြောင့် ဖြစ်သည်။ grocery_list နေရာတွင် list အသစ်တစ်ခုကို မထည့်မချင်း ၎င်းဆောက်ထားပြီးသား default list တစ်ခုတည်းကိုသာ ဆက်တိုက်သုံးနေမည်ဖြစ်သည်။ program ပြီးဆုံးသော အခါ၌ store1 နှင့် store2 တို့အား memory address တစ်ခုတည်း၌ data များကို သိုလှောင်ပါသည် ထို့ကြောင့် store1 and store2 တို့သည် memory address တူနေသောကြောင့် data များလည်း တူနေကြသည်။\n\n`if store1 is store2: print(\"same\")` ဟု စစ်ကြည့်လျှင် \"same\" ဟု ထွက်လာပါလိမ့်မည်။\n\nအထက်ပါကဲ့သို့ data များတူညီနေသော (Mutable Default Argument) ပြဿနာကို ဖြေရှင်းရန် None ကို သုံးပြီး function body ပိုင်းရောက်မှ grocery_list ကို list အသစ်တစ်ခု ဖန်တီးရပါမည်။ မိမိတို့ လိုချင်သည်မှာ function call ကို ခေါ်သောအခါ၌ list ကိုထည့်ပေးလိုက်လျှင် list တစ်ခုကို မဖန်တီးတော့ဘဲ if statement ကို ကျော်ကာ parameter အနေဖြင့် ဝင်လာသော list ထဲတွင် data များကို ပေါင်းကာ Output အနေဖြင့် ပြရမည်။ function call ခေါ်ရာ၌ မည်သည့် list မှ မထည့်ပေးလိုက်လျှင် list ကို if statement အောက်တွင်ဖန်တီးပြီး ဝင်လာသော parameter များကို list တစ်ခုဖြင့် return value ပြန်ပေးရမည်။ ထိုသို့ program ကောင်းမွန်စွာ အလုပ်လုပ်နိုင်ရန် parameter list နေရာ၌ None ကိုသုံးရမည်။ None ကိုသုံးခြင်းသည် အလိုအလျောက် shared list create ဖြစ်ခြင်းကို ကာကွယ်နိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (147)\ndef shop(name,quantity,unit,grocery_list=None):\n    if not grocery_list:\n        grocery_list = []\n    grocery_list.append(\"{0} {1} {2}\".format(name,quantity,unit))\n    return grocery_list\n\nstore1 = shop('python',1,'book')\nshop('java',1,'book',store1)\nstore2 = shop('c++',1,'book')\nprint(store1)\nprint(store2)\nif store1 is store2:\n    print(\"same\")\nelse:\n    print(\"not same\")\n\n#output\n# ['python 1 book', 'java 1 book']\n# ['c++ 1 book']\n# not same\n</CODE_BLOCK>\n\nယခုအခါတွင်မူ Memory address များလည်း တူတော့မည် မဟုတ်သောကြောင့် not same ဆိုသည့် output ကိုသာ ရပါမည်။",
        initialCode: "def add_item(item, item_list=None):\n    if item_list is None:\n        item_list = []\n    item_list.append(item)\n    return item_list\n\nprint(add_item('A'))\nprint(add_item('B'))",
        exercise: { task: "Fix a mutable list default argument issue by replacing the default instantiation pattern with a standard None conditional assignment check block.", check: (out) => !out.includes("['A', 'B']") },
        quiz: { question: "Why does declaring grocery_list=[] as a default parameter directly cause store1 and store2 to share data dynamically?", options: ["Because list parameters are completely deleted automatically", "Because Python evaluates default expressions once at function definition time, binding all empty invocations to the exact same mutable list object inside memory", "Because if statements bypass integers", "Because the terminal runs inside a shared thread sync module"], answer: 1 }
      },
      {
        id: 'l6-22',
        title: "Docstrings",
        content: "Docstrings ဆိုတာ Document Strings ကိုဆိုလိုခြင်းဖြစ်ပါတယ်။ Docstrings ကို ဘယ်နေရာမှာသုံးသလဲ ဆိုရင် python ရဲ့ built-in function ဖြစ်တဲ့ print function အကြောင်းကို သိစေရန် `help(print)` လို့ ရေးကြည့်ပါ။ အောက်ပါအတိုင်း စာသားများ ပေါ်လာပါမည်။ ထိုစာသားများသည် docstrings ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\nhelp(print)\n# Help on built-in function print in module builtins:\n# print(...)\n# print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)\n# Prints the values to a stream, or to sys.stdout by default.\n# Optional keyword arguments:\n# sep: string inserted between values, default a space.\n# end: string appended after the last value, default a newline.\n</CODE_BLOCK>\n\nအထက်တွင်ပေါ်လာသော အကြောင်းအရာများသည် print အတွက် ရေးထားသော docstrings များဖြစ်ပြီး ထိုနည်းတူ int အကြောင်းကိုသိချင်ရင်လည်း `help(int)` လို့ ရိုက်လိုက်ရင် class int နဲ့ ပတ်သက်သော အကြောင်းအရာများကို မြင်ရပါမည်။ built-in ပါဝင်သော function များမှာ ထိုကဲ့သို့ docstrings များရှိ သကဲ့သို့ မိမိတို့ ဖန်တီးလိုက်သော module , function , class or method တွေမှာလည်း docstrings တွေ ရှိသင့်ပါတယ်။ Function or Class တွေရဲ့ docstrings တွေကို ဖန်တီးတဲ့အချိန်မှာ header ပိုင်း ပြီးသည်နှင့် တပြိုင်နက် body ပိုင်းရဲ့ ထိပ်ဆုံးမှာ ရေးသားရပါမည်။\n\n<CODE_BLOCK>\nSample Program (148)\ndef myFun(x, y):\n    \"\"\" return x*y\"\"\"\n    return x*y\n\nhelp(myFun)\n</CODE_BLOCK>\n\nအထက်ပါအတိုင်း program ကိုရေးပြီး run ကြည့်မည်ဆိုလျှင် help command မှတစ်ဆင့် `return x*y` ဆိုသည့် ရှင်းလင်းချက်စာသားကို စနစ်တကျ ထုတ်ပြပေးမှာ ဖြစ်ပါတယ်။ Docstrings ကိုရေးတဲ့အခါမှာ triple quotes ကို သုံးသင့်ပါတယ်။ Triple quotes ကိုသုံးခြင်းအားဖြင့် Docstrings ထဲမှာ တခြားသော စာသားများကိုလည်း အကြောင်းအရာအလိုက် လိုင်းအများကြီး ခွဲထည့်နိုင်ပါတယ်။\n\nတစ်ချက်သတိပြုရန်မှာ Docstrings သည် string ဖော်ပြချက်ဖြစ်ပါတယ်။ comment မဟုတ်ပါဘူး။ python programming တွင် comment သည် # sign နှင့် ရေးရပြီး program က comment ကို လုံးဝ မသိပါဘူး။ သို့သော် docstring သည် triple quotes နဲ့ ရေးပြီး program က သိပါတယ်။ ထို့ကြောင့် body ၏ ပထမဆုံးစာကြောင်းမှာ ရေးသားရခြင်း ဖြစ်သည်။ အောက်ပါအတိုင်း ရေးသားပါက ပထမဆုံးလိုင်း မဟုတ်သော ဒုတိယမြောက် docstring ကို help() က ဖော်ပြပေးမည် မဟုတ်ပါ။\n\n<CODE_BLOCK>\nSample Program (149)\ndef myFun(x, y):\n    #This is comment\n    'This is first line'\n    \"\"\" return x*y\"\"\"\n    return x*y\n\nhelp(myFun)\n</CODE_BLOCK>\n\nSample Program (149) ကို run ပြီးသောအချိန်တွင် `return x*y` ဆိုသည့် docstring သည် ပြန်လာမည်မဟုတ်ပါ။ အဘယ်ကြောင့်ဆိုသော် 'This is first line' ဆိုသည့် စာသားကို အရင် ရေးထားသောကြောင့် ဖြစ်သည်။ ထို့ကြောင့် မိမိ ရေးချင်သော docstrings သည် function ၏ first line အဖြစ်သာ တည်ရှိရပါမည်။ docstring များကို `__doc__` အထူး attribute ကိုသုံးပြီးတော့လည်း တိုက်ရိုက် ကြည့်နိုင်ပါတယ်။ `print(myFun.__doc__)` လို့ ရေးရင် ရိုးရှင်းစွာ တွေ့ရပါလိမ့်မည်။\n\n<CODE_BLOCK>\nSample Program (150)\ndef myFun(x, y):\n    \"\"\"documentation for myFun\"\"\"\n    return x*y\n\nprint(myFun.__doc__)\n</CODE_BLOCK>",
        initialCode: "def multiply(x, y):\n    \"\"\"Calculates and returns the product of x and y.\"\"\"\n    return x * y\n\nprint(multiply.__doc__)",
        exercise: { task: "Add a valid single-line string description inside a function body context tracking its dynamic documentation behavior using __doc__.", check: (out) => out.length > 0 },
        quiz: { question: "What is the primary technical difference between a standard comment (#) and a docstring inside Python?", options: ["Comments use triple quotes symbols layout models", "Comments are completely stripped by the compiler, while docstrings are kept and stored inside the object's __doc__ attribute dynamically", "Docstrings trigger syntax check loops", "Comments modify integer storage limits"], answer: 1 }
      },
      {
        id: 'l6-23',
        title: "Function Annotations",
        content: "Functions တွေရဲ့ body ပိုင်းမှာ document တွေ ဖော်ပြဖို့အတွက် docstrings ကိုသုံးပြီး function ရဲ့ parameter တွေနဲ့ return တွေကို document အနေနဲ့ ဖော်ပြဖို့အတွက် ဆိုရင်တော့ annotations ကိုသုံးပါတယ်။ Python programming ရဲ့ features အသစ်တွေကို အမြဲဖော်ပြတဲ့ PEP (Python Enhancement Proposal) ရဲ့ 3017 (သို့မဟုတ် 3107) မှာ Annotations ရေးသားပုံတွေကို ဖော်ပြထားပါတယ်။ Python 3 မှာ စတင်မိတ်ဆက်ခဲ့တာ ဖြစ်ပြီး ပုံစံမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည် -\n\n`def myFun(a: <expression> , b: <expression>) -> <expression>:`\n\na နောက်တွင်ရေးထားသော expression နေရာတွင် မိမိ ရေးသားလိုသော document သို့မဟုတ် data type များကို ရေးသားနိုင်ပြီး b နောက်တွင်လည်း ထို parameter အတွက် document များကို ရေးသားနိုင်သည်။ annotation တွင် return value အတွက် `->` ကိုသုံးပါသည်။ ထို `->` တွင်ရေးထားသော expression နေရာတွင် ယခု function အတွက် return ပြလိုသော document သို့မဟုတ် အမျိုးအစားကို ရေးနိုင်သည်။ ဥပမာ အနေဖြင့် a ၏ expression နေရာတွင် string ဖြစ်ကြောင်း ဖော်ပြနိုင်သလို b ၏ expression နေရာတွင် integer ဖြစ်ကြောင်း ဖော်ပြနိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (151)\ndef myFun(x: 'annotation of x', y: 'annotation of y') -> 'annotation of function return':\n    return x*y\n\nprint(myFun.__annotations__)\n</CODE_BLOCK>\n\nSample Program (151) ကို run ကြည့်လျှင် အောက်ပါအတိုင်း output များကို Dictionary ပုံစံဖြင့် key and value တွဲလျက် သပ်ရပ်စွာ ရရှိလာပါမည် -\n`{'x': 'annotation of x ', 'y': 'annotation of y', 'return': 'annotation of function return'}`\n\nannotations နှင့် docstring ကို ပေါင်းပြီးတော့လည်း အောက်ပါအတိုင်း တွဲဖက်ရေးသားနိုင်ပါသေးသည် -\n\n<CODE_BLOCK>\nSample Program (152)\ndef myFun(x: 'annotation of x', y: 'annotation of y') -> 'annotation of function return':\n    \"\"\"This is documentation for myFun\"\"\"\n    return x*y\n\nprint(myFun.__doc__)\nprint(myFun.__annotations__)\n</CODE_BLOCK>\n\nနောက်ထပ် ဥပမာတစ်ခုအနေဖြင့် နံပါတ်နှစ်ခုထဲက ကြီးတဲ့နံပါတ်ကို ရှာပြီး အခြားနံပါတ်တစ်ခုနှင့် မြှောက်ပေးမည့် function တစ်ခုတွင် annotation ကို expression statement ပုံစံဖြင့် dynamic ထည့်သွင်း ရေးသားပုံကို လေ့လာကြည့်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (153)\nx = 3\ny = 5\ndef myFun(a):\n    return a*max(x,y)\n\ndata = myFun(2)\nprint(data) # 10\n</CODE_BLOCK>\n\n၎င်းကို docstrings and annotations များဖြင့် အောက်ပါအတိုင်း စနစ်တကျ ပြောင်းလဲ တည်ဆောက်နိုင်ပါသည် -\n\n<CODE_BLOCK>\nSample Program (154)\nx = 3\ny = 5\ndef myFun(a: 'some character') -> 'multiply ' + str(max(x,y)) + ' times':\n    \"\"\"doc... Will return multiply by a of max \"\"\"\n    return a*max(x,y)\n\ndata = myFun(2)\nprint(data)\nprint(myFun.__doc__)\nprint(myFun.__annotations__)\n</CODE_BLOCK>\n\nLine number 3 ကို ကြည့်ပါ `str(max(x,y))` ကဲ့သို့သော dynamic statements များကိုလည်း annotations ထဲ၌ ထည့်ရေးနိုင်ပါသည်။ ယခုနည်းကို သုံးခြင်းဖြင့် document များကို ပိုမိုတိကျ ရှင်းလင်းစွာ တည်ဆောက်နိုင်မည် ဖြစ်သည်။",
        initialCode: "def process_data(name: str, age: int) -> str:\n    return f\"{name} is {age} years old\"\n\nprint(process_data.__annotations__)",
        exercise: { task: "Incorporate inline static structural metadata parameter identifiers mapping target expected string inputs cleanly inside function headers.", check: (out) => out.includes("return") },
        quiz: { question: "Which specific python built-in framework attribute records inline custom header annotations expressions metadata inside dictionaries?", options: ["__doc__", "__dict__", "__annotations__", "__metadata__"], answer: 2 }
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
        content: "def myFun(x):\nreturn x*2\nပံုမှန် function တစ်ခုကို ေကြငာမယ်ဆိုရင် def ဆိုတဲ့ keyword ကိုသံု းရသလို ထို\nfunction ရဲ function name ကိုလည်း ထည့်ေပးရပါတယ်။ သိ ေသာ် lambda function တွင်မူ\ndef လည်း မသံုးသလို function name ကိုလည်း ေရးေပးစရာမလိုပါဘူး။ ထိုနည်းတူ return\nြပန်ရန် အတွက်လည်း return ဆိုသည့် keyword ကိုသံု းေပးစရာမလိုပါဘူး ။ ထိုကဲ့သိ\nfunction name var_a မှိ တဲ့အတွက် anonymous function လိ လည်းေခ ကပါတယ်။",
        initialCode: "# ပုံမှန် function ကြေညာခြင်း ပုံစံ\ndef myFun(x):\n    return x * 2\n\nprint(myFun(5))",
        exercise: { task: "Run a normal definition structure block function invocation to verify baseline calculations.", check: (out) => out.length > 0 },
        quiz: { question: "What is a lambda function commonly called because it lacks an explicit function name identifier?", options: ["Standard Function", "Anonymous Function", "Global Function", "System Block Method"], answer: 1 }
      },
      {
        id: 'l7-2',
        title: "Declaration of lambda function",
        content: "lambda y: y*2\nlambda function ကို ေကြငာရန် lambda ဆိုတဲ့ keyword ကို သံု းပါတယ်။\nသ ေနာက်မှာ ေကြငာထားတဲ့ y သည် parameter ြဖစ်ပီး function header အဆံု းကို colon နဲ့\nြပပါတယ်။ y*2 ထို lambda function ရဲ return value ြဖစ်ပါတယ်။ return value သည်\nfunction object အေနနဲ့ return value ြပန်ေပးမှာ ြဖစ်တဲ့အတွက် variable ထဲသိ လည်း assign\nလုပ်ိုင်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (155)\nx=lambda y: y*2\nprint(x(3))\n</CODE_BLOCK>\n\nSample Program (155) ကို run ကည့်လင် 6 ကို ြပန်ရပါမည်။ lambda သည် function\nobject ကို ြပန်ေပးပါသည်။ ထိ ေကာင့် x သည် function object ြဖစ်သွားပီး x ထဲတွင်\nparameter အေနြဖင့် 3 ကို ထည့်လိ ရြခင်းြဖစ်သည်။ parameter အေနြဖင့်\nထည့်ေပးလိုက်ေသာ 3 သည် y ေနရာတွင် ဝင်ေရာက်သွားမည်ြဖစ်ပီး y*2 ဆိုေသာေကာင့်\noutput အေနြဖင့် 6 ကို ရှိ ြခင်း ြဖစ်သည်။ ထို program ထဲတွင် print(x) ဟု ေရးပီ း run\nကည့်ပါက ေအာက်ပါအတိုင်း function lambda ကို ရှိ ပါမည်။ မိမိအသံု းြပေသာ python\nversion အေပမူတည်ပီး output မှာလည်း အနည်းငယ်ကွဲြပားိုင်ပါသည်။\n\n<CODE_BLOCK>\nx=lambda y: y*2\nprint(x)\n# <function <lambda> at 0x0000020B64BA8AF0>\n</CODE_BLOCK>",
        initialCode: "x = lambda y: y * 2\nprint(x(10))",
        exercise: { task: "Create and invoke a standard parameter expression lambda block calculation.", check: (out) => out.includes("20") },
        quiz: { question: "In a lambda structure, what token separates the initial input parameters from the executable return expression?", options: ["The arrow operator (->)", "The colon symbol (:)", "The assignment operator (=)", "The hash sign (#)"], answer: 1 }
      },
      {
        id: 'l7-3',
        title: "More Example For lambda with two parameters",
        content: "More Example For lambda with two parameters\n\n<CODE_BLOCK>\nx = lambda y , z=8: y+z\nprint(x(3 , 2))\n</CODE_BLOCK>\n\nအထက်ပါ program အား run ကြည့်လျှင် output အနေဖြင့် 5 ကို ရရှိပါမည်။ 3 သည် y နေရာသို့ သွားပြီး 2 သည် z နေရာသို့ သွားပါသည်။ ယခု program တွင် z နေရာတွင် 8 ကိုထည့်ထားသော်လည်း z နေရာသို့ 2 ဝင်လာသောအခါ ထို 8 သည် မရှိတော့ပါဘူး။ သို့သော် z နေရာသို့ မည်သည့် argument မှ ရောက်မလာသော အခြေအနေမျိုးတွင်မူ ထို 8 သည် ပျောက်မသွားဘဲ y+z နေရာတွင် သုံးမည် ဖြစ်ပါသည်။ အောက်ပါ sample program ကို run ကြည့်သောအချိန်တွင် output အနေဖြင့် 11 ကို ရရှိပါမည်။\n\n<CODE_BLOCK>\nx = lambda y , z=8: y+z\nprint(x(3))\n</CODE_BLOCK>\n\nArbitrary arguments များ keyword arguments များကို သုံးပြီးတော့လည်း lambda function ကို ရေးသားနိုင်သည်။ pack or unpacking ပုံစံလည်း ရေးနိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (156)\nlam = lambda x,*args,y,**kwargs:(x,args,y,kwargs)\nprint(lam(10,'a','b',y=100,i=10,j=20,k=30))\n#output\n# (10, ('a', 'b'), 100, {'i': 10, 'j': 20, 'k': 30})\n</CODE_BLOCK>\n\nSample Program (156) တွင် a,b တို့သည် tuple package ပုံစံဖြင့် လာပြီး i,j,k တို့သည် dictionary package ပုံစံဖြင့် လာပါသည်။ args အရှေ့တွင် * ထည့်ပြီး unpack လုပ်ကြည့်ပါက အောက်ပါအတိုင်း a , b တို့အား unpacking လုပ်ထားသည်ကို မြင်ရပါမည်။\n`(10, ('a', 'b'), 100, {'i': 10, 'j': 20, 'k': 30})`",
        initialCode: "x = lambda y, z=8: y + z\nprint(x(3, 2))",
        exercise: { task: "Try writing code for More Example For lambda with two parameters", check: (out) => out.includes("5") },
        quiz: { question: "What happens if a lambda default argument value is specified but overridden in the function call?", options: ["It uses the new value provided in the call", "It uses the default value", "It throws a syntax error", "It sets the value to 0"], answer: 0 }
      },
      {
        id: 'l7-4',
        title: "Higher-Order Function",
        content: "Higher order function ဆိုတာ အခြားသော function တွေကို argument အဖြစ် ယူသုံးသော function တွေကို Higher order function လို့ ခေါ်ပါတယ်။ Lambda function သည် Higher order function များရဲ့ argument အနေဖြင့်လည်း အသုံးပြုပါတယ်။\n\n<CODE_BLOCK>\nSample Program (157)\ndef myFun(x,fn):#higher order function\n    return fn(x) #lambda will come here\n\nvalue = myFun(5, lambda y:y**2) #to multi 5 for two times\nprint(value)\n</CODE_BLOCK>\n\nSample Program (157) အား run ကြည့်လျှင် output အနေဖြင့် 25 ကို ရရှိပါမည်။ line number 3 မှာ myFun ဆိုသည့် function ကို လှမ်းခေါ်သောအခါတွင် lambda function ကို parameter အနေဖြင့် ထည့်ပေးလိုက်ပါတယ်။ ထို parameter သည် fn နေရာတွင် argument အနေဖြင့် ဝင်ရောက်သွားပါသည်။ ထိုနည်းတူ x နေရာတွင်လည်း 5 ဝင်ရောက်လာသည်။ lambda ရဲ့ return expression သည် y**2 ဖြစ်ပြီး y value ကို y*y အဖြစ် ပြန်ပေးရန် ဖြစ်သည်။ fn(5) ဆိုသောကြောင့် 5*5 ဖြစ်ပြီး print ထုတ်ကြည့်သောအခါတွင် 25 ကို ရရှိခြင်း ဖြစ်ပါသည်။ y**2 သည် y*y ဖြစ်သည်။ 5 ကို သုံးခါ မြှောက်လိုသောအခါတွင်မူ y**3 ဟု ရေးပေးရမည်။\n\n<CODE_BLOCK>\nSample Program (158)\ndef myFun(x,fn):#higher order function\n    return fn(x) #lambda will come here\n\nvalue = myFun(5, lambda y:y**3) #to multi 5 for three time\nprint(value)\n</CODE_BLOCK>\n\narbitrary arguments များ keyword argument များဖြင့် တွဲသုံးသော အခါတွင်မူ function ကို arbitrary and keyword များရဲ့ အရှေ့တွင် ရေးပေးရပါမည်။",
        initialCode: "def myFun(x, fn):\n    return fn(x)\nprint(myFun(5, lambda y: y**2))",
        exercise: { task: "Try writing code for Higher-Order Function", check: (out) => out.includes("25") },
        quiz: { question: "What is a Higher-Order Function?", options: ["A function that takes another function as an argument or returns a function", "A function with high mathematical performance", "A nested function block inside a class", "A lambda function structure"], answer: 0 }
      },
      {
        id: 'l7-5',
        title: "Lambda Function with *args and **kwargs",
        content: "Lambda Function with *args and **kwargs\n\n<CODE_BLOCK>\nSample Program (159)\ndef vijja(fn , *args , **kwargs):\n    return fn(*args,**kwargs)\n\nvalue = vijja(lambda x,y: x+y , 3 , 5)\nprint(value)\n</CODE_BLOCK>\n\nSample Program (159) ကို run ကြည့်လျှင် output အနေဖြင့် 8 ကို ရရှိပါမည်။ line number 1 တွင်မူ lambda ဝင်ရောက်လာမည့် fn အား args and kwargs အရှေ့၌ ရေးထားပါသည်။ line number 3 တွင် lambda expression သည် x and y အား ပေါင်းခြင်းဖြစ်သည် နောက်ထပ် parameters များ ဖြစ်ကြသည့် 3 သည် args သို့ သွားမည်ဖြစ်ပြီး 5 သည် kwargs နေရာသို့ သွားမည်။ expression သည် args + kwargs ဖြစ်သောကြောင့် 3 နှင့် 5 အား ပေါင်းပြီး output အနေဖြင့် ပြန်ပေးမည် ဖြစ်သည်။ သတိပြုရန်မှာ return ၌ args and kwargs တို့သည် unpack ပုံစံဖြင့် ပြန်လည် ဖော်ပြရပါမည်။ သို့မဟုတ်ပါက arguments error များတက်မည်ဖြစ်သည်။ ပိုပြီး safe and complex ပုံစံဖြင့် ရေးလိုလျှင် end of positional argument ကိုသုံးပြီးတော့လည်း ရေးနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (160)\ndef vijja(fn , *args , **kwargs):\n    return fn(*args,**kwargs)\n\nvalue = vijja(lambda x,*,y: x + y , 10 , y=11 )\nprint(value)\n</CODE_BLOCK>\n\nSample Program (160) အား run ကြည့်လျှင် 21 ရမည်ဖြစ်ပြီး သတိပြုရန်မှာ lambda x နောက်က end of positional argument ဖြစ်သည်။ ထို end ပါလာသည့်အတွက် x = 10 နေရာနောက်၌ ကပ်လျက်နေရာယူလာမည့် 11 သည် positional အလိုက် နေရာယူလို့ ရတော့မည် မဟုတ်ပါ။ ထို့ကြောင့် y နေရာတွင် အစားဝင်လာမည့် 11 အား y=11 ဟု keyword only argument ပုံစံဖြင့် ရေးပေးရမည် ဖြစ်သည်။ သို့မဟုတ်လျှင် argument required error ကိုတွေ့ရမည် ဖြစ်သည်။",
        initialCode: "def vijja(fn, *args, **kwargs):\n    return fn(*args, **kwargs)\nprint(vijja(lambda x, y: x + y, 3, 5))",
        exercise: { task: "Try writing code for Lambda Function with *args and **kwargs", check: (out) => out.includes("8") },
        quiz: { question: "Why must args and kwargs be unpacked using * and ** inside the dynamic function call context?", options: ["To pass them properly as separate values to the underlying lambda expression", "To save memory storage space", "To convert them into integers", "To avoid scope variables conflict errors"], answer: 0 }
      },
      {
        id: 'l7-6',
        title: "Lambda, args and sum() function",
        content: "<IMG_BLOCK>l7-6.png</IMG_BLOCK>\nအထက်ပါ Sample Program အား run ကြည့်လျှင် 1,2,3,4,5,6 တို့အား sum function ကိုသုံးပြီး အစဉ်လိုက် ပေါင်းထားသောကြောင့် 21 ကို ရရှိပါမည်။ line number 3 မှ vijja function ကို လှမ်းခေါ်သောအခါတွင် ထည့်ပေးလိုက်သော 1,2,3,4,5,6 တို့သည် args တစ်ခုတည်းကို သာ ရောက်သွားပါမည်။ အဘယ်ကြောင့်ဆိုသော် lambda parameter နေရာတွင် *args ဟူပြီး တစ်ခုတည်းသာ ဖော်ပြထားသောကြောင့်ဖြစ်သည်။",
        initialCode: "def vijja(fn, *args):\n    return fn(*args)\n\nvalue = vijja(lambda *args: sum(args), 1, 2, 3, 4, 5, 6)\nprint(value)",
        exercise: { task: "Pass an arbitrary number of arguments to a lambda function utilizing the built-in sum() calculation.", check: (out) => out.includes("21") },
        quiz: { question: "Why do the numbers 1 through 6 collapse into a single variable inside the lambda function parameter list?", options: ["Because integers always group together automatically", "Because the *args parameter packs all trailing positional arguments into a single tuple", "Because sum() only accepts lists", "Because of a compilation error"], answer: 1 }
      },
      {
        id: 'l7-7',
        title: "Lambda with Sorted ()",
        content: "Sorted() function ကို အသုံးပြုလျှင် ပေးထားတဲ့ အချက်အလက်တွေကို သတ်မှတ်ထားတဲ့အတိုင်း sorted လုပ်ပေးပါတယ်။ ဥပမာ a,b,c ကို အစဉ်လိုက်စီချင်ရင် sorted() function ထဲကို ထည့်ပေးလိုက်တာနဲ့ စီစဉ်ပေးပါတယ်။ သတ်မှတ်ထားတဲ့အတိုင်း ဆိုတာက အရှေ့ကနေ စီချင်လား သို့မဟုတ် နောက်ဆုံး စာလုံးကိုပဲ အစဉ်လိုက်စီချင်တာလား မိမိလိုသလို sorted() function ကိုသုံးပြီး ပြုလုပ်နိုင်ပါတယ်။ sorted() အကြောင်းကို အသေးစိတ်သိလိုပါက အောက်ပါအတိုင်း ရေးကြည့်နိုင်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (161)\nprint(help(sorted))\n# Return a new list containing all items from the iterable in ascending order.\n# A custom key function can be supplied to customize the sort order...\n</CODE_BLOCK>\n\nSorted() သည် parameter အနေဖြင့် iterable , key , reverse တို့ကို တစ်ခု သို့မဟုတ် တစ်ခုထက်ပိုပြီး ယူပါတယ်။ iterable နေရာတွင် list , tuple ,set ,dictionary စသည့် data များကို ထည့်နိုင်ပါတယ်။ return value အနေဖြင့် သတ်မှတ်ပေးလိုက်တဲ့ နည်းလမ်းအတိုင်း ပြုလုပ်ပြီး list ကို ပြန်ပေးပါတယ်။\n\n<CODE_BLOCK>\nSample Program (162)\ndata = [1,4,8,9,2,3]\nprint(sorted(data))\n</CODE_BLOCK>\n\nSample Program (162) အား run ကြည့်လျှင် output အနေဖြင့် number များကို ငယ်စဉ် ကြီးလိုက် စီစဉ်ထားပြီး list တစ်ခု အနေဖြင့် ပြန်ပေးမှာ ဖြစ်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (163)\ndata = ['c','A','a','B','D']\nprint(sorted(data))\n</CODE_BLOCK>\n\nအထက်ပါ program အား run ကြည့်လျှင် output အနေဖြင့် `['A', 'B', 'D', 'a', 'c']` ယခု အတိုင်းရရှိမှာဖြစ်ပါတယ် ။ A အကြီးသည် အရှေ့ဆုံးမှ လာပြီး a , c အသေးတို့သည် အကြီး စာလုံးများပြီးမှ လာပါတယ်။ အဘယ်ကြောင့်ဆိုသော် A အကြီးရဲ့ ascii value သည် 65 ဖြစ်ပြီး a အသေးရဲ့ ascii value သည် 97 ဖြစ်ပါတယ်။ ထို့ကြောင့် Ascii value အရ ကြည့်လျှင် A အကြီးသည် a အသေးထက်ငယ်ပါသည်။ ထိုနည်းတူ A – Z အကြီးသည် 65 ကနေ 90 ထိ ဖြစ်ပြီး a – z အသေးသည် 97 မှ 122 ထိ ဖြစ်သည်။ sorted() function သည် default အားဖြင့် ငယ်စဉ် ကြီးလိုက်စီသောကြောင့် A , B , C တို့သည် ရှေ့က ထွက်လာခြင်းဖြစ်ပါသည်။ ASCII table ကို အောက်မှာ ဖော်ပြထားပါတယ်။\nASCII ဆိုတာ American Standard Code for Information Interchange ကိုဆိုလိုခြင်း ဖြစ်ပါတယ်။ ထိုကဲ့သို့ ASCII table မကြည့်လိုပါက python ရဲ့ built in function ဖြစ်တဲ့ ord() ကိုသုံးနိုင်ပါတယ်။ `ord('a')` မိမိသိလိုသော character ကိုထည့်လိုက်ရင် return value အနေဖြင့် ထို character ရဲ့ ascii value ကို ပြန်လည်ဖော်ပြပေးပါတယ်။ Number system အားဖြင့် ကြည့်မည်ဆိုလျှင် decimal number system ဖြစ်ပါတယ်။ ဥပမာ character A သည် decimal အားဖြင့် 65 ဖြစ်ပါတယ်။ ထို 65 ကို 2 နဲ့အကြိမ်ကြိမ် စားပြီး ရလာသော 0 1 binary value များကို မိမိတို့ computer က နားလည်ခြင်းဖြစ်ပါတယ်။\n<TABLE_BLOCK>\nDec|Hex|Oct|Char|Dec|Hex|Oct|Char|Dec|Hex|Oct|Char|Dec|Hex|Oct|Char\n0|0|000|NUL|32|20|040|Space|64|40|100|@|96|60|140|`\n1|1|001|SOH|33|21|041|!|65|41|101|A|97|61|141|a\n2|2|002|STX|34|22|042|\"|66|42|102|B|98|62|142|b\n3|3|003|ETX|35|23|043|#|67|43|103|C|99|63|143|c\n4|4|004|EOT|36|24|044|$|68|44|104|D|100|64|144|d\n5|5|005|ENQ|37|25|045|%|69|45|105|E|101|65|145|e\n6|6|006|ACK|38|26|046|&|70|46|106|F|102|66|146|f\n7|7|007|BEL|39|27|047|'|71|47|107|G|103|67|147|g\n8|8|010|BS|40|28|050|(|72|48|110|H|104|68|150|h\n9|9|011|TAB|41|29|051|)|73|49|111|I|105|69|151|i\n10|A|012|LF|42|2A|052|*|74|4A|112|J|106|6A|152|j\n11|B|013|VT|43|2B|053|+|75|4B|113|K|107|6B|153|k\n12|C|014|FF|44|2C|054|,|76|4C|114|L|108|6C|154|l\n13|D|015|CR|45|2D|055|-|77|4D|115|M|109|6D|155|m\n14|E|016|SO|46|2E|056|.|78|4E|116|N|110|6E|156|n\n15|F|017|SI|47|2F|057|/|79|4F|117|O|111|6F|157|o\n16|10|020|DLE|48|30|060|0|80|50|120|P|112|70|160|p\n17|11|021|DC1|49|31|061|1|81|51|121|Q|113|71|161|q\n18|12|022|DC2|50|32|062|2|82|52|122|R|114|72|162|r\n19|13|023|DC3|51|33|063|3|83|53|123|S|115|73|163|s\n20|14|024|DC4|52|34|064|4|84|54|124|T|116|74|164|t\n21|15|025|NAK|53|35|065|5|85|55|125|U|117|75|165|u\n22|16|026|SYN|54|36|066|6|86|56|126|V|118|76|166|v\n23|17|027|ETB|55|37|067|7|87|57|127|W|119|77|167|w\n24|18|030|CAN|56|38|070|8|88|58|130|X|120|78|170|x\n25|19|031|EM|57|39|071|9|89|59|131|Y|121|79|171|y\n26|1A|032|SUB|58|3A|072|:|90|5A|132|Z|122|7A|172|z\n27|1B|033|ESC|59|3B|073|;|91|5B|133|[|123|7B|173|{\n28|1C|034|FS|60|3C|074|<|92|5C|134|\\|124|7C|174||\n29|1D|035|GS|61|3D|075|=|93|5D|135|]|125|7D|175|}\n30|1E|036|RS|62|3E|076|>|94|5E|136|^|126|7E|176|~\n31|1F|037|US|63|3F|077|?|95|5F|137|_|127|7F|177|DEL\n</TABLE_BLOCK>\n အထက်ပါ program များသည် sorted() function ရဲ့ iterable parameter အတွက်ဖြစ်ပြီး key အတွက် ဆက်လက် ဖော်ပြပါမည်။ lambda သည် object တစ်ခုတည်းသို့ assign လုပ်နိုင်သည် ဟု ဖော်ပြခဲ့ပြီး ဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (164)\ndata = ['c','A','a','B','D']\nls = sorted(data , key=lambda ld: ld.upper())\nprint(ls)\n</CODE_BLOCK>\n\nSample Program (164) တွင် lambda, upper and sorted တို့ကို ပူးတွဲသုံးထားသည်။ upper သည် string handling အခန်းတွင် ဖော်ပြခဲ့ပြီး ဖြစ်သည်။ Line number 2 တွင် sorted ထဲ၌ lambda function ကိုသုံးထားသည်။ ld သည် lambda ရဲ့ parameter ဖြစ်ပြီး ld.upper() သည် lambda ရဲ့ expression ဖြစ်သည်။ data သည် characters များထည့်ထားသော list ဖြစ်ပြီး ထို data သည် lambda ရဲ့ parameter အဖြစ် အသုံးပြုမည်ဖြစ်ပါသည်။ ထို program ကို run ကြည့်သော အခါ characters များ အစဉ်လိုက် စီစဉ် ထားသည်ကို တွေ့ရပါမည်။ (မှတ်ချက် - ယခုအခါတွင် အကြီးအသေး မခွဲခြားတော့ဘဲ အက္ခရာစဉ်အတိုင်းသာ စီစဉ်သွားမည်ဖြစ်သည်။)",
        initialCode: "chars = ['z', 'B', 'a', 'C']\nprint(sorted(chars))\nprint('ASCII of B is:', ord('B'))",
        exercise: { task: "Run a basic sort on mixed-case string characters and verify the integer ASCII mapping of a specific character.", check: (out) => out.includes("66") },
        quiz: { question: "Why does the sorted() function place uppercase 'Z' before lowercase 'a' by default?", options: ["Because 'Z' is visually larger", "Because uppercase letters have lower ASCII decimal values (65-90) than lowercase letters (97-122)", "Because it sorts strings in reverse automatically", "Because 'a' is considered a numeric zero in Python"], answer: 1 }
      },
      {
        id: 'l7-8',
        title: "Ascending dictionary with Lambda and sorted()",
        content: "Previous program တွင် list တစ်ခုအား lambda ကိုသုံးပြီး ascending လုပ်ခဲ့ကြသည်။ ယခု program တွင် dictionary ထဲမှ key များကို အသုံးပြုပြီး key ရဲ့ value များကို ascending (စီစဉ်) ပါမည်။ ထို့ကြောင့် ပထမဆုံးအနေဖြင့် dictionary တစ်ခုကို ကြေညာပြီး for statement ဖြင့် sample ပြထားပါသည်။\n\n<CODE_BLOCK>\nSample Program (165)\ndi={'a':300 ,'c':500 , 'd':100}\nfor i in di:\n    print(i)\n</CODE_BLOCK>\n\nSample Program (165) အား run ကြည့်လျှင် Output အနေဖြင့် a, c , d တို့ကို ရပါမည်။\n\n<CODE_BLOCK>\nSample Program (166)\ndi={'a':300 ,'c':500 , 'd':100}\ndictionary=sorted(di,key=lambda i: di[i])\nprint(dictionary)\n</CODE_BLOCK>\n\nSample Program (166) ကို run ကြည့်လျှင် output အနေဖြင့် `['d', 'a', 'c']` တို့ကို ရပါမည်။ line number 2 တွင် i သည် di ဆိုသည့် dictionary ထဲက value များကို ထုတ်ရန်ဖြစ်ပြီး ထိုကဲ့သို့ ထွက်လာသော value များကို sorted fun မှ ascending လုပ်မှာ ဖြစ်ပါတယ်။ ထို့ကြောင့် အငယ်ဆုံး ဖြစ်သည့် 100 ရဲ့ key ဖြစ်သည့် d သည် အရှေ့ဆုံးမှ ထွက်လာပြီး အကြီးဆုံးဖြစ်သည့် 500 ရဲ့ key ဖြစ်သည့် c သည် နောက်ဆုံးမှ ထွက်လာခြင်း ဖြစ်သည်။",
        initialCode: "scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78}\n# Sort keys based on their mapped dictionary values\nsorted_keys = sorted(scores, key=lambda k: scores[k])\nprint(sorted_keys)",
        exercise: { task: "Sort a dictionary dynamically extracting the keys arranged by their numerical value sizes ascending.", check: (out) => out.includes("Charlie") },
        quiz: { question: "In Sample Program (166), what does the lambda function extract to guide the sorted() function?", options: ["The dictionary keys", "The dictionary values corresponding to each key", "The ASCII character codes of the keys", "The memory addresses of the dictionary"], answer: 1 }
      },
      {
        id: 'l7-9',
        title: "Ascending last elements",
        content: "ယခု သင်ခန်းစာတွင် list တစ်ခုထဲမှာ ရှိတဲ့ နောက်ဆုံး element တွေကို ascending လုပ်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (167)\na_l=['Guido','win','htut','green','hackers','team']\nresult=sorted(a_l, key=lambda ac: ac[-1])\nprint(result)\n#output\n# ['team', 'win', 'green', 'Guido', 'hackers', 'htut']\n</CODE_BLOCK>\n\nSample Program (167) ကို run ကြည့်ပြီး output များရဲ့ နောက်ဆုံးစာလုံး `[-1]` ကို ကြည့်ပါ။ စာလုံးများ အစဉ်လိုက်စီထားသည်ကို တွေ့ရပါမည်။ team သည် နောက်ဆုံးစာလုံး m ဖြင့်ဆုံးသည့်အတွက် m သည် ascii အရ အငယ်ဆုံး ဖြစ်သောကြောင့် m ပါသော team သည် အရှေ့ဆုံးသို့ ရောက်လာခြင်းဖြစ်သည်။ ထို team ပြီးမှ m ထက်ကြီးသော n ဖြင့်ဆုံးသည့် win သည် team နောက်မှ ပါလာခြင်း ဖြစ်သည်။ နောက်ဆုံး element ကို စစ်လိုသော အခါတွင် `[-1]` ကို သုံးရမည့် အကြောင်းကို ရှေ့ပိုင်း chapter များတွင် ဖော်ပြခဲ့ပြီး ဖြစ်သည်။",
        initialCode: "words = ['apple', 'banana', 'cherry', 'kiwi']\n# Sort strings based strictly on their final character mapping\nsorted_by_last = sorted(words, key=lambda w: w[-1])\nprint(sorted_by_last)",
        exercise: { task: "Write a lambda integration structure inside sorted to arrange array strings based exclusively on their last character index.", check: (out) => out.includes("banana") },
        quiz: { question: "Why does string 'team' appear before 'win' when sorted by key=lambda ac: ac[-1]?", options: ["Because 't' comes before 'w'", "Because 'team' is shorter than 'win'", "Because the last character 'm' has a lower ASCII value than the last character 'n'", "Because list positions revert randomly"], answer: 2 }
      },
      {
        id: 'l7-10',
        title: "Random Module",
        content: "Random module သည် python programming တွင် Random number တွေကို ထုတ်ပေးရန် သုံးပါသည်။ ယခု lesson တွင် random number တွေကို generate လုပ်ပုံအကြောင်းကို အသေးစိတ် မဖော်ပြဘဲ random ကိုအသုံးပြုပုံ နှင့် random နှင့် sorted တို့ တွဲသုံးပုံတို့ကို ဖော်ပြသွားပါမည်။\n\n<CODE_BLOCK>\nimport random as ran\nprint(ran.random())\n</CODE_BLOCK>\n\nrandom() function ကိုမည်သည့် parameter မှ မထည့်ဘဲ သုံးမည်ဆိုလျှင် 0 ကနေ 1 ထိ ကြားမှာ ရှိသော float number များကို return ပြန်ပေးပါမည်။ တစ်ကြိမ် run တိုင်းမှာ မတူညီသော random number တစ်မျိုးစီ ထွက်လာမှာ ဖြစ်ပါတယ်။ Precision အားဖြင့် 53bit ထိ ရှိမှာဖြစ်ပါတယ်။",
        initialCode: "import random\n# Generate a random float between 0.0 and 1.0\nprint(random.random())",
        exercise: { task: "Import the random module and execute a basic random floating point generation process.", check: (out) => out.includes("0.") },
        quiz: { question: "What is the standard output range of the default random.random() function without parameters?", options: ["0 to 100", "0.0 to 1.0 (float)", "-1.0 to 1.0 (float)", "Any integer"], answer: 1 }
      },
      {
        id: 'l7-11',
        title: "Uniform from random",
        content: "Random module ထဲမှ uniform function သည် parameter အားဖြင့်နှစ်ခု ယူပါသည်။ ပထမ parameter သည် အနည်းဆုံး number ဖြစ်ပြီး ဒုတိယ parameter သည် အမြင့်ဆုံး parameter ဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (168)\nimport random as ran\nprint(ran.uniform(1,10))\n# Random float x, 1.0 <= x < 10.0\n</CODE_BLOCK>\n\nSample Program (168) အတိုင်း run ကြည့်လျှင် 1 နှင့် 10 ကြားမှာ ရှိသည့် မတူညီသော ဒသမ ကိန်းများကို ထုတ်ပေးပါမည်။",
        initialCode: "import random\nprint(random.uniform(5, 15))",
        exercise: { task: "Generate a float random value bound strictly between 5 and 15 utilizing the uniform framework.", check: (out) => out.includes(".") },
        quiz: { question: "What data type does random.uniform(a, b) return?", options: ["An Integer", "A Boolean", "A Float within the range [a, b]", "A List"], answer: 2 }
      },
      {
        id: 'l7-12',
        title: "Randint from random",
        content: "Random module ထဲမှ randint သည်လည်း parameter နှစ်ခုယူပြီး return value အားဖြင့် 1 နှင့် 10 ကြားမှာ ရှိသော မတူညီသည့် random values များကို integer ဖြင့် ထုတ်ပေးပါသည်။ ပထမ parameter သည် အငယ်ဆုံးဖြစ်ရမည့် နံပါတ်ဖြစ်ပြီး ဒုတိယ သည်အမြင့်ဆုံး ဖြစ်ရမည့် number ဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (169)\nimport random as ran\nprint(ran.randint(1,10))\n# Integer from 1 to 10, endpoints included\n</CODE_BLOCK>",
        initialCode: "import random\nprint(random.randint(1, 100))",
        exercise: { task: "Output a clean random integer confined exactly within bounds limits utilizing randint structure rules.", check: (out) => out.length > 0 && !out.includes(".") },
        quiz: { question: "Does random.randint(a, b) include both endpoints 'a' and 'b' in its possible outputs?", options: ["No, it excludes both", "Yes, both endpoints are included", "It includes 'a' but excludes 'b'", "It throws an error if they are included"], answer: 1 }
      },
      {
        id: 'l7-13',
        title: "Randrange from random",
        content: "Randrange function သည် parameter အားဖြင့် သုံးခု ယူပါသည်။ ပထမ parameter သည် အနိမ့်ဆုံး ဖြစ်ပြီး ဒုတိယ parameter သည် အမြင့်ဆုံးဖြစ်သည်။ တတိယ parameter သည် number အလုံး အရေအတွက်ကို Limit လုပ်ရန်ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (170)\nimport random as ran\nprint(ran.randrange(0,100,2))\n# Even integer from 0 to 100\n</CODE_BLOCK>\n\nSample Program (170) တွင် 0 သည် အနိမ့်ဆုံး number ဖြစ်ပြီး 100 သည် အမြင့်ဆုံး number ဖြစ်သည်။ သို့သော် even integer များ ဖြစ်ရန် အတွက် 2 ကို ထည့်ပေးထားခြင်းဖြစ်သည်။ အရှေ့ဆုံး parameter ဖြစ်သည့် 0 နေရာတွင် 1 ပြောင်းခဲ့ပါက ထွက်လာမည့် output များသည့် မကိန်း များသာ ဖြစ်ပါလိမ့်မည်။ even number များထားပါက even number များသာ ထွက်လာပါမည်။ မိမိတို့ လိုချင်သော precision အတိုင်း parameter သုံးခုစလုံးကို ပြောင်းလဲကစားနိုင်ပါသည်။\n\n<CODE_BLOCK>\nimport random as ran\nprint(ran.randrange(1,1000,3))\n</CODE_BLOCK>",
        initialCode: "import random\n# Output odd integers exclusively inside range 1 to 50\nprint(random.randrange(1, 50, 2))",
        exercise: { task: "Configure the randrange step modifier to return only explicitly scaled interval targets.", check: (out) => out.length > 0 },
        quiz: { question: "What does the third parameter in random.randrange(start, stop, step) control?", options: ["The number of items to return", "The step size or interval between possible values", "The precision of floating points", "The timeout limit"], answer: 1 }
      },
      {
        id: 'l7-14',
        title: "Choice from random",
        content: "Choice function() သည် သူထဲတွင် parameter အဖြစ်ပါဝင်လာသော data များမှ random element တစ်လုံးကို ထုတ်ပေးပါသည်။ အသုံးပြုပုံ သည် အောက်ပါအတိုင်း ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (171)\nimport random as ran\nprint(ran.choice('WinHtut@GreenHackersTeam'))\n</CODE_BLOCK>\n\nSample Program (171) အတိုင်း run ကြည့်လျှင် Output အနေဖြင့် character တစ်လုံးကို ရပါမည်။",
        initialCode: "import random\ncolors = ['Red', 'Green', 'Blue', 'Yellow']\nprint(random.choice(colors))",
        exercise: { task: "Pick a dynamic random element completely out of an available declared list string sequence array using the choice function framework context limits.", check: (out) => out.length > 0 },
        quiz: { question: "Which data structure types can be passed to random.choice()?", options: ["Only Integers", "Only Floats", "Sequences like Strings, Lists, or Tuples", "Dictionaries only"], answer: 2 }
      },
      {
        id: 'l7-15',
        title: "Random, sorted and lambda",
        content: "List တစ်ခုထဲမှာရှိသော elements များကို random , sorted and lambda များကို သုံးပြီး shuffle လုပ်ပါမည်။<CODE_BLOCK>\nSample Program (172)\nimport random as ran\nelements=[1,2,3,4,5,6,7,8,9,10]\nshuffle=sorted(elements , key=lambda x: ran.random())\nprint(shuffle)\n</CODE_BLOCK>\n\nSample Program (172) ကို run ကြည့်တိုင်းမှာ မတူညီသော shuffle လုပ်ထားသည့် list တစ်ခုကို ရမှာဖြစ်ပါတယ်။",
        initialCode: "# Initializing random list for shuffling\nitems = [1, 2, 3, 4, 5]\nprint('List elements:', items)",
        exercise: { task: "Initialize a list array to prepare for randomized shuffling operations.", check: (out) => out.includes("[") },
        quiz: { question: "Why do we use lambda and random together when shuffling elements manually?", options: ["To convert integers to strings", "To generate random float weights that the sorted function uses to order elements randomly", "To delete variables from memory", "To bypass compiler errors"], answer: 1 }
      },
    ]
  },
  {
    id: 'p8',
    title: "Function Introspection",
    lessons: [
      {
        id: 'l8-1',
        title: "Function Introspection",
        content: "Python programming တွင် almost everything is object ဖြစ်သလို functions တွေဟာလည်း first class object တွေပါ။ ထို function တွေမှာ attributes တွေ ရှိပါတယ်။ ဥပမာ `__doc__` တို့ `__annotations__` တို့ ဖြစ်ပါတယ်။ ထို့ပြင် အခြားသော attributes တွေ ရှိနေသလို မိမိကိုယ်ပိုင် attributes တွေကိုလည်း ထပ်ပြီးထည့်နိုင်ပါတယ်။ ထိုကဲ့သို့ ပြုပြင်ခြင်း analyzing လုပ်ခြင်းကို introspection လို့ ခေါ်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (173)\n#function introspection\ndef myFun(x,y):\n    return x+y\nprint(dir(myFun))\n</CODE_BLOCK>\n\nSample Program (173) အတိုင်း ရေးပြီး run ကြည့်ပါက myFun ရဲ့ attributes များကို မြင်တွေ့ရပါမည်။\n\n`['__annotations__', '__call__', '__class__', '__closure__', '__code__', '__defaults__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__get__', '__getattribute__', '__globals__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__kwdefaults__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']`\n\nထို Attributes များထဲတွင် `__annotations__` နှင့် `__doc__` တို့ သည် ရှေ့ပိုင်း သင်ခန်းစာများ တွင် ဖော်ပြခဲ့ပြီး ဖြစ်သည်။ ဥပမာအားဖြင့် myFun ဆိုသည့် function တစ်ခု တည်ဆောက်မည်ဆိုပါစို့။ ထိုသို့ တည်ဆောက်ပြီးနောက် `myFun.subject='bio'` ဟုရေးပြီး myFun ထဲသို့ subject ဆိုသည့် attributes တစ်ခုထပ်ထည့်နိုင်ပါတယ်။ `print(myFun.subject)` ဟုရေးကြည့်ပါက bio ဆိုတဲ့ value ထွက်လာမှာဖြစ်ပါတယ်။<CODE_BLOCK>\nSample Program (174)\n#function introspection\ndef myFun(x,y):\n    return x+y\nmyFun.subject='bio'\nprint(myFun.subject)\n</CODE_BLOCK>\n\nSample Program (174) သည် myFun ဆိုသည့် function ထဲသို့ attributes တစ်ခု ထပ်အပ်ပြီး ပြန်ထုတ်ခြင်း ဖြစ်သည်။ function or object တစ်ခုရဲ့ attributes တွေကို ကြည့်နိုင်ဖို့ dir ဆိုသည့် function ကိုသုံးနိုင်သည် ။ dir သည် built-in function တစ်ခုဖြစ်ပြီး argument အနေဖြင့် object တစ်ခုယူပါသည် ။ return value အနေဖြင့် ထည့်ပေးလိုက်သော object ရဲ့ attributes တွေကို list တစ်ခုအနေဖြင့် ပြန်ပေးပါတယ်။ အောက်တွင် ပိုမိုထိရောက်နိုင်သော sample program နှင့် output ကို ဖော်ပြထားသည်။\n\n<CODE_BLOCK>\nSample Program (175)\n#function introspection Adding attributes\ndef myFun(x,y):\n    return x+y\nmyFun.subject='bio'\nmyFun.mark=80\nprint(dir(myFun))\nprint(myFun.subject)\nprint(myFun.mark)\n</CODE_BLOCK>\n\nအထက်ပါ အတိုင်းရေးပြီး program ကို run ကြည့်ပါက output များကို အောက်ပါ အတိုင်း မြင်ရပါမည်။\n\n`['__annotations__', '__call__', ... , 'mark', 'subject']`\nbio\n80\n\nOutput များကို ကြည့်လျှင် မိမိတို့ ထပ်ထည့်လိုက်သော mark and subject တို့ ကို မြင်ရပါမည်။ သူတို့ value များ ဖြစ်ကြသည့် 80 and bio ကိုလည်း မြင်ရပါမည်။",
        initialCode: "def myFun(x, y):\n    return x + y\nprint(dir(myFun))",
        exercise: { task: "Output the directory structure of the native function instance showing its underlying baseline attributes properties via introspection methods.", check: (out) => out.includes("__call__") },
        quiz: { question: "What is the process of examining and analyzing a function's attributes at runtime called?", options: ["Compiling", "Introspection", "Recursion", "Encapsulation"], answer: 1 }
      },
      {
        id: 'l8-2',
        title: "__name__, __defaults__, __kwdefaults__",
        content: "ယခု သင်ခန်းစာတွင် name, default and kwdefaults တို့ ကို ဖော်ပြသွားပါမယ်။ name သည် function ရဲ့ name ဖြစ်ပြီး default သည် function ရဲ့ positional default parameters များဖြစ်ပါတယ်။ kwdefaults သည် keyword-only defaults များဖြစ်ပါတယ်။ ပထမဆုံး အနေဖြင့် function တစ်ခု တည်ဆောက်ပါမည်။ ထို function ထဲတွင် parameter များ ထည့်ပါမယ်။ ပြီးနောက် ထို function ရဲ့ attributes များကို ပြန်ထုတ်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (176)\ndef myFun(x,y,z=10,*,kw1,kw2=2):\n    return x+y\nprint(myFun.__name__)\nprint(myFun.__defaults__)\nprint(myFun.__kwdefaults__)\n# myFun\n# (10,)\n# {'kw2': 2}\n</CODE_BLOCK>\n\nName သည် ထို function name ကို ပြန်ပေးပါသည်။ defaults သည် default သတ်မှတ်ထားသော positional parameter ကို tuple အနေဖြင့် ပြန်ပေးပါသည်။ kwdefaults သည် keyword-only argument ကို dictionary ပုံစံဖြင့် key နှင့် value ပါ ပြန်ပေးသည်။\n\nအထက်ပါ program အား docstring များ annotations များနှင့် arguments များ ထပ်ထည့်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (177)\ndef myFun(x:\"first positional \",\n          y:\"second positional\",\n          z:\"defaults arguments \" =10,\n          *args:\"end of positional arguments \",\n          kw1:\"keyword only argument\",\n          kw2:\"defaults keyword only argument\"=2):\n    \"\"\"This function is just for edu purpose for function introspection\"\"\"\n    a=10\n    b=20\n\nprint(myFun.__annotations__)\nprint(myFun.__doc__)\n</CODE_BLOCK>\n\nOutput တွင် annotations များ dictionary အနေဖြင့် ပြန်လည်ရရှိမည်ဖြစ်ပြီး docstring များကိုပါ တွေ့ရမည်ဖြစ်သည်။",
        initialCode: "def test_func(a, b=5, *, c=10):\n    pass\nprint(test_func.__defaults__)\nprint(test_func.__kwdefaults__)",
        exercise: { task: "Access the hidden default values of both positional and keyword-only arguments attached silently to a function via native dunder methods parameters.", check: (out) => out.includes("5") && out.includes("10") },
        quiz: { question: "What data type does the __kwdefaults__ attribute return for a function?", options: ["A Tuple", "A List", "A Dictionary mapping keyword names to their default values", "A String"], answer: 2 }
      },
      {
        id: 'l8-3',
        title: "__code__ attribute",
        content: "အထက်ပါ program တွင် `print(myFun.__code__)` ဟု ရိုက်ကြည့်ပါ။ အောက်ပါအတိုင်း code object ကို မြင်ရမည်။\n\n<CODE_BLOCK>\nprint(myFun.__code__)\n#output\n# <code object myFun at 0x000001CAC17C1D40, file \".\\app.py\", line 1>\n</CODE_BLOCK>\n\n`__code__` object မှာလည်း သူ့ ကိုယ်ပိုင် properties များစွာရှိနေပါသေးသည် ။ code object attributes များကို သိနိုင်ရန် `print(dir(myFun.__code__))` ဟုရေးကြည့်ပြီး သိနိုင်ပါသည်။\n\n<CODE_BLOCK>\nprint(dir(myFun.__code__))\n#output\n# ['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'co_argcount', 'co_cellvars', 'co_code', 'co_consts', 'co_filename', 'co_firstlineno', 'co_flags', 'co_freevars', 'co_kwonlyargcount', 'co_lnotab', 'co_name', 'co_names', 'co_nlocals', 'co_posonlyargcount', 'co_stacksize', 'co_varnames', 'replace']\n</CODE_BLOCK>\n",
        initialCode: "def calc(a, b):\n    c = a + b\n    return c\nprint(calc.__code__.co_varnames)",
        exercise: { task: "Extract the local variable string identifiers compiled inside a function scope blocks.", check: (out) => out.includes("c") },
        quiz: { question: "What does the attribute __code__.co_varnames return?", options: ["Only the function parameters", "A tuple of all variable names (parameters and local variables) used within the function", "The count of positional arguments", "The bytecode of the function block"], answer: 1 }
      },
      {
        id: 'l8-4',
        title: "Co_varnames",
        content: "Co_varnames သည် code object ထဲမှဖြစ်ပြီး code object သည် myFun ရဲ့ attribute ဖြစ်သည်။ ထို့ကြောင့် co_varnames ကို print လုပ်ကြည့်လျှင် myFun function ထဲမှ variable names အားလုံးကို မြင်ရမည်ဖြစ်သည်။ ထို variables names များသည် function header ပိုင်းမှ parameters များတင်မကဘဲ function body ပိုင်းမှ variables name များကိုပါ tuple ပုံစံ ဖြင့် ပြန်ပြပေးပါသည်။\n\n<CODE_BLOCK>\nSample Program (178)\nprint(myFun.__code__.co_varnames)\n#output\n#('x', 'y', 'z', 'kw1', 'kw2', 'args', 'a', 'b')\n</CODE_BLOCK>\n",
        initialCode: "# Placeholder Code for Co_varnames\\nprint('Co_varnames')",
        exercise: { task: "[Placeholder Task] Try writing code for Co_varnames", check: (out) => out.includes("Co_varnames") },
        quiz: { question: "[Placeholder Quiz] What does Co_varnames do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-5',
        title: "Co_argcount",
        content: "<CODE_BLOCK>\nprint(myFun.__code__.co_argcount)\n#output\n#3\n</CODE_BLOCK>\n\nအထက်ပါ program အတိုင်း run ကြည့်လျှင် output အနေဖြင့် 3 ကို ရပါသည်။ ဘာကြောင့်လဲဆိုလျှင် co_argcount သည် myFun parameters များထဲမှ positional arguments များ ဖြစ်သည့် x,y,z တို့ ကိုသာ ရေတွက်သောကြောင့်ဖြစ်သည်။",
        initialCode: "# Placeholder Code for Co_argcount\\nprint('Co_argcount')",
        exercise: { task: "[Placeholder Task] Try writing code for Co_argcount", check: (out) => out.includes("Co_argcount") },
        quiz: { question: "[Placeholder Quiz] What does Co_argcount do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-6',
        title: "Inspect module",
        content: "Object တစ်ခုအား function သို့မဟုတ် method ဟူ၍ ခွဲခြားပြီး သိစေနိုင်ရန် python တွင် isfunction , ismethod , isroutine ဆိုသည့် function များရှိ ပါသည်။ isfunction သည် object တစ်ခုအား function ဖြစ်လား မဖြစ်သလား ဆိုတာ ကို စစ်ဆေးပေးပြီး parameter အနေဖြင့် object တစ်ခုကို ယူပါသည်။ ismethod သည် parameter အဖြစ် object တစ်ခု အား ယူပြီး ထို object သည် method ဖြစ်လျှင် true ပြန်ပေးပြီး မဟုတ်လျှင် false ပြန်ပေးပါသည်။ isroutine သည် function or method ကို စစ်ဆေးပါသည်။ parameter အနေဖြင့် object တစ်ခုကို ယူပြီး ထို object သည် function or method ဖြစ်လျှင် true ပြန်ပေးပါသည်။ ထိုသို့ ခွဲခြားပြီး သိစေနိုင်ရန် ဘယ်ဟာက method or ဘယ်ဟာက function ဖြစ်ကြောင်းကို ခွဲခြားပြီး သိရန်လိုအပ်ပါသည်။\n",
        initialCode: "# Placeholder Code for Inspect module\\nprint('Inspect module')",
        exercise: { task: "[Placeholder Task] Try writing code for Inspect module", check: (out) => out.includes("Inspect module") },
        quiz: { question: "[Placeholder Quiz] What does Inspect module do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-7',
        title: "Different between Function and Method",
        content: "Function သည် သူ့ ကိုယ်ပိုင် ရပ်တည်နိုင်ပြီး မည်သူကမှ ထိန်းချုပ်မထားပါဘူး ။ Python တွင် `def myFun():` ဆိုပြီး လွတ်လပ်စွာ ကြေညာသုံးနိုင်သလို မည်သူ့ ရဲ့ property မှလည်း မဟုတ်ပါဘူး။ Method သည် Class တစ်ခုထဲ၌ ကြေညာထားပြီး class က ထိန်းချုပ်ထားသည်။ ထို့ကြောင့် Method သည် သူနှင့် သက်ဆိုင်သည့် class တစ်ခုရဲ့ property ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\ndef myFun():#function\n    pass\nclass myClass:\n    def cFun(self):#method\n        pass\n</CODE_BLOCK>\n\nအထက်ပါ program တွင် myFun သည် သူ့ ကိုယ်ပိုင် ရပ်တည်နေသော function တစ်ခု ဖြစ်ပြီး cFun() သည် method ဖြစ်သည်။ cFun() သည် myClass ဆိုသည့် class အောက်တွင် တည်ရှိပြီး myClass ရဲ့ property ဖြစ်သည်။ ထို့ကြောင့် cFun() ခေါ် သုံးချင်လျှင် myClass ဆိုသည့် class အတွက် object တစ်ခု တည်ဆောက်ရပြီး ထို object မှ တစ်ဆင့် cFun() ကို ခေါ် သုံးရသည်။ သို့သော် myFun() ဆိုသည့် function သည် လွတ်လပ်စွာ ခေါ် သုံးနိုင်သည်။ object လည်း တည်ဆောက်ရန် မလိုပါ။\n\n<CODE_BLOCK>\nSample Program (179)\nimport inspect\nfrom inspect import isfunction, ismethod, isroutine\n\ndef myFun(a,b):\n    pass\n\nprint('Checking is function', isfunction(myFun))\nprint('Checking is method ', ismethod(myFun))\nprint('Checking is fun/method', isroutine(myFun))\n#output\n# Checking is function True\n# Checking is method False\n# Checking is fun/method True\n</CODE_BLOCK>",
        initialCode: "# Placeholder Code for Different between Function and Method\\nprint('Different between Function and Method')",
        exercise: { task: "[Placeholder Task] Try writing code for Different between Function and Method", check: (out) => out.includes("Different between Function and Method") },
        quiz: { question: "[Placeholder Quiz] What does Different between Function and Method do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l8-8',
        title: "Getsource",
        content: "Inspect module ထဲမှ getsource သည်လည်း အသုံးများသည်။ parameter အနေဖြင့် function object တစ်ခုကိုယူပြီး ထို function ထဲမှာ ရေးထားသော source code အားလုံးကို ပြန်ပေးပါတယ်။\n\n<CODE_BLOCK>\nprint(inspect.getsource(myFun))\n</CODE_BLOCK>",
        initialCode: "import inspect\ndef test_fn():\n    return 'Hello'\nprint(inspect.getsource(test_fn))",
        exercise: { task: "Try writing code for Getsource", check: (out) => out.includes("return 'Hello'") },
        quiz: { question: "What does Getsource do?", options: ["Compiles the code", "Returns the uncompiled source code text", "Returns memory address", "Deletes the function"], answer: 1 }
      },
      {
        id: 'l8-9',
        title: "Getmodule",
        content: "Inspect module ထဲမှ getmodule သည် function object တစ်ခုကို parameter အဖြစ်ယူပြီး builtins or function type ကိုပြန်ပေးပါသည်။ `inspect.getmodule(print)` ဟုရေး ကြည့်မည်ဆိုလျှင် `<module 'builtins' (built-in)>` ဆိုသည့် output ကို ပြန်ပေးပါမည်။\n\nexample အနေဖြင့် math module ထဲမှ sin function အားကြည့်မည်ဆိုလျှင် math module ကို သုံးမှာ ဖြစ်သည့်အတွက် `import math` ကို အရင်ရေးပေးရပါမည်။\n\n<CODE_BLOCK>\nimport math\nprint(inspect.getmodule(math.sin))\n</CODE_BLOCK>\n\nအထက်ပါအတိုင်းရေးကြည့်မည်ဆိုလျှင် `<module 'math' (built-in)>` ဆိုသည့် output ကို ပြန်ရပါမည်။",
        initialCode: "import inspect\nimport math\nprint(inspect.getmodule(math.cos))",
        exercise: { task: "Try writing code for Getmodule", check: (out) => out.includes("math") },
        quiz: { question: "What does Getmodule do?", options: ["Identifies which module a function belongs to", "Imports all modules", "Creates a new module", "Returns the version of Python"], answer: 0 }
      },
      {
        id: 'l8-10',
        title: "Getcomments",
        content: "Getcomments သည် function တစ်ခုရဲ့ comments များကို သိရှိလိုသောအခါတွင် အသုံးပြုပါသည်။ getcomments သည် parameter အနေဖြင့် function တစ်ခုကို ယူပြီး ထို function အပေါ်တွင် ရေးသားထားသော comment များကို return အနေဖြင့် ပြန်ပေးပါသည်။\n\n<CODE_BLOCK>\nimport inspect\nfrom inspect import getcomments\n#TODO: to explain getcomment\n#Hello im win htut\ndef myFun():\n    pass\nprint(getcomments(myFun))\n</CODE_BLOCK>",
        initialCode: "import inspect\n# This is a sample comment\ndef myFun():\n    pass\nprint(inspect.getcomments(myFun))",
        exercise: { task: "Try writing code for Getcomments", check: (out) => out.includes("sample comment") },
        quiz: { question: "What does Getcomments do?", options: ["Extracts the docstring", "Extracts hash comments immediately preceding the function", "Extracts comments from the whole file", "Ignores all comments"], answer: 1 }
      },
      {
        id: 'l8-11',
        title: "Callable",
        content: "Python programming တွင် object တွေကို `( )` parentheses operator ဖြင့် ခေါ်လိုက်လျှင် return value အနေဖြင့် True or False ပြန်ပေးပါသည်။ True ပြန်ပေးလျှင် ထို object သည် callable ဖြစ်ပြီး False ပြန်ပေးပါက callable မဟုတ်ပါ။ Python မှာ တော်တော်များများက callable တွေဖြစ်ပါတယ်။ callable ဖြစ်မဖြစ်ကို သိရှိနိုင်ရန် built-in function ဖြစ်သည့် `callable()` ကိုသုံးပြီး စစ်ဆေးနိုင်ပါသည်။ အောက်ပါအတိုင်းရေးပြီး run ကြည့်လျှင် True များကိုသာ ရပါမည်။\n\n<CODE_BLOCK>\nprint(callable(print))\nprint(callable('xyz'.upper))\n</CODE_BLOCK>\n\nသတိပြုရန်မှာ callable အားလုံးသည် return value ပြန်ပါသည်။ ဥပမာအားဖြင့် `print()` ကိုအောက်ပါ အတိုင်းစမ်းကြည့်နိုင်သည်။\n\n<CODE_BLOCK>\ntest=print('hello')\nprint(test)\n</CODE_BLOCK>\n\nအထက်ပါ program အား run ကြည့်လျှင် output အနေဖြင့် hello နှင့် None ကို ရပါမည်။ နောက် example တစ်ခုအနေဖြင့် append ကို callable ဖြစ်မဖြစ် အောက်ပါအတိုင်း စမ်းကြည့်နိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (180)\naL=[1,2,3,4]\nresult=aL.append(4)\nprint(aL)\nprint(result)\n#output\n# [1, 2, 3, 4, 4]\n# None\n</CODE_BLOCK>",
        initialCode: "print(callable(len))\nx = 10\nprint(callable(x))",
        exercise: { task: "Try writing code for Callable", check: (out) => out.includes("True") && out.includes("False") },
        quiz: { question: "What does Callable do?", options: ["Makes a variable immutable", "Checks if the object can be invoked using parentheses ()", "Calls a function automatically", "Deletes the function from memory"], answer: 1 }
      },
      {
        id: 'l8-12',
        title: "Different Types of Callable",
        content: "Built-in functions များဖြစ်ကြတဲ့ print , len , callable တို့ သည် callable များဖြစ်ကြပါတယ်။ Built-in methods များ ဖြစ်ကြတဲ့ str.upper , al.append တို့ သည် callable method များဖြစ်ကြပါတယ်။ User – defined functions များဖြစ်ကြတဲ့ def and lambda စတဲ့ function တွေဟာလည်း callable function များဖြစ်ပါတယ်။ classes နှင့် class ရဲ့ကိုယ်စားပြုဖြစ်တဲ့ obj တွေဟာလည်း callables ဖြစ်နိုင်ပါတယ်။ classes အားလုံးသည် callables ဖြစ်သည်။ class များအကြောင်း အသေးစိတ်ကို Object Oriented Programming နောက်ပိုင်းသင်ခန်းစာများ တွင် ဖော်ပြပေးသွားပါမည်။ class များသည် callable ဖြစ်မဖြစ်ကိုအောက်ပါ lesson တွင် လေ့လာကြည့်ပါ။\n\n<CODE_BLOCK>\nSample Program (181)\nclass myClass: #1\n    def __init__(self,x=0): #2\n        print('from class') #3\n        self.counter=x #4\nprint(callable(myClass)) #5\ntest = myClass(10) #6\nprint(test) #7\nprint(test.counter) #7\nprint(callable(test)) #8\n# output\n# True\n# from class\n# <__main__.myClass object at 0x0000025DB68A7880>\n# 10\n# False\n</CODE_BLOCK>\n\nSample Program (181) တွင် line 5 ၌ myClass ကို print ထုတ်ကြည့်သည့်အခါ True ကို ပြန်ပေးပါသည်။ line 6 တွင် myClass 10 ဆိုသည့် value တစ်ခုလှမ်းထည့်ပြီး ခေါ်ပါသည် ။ line 7 တွင် myClass ကိုယ်စားပြုထားသည့် test ကို print ထုတ်ကြည့်သောအခါ from class ဆိုသည့် output ကိုရသလို 10 သည်လည်း x ထဲသို့ ဝင်ရောက်သွားပါသည်။ ထို့ကြောင့် myClass ကို ကိုယ်စားပြုထားသည့် test ထဲမှ test.counter ကို print ထုတ်ကြည့်သည့်အခါ 10 ကို ပြန်ရပါသည်။ သို့သော် test သည် callable မဖြစ်ပါဘူး။ ထို့ကြောင့် output တွင် False ကို မြင်ရပါမည်။ test သည် class တစ်ခုကို ကိုယ်စားပြုထားသော်လည်း callable မဖြစ်သည့် object တစ်ခုဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (182)\nclass myClass: #1\n    def __init__(self,x=0): #2\n        print('from class') #3\n        self.counter=x #4\n    def __call__(self , x=1): #5\n        print('Updating counter value....') #6\n        self.counter +=x #7\n\nb=myClass() #8\nprint(myClass.__call__(b,10)) #9\nprint(b.counter) #10\nprint(callable(b)) #11\n# output\n# from class\n# Updating counter value....\n# None\n# 10\n# True\n</CODE_BLOCK>\n\nSample Program (182) သည် class တစ်ခုထဲမှာရှိတဲ့ function တစ်ခုကို callable ဖြစ်အောင် ဘယ်လိုခေါ်ရမလဲ ဆိုတာကို ပြထားပါတယ်။ line 5 တွင်ရေးထားသော call ထဲမှ self ဆိုသည့် နေရာတွင် class ကိုကိုယ်စားပြုထားသော object ကိုထည့်ပေးရပါမည်။ b ကို callable ဖြစ်ကြောင်း စစ်ကြည့်လျှင် True ကို ပြန်ရပါမည်။ အထက်ပါ ဖော်ပြချက်များသည် myClass ထဲမှ `__call__` အတွက်ဖြစ်ပြီး `__init__` အတွက်လည်း ထိုသို့ callable ဖြစ်အောင် ပြုလုပ်နိုင်သည်။ callable ဖြစ်သွားလျှင် မည်သည့် class မှ အရှေ့တွင် ထည့်ခေါ်စရာမလိုဘဲ b ကို `()` ဖြင့် တိုက်ရိုက်လှမ်းခေါ် နိုင်သည်။ Sample Program (182) ၌ `b()` ကို တိုက်ရိုက်လှမ်းခေါ် တိုင်း counter value သည် 1 ပေါင်းသွားမှာဖြစ်ပါတယ်။ `b.counter` ဟု print ထုတ်ကြည့်လျှင် counter တန်ဖိုးတိုးမတိုးကို သိနိုင်သည်။ myClass ထဲမှ `__init__` ကို callable ဖြစ်စေရန်လည်း အောက်ပါအတိုင်းရေးနိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (183)\nclass myClass: #1\n    def __init__(self,x=0): #2\n        print('from class') #3\n        self.counter=x #4\n    def __call__(self , x=1): #5\n        print('Updating counter value....') #6\n        self.counter +=x #7\n\nb=myClass()\nz=myClass()\nprint(myClass.__call__(b,10))\nprint(myClass.__init__(z,20))\nprint(b.counter)\nprint(callable(b))\nprint(z.counter)\nprint(callable(z))\nprint(b())\n</CODE_BLOCK>",
        initialCode: "class Simple:\n    pass\nobj = Simple()\nprint(callable(Simple))\nprint(callable(obj))",
        exercise: { task: "Try writing code for Different Types of Callable", check: (out) => out.includes("True") && out.includes("False") },
        quiz: { question: "What does Different Types of Callable do?", options: ["Shows that classes are callable by default, but instances require __call__", "Shows that instances are always callable", "Shows that built-in functions are not callable", "Explains that strings are callable objects"], answer: 0 }
      },
      {
        id: 'l8-13',
        title: "Some Object are not callable",
        content: "အချို့သော object တွေကတော့ callable မဟုတ်ပါဘူး။ class တစ်ခုကို ကိုယ်စားပြုထားတဲ့ object တွေကသာ callable ဖြစ်နိုင်ပါတယ်။ အောက်ပါ program တွင် ကြည့်ပါ။ a သည် callable မဟုတ်ကြောင်းကို ပြထားပါတယ်။\n\n<CODE_BLOCK>\nSample Program (184)\nfrom decimal import Decimal\nprint(callable(Decimal))#will be true\n\na=Decimal('10.5')\nprint(type(a))\nprint(callable(a))\n# output\n# True\n# <class 'decimal.Decimal'>\n# False\n</CODE_BLOCK>",
        initialCode: "from decimal import Decimal\na=Decimal('10.5')\nprint(callable(a))",
        exercise: { task: "Try writing code for Some Object are not callable", check: (out) => out.includes("False") },
        quiz: { question: "What does Some Object are not callable do?", options: ["It proves that all objects are callable", "It demonstrates that an instance of the Decimal class is not callable", "It shows that decimal values are invalid in Python", "It removes the decimal object"], answer: 1 }
      },
      {
        id: 'l8-14',
        title: "Iterable",
        content: "Object တစ်ခုဟာ သူ့မှာရှိတဲ့ member data တွေကို တစ်ကြိမ်မှာ တစ်ခုသာလျှင် ထုတ်ပေးခြင်းကို iterable ဖြစ်တယ်လို့ ခေါ်ပါတယ်။ အခြေခံအားဖြင့် iterable သုံးမျိုးခွဲနိုင်ပါတယ်။ ပထမတစ်ခုကတော့ sequences type တွေဖြစ်တဲ့ list , string , tuple တို့ ဖြစ်ပါတယ်။ ဒုတိယတစ်ခုကတော့ non-sequence types တွေဖြစ်တဲ့ dictionary , file objects တို့ဖြစ်ပါတယ်။ တတိယတစ်ခုကတော့ class ကို ကိုယ်စားပြုထားတဲ့ objects တွေပါ။ ဘယ်လို class တွေလည်းဆိုတော့ method အနေဖြင့် `__iter__()` သို့မဟုတ် `__getitem__()` စသည်တို့ ပါဝင်တဲ့ classes တွေ ဖြစ်ပါတယ်။\n\nIterables ဖြစ်တဲ့ objects တွေထဲကနေ data တွေ တစ်ခုခြင်းစီထုတ်တဲ့အချိန်မှာ for loop ကိုအသုံးပြုနိုင်သလို sequence types တွေအတွက်ဆိုရင် zip(), map() စတဲ့ function တွေကိုလည်း သုံးနိုင်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (185)\nlist=['a','b','c','d','e']\niterator = iter(list)\nprint(next(iterator))\nprint(next(iterator))\nprint(next(iterator))\nprint(next(iterator))\n</CODE_BLOCK>\n\nSample Program (185) ကို run ကြည့်မည်ဆိုလျှင် a,b,c,d တို့ ထွက်လာသည်ကို မြင်ရမှာပါ။ iter function ကတော့ သူ့ကိုထည့်ပေးလိုက်တဲ့ parameter ကို object တစ်ခုဖန်တီးလိုက်ပါတယ် ပြီးလျှင် သူ့ကိုတစ်ကြိမ်မှာ data တစ်ခုစီထုတ်ပေးပါတယ်။ print ထုတ်တဲ့ အခါမှာ next function ကိုသုံးပြီး ထုတ်ထားပါတယ် ။ next function သည် parameter အနေဖြင့် ထည့်ပေးထားတဲ့ iterator ထဲက next item ကိုယူပေးပါတယ်။ ထို့ကြောင့် a,b,c,d ဟု Output များကို အစဉ်လိုက် ရခြင်း ဖြစ်ပါတယ်။ print code လေးကြောင်းမရေးခင် `print(iterator)` ဟုရေးပြီး run ကြည့်လျှင် object ဆိုတာကိုတွေ့ရပါမည်။",
        initialCode: "nums = [10, 20, 30]\n# Convert list to an iterator\nmy_iter = iter(nums)\nprint(next(my_iter))\nprint(next(my_iter))",
        exercise: { task: "Try writing code for Iterable", check: (out) => out.includes("10") && out.includes("20") },
        quiz: { question: "What does the next() function do when applied to an iterator object?", options: ["It resets the iterator", "It returns the next available item from the iterator", "It returns all remaining items at once", "It throws an error if called more than once"], answer: 1 }
      },
      {
        id: 'l8-15',
        title: "map()",
        content: "Map function သည် higher order ထဲမှ function တစ်ခုဖြစ်ပြီး function တစ်ခုကို parameter အနေဖြင့် သုံးနိုင်ပါတယ်။ map function မှာ ပုံမှန်အားဖြင့် parameter နှစ်ခု ယူပါတယ်။ ပထမတစ်ခုသည် function ဖြစ်ပြီး ဒုတိယတစ်ခုသည် iterable ဖြစ်ပါတယ်။ iterable ကို တစ်ခုထက်ပိုပြီးလည်း parameter အနေဖြင့် သုံးနိုင်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (186)\ndef fact(n):\n    return 1 if n<2 else n*fact(n-1)\nresults=map(fact,range(6))\nprint(results)\n</CODE_BLOCK>\n\nပထမဆုံး အနေဖြင့် factorial ရှာသည့် function တစ်ခုကို စတင်ရေးသားပါမည်။ ထိုသို့ ရေးသားရာတွင် recursive function ကိုသုံးပြီးရေးသားထားပါသည်။ line 3 တွင် map function သည် return အနေဖြင့် map object ကို ပြန်ပေးပါတယ်။ list or tuple , set တို့ကို ပြန်ပေးတာမျိုး မဟုတ်ဘဲ မိမိတို့ လိုချင်သည့်ပုံစံဖြင့် ပြန်ပြောင်းနိုင်သည်။ ထို့ကြောင့် အထက်ပါ program ကို run ကြည့်သောအခါတွင် အောက်ပါအတိုင်း map object ရကြောင်းကို မြင်ရပါမည်။\n\n`<map object at 0x0085A208>`\n\nResults ဆိုသည့် object ထဲမှ elements များကို အောက်ပါအတိုင်း for loop ကို သုံးပြီး ထုတ် ကြည့်နိုင်သည်။\n\n<CODE_BLOCK>\nfor i in results:\n    print(i)\n</CODE_BLOCK>\n\nသို့သော် results ဆိုသည့် Object ကို နောက်တစ်ကြိမ် ပြန်အသုံးပြုသောအခါတွင်မူ မည်သည့် output ကိုမှ ရမည်မဟုတ်ပါ။ အဘယ်ကြောင့်ဆိုသော် map function သည် list, tuple, set တို့ကို return ပြန်ခြင်းမဟုတ်ဘဲ generator ကို return ပြန်ခြင်းဖြစ်သည်။ generator ကို နောက် lesson တွင် ဖော်ပြသွားပါမည်။ program ကို အောက်ပါအတိုင်း အစအဆုံးရေးကြည့်ပါ က output တစ်ခုတည်းထွက်သည်ကိုသာ မြင်ရပါမည်။ ပထမ looping ဖြစ်သည့် i အတွက် output များကို မြင်ရမည်။ ဒုတိယ looping အတွက်မူ ဘာကိုမှရမည်မဟုတ်ပါ။\n\n<CODE_BLOCK>\nSample Program (187)\ndef fact(n):\n    return 1 if n<2 else n*fact(n-1)\nresults=map(fact,range(6))\nprint(results)\nfor i in results:\n    print(i)\nfor z in results:\n    print(z)\n# Output:\n# 1\n# 1\n# 2\n# 6\n# 24\n# 120\n</CODE_BLOCK>\n\nထိုကဲ့သို့သော ပြဿနာကို ဖြေရှင်းရန် map function ရှေ့တွင် အောက်ပါအတိုင်း list ဆိုသည့် function ကို ထပ်သုံးလိုက်ပါက map က ပြန်ပေးလာသော return value များကို list ပုံစံဖြင့် ပြန်ရမည် ဖြစ်သည်။\n\n`results=list(map(fact,range(6)))`",
        initialCode: "def square(x):\n    return x * x\nres = map(square, [1, 2, 3])\nprint(list(res))",
        exercise: { task: "Try writing code for map()", check: (out) => out.includes("[1, 4, 9]") },
        quiz: { question: "What does the map() function return by default in Python 3?", options: ["A list", "A dictionary", "A map object (which is an iterator)", "A string"], answer: 2 }
      },
      {
        id: 'l8-16',
        title: "Map with Lambda expression",
        content: "Map function ထဲတွင် parameter အနေဖြင့် lambda expression ကိုလည်း သုံးနိုင်ပါတယ်။ ယခု program တွင် map function ထဲသို့ lambda အပြင် list နှစ်ခုလည်း ဖြတ်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (188)\nlist1=[1,2,3,4,5,6]\nlist2=[5,10,15,20]\nresults=list(map(lambda x,y:x+y , list1,list2))\nprint(results)\n# Output :\n# [6, 12, 18, 24]\n</CODE_BLOCK>",
        initialCode: "L1 = [2, 4, 6]\nL2 = [10, 20, 30]\nres = list(map(lambda a, b: a * b, L1, L2))\nprint(res)",
        exercise: { task: "Try writing code for Map with Lambda expression", check: (out) => out.includes("60") },
        quiz: { question: "What does Map with Lambda expression do in Sample Program (188)?", options: ["Applies the lambda addition to corresponding elements of list1 and list2, stopping at the shortest list", "Throws an error due to unequal list lengths", "Appends list2 to list1", "Multiplies the elements"], answer: 0 }
      },
      {
        id: 'l8-17',
        title: "Generator",
        content: "Generator ဆိုတာလည်း function တစ်ခုဖြစ်ပါတယ်။ သို့သော် generator သည် return အနေဖြင့် yield ဆိုသည့် keyword ကိုသုံးပါတယ်။ return သည် function တစ်ခုကို အဆုံးသတ်(terminate) လုပ်ခြင်းဖြစ်ပြီး yield ကတော့ function တစ်ခုအား ခဏရပ်တန့်ခြင်း(pause) လုပ်ခြင်းသာ ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (189)\ndef myFun(x):\n    return x\ndef myGen(y):\n    yield y\n</CODE_BLOCK>\n\nProgram တွင် myFun သည် function တစ်ခု ရေးသားသော ပုံစံ ဖြစ်ပြီး အောက်တွင် ရေးထားသော myGen သည် generator တစ်ခုအား ရေးသားထားသော ပုံစံ ဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (190)\ndef myGen():\n    yield 10\nresults=myGen()\nprint(results)\n# Output:\n# <generator object myGen at 0x0345A2C8>\n</CODE_BLOCK>\n\nSample Program (190) အား run ကြည့်လျှင် output အနေဖြင့် generator object ကို ပြန်လည် ရရှိပါမည်။ ထို generator object ထဲမှ data များကို အောက်ပါအတိုင်း `__next__()` ကိုသုံးပြီး ထုတ်နိုင်ပါသည်။\n\n<CODE_BLOCK>\ndef myGen():\n    yield 10\n    yield 20\n    yield 30\n    yield 40\nresults=myGen()\nprint(results.__next__())\nprint(results.__next__())\nprint(results.__next__())\nprint(results.__next__())\n# Output:\n# 10\n# 20\n# 30\n# 40\n</CODE_BLOCK>\n\nအထက်ပါအတိုင်း print လေးကြောင်းကို မရေးလိုလျှင် for loop ကိုသုံးပြီးလည်း data များကို ထုတ်နိုင်ပါသည်။ နောက်ထပ် program တစ်ပုဒ်အနေဖြင့် yield များ နေရာတွင် while loop ကိုသုံးပြီး yield တစ်ခုတည်း ရေးသားပါမည်。\n\n<CODE_BLOCK>\nSample Program (191)\ndef myGen():\n    x=1\n    while x<=10:\n        square=x*x\n        yield square\n        x+=1\nresults=myGen()\nfor i in results:\n    print(i)\n</CODE_BLOCK>\n\nSample Program (191) အား run ကြည့်လျှင် 1 မှ စတင်ပြီး 9 ထိ နှစ်ထပ်ကိန်းများကို ရရှိမှာ ဖြစ်ပါတယ်။ program အလုပ်လုပ်ပုံမှာ ပထမဆုံး အနေဖြင့် `results = myGen()` ဆိုသည့် line တွင် results ဆိုသည့် object တစ်ခု ကိုတည်ဆောက်လိုက်သည်။ ထို object သည် generator object ဖြစ်သည်။ ထို့နောက် for loop အကြောင်းတွင် ပထမဆုံး element ကို ထုတ်ရန် `myGen()` ဆိုသည့် generator ကိုသွားပါသည်။ step by step အလုပ်လုပ်သွားပြီး yield နေရာကို ရောက်သွားသောအခါတွင် square တန်ဖိုးကို result ဆီသို့ ( line 8) ပြန်ပေးပါသည်။ ထို့ကြောင့် ပထမဆုံး တန်ဖိုးသည် 1 ကစတဲ့ အတွက် 1 ဖြစ်နေပြီး i တန်ဖိုးသည်လည်း 1 ဖြစ်နေပါမည်။ ပြီးလျှင် ကျန်ရှိနေသေးသော line 6 ကို အလုပ်ဆက်လုပ်ပါသည်။ ထို့နောက် line 3 ကို ဆက်သွားပါသည်။ ယခုတစ်ကြိမ်တွင် x တန်ဖိုးသည် 2 ဖြစ်နေသည့်အတွက် square တန်ဖိုးသည် 4 ဖြစ်နေပါမည်။ ထို square တန်ဖိုးအား result ဆီသို့ ပြန်ပေးပါသည် ။ ထိုနည်းအတိုင်းပင် generator ကိုသုံးပြီး value များကို တစ်ခုချင်းစီ ထုတ်နိုင်ပါသည် ။ Database ထဲမှ data များကို ထုတ်ပြီး တိုက်စစ်လိုသောအခါတွင် ယခုနည်းလမ်းကိုသုံးနိုင်သည်။ Database ထဲမှ data အားလုံးကို ထုတ်စရာမလိုဘဲ generator ကိုသုံးပြီး တစ်ခုချင်းစီထုတ်ကာ မိမိလိုသလို သုံးနိုင်သည်။\n\nGenerator အား အောက်ပါ နည်းလမ်းကို သုံးပြီးလည်း စမ်းသပ်နိုင်ပါသေးသည်။\n\n<CODE_BLOCK>\nSample Program (192)\ndef myGen():\n    value=10\n    print('First calling')\n    yield value\n    value +=10\n    print('Second calling')\n    yield value\n    value +=30\n    print('Third calling')\n    yield value\nresults=myGen()\nprint(next(results))\nprint(next(results))\nprint(next(results))\n</CODE_BLOCK>\n\nGenerator နှင့်ပတ်သက်ပြီး အောက်ပါ တို့ကို သိထားရမည်။\n* Generator ထဲတွင် yield များ တစ်ခုထက် ပိုပြီး ပါဝင်နိုင်သည်။\n* For loop ကိုသုံးနိုင်သလို next() function ကိုလည်း သုံးနိုင်သည်။\n* Yield တစ်ခုစီ တိုင်းသည် program process ကို ခဏရပ်တန့် suspend လုပ်ပါသည်။\n* ထိုသို့ ရပ်တန့်ထားသော အခါမျိုးတွင်လည်း value များ၊ statement များကို မှတ်ထားပါသည်။",
        initialCode: "def simple_gen():\n    yield 1\n    yield 2\ng = simple_gen()\nprint(next(g))\nprint(next(g))",
        exercise: { task: "Try writing code for Generator", check: (out) => out.includes("2") },
        quiz: { question: "What is the main difference between return and yield?", options: ["They are exactly the same", "return stops the function entirely, while yield pauses it and remembers its state", "yield works only with strings", "return is used in classes, yield in functions"], answer: 1 }
      },
      {
        id: 'l8-18',
        title: "Zip() Function",
        content: "Zip function သည် parameter အနေဖြင့် iterables ကို ယူပြီး elements များအားလုံးကို tuple အနေဖြင့် ပြန်ပေးပါတယ်။ parameter အနေဖြင့် list , string ,dict တို့ သာမက user-defined iterables တို့ ကိုလည်း အသုံးပြုနိုင်ပါတယ်။\n\nSyntax of zip()\n`zip(*iterables)`\n\n<CODE_BLOCK>\nSample Program (193)\nitr1=[1,2,3,4,5]\nitr2=[10,20,30]\nresults= zip(itr1,itr2)\nprint(results)\nfor i in results:\n    print(i)\n# Output:\n# <zip object at 0x00C48AA8>\n# (1, 10)\n# (2, 20)\n# (3, 30)\n</CODE_BLOCK>\n\nZip သည်လည်း map function အတိုင်းပင် zip object ကိုပြန်ပေးသည်။ for loop တစ်ခု ထပ်ရေးပြီး အသုံးပြုလျှင် မည်သည့် output ကိုမှရမှာမဟုတ်ပါဘူး။ zip function သည် ထည့်ပေးလိုက်သော iterables များကို element တစ်ခုချင်းစီပေါင်းပေးပါတယ်။ ထို့ကြောင့် ပထမဆုံး output တွင် itr1 မှ 1 နှင့် itr2 မှ 10 တို့ကို tuple ပုံစံဖြင့် ရရှိ ခြင်းဖြစ်သည်။",
        initialCode: "itr1=[1,2,3,4,5]\nitr2=[10,20,30]\nresults= zip(itr1,itr2)\nfor i in results:\n    print(i)",
        exercise: { task: "Try writing code for Zip() Function", check: (out) => out.includes("(1, 10)") },
        quiz: { question: "What does Zip() Function do?", options: ["It adds lists", "It combines multiple iterables into tuples", "It deletes lists", "It converts lists to strings"], answer: 1 }
      },
      {
        id: 'l8-19',
        title: "Filter ()",
        content: "Filter function သည် parameter အနေဖြင့် နှစ်ခုယူပါသည်။ ပထမတစ်ခုသည် function ဖြစ်ပြီး ဒုတိယ တစ်ခုသည် iterable ဖြစ်ပါသည်။ ပထမ parameter ဖြစ်သည့် function သည် iteralbe ထဲမှ element တစ်ခုချင်းစီအားစစ်ဆေးပြီး true or false တစ်ခုခုကို ပြန်ပေးပါသည်။ ဒုတိယတစ်ခုဖြစ်သည့် iterable သည်စစ်ဆေးရန်ဖြစ်ပြီး sets, lists, tuples သို့မဟုတ် အခြားသော iterable များ ဖြစ်နိုင်သည်။\n\n<CODE_BLOCK>\nSample Program (194)\nalphabet=['a','b','c','d','e','f','i','o','u']\ndef VowelFilter(alphabet):\n    vowel=['a','e','i','o','u']\n    if(alphabet in vowel):\n        return True\n    else:\n        return False\n\nVowelFilter = filter(VowelFilter,alphabet)\nprint('The filtered vowels are:')\nfor i in VowelFilter:\n    print(i)\n</CODE_BLOCK>\n\nSample Program (194) အား run ကြည့်လျှင် a , e ,i ,o ,u ဆိုသည့် output များကိုမြင်ရပါမည်။ Vowel များကို စစ်ဆေးရန် ပထမဆုံး အနေဖြင့် vowelfilter ဆိုသည့် function တစ်ခုတည်ဆောက်ပါသည်။ ထို function ထဲတွင် user မှထည့်ပေးလိုက်သော alphabet ဆိုသည့် iterable တစ်ခုဖြတ်ပါမည်။ ထို့နောက် if statement ထဲတွင် alphabet ဆိုသည့် list ထဲတွင် vowel ထဲမှစကားလုံးများပါသလား ဆိုတာကို တစ်လုံးချင်းစီတိုက်စစ်ရန်ရေးသားထားခြင်းဖြစ်သည်။\n\nline number 8 တွင် filter function ထဲ၌ vowelfilter ဆိုသည့် function နှင့် alphabet ဆိုသည့် user ထည့်မည့် iterable တို့ကို ထည့်ပေးလိုက်ပါသည်။ Program သည် line number 8 မှစ run မည်ဖြစ်ပြီး line number 9 နှင့် line number 10 သို့ ရောက်သောအခါ VowelFilter object ထဲမှ element များကို တစ်ခုခြင်းစီ စစ်ဆေးပြီး မှန်လျှင် True ပြန်ပေးပါသည် ဆိုလိုသည်မှာ ပထမဆုံးအနေဖြင့် alphabet ဆိုသည့် list ထဲမှ ပထမဆုံးစာလုံးသည် vowel ဆိုသည့် list ထဲမှ ပထမဆုံးစာလုံးနှင့်တူသလားစစ်ပြီး တူလျှင် True ပြန်ပေးခြင်း ဖြစ်သည်။ ထိုကဲ့သို့ True ဆိုလျှင် output အနေဖြင့် a ကိုပြန်ပေးပါသည်။ e ဆိုသည့် စာလုံး အလှည့်တွင်လည်း ထိုအတိုင်းပင် ဖြစ်သည်။ True ဆိုမှသာ VowelFilter ထဲသို့ စကားလုံးများ ရောက်ရှိမည် ဖြစ်ပြီး False ဆိုလျှင် VowelFilter ထဲသို့ စကားလုံးများရောက်မည် မဟုတ်ပါ ထို့ကြောင့် false အလှည့်သို့ ရောက်သောအခါတွင်မူ စကားလုံးများကို ထုတ်ပေးမည်မဟုတ်ပါ။",
        initialCode: "alphabet=['a','b','c','d','e','f','i','o','u']\ndef VowelFilter(alphabet):\n    vowel=['a','e','i','o','u']\n    return alphabet in vowel\nVowelFilter = filter(VowelFilter,alphabet)\nfor i in VowelFilter:\n    print(i)",
        exercise: { task: "Try writing code for Filter ()", check: (out) => out.includes("a") },
        quiz: { question: "What does Filter () do?", options: ["It filters out items based on a boolean function", "It removes duplicates", "It sorts lists", "It adds items"], answer: 0 }
      },
      {
        id: 'l8-20',
        title: "Reduce () function",
        content: "Python 2 မှာဆိုရင်တော့ reduce function သည် built in function ဖြစ်ပြီး 3 တွင်မူ functools ဆိုသည့် module ကို import လုပ်ပြီးမှ အသုံးပြုရပါမည်။ reduce function သည် ပုံမှန် အားဖြင့် parameter နှစ်ခုယူပါသည်။ ပထမတစ်ခုသည် function ဖြစ်ပြီး ဒုတိယတစ်ခုသည် iterable ဖြစ်ပါသည်။ lambda expression ကိုသုံးပြီး အောက်တွင် sample program တစ်ပုဒ်ရေးပြထားပါသည်။\n\n<CODE_BLOCK>\nSample Program (195)\nimport functools\nli = [1,2,3,4,5,6]\nprint(\"The sum of all elements from list: \",end=\"\")\nprint((functools.reduce(lambda a,b: a+b , li)))\n</CODE_BLOCK>\n\nအထက်ပါ program ကို run ကြည့်လျှင် output အနေဖြင့် 21 ကို ရပါမည်။\n\nProgram ရှင်းလင်းချက်\n* အလုပ်လုပ်သည့် ပုံစံမှာ ပထမဆုံးအနေဖြင့် list ထဲမှ ပထမနှင့်ဒုတိယ element နှစ်ခုကို ယူပါသည် ။ ထို့နောက် ထို element နှစ်ခုအား lambda function ထဲသို့ ထည့်ပြီး lambda function ထဲမှ instruction အတိုင်း အလုပ်လုပ်ပါသည်။ အထက်တွင် ရေးထားသော lambda function ထဲတွင် element နှစ်ခုကို ထပ်ပေါင်းခြင်းဖြစ်သောကြောင့် ပေါင်းလဒ်ကို ရပါမည်။\n* အထက်တွင်ရလာသော ပေါင်းလဒ် နှင့် list ထဲမှ ကျန်ရှိနေသော တတိယမြောက် element ကို ထပ်ယူပြီး lambda function ထဲသို့ ထပ်ပို့ပါသည်။ ပြီးလျှင် ထို element များမှ ရလာသော result နှင့် နောက်ထပ် list ထဲမှ element တစ်ခုကိုယူကာ lambda function ထဲသို့ ထပ်ပို့ပါသည်။ ဤနည်းဖြင့် list ထဲမှ element အားလုံးပေါင်းခြင်းကို ရခြင်း ဖြစ်ပါသည်။\n\nList တစ်ခုထဲမှ element အားလုံး၏ အကြီးဆုံး element ကို ရလိုလျှင်လည်း reduce function ကို သုံးပြီး အောက်ပါအတိုင်း ရေးနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (196)\nimport functools\nli = [1,2,3,4,5,6]\nprint(\"The max of all elements from list: \",end=\"\")\nprint((functools.reduce(lambda a,b: a if a>b else b , li)))\n</CODE_BLOCK>\n\nSample Program (196) ကို run ကြည့်ပါက output အနေဖြင့် 6 ကို ရရှိ ပါမည်။\n\nအကယ်၍ အငယ်ဆုံး min value ကို ရလိုပါကလည်း အောက်ပါ အတိုင်း ရေးနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (197)\nimport functools\nli = [1,2,3,4,5,6]\nprint(\"The min of all elements from list: \",end=\"\")\nprint((functools.reduce(lambda a,b: a if a<b else b , li)))\n</CODE_BLOCK>",
        initialCode: "import functools\nli = [1,2,3,4,5,6]\nprint(functools.reduce(lambda a,b: a+b , li))",
        exercise: { task: "Try writing code for Reduce () function", check: (out) => out.includes("21") },
        quiz: { question: "What does Reduce () function do?", options: ["It sums everything", "It reduces list to a single value by applying a function cumulatively", "It multiplies lists", "It filters lists"], answer: 1 }
      },
      {
        id: 'l8-21',
        title: "Warning Our Reduce Function",
        content: "Reduce function ကို မသုံးဘဲ မိမိတို့ ကိုယ်တိုင် ရေးမည်ဆိုပါက အောက်ပါအတိုင်း ရေးရပါမည်။\n\n<CODE_BLOCK>\nSample Program (198)\ndef mySum(x1, x2):\n    return x1 + x2\ndef myReduce(mySum, seq):\n    first = seq[0]\n    for i in seq[1:]:\n        first = mySum(first, i)\n    return first\nlist = [1, 2, 3, 4]\nprint(myReduce(mySum, list))\n</CODE_BLOCK>\n\nSample Program (198) အား run ကြည့်ပါ output အနေဖြင့် 10 ကို ရရှိပါမည်။\n\nWarning Our Reduce Function\n\nမိမိတို့ ကိုယ်တိုင် ရေးထားသော myReduce function သည် set or unsequence ဖြစ်သည့် data များကိုမူ handle မလုပ်နိုင်ပါ။ `TypeError: 'set' object is not subscriptable` ဖော်ပြထားသည့် error ကို တွေ့ရပါမည်။ သို့သော် functools module ထဲမှ reduce function သည် set or unsequence ဖြစ်သည့် data များကိုပါ handle လုပ်နိုင်ပြီး error တက်မည် မဟုတ်ပါ။",
        initialCode: "def mySum(x1, x2):\n    return x1 + x2\nprint(mySum(1, 2))",
        exercise: { task: "Try writing code for Warning Our Reduce Function", check: (out) => out.includes("3") },
        quiz: { question: "What does Warning Our Reduce Function do?", options: ["It tells you about custom reduce limits", "It says reduce is bad", "It says reduce is only for sets", "It does nothing"], answer: 0 }
      },
      {
        id: 'l8-22',
        title: "Partial () Function",
        content: "Partial function ကို အသုံးပြုခြင်းအားဖြင့် function တစ်ခုရဲ့ arguments တွေကို လျှော့ချနိုင်ပါတယ်။ Partial function ကို ခေါ် သုံးနိုင်ရန် functools ဆိုသည့် module ကို import လုပ်ပေးရန် လိုအပ်ပါသည်။ partial function ကို ခေါ်မသုံးခင် မိမိတို့ ကိုယ်တိုင် အောက်ပါအတိုင်း ရေးကြည့်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (199)\ndef myFun(x,y,z):\n    print(x,y,z)\ndef fn(yy,zz):\n    return myFun(10,yy,zz)\nprint(fn(100,200))\n</CODE_BLOCK>\n\nSample Program (199) အား run ကြည့်ပါက output အနေဖြင့် 10 ,100 ,200 တို့ကို ရရှိပါမည်။\n\nPartial function သည် higher order function လည်းဖြစ်သကဲ့သို့ ပုံမှန်အားဖြင့် argument နှစ်ခုယူပါသည်။ ပထမတစ်ခုသည် function ဖြစ်ပြီး ဒုတိယတစ်ခုသည် pre-set လုပ်ရန် value ဖြစ်သည်။ အောက်တွင် partial function ကို သုံးပြီး program ရေးပြထားပါသည်။\n\n<CODE_BLOCK>\nSample Program (200)\nfrom functools import partial\ndef myFun(x,y,z):\n    print(x,y,z)\npFn = partial(myFun , 10)\nprint(pFn(100,200))\n</CODE_BLOCK>\n\nနောက်ထပ် program တစ်ပုဒ်အနေဖြင့် ရှုပ်ထွေးသည့် arguments များပါဝင်သည့် function တစ်ခုကို partial function သုံးပြီး arguments များ လျှော့ချကြည့်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (201)\nfrom functools import partial\ndef myFun(x , y , *args , x1 ,y1 ,**kwargs):\n    print(x , y , args , x1 ,y1 , kwargs)\npFn = partial(myFun , 10 ,x1='test')\npFn(20 ,30 ,40 ,y1='hello', aa=100 ,bb=200 , cc=300)\n# Output: 10 20 (30, 40) test hello {'aa': 100, 'bb': 200, 'cc': 300}\n</CODE_BLOCK>\n\nPartial function က လုပ်ပေးလိုက်သော pre-set value ကိုလည်း ပြန်လည်ချိန်း နိုင်ပါသေးတယ်။ အောက်တွင် sample program ရေးပြထားပါသည်။\n\n<CODE_BLOCK>\nSample Program (202)\nfrom functools import partial\ndef pow(base , exponent):\n    return base ** exponent\nsq = partial(pow , exponent =3)\nprint(sq(4))\ncu = partial(pow , exponent =2)\nprint(cu(2))\nprint(\"test with base 5 expo 2 = \",cu(base=5))\n</CODE_BLOCK>",
        initialCode: "from functools import partial\ndef multiply(x, y):\n    return x * y\ndouble = partial(multiply, 2)\nprint(double(4))",
        exercise: { task: "Try writing code for Partial () Function", check: (out) => out.includes("8") },
        quiz: { question: "What does Partial () Function do?", options: ["It deletes arguments", "It freezes some portion of arguments resulting in a simplified function signature", "It crashes the program", "It loops forever"], answer: 1 }
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
        content: "Operator ကို အသုံးပြုနိုင်ရန်အတွက် operator module ကို import လုပ်ပေးရန် လိုအပ်ပါသည်။ operator module ထဲတွင် ပါဝင်သော attribute များကိုသိလိုပါက `dir(operator)` ဟုရေးပြီး run ကြည့်ပါက သိနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (203)\nimport operator\nprint(operator.add(10,20))\nprint(operator.mul(2,3))\nprint(operator.truediv(3,2))\nprint(operator.floordiv(13,2))\n</CODE_BLOCK>\n\nSample Program (203) တွင် operator module ထဲမှ add, mul , truediv , floordiv တို့ ကို အသုံးပြုထားပါသည်။ add function သည် argument နှစ်ခုအား ပေါင်းပြီး return ပြန်ပေးပါသည်။ mul function သည်လည်း argument နှစ်ခုအားမြှောက်ပြီး return အဖြစ် ပြန်ပေးပါသည်။ truediv function သည် ရှေ့က argument အား နောက်မှ argument ဖြင့် ပြတ်သည်အထိ စားပြီး return ပြန်ပေးပါသည်။ floordiv function သည် စားလဒ်ကိုသာ ပြန်ပေးပါသည်။\n\nရှေ့ပိုင်းသင်ခန်းစာများ၌ function များလျှော့ချလိုလျှင် reduce function နှင့် lambda expression တို့ကိုတွဲသုံးခဲ့ပါသည်။ lambda expression ကိုမသုံးပဲ reduce နှင့် operator module ကိုလည်း တွဲသုံးနိုင်သည်။ အသုံးပြုပုံမှာ lambda expression နေရာတွင် operator module ထဲမှ မိမိလုပ်ဆောင်ချက်ပေါ်မူတည်ပြီး မိမိတို့ ကြိုက်နှစ်သက်ရာ function ကိုသုံးနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (204)\nimport operator\nfrom functools import reduce\nlist=[1,2,3,4,5,6]\noutput = reduce(lambda x,y:x*y ,list)\nprint(\"output from reduce and lambda\",output)\noutput2= reduce(operator.mul , list)\nprint(\"output from reduce and operator\",output2)\n</CODE_BLOCK>\n\nအထက်ပါ program ကို run ကြည့်သောအခါ output နှစ်ခုလုံးသည် 720 ကို ရရှိပါမည်။",
        initialCode: "import operator\n# Use operator.add instead of +\nprint(operator.add(5, 10))",
        exercise: { task: "Try writing code for Operator Module", check: (out) => out.includes("15") },
        quiz: { question: "What does the operator module provide?", options: ["A way to delete operators", "Functions that perform standard operations like +, -, *, / as function calls", "A way to change Python syntax", "A way to import modules without 'import'"], answer: 1 }
      },
      {
        id: 'l9-2',
        title: "Comparison operator from operator module",
        content: "Operator module ထဲတွင် comparison operator များလည်း ကျန်ရှိနေသေးသည်။ ပုံမှန် အားဖြင့် Programming language များတွင် ရေးသားသည့် ( < ) operator သည် python တွင် lt ဆိုသည့် operator နှင့် ဆင်တူပါသည်။ ထို lt function သည် ပုံမှန်အား ဖြင့် argument နှစ်ခု ယူပြီး ပထမတစ်ခုသည် ဒုတိယတစ်ခုထက်ငယ်သလားဟု စစ်ဆေးပါသည်။ အကယ်၍ ငယ်ခဲ့လျှင် True ကိုပြန်ပေးပြီး မငယ်ခဲ့လျှင် False ကို ပြန်ပေးပါသည်။ ထို့ပြင် တူညီလားဆိုသည့် အခါ စစ်ချင်သည့် == အတွက်လည်း `is_` function ရှိနေပါသေးသည်။ ထို function သည်လည်း ရှေ့ argument နှင့် နောက် argument တို့ ကို စစ်ဆေးပြီး တူညီလျှင် True ပြန်ပေးပြီး မတူလျှင် False ပြန်ပေးပါသည်။ ထို့ပြင် ( > ) greater than function ( gt ) နှင့် truth function တို့ကိုလည်း ဖော်ပြထားပါသည်။ truth function သည် argument ထဲ၌ data ရှိသလား မရှိသလား ဆိုတာကို စစ်ဆေးပါသည် ရှိလျှင် True ကို ပြန်ပေးပြီး မရှိလျှင် False ကို return ပြန် ပေးပါသည်။\n\n<CODE_BLOCK>\nSample Program (205)\nimport operator\nlist=[1,2,3,4,5,6]\noutput1=operator.lt(10 , 20)\noutput2= operator.gt(10 , 20)\noutput3= operator.is_('win','htut')\noutput4= operator.is_not('win','htut')\noutput5= operator.truth(list)\nprint(\"For lt function output1 :\",output1)\nprint(\"for gt function output2 :\",output2)\nprint(\"For is_ function output3: \",output3)\nprint(\"For is_not function output4 :\",output4)\nprint(\"For truth function output5: \",output5)\n</CODE_BLOCK>\n\nOutput::\nFor lt function output1 : True\nfor gt function output2 : False\nFor is_ function output3: False\nFor is_not function output4 : True\nFor truth function output5: True",
        initialCode: "import operator\n# Check if 5 is greater than 2\nprint(operator.gt(5, 2))",
        exercise: { task: "Try writing code for Comparison operator from operator module", check: (out) => out.includes("True") },
        quiz: { question: "What does the operator.truth() function do?", options: ["It checks if a value is True or False (like bool())", "It converts numbers to text", "It multiplies numbers", "It deletes lists"], answer: 0 }
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
        content: "Variable တစ်ခုရဲ့ scope ဆိုတာ ထို variable ကို access လုပ်နိုင်ခြင်း မလုပ်နိုင်ခြင်း ကို ဆိုလိုခြင်း ဖြစ်ပါတယ်။ global and local scope ဟူ၍ scope နှစ်မျိုး ရှိပါတယ် global scope ထဲမှာ ကြေညာထားတဲ့ variable ကို program ရဲ့ မည်သည့်နေရာကမဆို access လုပ်နိုင်သလို local scope ထဲမှာ ကြေညာထားတဲ့ variable ကိုတော့ သက်ဆိုင်ရာ local scope ကနေပဲ access လုပ်နိုင်ပါတယ်။ Python ရဲ့ global variable ကတော့ function တစ်ခုထဲမှာ ခေါ်သုံးရုံနဲ့ ထို global variable ရဲ့ value ကိုမပြောင်းလဲနိုင်သလို မူရင်း value ကို ထိခိုက်မရှိစေပဲ အသုံးပြုနိုင်ပါတယ်။ အကယ်၍ မူရင်း global value ကို ပြောင်းလဲလိုသောအခါတွင်လည်း global ဆိုသည့် keyword ကိုသုံးပြီး ပြောင်းလဲနိုင်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (206)\ng=10 #line 1\ndef myFun(n): #line 2\n    g =20 #line 3\n    v = g ** n #line 4\n    return v #line 5\nprint(myFun(2)) #line 6\nprint('global var g:',g) #line 7\n</CODE_BLOCK>\n\nSample Program (206) တွင် line 1 ၌ g ဆိုသည့် global variable တစ်ခုကို value 10 ဖြင့် ကြေညာထားပါသည်။ line 3 တွင် myFun ဆိုသည့် function ထဲ၌ g ကို 20 ဆိုသည့် value အသစ်အား assign လုပ်လိုက်ပါသည်။ line 4 တွင်မူ 20*20 ဖြစ်သည့် အတွက် v တန်ဖိုးသည် 400 ဖြစ်ပါသည်။ line number 7 တွင် g တန်ဖိုးအား output ထုတ်ကြည့်သောအခါ 10 ကိုသာ ပြန်လည် ရရှိပါမည်။ line 4 တွင် g value သည် 20 ဖြစ်ခဲ့သော်လည်း line 7 တွင်မူ g value သည် 10 သာ ဖြစ်နေသည်ကို မြင်ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် myFun ဆိုသည့် function တစ်ခု အတွင်း၌ g ဆိုသည့် global variable ကိုယူသုံးခြင်းသာ ဖြစ်သည်။ global variable g ထဲသို့ 20 ဆိုသည့် value အသစ်ကို assign လုပ်သော်လည်း ထို g value သည် local scope တစ်ခုအနေဖြင့် myFun ဆိုသည့် function တစ်ခု အတွင်း၌သာ အသုံးပြုလို့ရမည် ဖြစ်သည်။\n\n<CODE_BLOCK>\nSample Program (207)\ng=10\ndef myFun(n):\n    global g\n    g =20\n    v = g ** n\n    return v\nprint(myFun(2))\nprint('global var g:',g)\n</CODE_BLOCK>",
        initialCode: "x = 10\ndef modify():\n    global x\n    x = 20\nmodify()\nprint(x)",
        exercise: { task: "Modify a global variable inside a function scope using the global keyword directive.", check: (out) => out.includes("20") },
        quiz: { question: "What happens if you modify a global variable inside a function without using the 'global' keyword?", options: ["It modifies the global variable", "It creates a new local variable with the same name", "It throws an error", "It does nothing"], answer: 1 }
      },
      {
        id: 'l10-2',
        title: "Nonlocal Variables",
        content: "Nonlocal variables တွေကို inner function or nested function တွေထဲမှာ အသုံးပြုပါတယ်။ အသုံးပြုပုံ သည် global နှင့် ဆင်တူသော်လည်း global သည် မည်သည့် function ထဲမှာမှ ကြေညာထားခြင်း မဟုတ်ပဲ nonlocal ကတော့ function တစ်ခုအတွင်းမှာ ကြေညာပါတယ်။\n\n<CODE_BLOCK>\nSample Program (210)\ndef outerFun():\n    d = 'green'\n    def innerFun():\n        d = 'python'\n        print('inner: ',d)\n    innerFun()\n    print('outer:',d)\nouterFun()\n</CODE_BLOCK>\n\nSample Program (210) တွင် outerFun ထဲ၌ d = ‘green’ ဆိုသည့် variable တစ်လုံးကို ကြေညာထားသည်။ ထို variable ကို line 4 တွင် python ဆိုသည့် data အသစ် ထပ်ထည့်ပါသည် ။ line number 6 တွင် innerFun ကို လှမ်းခေါ်သောအခါ၌ inner: python ဆိုသည့် output ကိုရခြင်းဖြစ်ပါသည်။ line number 8 တွင် outerFun ကို ခေါ်သောအခါ line 7 မှ output သည် green ကို သာရှိ ပါသည် line 4 တွင် ပြောင်းလဲလိုက်သော python သည် innerFun ထဲ၌သာ အကျိုးသက်ရောက်ပြီး outerFun တွင်မူ အကျိုးသက်ရောက်မှု မရှိပါ။\n\nNested function များထဲ၌ ကြေညာထားသော variable ကို ပြောင်းလဲလိုပါက nonlocal ဆိုသည့် keyword ကိုသုံးပြီး ပြောင်းနိုင်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (211)\ndef outerFun():\n    d = 'green'\n    def innerFun():\n        nonlocal d\n        d = 'python'\n        print('inner: ',d)\n    innerFun()\n    print('outer:',d)\nouterFun()\n</CODE_BLOCK>",
        initialCode: "def outer():\n    x = 'outer'\n    def inner():\n        nonlocal x\n        x = 'inner'\n    inner()\n    print(x)\nouter()",
        exercise: { task: "Update a variable in the enclosing outer function scope from within an inner nested function scope using nonlocal.", check: (out) => out.includes("inner") },
        quiz: { question: "What is the primary difference between global and nonlocal keywords?", options: ["global refers to module-level scope, nonlocal refers to the nearest enclosing scope", "They are identical", "nonlocal can only be used in global scope", "global is used inside classes only"], answer: 0 }
      },
      {
        id: 'l10-3',
        title: "Closure",
        content: "Parameter pass လုပ်ခြင်း မရှိပဲ function တစ်ခုအတွင်းသို့ data ထည့်ခြင်းကို closure လို့ ခေါ်ပါတယ်။ closure သည် function object တစ်ခုဖြစ်ပြီး ထည့်ပေးလိုက်တဲ့ data ကိုလည်း သိမ်းထားနိုင်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (214)\ndef myFun1():\n    data = 'i am belong to myFun1'\n    def myFun2(): #nested function\n        print(data)\n    return myFun2 #closure\n\nobj1= myFun1()\nobj1()\n</CODE_BLOCK>\n\nSample Program (214) ကို run ကြည့်ပါက i am belong to myFun1 ဆိုသည့် output ကို ရပါမည်။ line 5 မှ myFun2 သည် closure function ဖြစ်ပါသည်။\n\n<CODE_BLOCK>\nSample Program (216)\ndef myFun1():\n    data = 'i am belong to myFun1'\n    def myFun2():\n        print(data)\n    return myFun2\n\nobj1= myFun1()\ndel myFun1\nobj1()\n</CODE_BLOCK>\n\nဆိုလိုသည်မှာ closure သည်မူရင်း function ပျက်သွားသော်လည်း သူထဲတွင်ရှိနေသော data ကို မှတ်ထားပါသည်။ myFun2 ဆိုသည့် closure ထဲမှ data သည် myFun1 ဆိုသည့် outer function မှ data ဖြစ်သည်။ ထို outer function ကိုဖျက်လိုက်သော်လည်း closure သည် data ကို မှတ်ထားခြင်းကြောင့် output ကို ပြန်ရလာခြင်း ဖြစ်သည်။",
        initialCode: "def outer(msg):\n    def inner():\n        print(msg)\n    return inner\nclosure_fn = outer('Hello Closure')\nclosure_fn()",
        exercise: { task: "Implement a closure that retains access to a variable from its outer scope even after the outer function has returned.", check: (out) => out.includes("Hello Closure") },
        quiz: { question: "Which of the following is NOT required for a closure?", options: ["Nested function", "Inner function referring to a variable in the outer function", "Outer function returning the inner function", "Using the 'global' keyword"], answer: 3 }
      },
      {
        id: 'l10-4',
        title: "__closure__ Attribute",
        content: "Function object တွေမှာဆိုရင် `__closure__` attribute ရှိပါတယ်။ ဉပမာ `myFun.__closure__` လို့ရေးမယ်ဆိုရင် myFun သည် closure function ဖြစ်နေမည်ဆိုလျှင် cell object ကို tuple အနေဖြင့် return ပြန်ပေးပါတယ်။\n\n<CODE_BLOCK>\nSample Program (218)\ndef myFun(n):\n    def adding(data):\n        return data+n\n    return adding\n\nadd=myFun(10)\nprint(add.__closure__)\n</CODE_BLOCK>\n\nOutput အနေဖြင့် cell object ကို ပြန်ပေးပါသည်။ အဘယ်ကြောင့်ဆိုသော် add သည် closure function ဖြစ်နေသောကြောင့် ဖြစ်သည်။ ထို့ပြင် မိမိတို့ အသုံးပြုနေသည့် closure function ထဲတွင် မည်သည့် data or value ရှိနေသည်ကိုလည်း အောက်တွင်ဖော်ပြထားတဲ့နည်းလမ်းအတိုင်းရေးပြီး သိရှိနိုင်ပါသေးသည်။\n\n<CODE_BLOCK>\nSample Program (219)\ndef myFun(n):\n    def adding(data):\n        return data+n\n    return adding\n\nadd=myFun(10)\nprint(add.__closure__[0].cell_contents)\n</CODE_BLOCK>",
        initialCode: "def multiplier(n):\n    def inner(x):\n        return x * n\n    return inner\n\nfunc = multiplier(5)\nprint(func.__closure__[0].cell_contents)",
        exercise: { task: "Retrieve the enclosed variable contents stored within a closure object's cell attribute.", check: (out) => out.includes("5") },
        quiz: { question: "What is the purpose of accessing .cell_contents in a closure?", options: ["To delete the closure", "To view the actual value of the variable captured by the closure", "To convert the closure to a list", "To execute the function"], answer: 1 }
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
        content: "Decorator ဆိုတာ မူရင်းရှိပြီးသား function or object တစ်ခုထဲကို လုပ်ဆောင်ချက်အသစ်တွေ ထပ်ထည့်လိုတဲ့အခါမှာ အသုံးပြုပါတယ်။ ထိုသို့ လုပ်ဆောင်ချက်တွေ ထပ်ထည့်တဲ့ အခါမှာ မူရင်းရှိပြီးသား function or object တွေထဲမှာရှိတဲ့ code structure ကို modify or ပြုပြင်ပြောင်းလဲခြင်းမရှိပါဘူး။ Decorator တွေဟာ map function တို့လို function တစ်ခုကို argument အနေဖြင့် ယူပါတယ်။ return အနေဖြင့်တော့ closure တစ်ခုကို ပြန်ပေးပါတယ်။\n\n<CODE_BLOCK>\nSample Program (221)\ndef myFun(x,y): # မူရင်း မပြောင်းလဲ လိုသော function\n    print(x/y)\n\ndef working(func):\n    def inner(x,y):\n        if x < y:\n            x,y = y, x\n        return func(x,y)\n    return inner\n\nresult = working(myFun)\nresult(5,10)\n# Output: 2.0\n</CODE_BLOCK>\n\nအထက်ပါ program တွင် working ဆိုသည့် decorator တစ်ခု တည်ဆောက်ထားပါသည်။ result ထဲတွင် inner function ရောက်ရှိလာပြီး၊ parameter အနေဖြင့် 5 ,10 ကို ထည့်ပေးလိုက်သောအခါ x တန်ဖိုးသည် y တန်ဖိုးထက် ငယ်နေသည့် အတွက် if condition အောက်မှ statement ကို အလုပ်ဆက်လုပ်ပါသည်။ Line 7 တွင် `func(x , y )` ဆိုပြီး return ပြန်ပေးပါသည်။ func သည် myFun အစား parameter ဖြစ်သည့်အတွက် myFun ကို x ,y parameter ဖြင့် သွားခေါ်ပါသည်။",
        initialCode: "def decorator(func):\n    def wrapper():\n        print('Before')\n        func()\n    return wrapper\n\n@decorator\ndef say_hello():\n    print('Hello')\nsay_hello()",
        exercise: { task: "Try writing code for Decorator", check: (out) => out.includes("Before") },
        quiz: { question: "What does a Decorator return?", options: ["A list", "A closure function", "An integer", "None"], answer: 1 }
      },
      {
        id: 'l11-2',
        title: "Counter Application with Decorator",
        content: "Decorator ကိုအသုံးပြုပြီး counter application တစ်ခုရေးသားပါမည်။ ပထမဆုံး အနေဖြင့် closure တစ်ခုရေးသားပါမည်။ ထို closure ၏ inner function ထဲတွင် nonlocal variable ကိုသုံးပြီး count ဆိုသည့် variable တစ်ခုတည်ဆောက်ပါမည်။ ထို nonlocal variable ကိုသုံးပြီး မည်သည့် function က အကြိမ်အရေအတွက် ဘယ်လောက်ခေါ်သလဲဆိုတာကို မှတ်ထားမှာ ဖြစ်ပါတယ်။\n\n<CODE_BLOCK>\nSample Program (222)\ndef counter(func):\n    count=0\n    def inner(*args ,**kwargs):\n        nonlocal count\n        count +=1\n        print('Function {0} was called {1} times'.format(func.__name__,count))\n        return func(*args , **kwargs)\n    return inner\n\ndef add(a , b=0):\n    print(a+b)\n\nresult = counter(add)\nresult(10 ,20)\n</CODE_BLOCK>\n\nSample Program (222) တွင် add function ကို ဘယ်နှစ်ခါခေါ်သလဲဆိုတာ သိနိုင်ရန် count ကို print ထုတ်ထားသည်။ ထို့ပြင် function name ကိုပါ သိနိုင်ရန် `__name__` attribute ကိုသုံးထားပါသည်။ program ကို run ပြီးချိန်၌ output တွင် add function အား 1 times ခေါ်သည်ဆိုတာကို တွေ့ရပါမည်။",
        initialCode: "def counter(func):\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n        print(count)\n        func()\n    return inner\n\n@counter\ndef greet():\n    print('Hi')\ngreet()\ngreet()",
        exercise: { task: "Try writing code for Counter Application with Decorator", check: (out) => out.includes("2") },
        quiz: { question: "What does Counter Application with Decorator do?", options: ["Counts function calls", "Sorts a list", "Filters data", "Adds numbers"], answer: 0 }
      },
      {
        id: 'l11-3',
        title: "@Property",
        content: "@Property ကိုတော့ decorator များနဲ့တွဲဖက်ပြီး အသုံးပြုပါတယ်။ ထိုသို့ အသုံးပြုခြင်းအားဖြင့် ဖတ်ရလွယ်ကူစေသလို ရေးရတာလည်း ပိုရှင်းပါတယ်။\n\n<CODE_BLOCK>\nSample Program (223)\ndef dec_1(fn):\n    def inner():\n        print('running decorator 1')\n        return fn()\n    return inner\n\ndef dec_2(fn):\n    def inner():\n        print('running decorator 2')\n        return fn()\n    return inner\n\n@dec_1\n@dec_2\ndef myFun():\n    print('Running myFun')\nmyFun()\n</CODE_BLOCK>\n\nSample Program (223) ၌ @ ကိုသုံးထားပါသည်။ @ နောက်တွင် မိမိတို့ အသုံးပြုလိုသော decorator name ကို ထည့်ပေးရသည်။ @property ကို မိမိတို့ အသုံးပြုလိုသော function ရဲ့ အပေါ်မှာ ရေးပေးရပါသည်။ ထိုသို့ ရေးပေးလိုက်လျှင် `dec_1(dec_2(myFun))` ဆိုသည့် ပုံစံနှင့် ဆင်တူသွားပါသည်။ သတိပြုရန် အချက်မှာ ပထမဆုံးအနေဖြင့် ပထမဆုံး decorator ကိုသာ အလုပ်လုပ်ဆောင်ပါသည်။",
        initialCode: "def dec1(f): return f\n@dec1\ndef test(): print('test')",
        exercise: { task: "Try writing code for @Property", check: (out) => out.includes("test") },
        quiz: { question: "What does @Property do?", options: ["Applies a decorator", "Deletes a property", "Creates a class", "Converts function to list"], answer: 0 }
      },
      {
        id: 'l11-4',
        title: "Wraps",
        content: "Decorator function တွေနဲ့ wraps ကို တွဲသုံးပါတယ်။ ဘာကြောင့် သုံးပေးရလည်းဆိုတော့ function တစ်ခုဟာ အခြား decorator function တစ်ခုဆီသို့ parameter အနေဖြင့် pass လုပ်တဲ့အချိန်မှာ ထို function ရဲ့ docString ဟာ ပျောက်သွားပါတယ် (သို့မဟုတ်) None ဟု ဖြစ်နေတာကို မြင်ရပါတယ်။ ထိုကဲ့သို့သော အခြေအနေမျိုးမှာဆိုရင် wraps ကို သုံးပေးရပါတယ်။ wraps function သည် functools module ထဲမှ ဖြစ်သည့် အတွက် အသုံးပြုမည် ဆိုလျှင် functools ကိုအရင်ဆုံး import လုပ်ပေးရပါတယ်။\n\n<CODE_BLOCK>\nSample Program (225)\nfrom functools import wraps\n\ndef log(fn):\n    @wraps(fn)\n    def with_log(*args , **kwargs):\n        print(fn.__name__+\" was called\")\n        return fn(*args , **kwargs)\n    return with_log\n\n@log\ndef f(x):\n    \"\"\"does some math\"\"\"\n    return x+x+x\n\nprint(f.__doc__)\n</CODE_BLOCK>\n\nSample Program (225) ကို run ကြည့်သောအခါ function name ရော function ရဲ့ docstring နှစ်ခုလုံး ပေါ်လာသည်ကို မြင်ရပါမည်။ line number 3 တွင် parameter အနေဖြင့် pass လုပ်လာသော function အား wraps ထဲသို့ ထည့်ထားသောကြောင့် ဖြစ်သည်။",
        initialCode: "from functools import wraps\ndef log(f):\n    @wraps(f)\n    def wrapper(): return f()\n    return wrapper\n\n@log\ndef test():\n    \"\"\"Doc\"\"\"\nprint(test.__doc__)",
        exercise: { task: "Try writing code for Wraps", check: (out) => out.includes("Doc") },
        quiz: { question: "What does Wraps do?", options: ["Copies function metadata", "Deletes docstrings", "Makes code faster", "Imports modules"], answer: 0 }
      },
      {
        id: 'l11-5',
        title: "Logger Application",
        content: "Decorator function ကို အသုံးပြုပြီး logger application တစ်ခုစတင် ရေးသားကြည့်ပါမည်။ အလုပ်လုပ်ပုံမှာ function ကို ဘယ်နေ့ ဘယ်အချိန်က ခေါ်တယ်ဆိုတာကို အတိအကျ မှတ်ပေးထားတဲ့ ပုံစံမျိုးပါ။ ယခင် သင်ခန်းစာများတွင် module များကို အပြင်ဘက်ဆုံးတွင် ရေးသော်လည်းပဲ ယခုအခါတွင်မူ မိမိတို့ အသုံးပြုလိုသော decorator function ထဲတွင် ရေးထားပါမည်။ ထိုသို့ ရေးရခြင်းမှာ မိမိတို့ အနေဖြင့် source code တွေကိုတစ်ခြား module ထဲတွင် သွားပေါင်းထည့်ပြီး အသင့်ခေါ် သုံးနိုင်ရန် ဖြစ်သည်။ ယခု program တွင် datetime module နှင့် functools နှစ်ခုလုံးကိုသုံးမှာ ဖြစ်သည့်အတွက် မိမိတို့ တည်ဆောက်လိုက်သော decorator function ထဲတွင် ထို module နှစ်ခုလုံးကို ထည့်ရေးပေးပါမည်။\n\nProgram ရှင်းလင်းချက်\n\nLogger Application ဟုရေးထားသည့် ပုံ၌ line number 20 တွင် myFun1(10,20) ဆိုသည့် value များထည့်ပြီး ခေါ်လိုက်ပါသည်။ myFun1 အပေါ် line 12 တွင် logger decorator ကိုခေါ်ထားသည့်အတွက် logger decorator function ဆီသို့ ရောက်သွားပါသည်။ logger function သည် inner function ကို line number 11 တွင် return ပြန်ပေးသည့်အတွက် line number 6 သို့ program ရောက်သွားပါသည်။\n\nInner function ထဲသို့ ရောက်သောအခါ date and time zone ကိုယူပြီး dt ထဲသို့ ထည့်ထားပါသည်။ ထို့နောက် line number 8 တွင် fn သည် myFun1 ဖြစ်သည့်အတွက် myFun1 function ကို သွားခေါ်ပါသည်။ ထိုသို့ သွားခေါ်ရာတွင် နဂိုမူရင်း 10 , 20 value နှစ်ခုပါ ပါသွားပါသည်။ ထို့ကြောင့် myFun1 ထဲတွင် 10 + 20 အား ပေါင်းပေးပြီး return ပြန်ပေးပါသည်။ ထိုသို့ return ပြန်ပေးလာသော value ကို result ထဲသို့ ထည့်ထားပါသည်။ line number 9 တွင် datetime , function name နှင့် result မှ ရလာသော value တို့ အား print ထုတ်ပေးလိုက်ပါသည် ပြီးလျှင် result ကို return ပြန်ပေးပြီး function အဆုံးသတ်သွားပါသည်။\n\nSample Program (226)\n\n<CODE_BLOCK>\ndef logger(func):\n    @wraps(func)\n    def inner(*args, **kwargs):\n        dt = datetime.datetime.now()\n        result = func(*args, **kwargs)\n        print(\"{0} : called {1} : recent Data: {2}\".format(dt, func.__name__, result))\n        return result\n    return inner\n\n@logger\ndef myFun1(a, b):\n    return a + b\n\n@logger\ndef myFun2(a):\n    return a\n\nmyFun1(10, 20)\nmyFun2(10)\nprint('From function 1')\n</CODE_BLOCK>\n\nSample Program (226) အား run ကြည့်လျှင် output အနေဖြင့် အောက်ပါ တို့ကို ရရှိပါမည်။\n\n`2020-04-07 16:18:03.983676+00:00 : called myFun1 : recent Data: 30`\n`2020-04-07 16:18:03.983676+00:00 : called myFun2 : recent Data: 10`\n`From function 1`",
        initialCode: "import datetime\nfrom functools import wraps\n\ndef logger(func):\n    @wraps(func)\n    def inner(*args, **kwargs):\n        dt = datetime.datetime.now()\n        result = func(*args, **kwargs)\n        print(f'{dt} : called {func.__name__} : recent Data: {result}')\n        return result\n    return inner\n\n@logger\ndef myFun1(a, b):\n    return a + b\n\nmyFun1(10, 20)",
        exercise: { task: "Try writing code for Logger Application", check: (out) => out.includes("Data") },
        quiz: { question: "What does Logger Application do?", options: ["Logs execution time and function result", "Deletes logs", "Prints hello", "Counts files"], answer: 0 }
      },
      {
        id: 'l11-6',
        title: "Timer Application Using Decorator",
        content: "ဆက်လက်ပြီး Decorator ကိုပဲ အသုံးပြုကာ timer application တစ်ခု ရေးသားသွားပါမည်။ ထို timer app သည် function တစ်ခု အလုပ်ဘယ်လောက်ကြာကြာ လုပ်သွားသလဲ ဆိုတာကို သိနိုင်ရန် ဖြစ်သည်။ ထို့ကြောင့် time module ထဲမှ perf_counter ဆိုသည့် function ကို ခေါ်သုံးရပါမည်။ ပထမဆုံးအနေဖြင့် timer decorator function ထဲတွင် logger application ထဲကအတိုင်း functools နှင့် time module တို့ကို import လုပ်ပေးထားရပါမည်။ ပြီးလျှင် inner function တစ်ခု ရေးပြီး Function call ခေါ်သည့် အချိန်နှင့် ခေါ်ပြီးသည့် အချိန်တို့ကို မှတ်ကာ ကြာချိန်ကို ရယူပါမည်။ ဒုတိယအဆင့်အနေဖြင့် factorial ကိုရှာရန် fact ဆိုသည့် function တစ်ခု တည်ဆောက်ပါမည်။ ထို function ထဲတွင် reduce function နှင့် operator module ထဲမှ mul ဆိုသည့် မြှောက်ပေးသည့် function ကို အသုံးပြုပါမည်။\n\n<CODE_BLOCK>\nSample Program (227)\ndef time(fn):\n    from functools import wraps\n    from time import perf_counter\n    @wraps(fn)\n    def inner(*args ,**kwargs):\n        start = perf_counter()\n        result = fn(*args , **kwargs)\n        end = perf_counter()\n        timer= end - start\n        print('{0} ran for {1:.6f} s'.format(fn.__name__,timer))\n        return result\n    return inner\n\n@time\ndef fact(n):\n    from operator import mul\n    from functools import reduce\n    return reduce(mul , range(1,n+1))\nprint(fact(10))\n# Output::\n# fact ran for 0.000009 s\n# 3628800\n</CODE_BLOCK>\n\nSample Program (227) သည် Timer application တစ်ခုအား မိမိ ဘာသာ ရေးသားလိုက်ခြင်း ဖြစ်ပြီး factorial ကို ရှာတဲ့အချိန်မှာ ကြာသည့်အချိန်ကို တွက်ချက်ရန် ဖြစ်သည်။ ထို့အပြင် အချိန် နေ့ ရက်များကိုပါ မှတ်သားထားလိုပါက logger decorator ကိုလည်း သုံးနိုင်သည်။ အရင် သင်ခန်းစာတွင် ရေးသားခဲ့သော logger decorator ကို ယခု program ထဲတွင် ကူးထည့်ပြီး @logger ဟု @time အပေါ် သို့မဟုတ် အောက်တွင် မိမိ အဆင်ပြေသလို ရေးနိုင်ပါသည်။",
        initialCode: "import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        res = func(*args, **kwargs)\n        end = time.perf_counter()\n        print(f'Execution time: {end - start:.6f}s')\n        return res\n    return wrapper\n\n@timer\ndef test():\n    time.sleep(1)\ntest()",
        exercise: { task: "Try writing code for Timer Application Using Decorator", check: (out) => out.includes("Execution time") },
        quiz: { question: "What does perf_counter() measure?", options: ["The current date", "High-resolution time for performance measurement", "The number of files", "The CPU temperature"], answer: 1 }
      },
      {
        id: 'l11-7',
        title: "Cache Fibonacci using Decorator",
        content: "Fibonacci numbers တွေဆိုတာ sequence အလိုက်သာသွားတဲ့ number တွေပါ။ အထက်ပါ ပုံထဲတွင် ပထမဆုံး number ဖြစ်သည့် 0 နှင့် ဒုတိယ number ဖြစ်သည့် 1 တို့ကို ပေါင်းပြီး တတိယ number ရလာပါတယ်။ ထိုနည်းတူပဲ ဒုတိယ number နှင့် တတိယ number တို့ကို ပေါင်းပြီး လေးခုမြောက် number ရလာပါတယ်။ ထိုကဲ့သို့သော sequence အလိုက် Fibonacci number များ ရလာအောင် ရေးတဲ့နည်းများစွာ ရှိတဲ့အထဲကမှ recursive function ကိုသုံးပြီး ရေးတဲ့နည်းဟာ ထင်ရှားပါတယ်။",
        initialCode: "def memoize(func):\n    cache = {}\n    def wrapper(n):\n        if n not in cache: cache[n] = func(n)\n        return cache[n]\n    return wrapper\n\n@memoize\ndef fib(n):\n    return n if n < 2 else fib(n-1) + fib(n-2)\nprint(fib(10))",
        exercise: { task: "Try writing code for Cache Fibonacci using Decorator", check: (out) => out.includes("55") },
        quiz: { question: "Why is the decorated Fibonacci faster?", options: ["It uses less memory", "It caches previously calculated values, avoiding redundant recursive calls", "It is written in C", "It skips calculations"], answer: 1 }
      },
      {
        id: 'l11-8',
        title: "Fibonacci Using Recursive",
        content: "Fibonacci number တွေကိုရှာဖို့ function တစ်ခုရေးပါမည်။ ထိုသို့ မရေးခင် condition အနည်းငယ်ကိုတော့သိရန် လိုအပ်ပါသေးသည်။ 3 အောက်ငယ်သည့် number တွေဆိုရင် function ထဲကိုဝင်လာပါက return အနေဖြင့် 1 ကိုသာ ပြန်ပေးပါမည်။ အဘယ်ကြောင့် ထိုသို့ ပြန်ပေးရသည်ကို အောက်ပါ program ထဲတွင် ရှင်းပြပါမည်။\n\n<CODE_BLOCK>\nSample Program (228)\ndef fibo(n):\n    return 1 if n <3 else fibo(n-1)+fibo(n-2)\n\nprint(fibo(6))\n</CODE_BLOCK>\n\nSample Program (228) ကို run ကြည့်လျှင် output အနေဖြင့် 8 ကို ရရှိပါသည်။ 8 ဘယ်လို ရလာသလဲဆိုလျှင် User မှ fibo ဆိုသည့် function ထဲသို့ 6 ထည့်ပေးလိုက်သည်။ ထို့နောက် fibo(n-1)+fibo(n-2) n သည် 6 ဖြစ်သည့်အတွက် ပထမဆုံးအနေဖြင့် fibo(5) + fibo(4) ယခုပုံစံအတိုင်း ဆက်မြင်ရမည်။ ထို့ကြောင့် fibo(6) သည် fibo(5) နှင့် fibo(4) နှစ်ခုရပါသည်။ ထိုနည်းတူ fibo(5) ကို ထပ်ခွဲလျှင်( recursive ) fibo(4) နှင့် fibo ( 3 ) နှစ်ခုကို ရပါသည်။ ထို့ပြင် fibo(4) ကို ထပ်ခွဲလျှင်လည်း fibo(3) နှင့် fibo(2) တို့ရှိပါသည်။ fibo(2) ကို ထပ်ခွဲလျှင် fibo(1) and fibo(0) ကို ရပါသည်။ ထို့ကြောင့် 3 ထက် ငယ်နေသော value များဖြစ်လျှင် return အနေဖြင့် 1 ကို ပြန်ပေးခြင်း ဖြစ်ပါသည်။ နောက်ဆုံးတွင် 1 ရှစ်ခါ ရလာပါသည် ။ ထို 1 ရှစ်ခါ လုံးကို ပေါင်းပြီး output အနေဖြင့် 8 ကို ရရှိခြင်း ဖြစ်ပါသည်။\n\nကျွန်ုပ်တို့ အဓိကသိလိုသည့်အချက်မှာ ထိုကဲ့သို့ နောက်ဆုံးအဖြေရလာဖို့ program မှာ function call တွေကို ဘယ်နှစ်ခါခေါ်ပြီး step တွေဘယ်လောက်လုပ်သွားသလဲ ဆိုတာ သိလိုတာပါ။ အောက်ပါအတိုင်း code ကိုအနည်းငယ် modify လုပ်ကြည့်ပါမည်။\n\n<CODE_BLOCK>\nSample Program (229)\ndef fibo(n):\n    print('Calculating fibo({0})'.format(n))\n    return 1 if n <3 else fibo(n-1)+fibo(n-2)\n\nprint(fibo(6))\n\n# Output::\n# Calculating fibo(6)\n# Calculating fibo(5)\n# Calculating fibo(4)\n# Calculating fibo(3)\n# Calculating fibo(2)\n# Calculating fibo(1)\n# Calculating fibo(2)\n# Calculating fibo(3)\n# Calculating fibo(2)\n# Calculating fibo(1)\n# Calculating fibo(4)\n# Calculating fibo(3)\n# Calculating fibo(2)\n# Calculating fibo(1)\n# Calculating fibo(2)\n</CODE_BLOCK>\n\nFunction call ကို 15 ခါတောင် ခေါ်ပြီး အလုပ်လုပ်သွားသည်ကို တွေ့ရပါမည်။ အထက်ပါ output များကိုကြည့်လျှင် 4 ,3 ,2, 1 တို့သည် ထပ်ခါ ထပ်ခါ အလုပ်လုပ်နေသည်ကို မြင်ရပါမည်။ ထို့ကြောင့် memory usage လည်းပိုများသလို အချိန်လည်းပိုကြာပါသည်။ ထိုပြဿနာကို ဖြေရှင်းရန် Decorator ကို သုံးနိုင်ပါသည်။\n\nSample Program (230) - Fibonacci Using Recursive and Decorator\n<CODE_BLOCK>\ndef memoize(fibo):\n    cache={1:1 , 2: 1}\n    def inner(n):\n        if n not in cache:\n            cache[n]=fibo(n)\n        return cache[n]\n    return inner\n\n@memoize\ndef fibo(n):\n    print('Calculating fibo({0})'.format(n))\n    return 1 if n <3 else fibo(n-1)+fibo(n-2)\n\nprint(fibo(6))\n\n# Output::\n# Calculating fibo(6)\n# Calculating fibo(5)\n# Calculating fibo(4)\n# Calculating fibo(3)\n# 8\n</CODE_BLOCK>\n\nOutput များကိုကြည့်ပါက program တွင် အဆင့်လေးဆင့်သာ အလုပ်လုပ်သွားသည်ကို တွေ့ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် လုပ်ထားပြီးသားအလုပ်များကို line number 2 မှ cache ထဲတွင် မှတ်ထားသောကြောင့် ဖြစ်သည်။ အထက်ပါ program ကို နားလည်ရန်ဦးစွာ function ထဲကနေ function ကိုပြန်ခေါ်သော recursive function ကိုနားလည်ရန် လိုအပ်ပါသည်။ လုံးဝ အပြည့်အစုံနားလည်နိုင်ရန် debugging လုပ်ပါဟု အကြံပေးလိုပါသည်။\n\nဆက်လက်ပြီး `print(fibo(7))` ဟူသည့် code line ထပ်ထည့်ပြီး run ကြည့်ပါက 7 အတွက် အလုပ်တစ်ခါသာ လုပ်သည်ကို မြင်ရပါမည်။ အဘယ်ကြောင့်ဆိုသော် သူအပေါ်မှ line 13 တွင် fibo(6) ထိ cache လုပ်ထားပြီး မှတ်သားထားသောကြောင့် ဖြစ်သည်။ Sample Program 230 ၌ output များကိုကြည့်လျှင် fibo(7) အတွက် တစ်ကြောင်းသာ အလုပ်လုပ်ပါသည်။ fibo(8) အတွက်ဆိုလျှင် 8 အတွက်တစ်ခုသာ အလုပ်လုပ်ပါတော့မည် ။ ထို့ကြောင့် decorator ကို သုံးခြင်းအားဖြင့် မိမိတို့ program ကို ပိုမို effective ဖြစ်ပြီး မြန်ဆန်အောင် ရေးသားနိုင်ပါသည်။",
        initialCode: "def fibo(n):\n    return 1 if n < 3 else fibo(n-1) + fibo(n-2)\nprint(fibo(5))",
        exercise: { task: "Try writing code for Fibonacci Using Recursive", check: (out) => out.includes("5") },
        quiz: { question: "What does Fibonacci Using Recursive do?", options: ["Iteratively calculates Fibonacci", "Recursively calculates Fibonacci numbers", "Sorts numbers", "Creates an infinite loop"], answer: 1 }
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
        initialCode: "# Placeholder Code for Newaxis\\\\nprint('Newaxis')",
        exercise: { task: "[Placeholder Task] Try writing code for Newaxis", check: (out) => out.includes("Newaxis") },
        quiz: { question: "[Placeholder Quiz] What does Newaxis do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-27',
        title: "Expand_dims",
        content: "[Placeholder] Content for Expand_dims",
        initialCode: "# Placeholder Code for Expand_dims\\\\nprint('Expand_dims')",
        exercise: { task: "[Placeholder Task] Try writing code for Expand_dims", check: (out) => out.includes("Expand_dims") },
        quiz: { question: "[Placeholder Quiz] What does Expand_dims do?", options: ["A", "B", "C", "D"], answer: 0 }
      },
      {
        id: 'l24-28',
        title: "Vstack",
        content: "[Placeholder] Content for Vstack",
        initialCode: "# Placeholder Code for Vstack\\\\nprint('Vstack')",
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