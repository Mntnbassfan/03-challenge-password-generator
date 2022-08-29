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
  //  declared variables for password and options
  let password = "";
  let options = {};
  console.log("test");
  //   initial prompt to display password options
  alert(
    "Your password may may include 8 - 128 characters" +
      "\n" +
      "It may include Upper and Lower case letters" +
      "\n" +
      "It may include Numbers and Special Characters"
  );

  //   inquiry for length of password
  options.length = prompt(
    "How many characters do you want in your password? : "
  );
  if (options.lengthlength < 8 || length > 128) {
    alert("password must have greater than 8 and less than 128 characters");
  } else {
    alert(options.length + " Characters");
    return length;
  }

  // inquiries for Character types for password
  //  create password
  //   display password
}

generatePassword();
