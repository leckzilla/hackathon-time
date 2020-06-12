// 1st iteration:

// a timer set and started by the user which counts down and notifies
//when time's up and to get back to work!

// input field which takes in time in minutes
// start button to begin countdown
// display of time remaining
// notification with 🐋

// Oh lawd he comin'

//Notifications via Notification API:
// - initialize w/ Notification()
// - then write function w/ sample code from MDN link to check if browser can/has permission to give notifications
// - then trigger notification with timeout via minutes user put in (multiplied into ms)

let app = document.querySelector(".app");

// const mainTitle = document.createElement("h1").classList.add("mainTitle");
const mainTitle = document.createElement("h1");
mainTitle.innerHTML = "<h1 class='mainTitle'>Whale of Derail</h1>";
app.appendChild(mainTitle);

// let timerInput = document.createElement(input).classList.add("timerInput");
let timerInput = document.createElement("input");
timerInput.innerHTML = '<input class="timerInput" />';
app.appendChild(timerInput);
// let timerButton = document.createElement("button").classList.add("timerButton");
let timerButton = document.createElement("button");
timerInput.innerHTML = '<button class="timerButton">Start Timer</button>';
app.appendChild(timerButton);

let timerDisplay = document.createElement("h1");
timerDisplay.innerText = "0:00";
timerDisplay.classList.add("timerDisplay");
app.appendChild(timerDisplay);

function countdownTimer(minutes) {
  //convert minutes to ms (minutes*60000):
  let msTime = minutes * 60000;
  //tick fx handles the actual displayed timer:
  tick(msTime);
  //now setTimeOut can count down until it triggers the notification:
  setTimeout(() => {
    //trigger notification here!
  }, msTime);
}

function tick(ms) {
  let timeRemaining = ms;
  let tickInterval = setInterval(() => {
    //TODO: decrease displayed time by 1s
    timeRemaining -= 1000;
  }, 1000);
  if (timeRemaining <= 0) {
    clearInterval(tickInterval);
  }
}

function whaleTime() {}
