const button = document.createElement(`button`);
button.setAttribute(`id`, `colorBtn`);
button.innerText = `Change Color`;
button.style.borderRadius = `8px`;
button.style.padding = `10px`;
button.style.background = `none`
button.style.border = `2px solid white`
button.style.color = `black`
button.style.fontFamily = `cursive`
button.style.fontWeight = `600`
button.style.fontSize = `1.5rem`
document.body.append(button);
document.body.style.textAlign = `center`;
document.body.style.padding = `2rem`;


const color = document.createElement(`h2`);
color.style.fontFamily = `cursive`


button.addEventListener(`click`, () => {
  const Number1 = Math.floor(Math.random() * 255 + 1);
  const Number2 = Math.floor(Math.random() * 255 + 1);
  const Number3 = Math.floor(Math.random() * 255 + 1);
  document.body.style.background = `rgb(${Number1},${Number2},${Number3})`;
  color.innerText = `rgb(${Number1},${Number2},${Number3})`;
  document.body.append(color);
});
