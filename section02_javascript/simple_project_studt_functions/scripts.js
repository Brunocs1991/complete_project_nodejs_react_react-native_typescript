var area = document.getElementById("area");

function enter() {
  var name = prompt("What is your name?");
  if (name == "" || name == null) {
    alert("Ops! something went wrong !!!");
    area.innerHTML = "Please, enter your name!";
  } else {
    area.innerHTML = `Hello, ${name}! `;
    let buttonExit = document.createElement("button");
    buttonExit.innerHTML = "Exit from account";
    buttonExit.onclick = exit;
    area.appendChild(buttonExit);
  }
}

function exit() {
  alert("Goodbye!");
  area.innerHTML = "you exited from account!";
}
