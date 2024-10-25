const express = require("express")
const { getAllTasks } = require('./controller')
const path = require("path")
const PORT = process.env.PORT || 3000
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())

app.get('/api/task', async (req, res) => {
    const tasks = await getAllTasks()
    res.send(tasks)
})
app.get('/health', (req, res) => res.send({status: 'working'}))

app.listen(PORT, () => console.log(`listening on ${PORT}`))