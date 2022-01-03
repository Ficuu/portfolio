const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

app.use('/public', express.static(`${__dirname}public`))

app.post('/sending', (req, res) => {
    res.json('Hello')
})



const PORT = 3001
app.listen(PORT, () => {
    console.log('Server Listen in port ', PORT)
})