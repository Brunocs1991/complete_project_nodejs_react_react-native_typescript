function request() {
  var valor = prompt("Enter the value: ");
  switch (valor) {
    case "1":
      alert("You entered the number 1 = Juice");
      break;
    case "2":
      alert("You entered the number 2 = Ice water");
      break;
    case "3":
      alert("You entered the number 3 = Ice cream");
      break;
    case "4":
      alert("you calling the waiter");
      break;
    default:
      alert("You entered a number other than 1 until 4");
  }
}
