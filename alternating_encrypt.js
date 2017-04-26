function encrypt(text, n) {

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

  result.concat(first);
  result.concat(second);

  return result.join("");

}

function decrypt(encryptedText, n) {

}

let text = "This is a test!";
let test = pass(text);
let de = decryptPass(test);
console.log(test);
console.log(de);
