import {Request, Response} from 'express';

class IndexController {
    public index(req:Request, res:Response){
        res.send("En routes index.ts");
    }
}

export const indexController = new IndexController();