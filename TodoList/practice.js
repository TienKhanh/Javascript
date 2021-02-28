/*
1. createdId
2. database todos
3. renderUI
4. toggleTodo
5. add todo
6. deleteTodo

7. updateTodo
8. optionTodo
9. updateStorage
*/

const todo_list = document.querySelector(".todo-list");
const todo_input = document.querySelector("#todo-input");
const btn_add = document.querySelector("#btn-add");
const options = document.getElementsByName("todo-option-item");

let isUpdate = false;
let idUpdate = null;

if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', '[]');
}

let todos = JSON.parse(localStorage.getItem('todos'));

// Execute a function when the user releases a key on the keyboard
todo_input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btn_add.click();
    }
});

btn_add.addEventListener('click', function () {
    todoTitle = todo_input.value;
    if (isUpdate) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = todoTitle;
                console.log(i)
            }
        }
        btn_add.innerText = "THÊM";
        isUpdate = false;
        idUpdate = null;
    } else {
        newTodo = {
            id: createdId(),
            title: todoTitle,
            status: false
        }
        todos.push(newTodo);
    }

    todo_input.value = "";
    todos = updateStorage(todos);
    renderUI(todos);
})

for (let i = 0; i < options.length; i++) {
    const p = options[i];
    p.onclick = function () {
        if (p.checked) {
            if (p.id == "all") {
                renderUI(todos);
            } else if (p.id == "unactive") {
                let optionTodo = todos.filter((item, idex) => {
                    return item.status == false;
                })
                renderUI(optionTodo);
            } else if (p.id == "active") {
                let optionTodo = todos.filter((item, idex) => {
                    return item.status == true;
                })
                renderUI(optionTodo);
            }
            return
        }
    }
}

renderUI(todos);


// Function list

function createdId() {
    let id = Math.floor(Math.random() * 100000);
    return id
}

function renderUI(arr) {
    todo_list.innerHTML = "";
    if (arr.length == 0) {
        todo_list.innerHTML = `<p class="todos-empty">Không có ghi chú.</p>`
    }
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todo_list.innerHTML += `
        <div class="todo-item ${t.status ? 'active-todo' : ''}">
            <div class="todo-item-title">
                <input type="checkbox" ${t.status ? 'checked' : ''} onclick="toggleTodo(${t.id})">
                <p>${t.title}</p>
            </div>
            <div class="option">
                <button class="btn btn-update" onclick="updateTodo(${t.id})">
                    <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg" alt="icon">
                </button>
                <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                    <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg" alt="icon">
                </button>
            </div>
        </div>
        `;
    }
}


function toggleTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status;
        }
    }
    todos = updateStorage(todos);
    renderUI(todos);
}

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1);
        }
    }
    todos = updateStorage(todos);
    renderUI(todos);
}
function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todo_input.value = todos[i].title;
        }
    }
    todo_input.focus();
    btn_add.innerText = "CẬP NHẬT";
    isUpdate = true;
    idUpdate = id;
}

function updateStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return JSON.parse(localStorage.getItem('todos'));
}

