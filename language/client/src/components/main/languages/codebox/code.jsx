const code = {
  'Say I am Batman': {
    javascript: 'console.log("I am Batman")',
    python: 'print("I am Batman")',
    java: 'System.out.println("I am Batman");',
    typescript: 'console.log("I am Batman")',
    'c++': 'cout << "I am Batman";',
    go: 'fmt.Println("I am Batman")',
  },

  'Create a for loop': {
    python: 'for i in range(start inclusive, end exclusive):\n  execute statement\n  execute statement',
    java: 'for (int i = start; i < end; i++) {\n  execute statement\n  execute statement\n}',
    typescript: 'for (int i = start; i < end; i++) {\n  execute statement\n  execute statement\n}',
  },

  'Write an if statement': {
    python: 'if condition:\n  execute statement',
    java: 'if (condition) {\n  execute statement\n}',
    typescript: 'if (condition) {\n  execute statement\n}',
    'c++': 'if (condition) {\n  execute statement\n}',
  },

  'Write a function': {
    python: 'def function_name(arg1, arg2, etc):\n  execute statement\n  execute statement\n  execute statement',
    java: 'public static dataType functionName(dataType arg1, dataType arg2, dataType etc) {\n  execute statement\n  execute statement\n  execute statement\n}',
    typescript: 'function functionName(arg1, arg2, etc) {\n  execute statement\n  execute statement\n  execute statement\n}',
  },
};

export default code;
