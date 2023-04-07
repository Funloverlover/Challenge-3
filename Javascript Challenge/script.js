var generateBtn = document.querySelector('#generate');

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCased = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Create generatePassword function
// We need a list of characters for each type of character
// I have to guarantee at least one of each type of character for the password, for each one that is true
// This has to be randomly generate, and account for the length of the password

function getRandomCharacter(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomPasswordChar = array[randomIndex];
    return randomPasswordChar;
}

function generatePassword() {
    // We need to capture how long or should I say the length of the password
    // We need to capture which character types they want for the password
    var passwordLength = prompt('How many characters should the password be?');
    var hasSpecialChars = confirm('Do you want special characters?');
    var hasUpperCase = confirm('Do you want uppercase letters?');
    var hasLowerCase = confirm('Do you want lowercase letters?');
    var hasNumbers = confirm('Do you want numbers');

    var possiblePasswordChars = [];
    var password = [];

    if (hasSpecialChars) {
        possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);
        var randomChar = getRandomCharacter(specialCharacters);
        password.push(randomChar);
    }
    if (hasNumbers) {
        possiblePasswordChars = possiblePasswordChars.concat(numbers);
        password.push(getRandomCharacter(numbers));
    }
    if (hasUpperCase) {
        possiblePasswordChars = possiblePasswordChars.concat(upperCased);
        var randomChar = getRandomCharacter(upperCased);
        password.push(randomChar);
    }
    if (hasLowerCase) {
        possiblePasswordChars = possiblePasswordChars.concat(lowerCased);
        var randomChar = getRandomCharacter(lowerCased);
        password.push(randomChar);
    }

    for (var i = password.length; i < passwordLength; i++) {
        var randomChar = getRandomCharacter(possiblePasswordChars);
        password.push(randomChar);
    }
    console.log(password)
    password = password.join("")
    return password
    // convert password array to string and return it
    // You need an if statement somewhere to check if the password length meets the challenge requirements if it is too small or too large, stop process
    // You need to call the writePassword function to start everything
    
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);