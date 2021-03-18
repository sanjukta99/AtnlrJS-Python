// Generated from grammar/Python.g4 by ANTLR 4.9.1
// jshint ignore: start
const antlr4 = require("antlr4");



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u000b/\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0006\t%\n\t\r\t\u000e\t&\u0003\n\u0006\n*\n\n\r\n\u000e\n+\u0003",
    "\n\u0003\n\u0002\u0002\u000b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0003\u0002\u0004\u0003",
    "\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u00020\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0003\u0015\u0003\u0002\u0002\u0002\u0005\u0017\u0003",
    "\u0002\u0002\u0002\u0007\u0019\u0003\u0002\u0002\u0002\t\u001b\u0003",
    "\u0002\u0002\u0002\u000b\u001d\u0003\u0002\u0002\u0002\r\u001f\u0003",
    "\u0002\u0002\u0002\u000f!\u0003\u0002\u0002\u0002\u0011$\u0003\u0002",
    "\u0002\u0002\u0013)\u0003\u0002\u0002\u0002\u0015\u0016\u0007*\u0002",
    "\u0002\u0016\u0004\u0003\u0002\u0002\u0002\u0017\u0018\u0007+\u0002",
    "\u0002\u0018\u0006\u0003\u0002\u0002\u0002\u0019\u001a\u0007`\u0002",
    "\u0002\u001a\b\u0003\u0002\u0002\u0002\u001b\u001c\u0007,\u0002\u0002",
    "\u001c\n\u0003\u0002\u0002\u0002\u001d\u001e\u00071\u0002\u0002\u001e",
    "\f\u0003\u0002\u0002\u0002\u001f \u0007-\u0002\u0002 \u000e\u0003\u0002",
    "\u0002\u0002!\"\u0007/\u0002\u0002\"\u0010\u0003\u0002\u0002\u0002#",
    "%\t\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002",
    "\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'\u0012",
    "\u0003\u0002\u0002\u0002(*\t\u0003\u0002\u0002)(\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,-\u0003\u0002\u0002\u0002-.\b\n\u0002\u0002.\u0014\u0003\u0002",
    "\u0002\u0002\u0005\u0002&+\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

class PythonLexer extends antlr4.Lexer {

    static grammarFileName = "Python.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'^'", "'*'", "'/'", "'+'", 
                         "'-'" ];
	static symbolicNames = [ null, null, null, "POW", "MUL", "DIV", "ADD", 
                          "SUB", "NUMBER", "WHITESPACE" ];
	static ruleNames = [ "T__0", "T__1", "POW", "MUL", "DIV", "ADD", "SUB", 
                      "NUMBER", "WHITESPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}
module.exports = PythonLexer;
PythonLexer.EOF = antlr4.Token.EOF;
PythonLexer.T__0 = 1;
PythonLexer.T__1 = 2;
PythonLexer.POW = 3;
PythonLexer.MUL = 4;
PythonLexer.DIV = 5;
PythonLexer.ADD = 6;
PythonLexer.SUB = 7;
PythonLexer.NUMBER = 8;
PythonLexer.WHITESPACE = 9;



