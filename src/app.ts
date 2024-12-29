import * as express from "express";

const app: express.Application = express.application;

const port = 8000;

app.listen(port, () => {
    console.log(`server listen on ${port}...`);
});
