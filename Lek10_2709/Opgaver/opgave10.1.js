// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

let data = get(userUrl);
data.then(result => {
    console.log(result);
})

async function useData(url) {
    try {
        const data = await get(url);
        data.map(user => {
            const p = document.createElement("p");
            p.textContent = user.name;
            document.body.appendChild(p);
        })
    } catch(e) {
        console.log("Exception: " + e)
    }
}
useData(userUrl);

