let elBtn = document.querySelector('#btn');
let elTitle = document.querySelector('.title');
const day = new Date();

elBtn.addEventListener("click", ()=>{
    elTitle.textContent = day
})

