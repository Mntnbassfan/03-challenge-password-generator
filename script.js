// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());

function generatePassword() {
  // variables for password and options
  let password = "";
  let options = {};

  //   initial prompt to display password options
  function initialPrompt() {
    alert(
      "You password may may include 8 - 128 characters" +
        "\n" +
        "It may include Upper and Lower case letters" +
        "\n" +
        "It may include Numbers and Special Characters"
    );
  }
}
generatePassword();
