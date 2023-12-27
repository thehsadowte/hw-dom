const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const newIngr = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  return item;
});

console.log(newIngr);
ingredientsList.append(...newIngr);
