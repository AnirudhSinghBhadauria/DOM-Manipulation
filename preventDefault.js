const form = document.querySelector(`#Form`)
const input = document.querySelector(`#input`)

const ol = document.createElement(`ol`)
document.body.append(ol)

form.addEventListener(`submit` , (event)=>{
    event.preventDefault()
    if(input.value === ``){
        alert(`Please Enter Something!`)
    }
    else{
        const li = document.createElement(`li`)
        li.innerText = input.value
        ol.append(li) 
        input.value = ``
    }
})