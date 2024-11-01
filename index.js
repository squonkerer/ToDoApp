const express = require("express")
//const { getAllTodos } = require('./model')
const { getAllTasks, addTask, getOneTask} = require('./controller')
const path = require("path")
const PORT = process.env.PORT || 3000
const app = express();
const ejs = require('ejs')
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use('/', express.static("public"))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); 

app.get('/', (req, res) => { 
    res.render("frontPage", ) 
})

app.post('/api/task', (req, res) => {
    console.log(req.body)
    addTask(req.body.description, req.body.priority)
    res.status(201).end()
})

app.get('/api/task', async (req, res) => {
    const tasks = await getAllTasks()
    res.send(tasks)
})

app.get('/api/task/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId
        const task = await getOneTask(taskId)
        res.send(task)
    }catch (err){
        console.log('wrong id: ', err)
        res.status(500).send({error: 'bad request'})
    }
})

app.get('/health', (req, res) => res.send({status: 'working'}))


app.listen(PORT, () => console.log(`listening on ${PORT}`))