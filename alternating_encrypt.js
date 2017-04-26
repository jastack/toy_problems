function encrypt(text, n) {
  let final = text;
  let i = 0;
  while (i < n){
    final = pass(final);
    i += 1;
  }
  return final;
}

function pass(text){
  let first = '';
  let second = '';
  for (var i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      second += text[i];
    } else {
      first += text[i];
    }
  }
  return first + second;
}

function decryptPass(text){
  let arr = text.split("");
  let middle = Math.floor(text.length / 2);
  let first = arr.slice(middle);
  let second = arr.slice(0, middle);

  let result = [];
  while (first.length > 0 && second.length > 0){
    result.push(first.shift());
    result.push(second.shift());
  }

  result = result.concat(first);
  result = result.concat(second);

  return result.join("");

}

function decrypt(encryptedText, n) {
  let final = encryptedText;
  let i = 0;
  while (i < n){
    final = decryptPass(final);
    i += 1;
  }

  return final;
}

let text = "This is a test!";
let test = encrypt(text, 4);
let de = decrypt(test, 4);
console.log(test);
console.log(de);
