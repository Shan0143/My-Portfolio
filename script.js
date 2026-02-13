// Typing Animation
const words = ["Cloud Engineer","DevOps Engineer","AWS Enthusiast"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){
currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.querySelector(".typing").textContent = currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i = (i + 1) % words.length;
}

setTimeout(type,isDeleting ? 60 : 120);
}

type();

// Scroll Animation
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
fades.forEach(fade=>{
if(fade.getBoundingClientRect().top < window.innerHeight-100){
fade.classList.add("active");
}
});
});
