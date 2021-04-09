//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//Event Listners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//functions


function addTodo(event){
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //creates list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checks mark button 

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check" ></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    //checks trash button 

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash" ></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list 
    todoList.appendChild(todoDiv);

    //clear input value

    todoInput.value = " ";

}

function deleteCheck(event){

    const item = event.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation 
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
//check mark

    if(item.classList[0] === 'complete-btn'){

        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (event.target.value) {
        case "all":
            todo.style.display = 'flex';
            break;
        case "completed":
            if (todo.classList.contains("completed")){
                todo.style.display = 'flex';
            }else{
                todo.style.display ="none";
                
            }

      }
    });
}