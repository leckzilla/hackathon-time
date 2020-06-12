// 1st iteration:

// a timer set and started by the user which counts down and notifies
//when time's up and to get back to work!

// input field which takes in time in minutes
// start button to begin countdown
// display of time remaining
// notification with 🐋

// Oh lawd he comin'

//Timer logic plan, (potentially!):
//-have a variable that stores the initial time and gets re-written with the result of the getTimeRemaining function each time it runs w/ the interval
//-this variable is rendered on the screen so that when it updates it, it changes on the screen

//Notifications via Notification API:
// - initialize w/ Notification()
// - then write function w/ sample code from MDN link to check if browser can/has permission to give notifications
// - then trigger notification with timeout via minutes user put in (multiplied into ms)

let minutesRemaining = 0;
let secondsRemaining = 00;

let app = document.querySelector(".app");

const mainTitle = document.createElement("h1");
mainTitle.innerHTML = "<h1 class='mainTitle'>Whale of Derail</h1>";
app.appendChild(mainTitle);

let timerInput = document.createElement("input");
timerInput.innerHTML = '<input class="timerInput" />';
app.appendChild(timerInput);
let timerButton = document.createElement("button");
timerInput.innerHTML = '<button class="timerButton">Start Timer</button>';
timerButton.addEventListener("click", () => {
  countdownTimer(timerInput.value);
});
app.appendChild(timerButton);

let timerDisplay = document.createElement("h1");
timerDisplay.innerText = minutesRemaining + ":" + secondsRemaining; // countdown function
timerDisplay.classList.add("timerDisplay");
app.appendChild(timerDisplay);

function countdownTimer(minutes) {
  //convert minutes to ms (minutes*60000):
  let msTime = minutes * 60000;
  //tick fx handles the actual displayed timer:
  tick(msTime);
  //now setTimeOut can count down using the ms until it calls the function that triggers the notification:
  //TODO: uncomment whaleTime() code after timer is sorted
  //setTimeout(whaleTime(), msTime);
}

function tick(msTime) {
  let timeRemaining = msTime;
  console.log({ timeRemaining }); //✅
  let tickInterval = setInterval(() => {
    let timeToDisplay = getTimeRemaining(msTime, timeRemaining);
    minutesRemaining = timeToDisplay.minutes;
    secondsRemaining = timeToDisplay.seconds;
    timeRemaining -= 1000;
  }, 1000);
  if (timeRemaining <= 0) {
    clearInterval(tickInterval);
  }
}

function getTimeRemaining(msTime, timeRemaining) {
  const total = msTime - timeRemaining;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);

  return {
    minutes,
    seconds,
  };
}

// function whaleTime() {
//   //create the notification:
//   const whaleNotification = "Whale says: 'Break's over! Get back to work!";

//   // check if the browser supports notifications:
//   if (!("Notification" in window)) {
//     alert(whaleNotification); //creates browser alert in lieu of notification
//   }

//   // check whether notification permissions have already been granted (if so, whale notification):
//   else if (Notification.permission === "granted") {
//     // If okay, create the notification:
//     var notification = new Notification(whaleNotification);
//   }

//   // Otherwise, need to ask the user for permission:
//   else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then(function (permission) {
//       // If the user accepts, create the notification:
//       if (permission === "granted") {
//         var notification = new Notification(whaleNotification);
//       }
//     });
//   }
// }
