const inputEl = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const body = (document.querySelector("body").style.cssText =
  "background-color: #252525; color: #fff;");

inputEl.style.cssText =
  "margin: 30px; background: none; border: none; outline: none; max-width: 190px; padding: 10px 20px; font-size: 16px; border-radius: 9999px;box-shadow: inset 2px 5px 10px rgb(5, 5, 5);color: #8707ff; border: 2px solid #8707ff;border-radius: 10px;";

const inputHandler = (e) => {
  const inputValue = inputEl.value;
  console.log(inputValue);

  output.textContent = inputValue.trim() ? inputValue : "anonymous";
};

inputEl.addEventListener("input", inputHandler);
