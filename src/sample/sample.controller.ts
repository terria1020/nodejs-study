import * as express from "express";
import { SampleService } from "./sample.service";

class SampleController {
    private readonly sampleService: SampleService;

    constructor() {
        this.sampleService = new SampleService();
    }

    getRoot(path: string, req: express.Request, res: express.Response) {
        this.sampleService.getRoot(req, res);
    }
    getFoo(path: string, req: express.Request, res: express.Response) {
        this.sampleService.getFoo(path, req, res);
    }
}

const sampleController = new SampleController();
export default sampleController;
