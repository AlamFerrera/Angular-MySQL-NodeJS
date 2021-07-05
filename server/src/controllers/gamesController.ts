import {Request, Response} from 'express';
import db from '../database';

class GamesController {

    public async list(req: Request, res: Response){
       try{
           const result = await db.query('SELECT * FROM games');
           res.send(result);
       }
       catch(e){
           res.send("error al consultar");
       }
    }

    public async getOne(req: Request, res: Response){
       try{
            const {id} = req.params;
            
            const games = await db.query('SELECT * FROM games WHERE id = ?', [id]);
            res.send(games);
       }
       catch(e){
        res.json("error al consultar");
       }
    }

    public async create(req:Request, res:Response): Promise<void>{
        await db.query('INSERT INTO games SET ?', [req.body]);
        res.json({message: 'game saved'});
    }

    public async delete(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM games WHERE id =?',[id]);
        res.json({message: "Elemento eliminado"});
    }

    public async update(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        
        await db.query('UPDATE games SET ? WHERE id = ?', [req.body,id]);
        res.json({message: "Juego Actualizado"});
    }
}

export const gamesController = new GamesController();