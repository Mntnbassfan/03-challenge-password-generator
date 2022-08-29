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
  if (options.length < 8 || options.length > 128) {
    alert("password must have greater than 8 and less than 128 characters");
  } else {
    alert(options.length + " Characters");
    return length;
  }

  // inquiries for Character types for password
  if (confirm("Do you want uppercase letters in your password?")) {
    options.upperCase = true;
    alert("your password will include upper case characters");
  }
  if (confirm("Do you want lowercase letters in your password?")) {
    options.lowerCase = true;
    alert("your password will include lower case characters");
  }
  if (confirm("Do you want numbers in your password?")) {
    options.numeric = true;
    alert("your password will include numbers");
  }
  if (confirm("Do you want special characters in your password?")) {
    options.specialCharacters = true;
    alert("your password will include special characters");
  }
  if (
    options.upperCase ||
    options.lowerCase ||
    options.numeric ||
    options.specialCharacters
  );
  {
    return length;
  }
  //  create password

  //   set up array of alphbetical characters
  const alphArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
//   set up arry of special characters
  const charArray = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-"];
//    set up initial password array
const initialPassword [];
// plan for password generation
// i=1, i < length ++
// if uppercase, pick char from alphArray, capitalize it, push to initialPassword
// if lowercase, display password, pick char from alphArray, push to initialPassword
// if number, generate a single random number, push to initialPassword
// if spec char, pick character from charArray, push to initialPassword
//  repeat until i = length
// randomize initial password sore it to final password
}
generatePassword();
