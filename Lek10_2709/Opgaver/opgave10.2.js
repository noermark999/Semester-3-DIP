// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getUsers() {
    const users = await get(userUrl);
    users.map(user => {
        const nameNode = document.createElement("td");
        const usernameNode = document.createElement("td");
        const emailNode = document.createElement("td");
        nameNode.textContent = user.name;
        usernameNode.textContent = user.username;
        emailNode.textContent = user.email;
        const tr = document.createElement("tr");
        tr.onclick = getPosts
        tr.appendChild(nameNode);
        tr.appendChild(usernameNode);
        tr.appendChild(emailNode);
        tr.dataset.id = user.id;
        document.querySelector("tbody").appendChild(tr);
    })
}

async function getPosts(event) {
    document.querySelectorAll("tbody")[1].innerHTML = "";
    const data = await get(postUrl + event.currentTarget.dataset.id)
    data.map(post => {
        const titleNode = document.createElement("td");
        const bodyNode = document.createElement("td");
        titleNode.textContent = post.title;
        bodyNode.textContent = post.body;
        const tr = document.createElement("tr");
        tr.appendChild(titleNode);
        tr.appendChild(bodyNode);
        document.querySelectorAll("tbody")[1].appendChild(tr);
    })
}

getUsers();