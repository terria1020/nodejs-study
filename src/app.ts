import * as express from "express";

const app: express.Express = express();
const port = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Hello World");
});

app.listen(port, () => {
    console.log(`server listen on ${port}...`);
});

export default app;
