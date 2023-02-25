// Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на
// какую-либо число должно меняться в соответствующую сторону. 
// Значение counter не должно слетать при перезагрузке страницы.

// localStorage.clear();


const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
let inputNum = document.querySelector("input");

btnMinus.onclick = () => {
    inputNum.value = +inputNum.value - 1;
    localStorage.setItem("number", inputNum.value);
    
};

btnPlus.onclick = () => {
    inputNum.value = +inputNum.value + 1;
    localStorage.setItem("number", inputNum.value);
  
};

inputNum.value = localStorage.getItem("number");