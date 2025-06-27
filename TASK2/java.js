// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please fill out all fields correctly.");
    e.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.innerHTML = `
    ${taskText}
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
  document.getElementById("tasks").appendChild(taskDiv);

  taskInput.value = "";
}
