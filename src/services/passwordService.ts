interface PasswordGeneratorProps{
    isCheckedLetters: boolean
    isCheckedSymbols: boolean
    isCheckedNumbers: boolean
    size: number
}

let letters = "abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%";
let numbers = "0123456789";

export default function passwordGenerator({isCheckedLetters, isCheckedSymbols, isCheckedNumbers, size}: PasswordGeneratorProps){

    let passwordTemp = '';
    let password = '';

    if (isCheckedLetters) {
        passwordTemp += letters;
    }
    if (isCheckedSymbols) {
        passwordTemp += symbols;
    }
    if (isCheckedNumbers) {
        passwordTemp += numbers;
    }
    if(!isCheckedLetters && !isCheckedSymbols && !isCheckedNumbers){
        return '';
    }

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * passwordTemp.length);
        password += passwordTemp[randomIndex];
    }

    return password;
}
