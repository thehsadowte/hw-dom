const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const outputValue = document.querySelector("#value");
const counterDiv = document.querySelector("#counter");
const countButtons = document.querySelectorAll("button");

let counter = 0;

const counterPlusHandler = () => {
  counter += 1;
  outputValue.textContent = counter;
};

const counterMinusHandler = () => {
  counter -= 1;
  outputValue.textContent = counter;
};

incrementButton.addEventListener("click", counterPlusHandler);
decrementButton.addEventListener("click", counterMinusHandler);

counterDiv.style.cssText =
  "display: flex; justify-content: center; gap: 10px; font-family: monospace; font-size: 35px; color: purple; transition: transform 250ms linear;";

for (let i = 0; i < countButtons.length; i++) {
  let button = countButtons[i];
  button.style.cssText = button.style.cssText =
    "background-color: transparent; color: black; padding: 10px 24px; border: none; cursor: pointer; box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2); transition: transform 250ms linear;";
  button.addEventListener("mouseout", () => {
    button.style.cssText =
      "background-color: transparent; color: black; padding: 10px 24px; border: none; cursor: pointer; box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2); transition: transform 250ms linear; ";
  });
  button.addEventListener("mouseover", () => {
    console.log("first mouseover");
    button.style.cssText = "transform: scale(1.05);";
  });
}
