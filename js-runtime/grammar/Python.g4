grammar Python;

/*
 * Tokens (terminal)
 */
POW: '^';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
NUMBER: [0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;

/*
 * Productions
 */
start : expression;

expression
   : NUMBER                                         # Number
   | '(' inner=expression ')'                       # Parentheses
   | left=expression operator=POW right=expression  # Power
   | left=expression operator=MUL right=expression  # Multiplication
   | left=expression operator=DIV right=expression  # Division
   | left=expression operator=ADD right=expression  # Addition
   | left=expression operator=SUB right=expression  # Subtraction
   ;