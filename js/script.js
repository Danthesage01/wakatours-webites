// Date
const date = document.getElementById("date")
date.textContent = new Date().getFullYear()


// NavToggle
const navToggle = document.getElementById("nav-toggle")
const navLinks = document.getElementById("nav-links")
navToggle.addEventListener("click", showNav)
function showNav(){
    navLinks.classList.toggle("show-links")
  }


// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navLinks.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    });
  });
});

// FAQs
let questions = document.querySelectorAll(".question")
questions = [...questions]
questions.forEach(question=>{
 
const button = question.querySelector(".question-btn")

button.addEventListener("click", function(){
  questions.forEach(function(item){
    if(item !== question){
      item.classList.remove("show-text")
    }
  })
  question.classList.toggle("show-text");
})

})