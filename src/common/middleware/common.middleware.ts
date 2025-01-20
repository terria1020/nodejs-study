import app from "../../app";
import * as express from "express";

const commonMiddleWare = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    console.log("test middleware");
    next();
};

app.use(express.json());
app.use("/", commonMiddleWare);
