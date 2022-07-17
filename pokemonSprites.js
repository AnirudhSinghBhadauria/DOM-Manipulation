const heading = document.createElement(`h1`)
heading.innerText = `Look at all my Pokemon!`
heading.style.fontSize = `2rem`
heading.style.fontFamily = `cursive`
heading.style.textAlign = `center`
document.body.append(heading)

const section = document.createElement(`div`)
section.setAttribute(`id` , `wrapper`)
section.style.width = `97vw`
section.style.height = `100vh`
document.body.append(section)

const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

for(let i=1 ; i<=151 ; i++){
    const wrapper = document.createElement(`div`)
    wrapper.style.textAlign = `center`
    const pokemon = document.createElement(`img`)
    pokemon.src = `${baseURL}${i}.png`
    const number = document.createElement(`span`)
    number.style.fontWeight = `700`
    number.style.fontFamily = `cursive`
    number.innerText = `#${i}`
    wrapper.append(pokemon) 
    wrapper.append(number) 
    section.append(wrapper)
}

