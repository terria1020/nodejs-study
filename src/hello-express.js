
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

app.listen(port, () => {
    console.log(`server listen on ${port}...`)
})