import {Request, Response} from 'express';

class IndexController {
    public index(req:Request, res:Response){
        res.send("En index");
    }
}

export const indexController = new IndexController();