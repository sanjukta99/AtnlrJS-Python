const PythonLexer = require("./grammar/PythonLexer.js");
const PythonVisitor = require("./grammar/PythonVisitor.js");

class Visitor extends PythonVisitor {
    map = new Map();
    
    visitProg(ctx) {
        let value = this.visit(ctx.stat());
        return value;
    }

    // Visit a parse tree produced by PythonParser#print.
    visitPrint(ctx) {
        let value = this.visit(ctx.expr());
        return value;
    }

    // Visit a parse tree produced by PythonParser#assign.
    visitAssign(ctx) {
        let id = ctx.ID().getText();
        let value = this.visit(ctx.expr());
        console.log(value)
        this.map.set(id, value);
        return value;
    }

    // Visit a parse tree produced by PythonParser#blank.
    visitBlank(ctx) {
        return undefined;
    }

    // Visit a parse tree produced by PythonParser#MulDiv.
    visitMulDiv(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));
        if (ctx.op.type == PythonLexer.MUL) {
            return {
                type: 'BinaryExpression',
                operator: '*',
                left: left,
                right: right
            }
        } else {
            return {
                type: 'BinaryExpression',
                operator: '/',
                left: left,
                right: right
            }
        }
        //return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#AddSub.
    visitAddSub(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));
        if (ctx.op.type == PythonLexer.ADD) {
            // return left + right;
            return {
                type: 'BinaryExpression',
                operator: '+',
                left: left,
                right: right
            }
        } else {
            return {
                type: 'BinaryExpression',
                operator: '-',
                left: left,
                right: right
            }
        }
        //return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#parenthese.
    visitParenthese(ctx) {
        let value = this.visit(ctx.expr());
        return value;
        //return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#id.
    visitId(ctx) {
        let id = ctx.ID().getText();
        let value = this.map.get(id);
        return value;
        //return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by PythonParser#int.
    visitInt(ctx) {
        let value = ctx.INT().getText();
        // return Number(value);
        return {
            type: 'Literal',
            value: Number(value)
        }
        //return this.visitChildren(ctx);
    }
}
module.exports = Visitor;
