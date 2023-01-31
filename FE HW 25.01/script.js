const form = document.querySelector(".form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const sectionProducts = document.querySelector("#products");

const products = [];

form.onsubmit = (e) => {
  e.preventDefault();
  products.push({
    title: title.value,
    price: price.value,
  });

  newProducts();

  title.value = "";
  price.value = "";
};

function createNode(title, price) {
  let div = document.createElement("div");
  div.classList.add("product");

  let titleP = document.createElement("p");
  let priceP = document.createElement("p");

  titleP.innerText = title;
  priceP.innerText = price;

  div.append(titleP, priceP);
  sectionProducts.append(div);
}

function newProducts() {
  sectionProducts.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price);
  }
}

const btnSum = document.getElementById("sum");
let sumOfProduct = 0;
btnSum.onclick = () => {
for (let i = 0; i < products.length; i++) {
  sumOfProduct += +products[i].price;
}
alert("Сумма всех продуктов равнв: " + sumOfProduct)
}

let btnPass = document.querySelector(".btnPassword");
let inputPass = document.querySelector(".password");

btnPass.onclick = () => {
  if(inputPass.getAttribute("type") === "password"){
    inputPass.setAttribute("type", "text");
  }
  else {
    inputPass.setAttribute("type", "password")
  }
}