const dogBtn = document.getElementById('dogBtn') 
const imgDog = document.getElementById('imgDog')
const breedDog = document.getElementById('breedDog')
const listBtn = document.getElementById('listBtn')

axios.get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
         const {data} = res
         console.log(data.message)
         })
      .catch((err) => console.error(err));

axios.get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
             const {data} = res
            console.log(data.message)
            })
      .catch((err) => console.error(err));

 axios.get("https://dog.ceo/api/breed/hound/images")
      .then((res) => {
            const {data} = res
            console.log(data.message)
         })
      .catch((err) => console.error(err));
 
 function listDogDom() {
      axios.get("https://dog.ceo/api/breeds/list/all")
         .then((res) => {
             const {data} = res
             const listDog = data.message
             let list = []
             for(const k in listDog) list.push(k)
             list = list.join(", ")
             breedDog.innerHTML += `<p>${list}</p>`
             console.log(list)})
         
         .catch((err) => console.error(err));
}

 function pintDogDom() {
      axios.get("https://dog.ceo/api/breeds/image/random")
           .then((res) => {
               const {data} = res
               imgDog.innerHTML += `<img src="${data.message}">`})
           .catch((err) => console.error(err));
 }

 
 dogBtn.addEventListener('click', pintDogDom)
 listBtn.addEventListener('click', listDogDom)