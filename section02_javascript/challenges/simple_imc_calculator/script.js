function calculate(event) {
  event.preventDefault();
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var imc = calculateImc(weight, height);
  resultImc(imc);
}

function calculateImc(weight, height) {
  var result = weight / (height * height);
  return result;
}

function resultImc(imc) {
  if (imc < 17) {
    document.getElementById(
      "result"
    ).innerHTML = `You result was: ${imc} <br> and you are very underweight`;
  } else if (imc >= 17 && imc <= 18.49) {
    document.getElementById(
      "result"
    ).innerHTML = `You result was: ${imc} <br> and you are underweight`;
  } else if (imc >= 18.5 && imc <= 24.99) {
    document.getElementById(
      "result"
    ).innerHTML = `You result was: ${imc} <br> and you are normal weight`;
  } else if (imc >= 25 && imc <= 29.99) {
    document.getElementById(
      "result"
    ).innerHTML = `You result was: ${imc} <br> and you are overweight`;
  } else if (imc >= 30 && imc <= 34.99) {
    document.getElementById(
      "result"
    ).innerHTML = `You result was: ${imc} <br> and you are obesity 1`;
  } else if (imc >= 35 && imc <= 39.99) {
    document.getElementById(
      "result"
    ).innerHTML = `You result was: ${imc} <br> and you are obesity 2`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `You result was: ${imc} <br> and you are obesity 3`;
  }
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
}
