const getBtn = document.getElementById('getBtn')
const usersContainer = document.getElementById('users') 

axios.get("https://jsonplaceholder.typicode.com/users")
     .then((res) => {
        const {data} = res
        console.log(data)
        })
    .catch((err) => console.error(err));

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        const {data} = res
        const arrayName = data.map(data => {
            return data.name
        })
        console.log(arrayName)
        })
    .catch((err) => console.error(err));




let globalUsers = []

axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        const {data} = res
        globalUsers = data
        console.log(data)
        })
    .catch((err) => console.error(err));


function getGlobalUser() {

    console.log(globalUsers)
}

function pintDomUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        const {data} = res
        data.forEach((user) => {
            usersContainer.innerHTML += `<p>${user.name}<p>`})
        })
    .catch((err) => console.error(err)); 
}


getBtn.addEventListener('click', getGlobalUser)
getBtn.addEventListener('click', pintDomUsers)


