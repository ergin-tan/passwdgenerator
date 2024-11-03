const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword(length, includeUpper, includeLower, includeNum, includeSym) {
  let charSet = "";
  if (includeUpper) charSet += upperChars;
  if (includeLower) charSet += lowerChars;
  if (includeNum) charSet += numbers;
  if (includeSym) charSet += symbols;

  if (charSet === "") return "Lütfen bir karakter türü seçin.";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}

document.getElementById("generate").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const includeUpper = document.getElementById("includeUppercase").checked;
  const includeLower = document.getElementById("includeLowercase").checked;
  const includeNum = document.getElementById("includeNumbers").checked;
  const includeSym = document.getElementById("includeSymbols").checked;

  const password = generatePassword(length, includeUpper, includeLower, includeNum, includeSym);
  document.getElementById("password").value = password;
});
