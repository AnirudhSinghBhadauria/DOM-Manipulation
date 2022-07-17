const input = document.querySelector(`#input`)
input.addEventListener(`input` , ()=>{
    const heading = document.querySelector(`h1`)
    heading.innerText = `Welcome, ${input.value}!`
    setInterval(() => {
        input.value = ``
    }, 10000);
})

    
