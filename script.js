// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ********************************************************************** Your closing } is in the wrong place. You can't declare a function inside of another function. See down below for more.
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
    return generatePassword();
  }
  //  create password
console.log("test");
  // ********************************************************************** Don't forget to finish the alphabet
  //   set up array of alphbetical characters
  var alphArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  //   set up arry of special characters
  var charArray = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-"];

  //    set up initial password array
  var initialPassword = [];


  // ********************************************************************** Pop wouldn't be a good thing to do here. That method removes the last item from an array and returns it.
  // **********************************************************************You'd call pop like ... initialPassword.push(alphArray.pop().toUpperCase());
  // ********************************************************************** This also won't randomize anything. If upperCase is true, every character will be uppercase because it'll check for that first. 
  for (var i = 0; i < options.length; i++) {
  if (options.upperCase) {
    // 
   initialPassword.push(alphArray.toUpperCase.pop[i]); 
  }
  else if (options.lowerCase){
    initialPassword.push(alphArray.pop[i]);
    }
    // 
  else if (options.numeric){
    initialPassword.push(Math.random() * (9 - 1) + 1); 
  }
  else if (options.specialCharacters){
        initialPassword.push(charArray.pop[i]);
        }

  console.log(initialPassword);
//  ********************************************************************** This is where you should put your } to declare the end of your function.
  // shuffle initial password store it to final password
  // found this solution in stack overflow 
  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array


// ********************************************************************** This won't run as it's written. This is only declaring a function, it's not telling it to run. You need to call it in your other function above. It's called like... shuffleArray(initialPassword);
// ********************************************************************** You're also not using the paramater correctly. Google "How to use a paramater in a function"
  function shuffleArray(initialPassword) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    initialPassword = temp;
}

  // display final password
  passwordText = initialPassword;

  alert ("yourpassword is" + password);
}
