//В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
let word = "Aigul";
let result = "";
// for (let i = 0; i < word.length; i++) {
//     result += word[(word.length - 1) - i]; 
// }

for (let i = word.length - 1; i >= 0; i--) {
    result += word[i] ;
}
console.log(result);

//Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.

function palindrom(word) {
    for (let i = 0, j = word.length - 1; i < word.length; i++, j-- ){
        if (word[i] != word[j]) 
        return false;
    }
    return true
}
console.log(palindrom("заказ"));
console.log(palindrom("шалаш"));
console.log(palindrom("привет"));


//Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

let sum = 0;
for (let num = 0; num <= 50; num++) {
   if (num % 5 == 0) sum += num
}
console.log(sum); 

//Написать цикл, который выводит только названия товаров
const products = [
{
    title: "AlfaRomeo",
    price: 5000,
},
{
    title: "Mercedes",
    price: 9000,
},
{
    title: "Fiat",
    price: 1000,
},
{
    title: "Opel",
    price: 3000,
},
]

for (let i = 0; i < products.length; i++) {
    console.log(products[i].title);
    
}



//Написать цикл, который выводит для каждого товара стоку по маске “<название> (<цена>)”

for (let i = 0; i < products.length; i++) {
    console.log(
        `${products[i].title} (${products[i].price})`)
}

//Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.
let priceMax = 0;
for (let i = 0; i < products.length; i++) {
    if(products[i].price > priceMax){
        priceMax = products[i].price
    }
}
for (let i = 0; i < products.length; i++) {
if (priceMax === products[i].price) console.log(products[i]);
}