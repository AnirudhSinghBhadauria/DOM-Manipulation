const form = document.querySelector(`#form`);
const username = document.querySelector(`#username`);
const tweet = document.querySelector(`#tweet`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  if (username.value === `` || tweet.value === ``) {
    alert(`Please Fill Things Carefully!`);
  } 
  else {
    const li = document.createElement(`li`);
    li.innerText = `${username.value} : ${tweet.value}`;
    const ul = document.querySelector(`#ul`);
    ul.append(li);

    clearInput()
  }
});

ul.addEventListener(`dblclick` , (event)=>{
    event.target.remove()
    event.stopPropogation();
})

function clearInput() {
  username.value = ``;
  tweet.value = ``;
}
