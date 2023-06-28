const passwordInput = document.querySelector(".password-box .input-password");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box .input-range");
const slideNum = document.querySelector(".range-box .slider-number");
const button = document.querySelector(".generate-button");



let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456780^!$%&|[](){}:;.,*+-#@<>~";

function generatePassword () {
   let newPassword = "";
   
   for(let i = 0; i < rangeInput.value; i++) {
      let randomNum = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters[randomNum]
   }
   passwordInput.value = newPassword;
   copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
}

rangeInput.addEventListener("input", () => {
    slideNum.innerHTML = rangeInput.value;
    generatePassword();
});

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
})

generatePassword();
button.addEventListener("click", generatePassword)