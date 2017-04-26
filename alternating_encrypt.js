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
  let middle = Math.floor(text.length / 2);
}

function decrypt(encryptedText, n) {

}

let text = "This is a test!";
let test = pass(text);
console.log(test);
