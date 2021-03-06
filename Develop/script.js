// Button for generate pwd
var generateBtn = document.querySelector("#generate");

// Write password to the password input field
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    alert("You have generated a secure passord:  " + password)
    passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

//initializing the veriables to select input from
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));

    // To confirm the limit of the password
    while (confirmLength < 8 || confirmLength >= 129) {
        alert("Password length must be between 8-128 characters Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }

    // Confirming how many charactes the user will have  
    alert(`Your password will have ${confirmLength} characters`);

    // Determining parameters of password 
    confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

    // Loop if answer is outside the parameters 
    while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
    }

    // concanating selection based on user responses
    var passwordCharacters = [] // initializing an empty array for password

    if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
    }


    // Empty string to be filled based on for loop selecting random characters from the array
    var randomPassword = "" // initializing an empty randomized password

    //Using loop to iterate through the selection and return the final shufled product
    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
    return randomPassword;
}