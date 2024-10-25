const {getAllTodos} = require('../model')

async function getAllTasks(params) {
    const tasks = await getAllTodos();
    return tasks
}

module.exports = {
    getAllTasks
}