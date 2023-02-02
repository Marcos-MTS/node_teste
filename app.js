const express = require('express')
const app = express()
//const port = 3000

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || "www.teste.com"

app.get('/', (req, res) => {
  res.send('Hello World!' + BASE_URL)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})