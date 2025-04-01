const display = document.getElementById("display");

function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value; // Ensure symbols and numbers are appended correctly
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    // alert("Invalid expression. Please try again.");
  }
}
