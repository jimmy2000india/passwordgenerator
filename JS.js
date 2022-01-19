// Checking the options that are selected and setting the password
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = lengthDOM.value;
    const includeUppercase = uppercaseDOM.checked;
    const includeNumbers = numbersDOM.checked;
    const includeSymbols = symbolsDOM.checked;
    const password = generatePassword(
      characterAmount,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
    resultDOM.innerText = password;
  });