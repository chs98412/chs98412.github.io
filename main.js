const toggleBtn= document.querySelector(".navbar_togleBtn");

const menu= document.querySelector(".navbar_menu");

const icons= document.querySelector(".navbar_icons");

const heart= document.querySelector(".heart");

var a=0;

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

heart.addEventListener('click',()=>{
    if(a===0){
    heart.style.color="red";
    a=1;}

    else if(a===1){
        heart.style.color="dimgrey";
    a=0;
    }
});