// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"

const numbers = [2, 22, 12, 34, 55, 66, 77, 88, 99];

let strOfNumbers = numbers.reduce((acc, cur) => String(acc + ",") + String(cur));
console.log(strOfNumbers);



// 2)Используя метод reduce, посчитайте сколько людей проголосовали.
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let countOfVoted = voters.reduce((acc, cur) =>{
    if (cur.voted === true) {
        return acc + 1;
    } else return acc;
}, 0);
console.log(countOfVoted);

// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let moneyForDreams = 0 ;
wishlist.forEach((elem) => {
    moneyForDreams += elem.price ;
})
console.log(moneyForDreams);


// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, 
// где orders - это массив строк, представляющих товары, которые заказал клиент. 
// Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - 
// общее количество товаров, заказанных клиентом.

const clients = [
    { name: 'Anna', orders: ['coat', 'soaks', 'hat', 'umbrella'] },
    { name: 'Lisa', orders: ['dress', 'book'] },
    { name: 'Kate', orders: ['skirt', 'sandals', 'lipstik'] },
    { name: 'Monika', orders: ['top', 'hat', 't-shirt', 'jeans', 'boots', 'scarf'] },
    { name: 'Greis', orders: ['cream', 'toner', 'blush'] },
];


let newClients = clients.map((client) => { client.name,
   client.totalOrders = client.orders.length;
    delete client.orders
});
console.log(clients);


// 5)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.
const people = [
    {name:'Cristian' , age: 35},
    {name:'Elena' , age: 28},
    {name:'Maria' , age: 57},
    {name:'Andrea' , age: 17},
    {name:'Paolo' , age: 44},
    {name:'Valentina' , age: 5},]

let numberOfAdult = people.reduce((acc, cur) =>
    cur.age > 18 ? acc += 1 : acc , 0);
console.log(numberOfAdult);

let numberOfMinor = people.reduce((acc, cur) =>
    cur.age < 18 ? acc += 1 : acc , 0);
console.log(numberOfMinor);

// 6)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, 
// содержащий только те объекты, возраст которых больше 30 лет.

let ageOver30 = people.filter ((elem) => elem.age > 30)
console.log(ageOver30);