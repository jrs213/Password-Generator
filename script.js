const passwordLength = 10;
const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>/?';

    let allowedChars = '';
    let password = '';

    allowedChars += includeUpperCase ? uppercaseChars : '';
    allowedChars += includeLowerCase ? lowercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (length <= 0) {  
        return 'Length must be greater than 0';
    }
    if (allowedChars.length === 0) {
        return 'Please select at least one character type';
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    console.log(allowedChars);
    return password;
}

let password = generatePassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);


console.log(`Generated Password: ${password}`);


