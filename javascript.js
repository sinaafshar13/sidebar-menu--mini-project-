const sideBar = document.querySelector('.sidebar');
const ctrlBtn = document.querySelector('.ctrlbtn');
console.log(ctrlBtn);
ctrlBtn.addEventListener('click' , function(){
    sideBar.classList.toggle('show');
    ctrlBtn.classList.toggle('open');
})