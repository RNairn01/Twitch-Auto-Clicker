setTimeout(() => {

const timerDiv = document.createElement("div");
timerDiv.innerHTML = "--:--";
const container = document.querySelector(".chat-input__buttons-container");
container.appendChild(timerDiv);
container.style.justifyContent = "center";
container.style.alignItems = "center";

const nodes = container.getElementsByTagName('*');
let i = 1;
for (let node of nodes) {
  node.style.order = i.toString();
  console.log(node.style.order)
  i+= 2;
}
timerDiv.style.order = "1";

timerDiv.style.justifyContent = "center";
timerDiv.style.alignItems = "center";
timerDiv.style.textAlign = "center";
timerDiv.style.fontWeight = "bold";

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
    seconds = 59;
    time = `${displayTime(minutes)}:${displayTime(seconds)}`;
  } else {
    seconds -= 1;
    time = `${displayTime(minutes)}:${displayTime(seconds)}`;
    }

  timerDiv.innerHTML = time;

  const icon = document.getElementsByClassName("claimable-bonus__icon");
  if (icon.length > 0) {
  document.querySelector(".claimable-bonus__icon").click();
  time = "15:00";
  }
 }, 1000);
}


timer("15:00");
 

}, 1000);