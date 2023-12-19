// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for our variables
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChara = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var possibleChar = [];

function generatePassword(){

  var finalPass = "";

  // Prompt window for our password's length
  var passwordLength = prompt("Please type a password length between 8 and 128:");
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Please make sure your password is between 8 and 128.");
    return;
  }

  // Confirm windows for each of our variables ie lowercase, uppercase, special characters, and numerics
  var lowerCase = confirm("Would you like your password to have lowercase characters?");
  if (lowerCase === true){
    possibleChar = possibleChar.concat(lowerCaseChar);
  }

  var upperCase = confirm("Would you like your password to have uppercase characters?");
  if (upperCase === true){
    possibleChar = possibleChar.concat(upperCaseChar);
  }

  var specialChar = confirm("Would you like your password to have special characters?");
  if (specialChar === true){
    possibleChar = possibleChar.concat(specialChara);
  }

  var numeric = confirm("Would you like your password to have numeric characters?");
  if (specialChar === true){
    possibleChar = possibleChar.concat(numericChar);
  }

  // For loop that runs the program so that it will make sure our password is randomly generated with the arrays we have chosen
  for (var i = 0; i < passwordLength; i++){
    finalPass += possibleChar[Math.floor(Math.random()*possibleChar.length)];
  }

  // The final password is then returned onto the main display
  return finalPass;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
