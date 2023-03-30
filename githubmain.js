const gitBtn = document.getElementById('gitBtn')
const userContainer = document.getElementById('users')

// axios.get("https://api.github.com/users")
//     .then((res) => {
//         const {data} = res
//         console.log(data)
//         })

//     .catch((err) => console.error(err));
  


function githubUsers() {
    const githubUser = document.getElementById('github').value 
    axios.get(`https://api.github.com/users/${githubUser}`)
    .then((res) => {
        const {data} = res
        console.log(data.name)
        console.log(data.public_repos)
        console.log(data.avatar_url)
        
        })

    .catch((err) => console.error(err));
  
    }

function pintDom () {
    const githubUser = document.getElementById('github').value 
    axios.get(`https://api.github.com/users/${githubUser}`)
    .then((res) => {
        const {data} = res
        userContainer.innerHTML += `
        <p>${data.name}</p>
        <p>${data.public_repos}</p>
        <img src="${data.avatar_url}">
        `
        
        })

    .catch((err) => console.error(err));
  
}

    gitBtn.addEventListener('click', githubUsers)
    gitBtn.addEventListener('click', pintDom)