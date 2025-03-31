const inputBox = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  saveDate();
  inputBox.value = "";
}

list.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    console.log("saa");     
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    console.log("remove");
  }
  saveDate();
});

function saveDate(){
    localStorage.setItem("taskList", list.innerHTML);
}
function loadData(){
    list.innerHTML = localStorage.getItem("taskList");
}
loadData();