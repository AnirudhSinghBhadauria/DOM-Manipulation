let lis = document.querySelectorAll(`li`);
for (let li of lis) {
  li.classList.add(`highlight`);
}
lis[4].classList.remove(`highlight`)
lis[1].classList.remove(`highlight`)
