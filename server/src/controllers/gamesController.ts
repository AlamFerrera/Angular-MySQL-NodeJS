import {Request, Response} from 'express';
import db from '../database';

class GamesController {
    public index(req:Request, res:Response){
        //db.query('DESCRIBE games');

        res.send("En routes games.ts");
    }

    public create(req:Request, res:Response){
        res.json('creating game');
    }

    public delete(req:Request, res:Response){
        res.json({text:'deleting game'});
    }

    public update(req:Request, res:Response){
        res.json({text:'updating game'});
    }
}

export const gamesController = new GamesController();