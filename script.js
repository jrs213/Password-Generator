function generatePassword() {

    const passwordLength = document.getElementById('passwordLength').value;
    const includeUpperCase = document.getElementById('includeUpperCase').checked;
    const includeLowerCase = document.getElementById('includeLowerCase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    let allowedChars = '';
    let password = '';

    if (uppercaseChars) allowedChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercaseChars) allowedChars += 'abcdefghijklmnopqrstuvwxyz';
    if (numberChars) allowedChars += '0123456789';
    if (symbolChars) allowedChars += '!@#$%^&*()_+-=[]{}|;:,.<>/?';


    if (allowedChars.length > 0) {
    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
} else {
    password = 'No characters selected';
}

    document.getElementById('password').value = password;

    
}


