const antlr4 = require("antlr4");
const PythonLexer = require("./grammar/PythonLexer.js");
const PythonParser = require("./grammar/PythonParser.js");
const PythonVisitor = require("./grammar/PythonVisitor.js");


let program = undefined

input = "2 + 4";

const inputStream = new antlr4.InputStream(input)
const lexer = new PythonLexer(inputStream)
const tokenStream = new antlr4.CommonTokenStream(lexer)
const parser = new PythonParser(tokenStream)
parser.buildParseTrees = true
visitor = new PythonVisitor()
try {
    const tree = parser.expression()
    console.log(visitor.visitStart(tree));
} catch (error) {
    console.log(error);
    console.log("There was an error");
}
