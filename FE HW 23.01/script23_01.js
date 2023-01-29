// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.
//Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

let p = document.querySelector("p");
p.style.color = "darkgreen";
p.style.fontSize = "20px";
p.classList.add("show");

let p1 = document.createElement("p");
p1.classList.add("hide");
document.body.append(p1);

let btn = document.querySelector("button")
btn.style.border = "5px solid green";
btn.style.backgroundColor = "greenyellow"

btn.onclick = () => {
  if(p.classList[0] === "show"){
    p.classList.replace("show", "hide");
    p1.classList.replace("hide", "show")
  } else {
    p.classList.replace("hide", "show");
    p1.classList.replace("show", "hide");

  }
}




// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список.
//При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let list = document.createElement("ul");
document.body.append(list);

for (let i = 0; i < colors.length; i++) {
   let li = document.createElement("li");
   li.innerText = colors[i];
   list.append(li);
   
   li.onmouseover = () => {
   document.body.style.backgroundColor = li.innerText;
   }
}



// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. 
//При клике на заголовок внизу появляется краткое описание данного фильма.

const films = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. " 
    },

    {
        title: "The Lord of the Rings",
        description: "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth. " 
    },

    {
        title: "Iron Man",
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. " 
    },
    {
        title: "The Avengers",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity. " 
    },
    {
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. " 
    },
]

for (let i = 0; i < films.length; i++) {
    let title = document.createElement("header");
    title.innerText = films[i].title;
    title.style.fontSize = "25px"
  

    let pDescr = document.createElement("p");
    title.onclick = () => {


        pDescr.innerText = films[i].description;
    }
    document.body.append(title, pDescr)
}

