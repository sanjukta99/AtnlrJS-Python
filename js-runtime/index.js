const antlr4 = require("antlr4");
const PythonLexer = require("./grammar/PythonLexer.js");
const PythonParser = require("./grammar/PythonParser.js");
const Visitor = require("./Visitor.js");

const input = "a = 30 + 4\nb = 20 - 10\na + b\n";

const chars = new antlr4.InputStream(input);
const lexer = new PythonLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PythonParser(tokens);

parser.buildParseTrees = true;
var tree = parser.prog();

var visitor = new Visitor();
console.log("Visitor:");
console.log(visitor.visit(tree));

/*
console.log("Listener:");
console.log(antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree));
*/
