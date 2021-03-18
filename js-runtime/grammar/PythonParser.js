// Generated from grammar/Python.g4 by ANTLR 4.9.1
// jshint ignore: start
const antlr4 = require("antlr4");
const PythonListener = require("./PythonListener.js");
const PythonVisitor = require("./PythonVisitor.js");


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000b%\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u000f\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003 \n\u0003\f\u0003\u000e\u0003#\u000b\u0003\u0003\u0003",
    "\u0002\u0003\u0004\u0004\u0002\u0004\u0002\u0002\u0002(\u0002\u0006",
    "\u0003\u0002\u0002\u0002\u0004\u000e\u0003\u0002\u0002\u0002\u0006\u0007",
    "\u0005\u0004\u0003\u0002\u0007\u0003\u0003\u0002\u0002\u0002\b\t\b\u0003",
    "\u0001\u0002\t\u000f\u0007\n\u0002\u0002\n\u000b\u0007\u0003\u0002\u0002",
    "\u000b\f\u0005\u0004\u0003\u0002\f\r\u0007\u0004\u0002\u0002\r\u000f",
    "\u0003\u0002\u0002\u0002\u000e\b\u0003\u0002\u0002\u0002\u000e\n\u0003",
    "\u0002\u0002\u0002\u000f!\u0003\u0002\u0002\u0002\u0010\u0011\f\u0007",
    "\u0002\u0002\u0011\u0012\u0007\u0005\u0002\u0002\u0012 \u0005\u0004",
    "\u0003\b\u0013\u0014\f\u0006\u0002\u0002\u0014\u0015\u0007\u0006\u0002",
    "\u0002\u0015 \u0005\u0004\u0003\u0007\u0016\u0017\f\u0005\u0002\u0002",
    "\u0017\u0018\u0007\u0007\u0002\u0002\u0018 \u0005\u0004\u0003\u0006",
    "\u0019\u001a\f\u0004\u0002\u0002\u001a\u001b\u0007\b\u0002\u0002\u001b",
    " \u0005\u0004\u0003\u0005\u001c\u001d\f\u0003\u0002\u0002\u001d\u001e",
    "\u0007\t\u0002\u0002\u001e \u0005\u0004\u0003\u0004\u001f\u0010\u0003",
    "\u0002\u0002\u0002\u001f\u0013\u0003\u0002\u0002\u0002\u001f\u0016\u0003",
    "\u0002\u0002\u0002\u001f\u0019\u0003\u0002\u0002\u0002\u001f\u001c\u0003",
    "\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002",
    "\u0002!\"\u0003\u0002\u0002\u0002\"\u0005\u0003\u0002\u0002\u0002#!",
    "\u0003\u0002\u0002\u0002\u0005\u000e\u001f!"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

class PythonParser extends antlr4.Parser {

    static grammarFileName = "Python.g4";
    static literalNames = [ null, "'('", "')'", "'^'", "'*'", "'/'", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, "POW", "MUL", "DIV", "ADD", 
                             "SUB", "NUMBER", "WHITESPACE" ];
    static ruleNames = [ "start", "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PythonParser.ruleNames;
        this.literalNames = PythonParser.literalNames;
        this.symbolicNames = PythonParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		case 3:
    			return this.precpred(this._ctx, 2);
    		case 4:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PythonParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, PythonParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PythonParser.NUMBER:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 7;
	            this.match(PythonParser.NUMBER);
	            break;
	        case PythonParser.T__0:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 8;
	            this.match(PythonParser.T__0);
	            this.state = 9;
	            localctx.inner = this.expression(0);
	            this.state = 10;
	            this.match(PythonParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 29;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_expression);
	                    this.state = 14;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 15;
	                    localctx.operator = this.match(PythonParser.POW);
	                    this.state = 16;
	                    localctx.right = this.expression(6);
	                    break;

	                case 2:
	                    localctx = new MultiplicationContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_expression);
	                    this.state = 17;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 18;
	                    localctx.operator = this.match(PythonParser.MUL);
	                    this.state = 19;
	                    localctx.right = this.expression(5);
	                    break;

	                case 3:
	                    localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_expression);
	                    this.state = 20;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 21;
	                    localctx.operator = this.match(PythonParser.DIV);
	                    this.state = 22;
	                    localctx.right = this.expression(4);
	                    break;

	                case 4:
	                    localctx = new AdditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_expression);
	                    this.state = 23;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 24;
	                    localctx.operator = this.match(PythonParser.ADD);
	                    this.state = 25;
	                    localctx.right = this.expression(3);
	                    break;

	                case 5:
	                    localctx = new SubtractionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PythonParser.RULE_expression);
	                    this.state = 26;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 27;
	                    localctx.operator = this.match(PythonParser.SUB);
	                    this.state = 28;
	                    localctx.right = this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

PythonParser.EOF = antlr4.Token.EOF;
PythonParser.T__0 = 1;
PythonParser.T__1 = 2;
PythonParser.POW = 3;
PythonParser.MUL = 4;
PythonParser.DIV = 5;
PythonParser.ADD = 6;
PythonParser.SUB = 7;
PythonParser.NUMBER = 8;
PythonParser.WHITESPACE = 9;

PythonParser.RULE_start = 0;
PythonParser.RULE_expression = 1;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PythonParser.RULE_start;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PythonParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MultiplicationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MUL() {
	    return this.getToken(PythonParser.MUL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterMultiplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitMultiplication(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitMultiplication(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PythonParser.MultiplicationContext = MultiplicationContext;

class AdditionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(PythonParser.ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterAddition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitAddition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitAddition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PythonParser.AdditionContext = AdditionContext;

class SubtractionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	SUB() {
	    return this.getToken(PythonParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterSubtraction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitSubtraction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitSubtraction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PythonParser.SubtractionContext = SubtractionContext;

class NumberContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(PythonParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PythonParser.NumberContext = NumberContext;

class DivisionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DIV() {
	    return this.getToken(PythonParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterDivision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitDivision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitDivision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PythonParser.DivisionContext = DivisionContext;

class ParenthesesContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterParentheses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitParentheses(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitParentheses(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PythonParser.ParenthesesContext = ParenthesesContext;

class PowerContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	POW() {
	    return this.getToken(PythonParser.POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.enterPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PythonListener ) {
	        listener.exitPower(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PythonVisitor ) {
	        return visitor.visitPower(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PythonParser.PowerContext = PowerContext;


PythonParser.StartContext = StartContext; 
PythonParser.ExpressionContext = ExpressionContext; 

module.exports = PythonParser;