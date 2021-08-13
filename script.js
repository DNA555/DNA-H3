// Assignment Code
var generateBtn = document.querySelector("#generate");
let lower = [];
let upper = [];
let nums = [];
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
// Creating Upper and Lower Case Arrays
function aC(x, name)  {
  for (var i = x; i < options.length - 20; i = i + 2)
  name.push(options[i]);
  return name;
}

console.log(aC(0, upper));
console.log(aC(1, lower));
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
