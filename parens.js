function validParentheses(parens){
  var indent = 0;

  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;
  }

  return (indent == 0);
}
