const todoList = ['learn react.js', 'learn mongo db', 'learn next.js'];

function clearTodoList() {
    const todoListBody = document.getElementById('todoListBody');
    while (todoListBody.firstChild) {
        todoListBody.removeChild(todoListBody.firstChild);
    }
}

function removeTodoList(index) {
    // console.info(`remove: ${index}`);
    todoList.splice(index, 1);
    displayTodoList();
}

function addTodoList(index, todo) {
    const tr = document.createElement('tr');
    const tdButton = document.createElement('td');
    tr.appendChild(tdButton);

    const buttonDone = document.createElement('input');
    buttonDone.type = 'button';
    buttonDone.value = 'Done';
    buttonDone.onclick = function () {
        removeTodoList(index);
    };
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement('td');
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todoListBody = document.getElementById('todoListBody');
    todoListBody.appendChild(tr);
}

function displayTodoList() {
    clearTodoList();

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];

        const searchText = document.getElementById('search').value.toLowerCase();

        console.log(1111, searchText);

        if (todo.toLowerCase().includes(searchText)) {
            addTodoList(i, todo);
        }

        // addTodoList(todo);
    }
}

document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todoList.push(todo);

    document.forms['todoForm'].reset();

    console.info(todoList);

    displayTodoList();
};

const searchInput = document.getElementById('search');
searchInput.onkeyup = function () {
    // console.info('on change');
    displayTodoList();
};

searchInput.onkeydown = function () {
    // console.info('on change');
    displayTodoList();
};

displayTodoList();
// console.log(111, document.getElementById('todoListBody').firstChild);
