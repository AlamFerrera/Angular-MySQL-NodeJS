"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GamesController {
    index(req, res) {
        //db.query('DESCRIBE games');
        res.send("En routes games.ts");
    }
    create(req, res) {
        res.json('creating game');
    }
    delete(req, res) {
        res.json({ text: 'deleting game' });
    }
    update(req, res) {
        res.json({ text: 'updating game' });
    }
}
exports.gamesController = new GamesController();
