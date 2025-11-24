// pt 1//
document.addEventListener("DOMContentLoaded", function() {
  // Refs to HTML here //
  const greeting = document.querySelector("h1" );
  const message = document.querySelector("p");
  const form = document.getElementById("customizeForm");
  const nameInput = document.getElementById("nameInput");
  const messageInput = document.getElementById("messageInput");
  const bgSelect = document.getElementById( "bgSelect");

  //form sub//
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the page from reloading

    // grabs values input//
     const name = nameInput.value.trim();
    const newMessage = messageInput.value.trim();
    const newColor = bgSelect.value;

    //greeting//
    if (name) {
      greeting.textContent = `Hello, ${name}!`;
    } else {
      greeting.textContent = "Hello, User!";
    }

    // message//
    if (newMessage) {
      message.textContent = newMessage;
 } else {
      message.textContent = "Welcome to your customizable page!";
    }

    
    // background color
    if (newColor) {
      document.body.style.backgroundColor = newColor;
    }
  });
});


//bONO//
// ToDo List
 document.addEventListener("DOMContentLoaded", function() {
  const todoInput  = document.getElementById("todoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList   = document.getElementById("todoList");

  if (!todoInput || !addTodoBtn || !todoList) return; 

  const addTodo = () => {
    const text = (todoInput.value || "").trim();
    if (!text) return; 

    const li = document.createElement("li");
    li.textContent = text;
    todoList.appendChild(li);

    todoInput.value = "";
    todoInput.focus();
  };

  addTodoBtn.addEventListener("click", addTodo);

  //
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  });
});