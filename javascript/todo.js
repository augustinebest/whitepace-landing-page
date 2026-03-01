

// TodoList

const todoList = [] // persists the data

function addTodo(item) {
    // check if the title is unique
    const existingTitle = todoList.find(todo => todo.title === item.title)
    const existingId = todoList.find(todo => todo.id === item.id)
    if (existingTitle) {
        console.log("This title already exists. Please choose a different title.")
        return false;
    } else if (existingId) {
        console.log("This ID already exists. Please choose a different ID.")
        return false;
    } else {
        todoList.push(item)
    }
}

function findItemById(id) {
    const checkItem = todoList.find(todo => todo.id === id)
    if(!checkItem){
        console.log("Item not found")
        return false;
    }
    return checkItem;
}

function getTodos() {
    return todoList
}

// .filter()
function removeTodo(id) {
    return todoList.filter(todo => todo.id !== id)
}

function maskAsCompleted(id) {
    const checkItem = todoList.find(todo => todo.id === id)
    if(checkItem) {
        checkItem.completed = true;
        return checkItem;
    }
}

const item1 = {
    id: 1, // unique identifier for the todo item
    title: 'Buy groceries', // unique
    description: 'Milk, Bread, Eggs',
    completed: false
}

const item2 = {
    id: 2, // unique identifier for the todo item
    title: 'Buy groceries 111', // unique
    description: 'Workout for 1 hour',
    completed: false
}

const item3 = {
    id: 3, // unique identifier for the todo item
    title: 'Walk',
    description: 'Go for a walk',
    completed: false
}

const item4 = {
    id: 4, // unique identifier for the todo item
    title: 'Read a book',
    description: 'Read a book for 30 minutes',
    completed: false
}

addTodo(item1) // should add item1 to the todo list
addTodo(item2) // should add item2 to the todo list
addTodo(item3) // should add item3 to the todo list
addTodo(item4) // should add item4 to the todo list

// console.log(findItemById(4)) // should return item1

// console.log(removeTodo(4)) // should remove item2 from the todo list

maskAsCompleted(3) // should mark item3 as completed
maskAsCompleted(2) // should mark item3 as completed
maskAsCompleted(4) // should mark item3 as completed

console.log(getTodos()) // should return the list of todo items