
let addNewTodo = document.getElementById('newTodo')
let todoItem = document.getElementById('todo-item')
let newVal = document.getElementById('val')

addNewTodo.addEventListener('click', function () {
    var paragraph = document.createElement('p')
    paragraph.innerText = newVal.value;
    todoItem.appendChild(paragraph)
    newVal.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through"
        paragraph.style.color = "green"
    })
    paragraph.addEventListener('dblclick', function () {
        todoItem.removeChild(paragraph)
    })
})

