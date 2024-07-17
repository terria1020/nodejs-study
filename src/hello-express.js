
const { equal } = require('assert');
const express = require('express')

const app = express()

const port= 8080;

app.get("/", (req, res) => {
    res.set({
        "Content-Type": "application/json"
    })

    res.json({
        "hello": "world"
    })
    // res.end("{\"hello\": \"world\"}")
});

app.get("/foo/:id", (req, res) => {
    const id = req.params.id

    res.json({
        "message": `hello, this id is: ${id}`
    })
})

app.listen(port, () => {
    console.log(`server listen on ${port}...`)
})