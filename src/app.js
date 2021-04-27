require("dotenv").config()
const express = require("express")
const app = express()

const userRoutes = require("./routes/users.js")

app.use(express.json())
app.use("/", userRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, function () {console.log(`Running @ ${PORT}`)})