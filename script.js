// Assignment Code
var generateBtn = document.querySelector("#generate");
var generate = document.getElementById("generate");
var textbox = document.getElementById("password");
let upper = [];
let lower = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Array to hold passwrod options
let options = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k"
,"L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];

// Prompt for password criteria
function arrayCreator(x, name) {

  for (x = x; x < options.length; x=x+2) {
    name.push(options[x]);
  }
  return name;
}
arrayCreator(0,upper);
arrayCreator(1,lower);

function random(arr) {
  var x = arr[Math.floor(Math.random() * 26)];
  return x;
}

let func = {
  l: random(upper),
  u: random(lower),
}
// Asking for password stuff
function meetAndGreet() {
  length = [];
  do  {
    length == prompt("Password has to be between 8 and 128");
    
  } while (length < 8 || length > 128 || isNaN(length));

  console.log(isNaN(length ))
  /* do { 
    upperYes = prompt("Do you want upper case letters: Y or N")
  } while ();
  */
  // for (var i = 0; i < length.length; i++) {}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", meetAndGreet);
