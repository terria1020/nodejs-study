import * as express from "express";
import sampleController from "./sample/sample.controller";

const app: express.Express = express();
const port = 8000;

app.get("/", (req, res) => {
    sampleController.getRoot("/", req, res);
});
app.get("/foo/:id", (req, res) => {
    sampleController.getFoo("/foo/:id", req, res);
});

app.listen(port, () => {
    console.log(`server listen on ${port}...`);
});

export default app;
