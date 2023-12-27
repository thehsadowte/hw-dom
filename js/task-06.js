const inputEl = document.querySelector("#validation-input");
const numberOfSymbols = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  inputEl.value.length === Number(inputEl.dataset.length)
    ? (inputEl.style.borderColor = "#4caf50")
    : (inputEl.style.borderColor = "red");
});
