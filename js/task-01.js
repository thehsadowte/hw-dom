const categoriesList = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesList.children.length}`);

const categorieItems = document.querySelectorAll(".item");

categorieItems.forEach((element) => {
  console.log(element.querySelector("h2").textContent);
  console.log(element.querySelector("ul").childElementCount);
});
