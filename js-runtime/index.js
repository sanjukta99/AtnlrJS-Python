const antlr4 = require("antlr4");
const PythonLexer = require("./grammar/PythonLexer.js");
const PythonParser = require("./grammar/PythonParser.js");
const PythonListener = require("./grammar/PythonListener.js");
const PythonVisitor = require("./grammar/PythonVisitor.js");

const input = "1 + 2\n";

const chars = new antlr4.InputStream(input);
const lexer = new PythonLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PythonParser(tokens);

parser.buildParseTrees = true;
var tree = parser.prog();

class P extends PythonListener {
    // override default listener behavior
    enterProg(ctx) {
        console.log("enterProg");
    }

    // Exit a parse tree produced by PythonParser#prog.
    exitProg(ctx) {
        console.log("exitProg");
    }

    // Enter a parse tree produced by PythonParser#print.
    enterPrint(ctx) {
        console.log("enterPrint");
    }

    // Exit a parse tree produced by PythonParser#print.
    exitPrint(ctx) {
        console.log("exitPrint");
    }

    // Enter a parse tree produced by PythonParser#assign.
    enterAssign(ctx) {
        console.log("enterAssign");
    }

    // Exit a parse tree produced by PythonParser#assign.
    exitAssign(ctx) {
        console.log("exitAssign");
    }

    // Enter a parse tree produced by PythonParser#blank.
    enterBlank(ctx) {
        console.log("enterBlank");
    }

    // Exit a parse tree produced by PythonParser#blank.
    exitBlank(ctx) {
        console.log("exitBlank");
    }

    // Enter a parse tree produced by PythonParser#MulDiv.
    enterMulDiv(ctx) {
        console.log("enterMulDiv");
    }

    // Exit a parse tree produced by PythonParser#MulDiv.
    exitMulDiv(ctx) {
        console.log("exitMulDiv");
    }

    // Enter a parse tree produced by PythonParser#AddSub.
    enterAddSub(ctx) {
        console.log("enterAddSub");
    }

    // Exit a parse tree produced by PythonParser#AddSub.
    exitAddSub(ctx) {
        console.log("exitAddSub");
    }

    // Enter a parse tree produced by PythonParser#parenthese.
    enterParenthese(ctx) {
        console.log("enterParenthese");
    }

    // Exit a parse tree produced by PythonParser#parenthese.
    exitParenthese(ctx) {
        console.log("exitParenthese");
    }

    // Enter a parse tree produced by PythonParser#id.
    enterId(ctx) {
        console.log("enterId");
    }

    // Exit a parse tree produced by PythonParser#id.
    exitId(ctx) {
        console.log("exitId");
    }

    // Enter a parse tree produced by PythonParser#int.
    enterInt(ctx) {
        console.log("enterInt");
    }

    // Exit a parse tree produced by PythonParser#int.
    exitInt(ctx) {
        console.log("exitInt");
    }
}
var visitor = new PythonVisitor();
var listener = new P();
console.log("Visitor:");
console.log(tree.accept(visitor));
console.log("Listener:");
console.log(antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree));
