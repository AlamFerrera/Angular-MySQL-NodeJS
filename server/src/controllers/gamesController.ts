import {Request, Response} from 'express';
import db from '../database';

class GamesController {
    public index(req:Request, res:Response){
        //db.query('DESCRIBE games');

        res.send("En routes games.ts");
    }
}

export const gamesController = new GamesController();