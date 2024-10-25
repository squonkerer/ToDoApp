const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3000
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())

app.get('/health', (req, res) => res.send({status: 'working'}))

app.listen(PORT, () => console.log(`listening on ${PORT}`))