const rangeInput = document.querySelector("#font-size-control");
const fontSpan = document.querySelector("#text");

rangeInput.addEventListener("input", (e) => {
  //   console.dir(rangeInput.value);   another way
  fontSpan.style.fontSize = rangeInput.valueAsNumber + "px";
});
