// form start!!!!!!!!----------------------

const form = document.querySelector("#product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#product-list");
const body = document.querySelector("body");

//========= homeWork =========
//Реализовать чтение массива с товарами при загрузке страницы. 
// Если соответствующего ключа в localStorage нет мы используем пустой массив с товарами. 

//функция для чтения массива из localSttorage
function readLocalSttorage(key) {
    const object = localStorage.getItem(key);
    console.log(object);
    if(object){
        const value = JSON.parse(object);
        console.log(value);
        return value;
    } else null
        return null;
    }


body.onload = () => {
    list.innerHTML = "";
    let products = readLocalSttorage("obj");
    products.forEach(product => {
        let item = document.createElement("li");
        item.innerText = `${product.name} - ${product.price}$`;
        list.append(item);
    });
}
//============================classWork=================


//создание массива с продуктами

const products = [];

//функция для добавления продукта в массив

function newProduct (name, price) {
    products.push({name: name, price: price});
};

//Данная функция отвечает за обновление списка товаров. 
//Она проходится по массиву products, создает элементы li, заполняет их соответствующими данными 
//(name, price) из products, и добавляет элементы li в list.

function updateList() {
    list.innerHTML = "";
    products.forEach(product => {
        let item = document.createElement("li");
        item.innerText = `${product.name} - ${product.price}$`;
        list.append(item);
    });
};

form.onsubmit = (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const priceValue = +priceInput.value;
    // const priceValue = parseFloat(priceInput.value); метод для перевода из строки в число
    newProduct(nameValue, priceValue);
    
    nameInput.value = "";
    priceInput.value = "";
    updateList();
    writeLocalStorage(products);
};

//ф-ия для записи в localstorage

function writeLocalStorage(value) {
    const stringObj = JSON.stringify(value);
    localStorage.setItem("obj", stringObj);
}

// localStorage.clear();







    