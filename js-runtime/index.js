const antlr4 = require("antlr4");
const PythonLexer = require("./grammar/PythonLexer.js");
const PythonParser = require("./grammar/PythonParser.js");
const PythonListener = require("./grammar/PythonListener.js");

const input = "1 + 2\n";

const chars = new antlr4.InputStream(input);
const lexer = new PythonLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PythonParser(tokens);

parser.buildParseTrees = true;
var tree = parser.prog();

var listener = new PythonListener();

console.log(antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree));
