import * as express from "express";

export class SampleService {
    getFoo(path: string, req: express.Request, res: express.Response) {
        const id = req.params.id;
        res.json({
            message: `hello, this id is: ${id}`,
        });
    }
    getRoot(req: express.Request, res: express.Response) {
        res.json({
            hello: "world",
        });
    }
}
