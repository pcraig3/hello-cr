const express = require("express")
const app = express()

app.get("/", (req, res) => {
  const name = process.env.NAME || "World"
  res.send(`Hello ${name}! Updated at 2020-11-12T18:12:00 EST.`)
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`)
})
