const passwordEl = document.querySelector('#password');
const lengthEl = document.querySelector('#length');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');

const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%^&*()";

function generatePassword() {
  let password = "";
  let length = lengthEl.value;
  let chars = "";

  chars += uppercaseEl.checked ? uppercaseChars : "";
  chars += lowercaseEl.checked ? lowercaseChars : "";
  chars += numbersEl.checked ? numbersChars : "";
  chars += symbolsEl.checked ? symbolsChars : "";

  for (let i = 0; i <= length; i++) {
    let random = Math.floor(Math.random() * chars.length);
    console.log(random);
    password += chars.substring(random, random + 1);
  }
  passwordEl.value = password;
}

async function copyPassword() {
  if (navigator.clipboard && passwordEl.value) {
    await navigator.clipboard.writeText(passwordEl.value);
    alert('Password copied to clipboard');
  }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);