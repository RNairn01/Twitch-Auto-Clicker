setTimeout(() => {

const timerDiv = document.createElement("div");
timerDiv.innerHTML = "--:--";
const subImg = document.createElement("img");
subImg.src = "https://i.imgur.com/BCViDZ2.png";

const container = document.querySelector(".chat-input__buttons-container");
container.appendChild(timerDiv);
container.style.justifyContent = "center";
container.style.alignItems = "center";

const nodes = container.getElementsByTagName('*');
let i = 1;
for (let node of nodes) {
  node.style.order = i.toString();
  i+= 2;
}
timerDiv.style.order = "1";

timerDiv.style.justifyContent = "space-between";
timerDiv.style.alignItems = "center";
timerDiv.style.textAlign = "center";
timerDiv.style.fontWeight = "bold";
timerDiv.style.width = "2rem";

const subButton = document.querySelector("button[data-a-target='subscribed-button']");
if (subButton) {
  container.appendChild(subImg);
  subImg.style.order = 3;
  console.log("Subscription button identified");
} else console.log("Failed to identify subscription button. If you are subscribed try reloading the page");

const timer = (time) => {
  setInterval(() => {
  let minutes = parseInt(time.substr(0, 2));
  let seconds = parseInt(time.substr(3, 2));

  const displayTime = (time) => {
    if (time >= 10) return time;
    else return `0${time}`;
  }

  if (minutes === 0 && seconds === 0) return;
  if (seconds === 0) {
    minutes -= 1;
    seconds = 55;
    time = `${displayTime(minutes)}:${displayTime(seconds)}`;
  } else {
    seconds -= 5;
    time = `${displayTime(minutes)}:${displayTime(seconds)}`;
    }

  timerDiv.innerHTML = time;

  const icon = document.getElementsByClassName("claimable-bonus__icon");
  if (icon.length > 0 || time === "00:00") {
  document.querySelector(".claimable-bonus__icon").click();
  time = "15:00";
  }


  
 }, 5000);
}


timer("14:50");
 

}, 10000);