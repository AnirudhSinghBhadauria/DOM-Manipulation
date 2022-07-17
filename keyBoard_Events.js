document.body.style.textAlign = `center`

const input = document.querySelector(`#form`)
input.addEventListener(`keydown` , (event)=>{
        console.log(`Key -`,event.key);  
        console.log(`Code -`,event.code);  
})
const heading = document.createElement(`h2`)
heading.innerText = `Press Arrow Right and See the Magic!!`
document.body.append(heading)

window.addEventListener(`keydown` , (event)=>{
    if(event.code === `ArrowRight`){
      const link = document.createElement(`a`)
      link.setAttribute(`href`  , `https://google.com/`)
      link.innerHTML = `<button>Google</button>`
      document.body.append(link)
    }
})
const label = document.querySelector(`#label`)
label.addEventListener(`dblclick` , (event) =>{
    const link2 = document.createElement(`a`)
    link2.setAttribute(`href`,`https://google.com/`)
    link2.innerHTML = `<button>Google</button>`
    document.body.append(link2)
})