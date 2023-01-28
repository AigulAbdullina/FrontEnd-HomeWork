const imgArr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dUQ2S5maDfW2uz170iO5CL8m2dyD0Z2zzg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbesDVL1vnuX2-kDLSFu7Tn8wq47cZC6j5g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pbY9qtQy-iAwQvStrbyCDEDsIJqg6JHKu-DFozki9LTVB9dIzousVklb9zbf-QcMzUU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmXeaHKc-9jyox4JZ_KlPwXdmWiP2Y2IF2A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLL1Pdyb9n3QZ6KchUzB8Tm8hV_7OwO_qKA&usqp=CAU",
];

let gallery = document.querySelector("h1");

let smallImg = document.querySelector(".smallImg");
let largeImg = document.querySelector(".largeImg");

let imgL = document.createElement("img");

for (let i = 0; i < imgArr.length; i++) {
  
let img = document.createElement("img");
    img.setAttribute('src', imgArr[i]);
    img.classList.add('smallImg');
    smallImg.append(img);

img.onclick = () => {
    imgL.setAttribute("src", imgArr[i]); 
    imgL.classList.add("largeImg");
    largeImg.append(imgL);
    }
}

gallery.append(smallImg, largeImg)
