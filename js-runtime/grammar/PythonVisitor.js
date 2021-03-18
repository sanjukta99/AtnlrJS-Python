// Generated from grammar/Python.g4 by ANTLR 4.9.1
// jshint ignore: start
const antlr4 = require("antlr4");

// This class defines a complete generic visitor for a parse tree produced by PythonParser.

class PythonVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PythonParser#start.
	visitStart(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PythonParser#Multiplication.
	visitMultiplication(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PythonParser#Addition.
	visitAddition(ctx) {
		console.log(ctx.operator());
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PythonParser#Subtraction.
	visitSubtraction(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PythonParser#Number.
	visitNumber(ctx) {
	  return {
		type: 'Literal',
		value: parseInt(ctx.getText()),
		raw: ctx.getText()
	  };
	}


	// Visit a parse tree produced by PythonParser#Division.
	visitDivision(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PythonParser#Parentheses.
	visitParentheses(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PythonParser#Power.
	visitPower(ctx) {
	  return this.visitChildren(ctx);
	}
}
module.exports = PythonVisitor;