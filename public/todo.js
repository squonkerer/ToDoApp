//const { json } = require("express")

console.log("working")

async function fetchTasks() {
    const response = await fetch('/api/task')
    if (response.status !== 200) {
        console.log('no bueno')
        return
    }
    let tasks = await response.json
    console.log(tasks)
}

fetchTasks()