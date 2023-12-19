// Assignment Code
var generateBtn = document.querySelector("#generate");
/*
1X. Click generate password to generate prompts
2X. Make them all confirmations to select the criteria needed for password
3X. Make a prompt for password length
4. Make validations for all criteria that will go into the generator
5. When every prompt is answered for and at least one criteria is confirmed, generate password
6. Display password on page

extras
// i need a for loop for the final password, which add the password and possibleChar
// adding each character to our arrays
//
*/

var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChara = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var possibleChar = [];

// Write password to the #password input
function generatePassword(){

  var finalPass = "";
  var passwordLength = prompt("Please type a password length between 8 and 128:");
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Please make sure your password is between 8 and 128.");
    return;
  }

  var lowerCase = confirm("Would you like your password to have lowercase characters?");
  if (lowerCase === true){
    possibleChar = possibleChar.concat(lowerCaseChar);
  }
  console.log(possibleChar);

  var upperCase = confirm("Would you like your password to have uppercase characters?");
  if (upperCase === true){
    possibleChar = possibleChar.concat(upperCaseChar);
  }
  console.log(possibleChar);

  var specialChar = confirm("Would you like your password to have special characters?");
  if (specialChar === true){
    possibleChar = possibleChar.concat(specialChara);
  }
  console.log(possibleChar);

  var numeric = confirm("Would you like your password to have numeric characters?");
  if (specialChar === true){
    possibleChar = possibleChar.concat(numericChar);
  }
  console.log(possibleChar);

  finalPass = finalPass + possibleChar[Math.floor(Math.random()*possibleChar.length)];

  for (var i = 0; i < passwordLength.length; i++){
    finalPass + possibleChar[Math.floor(Math.random()*passwordLength.length)]
  }

  console.log(finalPass);
  return finalPass;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
