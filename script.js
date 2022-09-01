// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let options = {};

// Write password to the #password input
function writePassword() {
  var p = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = p;
}

function generatePassword() {
  //  declared variables for password and options
  let password = "";
  let ok = false;

  while (!ok) {
    console.log(ok);
    //   initial prompt to display password options
    alert(
      "Your password may may include 8 - 128 characters\n" +
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
      return generatePassword();
    } else {
      alert(options.length + " Characters");
    }

    // inquiries for Character types for password
    if (confirm("Do you want uppercase letters in your password?")) {
      options.upperCase = true;
      alert("your password will include upper case characters");
    } else {
      options.upperCase = false;
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      options.lowerCase = true;
      alert("your password will include lower case characters");
    } else {
      options.lowerCase = false;
    }
    if (confirm("Do you want numbers in your password?")) {
      options.numeric = true;
      alert("your password will include numbers");
    } else {
      options.numeric = false;
    }
    if (confirm("Do you want special characters in your password?")) {
      options.specialCharacters = true;
      alert("your password will include special characters");
    } else {
      options.specialCharacters = false;
    }
    console.log(options);
    // check to see if no options were selected
    if (
      !options.upperCase &&
      !options.lowerCase &&
      !options.numeric &&
      !options.specialCharacters
    ) {
      alert("you must choose at least one option");

      ok = false;
      continue;
    }
    ok = true;
    alert("Options have been chosen");
  }

  //  create password
  console.log("test");
  //   set up array of alphbetical characters
  var alphArray = "abdefghijklmnopqrstuvwxyz";
  var capArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charArray = "!@#$%&*()-";
  var numArray = "0123456789";
  //    set up initial password string
  var initialPassword = "";

  console.log("test 2");

  var charsAllowed = "";

  if (options.lowerCase) {
    charsAllowed = charsAllowed + alphArray;
  }
  if (options.upperCase) {
    charsAllowed = charsAllowed + capArray;
  }
  if (options.numeric) {
    charsAllowed = charsAllowed + numArray;
  }
  if (options.specialCharacters) {
    charsAllowed = charsAllowed + charArray;
  }

  for (var i = 0; i < options.length; i++) {
    if (options.upperCase) {
      //
      many = charsAllowed.length;
      j = Math.random() * many;
      j = Math.floor(j);
      c = charsAllowed[j];
      console.log(j + c + " was selected from " + many);
      initialPassword = initialPassword + c;
      console.log(initialPassword);
    } else if (options.lowerCase) {
      many = lowerCase.length;
      j = Math.random() * many;
      j = Math.floor(j);
      c = lowerCase[j];
      console.log(j + c + " was selected from " + many);
      initialPassword = initialPassword + c;
    }
    //
    else if (options.numeric) {
      initialPassword.push(Math.random() * (9 - 1) + 1);
    } else if (options.specialCharacters) {
      many = charArray.length;
      j = Math.random() * many;
      j = Math.floor(j);
      c = charArray[j];
      console.log(j + c + " was selected from " + many);
      initialPassword = initialPassword + c;
      console.log(initialPassword);
    } else {
      console.log("ERROR:  no option");
    }
    // return initialPassword;

    console.log(initialPassword);
  }
  alert("your password is : " + initialPassword);
  return initialPassword;
}
