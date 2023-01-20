const arr = [
    {
    title: "BMW",
    price: "40000",
    count: "15"
    },
    
    {
    title: "Toyota",
    price: "20000",
    count: "13"
    },
    
    {
    title: "Ford",
    price: "30000",
    count: "20"
    },
    
    {
    title: "Chevrolet",
    price: "60000",
    count: "9"
    },
    
    {
    title: "Volkswagen",
    price: "30000",
    count: "13"
    },
    ]

    //1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).
    //Внизу каждого списка выводится итоговая сумма товара. 
    //А так же в самом конце выводится итоговая сумма и количество всех товаров.

    let sumTotal = 0;
    let sumCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let list = document.createElement("ul");

        let title = document.createElement("li");
        title.innerText = arr[i].title;

        let price = document.createElement("li");
        price.innerText = arr[i].price;

        let count = document.createElement("li");
        count.innerText = arr[i].count;

        let total = document.createElement("li");
        total = arr[i].price * arr[i].count ;

        list.append(title, price, count, total);
        document.body.append(list);

        sumTotal += total;
        sumCount += +arr[i].count;
    }
    document.body.append("Итоговая сумма равна  ", sumTotal, " Итоговое количество товара равна  ", sumCount )
    


let table = document.createElement("table");
table.setAttribute('border', '1px');


let lineHead = document.createElement("tr");
lineHead.className = 'lineHead';

let head_1 = document.createElement("th");
head_1.innerText = "No.";

let head_2 = document.createElement("th");
head_2.innerText = "Full Name";

let head_3 = document.createElement("th");
head_3.innerText = "Position";

let head_4 = document.createElement("th");
head_4.innerText = "Salary";

lineHead.append(head_1, head_2, head_3, head_4);
table.appendChild(lineHead);


let line1 = document.createElement("tr");

let line1_cell_1 = document.createElement("th");
line1_cell_1.innerText = "1";

let line1_cell_2 = document.createElement("th");
line1_cell_2.innerText = "Bill Gates";

let line1_cell_3 = document.createElement("th");
line1_cell_3.innerText = "Founder Microsoft";

let line1_cell_4 = document.createElement("th");
line1_cell_4.innerText = "$1000";

line1.append(line1_cell_1, line1_cell_2, line1_cell_3, line1_cell_4);
table.appendChild(line1);


let line2 = document.createElement("tr");

let line2_cell_1 = document.createElement("th");
line2_cell_1.innerText = "2";

let line2_cell_2 = document.createElement("th");
line2_cell_2.innerText = "Steve Jobs";

let line2_cell_3 = document.createElement("th");
line2_cell_3.innerText = "Founder Apple";

let line2_cell_4 = document.createElement("th");
line2_cell_4.innerText = "$1200";

line2.append(line2_cell_1, line2_cell_2, line2_cell_3, line2_cell_4);
table.appendChild(line2);


let line3 = document.createElement("tr");

let line3_cell_1 = document.createElement("th");
line3_cell_1.innerText = "3";

let line3_cell_2 = document.createElement("th");
line3_cell_2.innerText = "Larry Page";

let line3_cell_3 = document.createElement("th");
line3_cell_3.innerText = "Founder Google";

let line3_cell_4 = document.createElement("th");
line3_cell_4.innerText = "$1100";

line3.append(line3_cell_1, line3_cell_2, line3_cell_3, line3_cell_4);
table.appendChild(line3);


let line4 = document.createElement("tr");

let line4_cell_1 = document.createElement("th");
line4_cell_1.innerText = "4";

let line4_cell_2 = document.createElement("th");
line4_cell_2.innerText = "Mark Zuckerberg";

let line4_cell_3 = document.createElement("th");
line4_cell_3.innerText = "Founder Facebook";

let line4_cell_4 = document.createElement("th");
line4_cell_4.innerText = "$1300";

line4.append(line4_cell_1, line4_cell_2, line4_cell_3, line4_cell_4);
table.appendChild(line4);

document.body.append(table);






