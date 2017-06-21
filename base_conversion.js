function convert(input, source, target){
  var inBase = source.length, len = input.length;
  var value = input.split('')
    .reduce(function(p,v,i){
      return p+source.indexOf(v)*Math.pow(inBase,len-i-1);
    },0);
  return toBase(value,target);  
}

function toBase(value, target){
  var base = target.length;
  if(value<base) return ''+target.charAt(value);
  return toBase(Math.floor(value/base),target) + target.charAt(value%base);
}

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

var output = convert("15", Alphabet.DECIMAL, Alphabet.BINARY);
console.log(output);