//1)Если при нажатии на кнопку функция, выводящая данные про пользователей, не получает никаких данных , 
//то в интерфейс должно вывестись сообщение “Такого пользователя нет” и номер с пользователем не должен расти.

// 2)ID выведенного пользователя должно сохраняться в localStorage и при обновлении страницы должны грузиться 
//данные пользователя, на котором пользователь остановился в прошлый раз.

// 3) добавьте стили для данной программы.


let userId = localStorage.getItem('userId');

// const userID = 1;

async function getId() {
    try {
        const getId = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

            if (getId.status !== 200) {
            throw new Error('Такого пользователя нет');
            }

        const result = await getId.json();
        // console.log(result);

        const resultGetPosts = await getPosts.json();
        const obj = {user: {name: result.name, email: result.email}, 
                            posts: resultGetPosts};
        return obj;

    } catch (error) {
        console.error(error);
        alert(error.message);
        userId--;
    }
}
getId();

const container = document.querySelector(".container");

async function getDateUsers() {
    try{
        const userContainer = document.createElement("div");
        userContainer.classList.add("userContainer");
        const date = await getId();

        const user = document.createElement("div");
        user.classList.add("user");

        const userNameP = document.createElement("p");
        userNameP.innerText = date.user.name;

        const userEmailP = document.createElement("p");
        userEmailP.innerText = date.user.email;

        const userPosts = document.createElement("div");
        userPosts.classList.add("posts");

        user.append(userNameP, userEmailP);


        const datePost = date.posts;

        datePost.forEach(element => {

            const item = document.createElement("div");
            item.classList.add("item");

            const title = document.createElement("h3");
            title.innerText = `Title: ${element.title}`;

            const body = document.createElement("p");
            body.innerText = `Body: \n${element.body}`;

            item.append(title, body);
            userPosts.append(item);
        });

        userContainer.append(user, userPosts);
        container.append(userContainer);

        localStorage.setItem("userId", userId);
    } catch (error) {
        console.error(error);
    }
}

getDateUsers()


const lastBtn = document.querySelector(".last");
const nextBtn = document.querySelector(".next");

lastBtn.onclick = () => {

    if (userId > 1) {
        container.innerHTML = "";
        userId--;
        getDateUsers();

        localStorage.setItem("userId", userId);
    }
}

nextBtn.onclick = async () => {
   
        container.innerHTML = "";
        userId++;

        await getDateUsers();

    localStorage.setItem("userId", userId);
}

//1)Если при нажатии на кнопку функция, выводящая данные про пользователей, не получает никаких данных , 
//то в интерфейс должно вывестись сообщение “Такого пользователя нет” и номер с пользователем не должен расти.
