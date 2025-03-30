function encrypt(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-zA-Z]/)) {
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26;

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
            }
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
            }
        }

        result += char; 
    }

    return result;
}

function decrypt(text, shift) {
    return encrypt(text, -shift);
}

function validateShift(shift) {
    if (isNaN(shift)) {
        alert("Invalid shift value! Please enter a number.");
        return false;
    }
    if (shift < 1 || shift > 25) {
        alert("Shift value must be between 1 and 25!");
        return false;
    }
    return true;
}

function handleEncryption() {
    const userText = document.getElementById('userText').value;
    const userShift = parseInt(document.getElementById('userShift').value, 10);
    const resultDiv = document.getElementById('result');

    if (validateShift(userShift)) {
        const encryptedText = encrypt(userText, userShift);
        resultDiv.innerHTML = `<strong>Encrypted Text:</strong> ${encryptedText}`;
    }
}

function handleDecryption() {
    const userText = document.getElementById('userText').value;
    const userShift = parseInt(document.getElementById('userShift').value, 10);
    const resultDiv = document.getElementById('result');

    if (validateShift(userShift)) {
        const decryptedText = decrypt(userText, userShift);
        resultDiv.innerHTML = `<strong>Decrypted Text:</strong> ${decryptedText}`;
    }
} 