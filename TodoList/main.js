// const todo_list = document.querySelector(".todo-list");
// const todo_input = document.querySelector("#todo-input");
// const btn_add = document.querySelector("#btn-add");
// const options = document.getElementsByName('todo-option-item');


// let isUpdate = false;
// let idUpdate = null;

// let todos = JSON.parse(localStorage.getItem('todos'));

// function updateStorage(){
//     localStorage.setItem('todos',JSON.stringify(todos));
//     return JSON.parse(localStorage.getItem('todos'));
// }

// btn_add.addEventListener('click', function(){
//     let todoTitle = todo_input.value;
//     if(isUpdate){
//         for(let i = 0; i<todos.length;i++){
//             if(todos[i].id == idUpdate){
//                 todos[i].title = todoTitle;
//             }
//         }
//         isUpdate=false;
//         idUpdate=null;
//         btn_add.innerText = "THÊM";
//     }else{
//         let newTodo = {
//             id: createdId(),
//             title: todoTitle,
//             status: false
//         }
//         todos.push(newTodo);
//     }
//     todos = updateStorage();
//     renderUI(todos)
//     todo_input.value="";
// })

// renderUI(todos);

// function createdId(){
//     let id = Math.floor(Math.random()*1000000);
//     return id
// }

// function renderUI(arr){
//     todo_list.innerHTML = "";
//     if(arr.length == 0){
//         todo_list.innerHTML = "<p class='todos-empty'>Không có danh mục công việc nào</p>"
//         return
//     }
//     for(let i=0; i<arr.length; i++){
//         const t = arr[i];
//         todo_list.innerHTML += `
//             <div class="todo-item ${t.status ? 'active-todo':''}">
//                 <div class="todo-item-title">
//                     <input type="checkbox" ${t.status ? 'checked':''} onClick="toggleStatus(${t.id})">
//                     <p>${t.title}</p>
//                 </div>
//                 <div class="option">
//                     <button class="btn btn-update" onclick="updateTodo(${t.id})">
//                         <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg" alt="icon">
//                     </button>
//                     <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
//                         <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg" alt="icon">
//                     </button>
//                 </div>
//             </div>
//         `
//     }

// }

// function toggleStatus(id){
//     for(let i =0;i<todos.length; i++){
//         if(todos[i].id == id){
//             todos[i].status = !todos[i].status;
//         }
//     }
//     todos = updateStorage();
//     renderUI(todos);
// }

// function deleteTodo(id){
//     for(let i=0; i<todos.length; i++){
//         if(todos[i].id == id){
//             todos.splice(i,1);
//         }
//     }
//     todos = updateStorage();
//     renderUI(todos);
// }

// function updateTodo(id){
//     for(let i=0; i<todos.length; i++){
//         if(todos[i].id == id){
//             todo_input.value = todos[i].title;
//         }
//     }
//     todo_input.focus();
//     isUpdate = true;
//     idUpdate = id;
//     btn_add.innerText = "CẬP NHẬT";

// }

// function optionTodo(){
//     for(let i=0; i< options.length; i++){
//         if(options[i].checked){
//             let option = options[i].id;
//             if(option == "all"){
//                 renderUI(todos);
//             }else if(option == "unactive"){
//                 let newTodos = todos.filter((item, index) => {
//                         return item.status == false;
//                     })
//                 renderUI(newTodos);
//             }else if(option == "active"){
//                 let newTodos = todos.filter((item, index) => {
//                         return item.status == true;
//                     })
//                 renderUI(newTodos);
//             }
            
//         }
//     }
// }


