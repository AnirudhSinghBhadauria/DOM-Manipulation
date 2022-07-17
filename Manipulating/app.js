const image = document.createElement(`img`);
image.setAttribute(
  `src`,
  `https://images.unsplash.com/photo-1656869090807-83b38be32df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`
);
document.body.append(image);
image.classList.add(`square`);

const para = document.createElement(`p`);
para.setAttribute(`id`, `paraGraph`);
para.innerText = `Nice To Meet You!`;
document.body.append(para);

const google = document.createElement(`a`);
google.setAttribute(`href`, `https://google.com/`);
google.innerText = `Google`;
google.textDecoration = `none`;
document.body.append(google);

const form = document.createElement(`input`);
const label = document.createElement(`label`);
form.setAttribute(`type`, `search`);
form.setAttribute(`id`, `form`);
label.setAttribute(`for`, `form`);
label.innerText = `Search`;

document.body.append(label);
document.body.append(form);

const image1 = document.querySelector(`img`)
image1.classList.add(`square`)

