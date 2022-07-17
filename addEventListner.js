let number = 0
const hello = document.querySelector(`#hello`)
hello.addEventListener(`click` , ()=>{
    console.log(`Hello!`);
    alert(`Hello!`)
})
const goodBye = document.querySelector(`#goodbye`)
goodBye.addEventListener(`click` , () => {
    console.log(`GoodBye!`);
    alert(`GoodBye!`)
})

