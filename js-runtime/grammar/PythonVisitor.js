// Generated from grammar/Python.g4 by ANTLR 4.9.1
// jshint ignore: start
const antlr4 = require("antlr4");

// This class defines a complete generic visitor for a parse tree produced by PythonParser.

class PythonVisitor extends antlr4.tree.ParseTreeVisitor {
    // Visit a parse tree produced by PythonParser#prog.
    visitProg(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#print.
    visitPrint(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#assign.
    visitAssign(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#blank.
    visitBlank(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#MulDiv.
    visitMulDiv(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#AddSub.
    visitAddSub(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#parenthese.
    visitParenthese(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#id.
    visitId(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#int.
    visitInt(ctx) {
        return this.visitChildren(ctx);
    }
}

module.exports = PythonVisitor;
