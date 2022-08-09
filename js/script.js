// Date
const dDate = document.getElementById("date")
dDate.textContent = new Date().getFullYear()


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

// Next Tour
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const nextTour = document.querySelector(".next-tour")
const deadline = document.querySelector(".deadline")
const deadlineItems = document.querySelectorAll(".deadline-format h4")

// get temporary 
const tDate = new Date()
const tMonth = tDate.getMonth()
const tYear = tDate.getFullYear()
const tDay = tDate.getDate()


// get future date;
const fDate = new Date(tYear, tMonth, tDay + 10, 06, 30, 0);

// let fDate = new Date(2022, 7, 10, 11, 30, 0) - Useful when the event will actually end

// get the future hours, minutes and years
const year = fDate.getFullYear()
const hours = fDate.getHours()
const minutes = fDate.getMinutes()

// get the months
let month = fDate.getMonth()
month = months[month]

// get weekdays
let day = fDate.getDay()
day = weekdays[day]

// get date
const date = fDate.getDate()

// Passing the date to the DOM
nextTour.innerHTML = `starts on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}AM`

// Calculating the remaining days in time and 
const futureTime = fDate.getTime()

const getTimeRemaining = ()=>{
  const today = new Date().getTime()

  const t = futureTime - today
   // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  // Calculating all values
  let days = t / oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds]

  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item
  }
  deadlineItems.forEach((deadlineItem, index)=>{
      deadlineItem.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(tourCount);
    deadline.innerHTML = `<h4 class="expired">sorry, tour no longer available!</h4>`;
  }
}
// Tour Count
let tourCount = setInterval(getTimeRemaining, 1000)
getTimeRemaining()