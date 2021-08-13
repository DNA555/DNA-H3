// Assignment Code
var generateBtn = document.querySelector("#generate");
var generate = document.getElementById("generate");
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
,"L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X",
"x","Y","y","Z","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")"]; 

// Prompt for password criteria

function greet() {
  prompt("What would you like your password to include?");
}

function arrayCreator(x, name) {
  for (x = x; x < options.length; x=x+2) {
    
  }  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", greet);
