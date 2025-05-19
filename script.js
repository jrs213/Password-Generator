function generatePassword() {

    const passwordLength = document.getElementById('passwordLength').value;
    const includeUpperCase = document.getElementById('includeUpperCase').checked;
    const includeLowerCase = document.getElementById('includeLowerCase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    let allowedChars = '';
    let password = '';

    if (includeUpperCase) allowedChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowerCase) allowedChars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) allowedChars += '0123456789';
    if (includeSymbols) allowedChars += '!@#$%^&*()_+-=[]{}|;:,.<>/?';


    if (allowedChars.length > 0) {
    for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
} else {
    password = 'No characters selected';
}

    document.getElementById('password').value = password;

    
}

function copyPassword() {
    const password = document.getElementById('password').value;
    navigator.clipboard.writeText(password);
}


