var area = document.getElementById("area");
var timer;

function action(text) {
  area.appendChild(
    Object.assign(document.createElement("span"), {
      innerHTML: text,
    })
  );
}
function startTimer() {
  timer = setInterval(() => {
    action("Executing timer! <br>");
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  action("Timer stopped! <br>");
}

function executeSetTimeout() {
  setTimeout(() => {
    action("Executing setTimeout! <br>");
  }, 3000);
}
