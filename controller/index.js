const {getAllTodos, insertTodos, fetchOneTask} = require("../model")

async function getAllTasks() {
    const tasks = await getAllTodos();
    return tasks
}

async function addTask(description, priority) {
    if (priority < 0 || priority > 10){
        console.log("priority can be only 0 or 10")
        return false
    }

    const newTask = {
        description: description,
        priority: priority,
        isDone: 0
    }
    console.log(newTask, "working")

    await insertTodos(newTask)

    return true
}

async function getOneTask(taskId) {
    const task = await fetchOneTask(taskId);
    //todo if no task err
    return task
}

module.exports = {
    getAllTasks,
    addTask,
    getOneTask
}