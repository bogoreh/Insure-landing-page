
const nav = document.getElementById("nav");
const hamb = document.getElementById("hamburger");
const close = document.getElementById("close");

hamb.addEventListener("click", ()=>{
    nav.style.display = 'block';
    hamb.classList.toggle("hidden");
    close.classList.toggle("hidden");
});

close.addEventListener("click", ()=>{
    nav.style.display = 'none';
    hamb.classList.toggle("hidden");
    close.classList.toggle("hidden");
});



