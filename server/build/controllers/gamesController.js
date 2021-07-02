"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GamesController {
    index(req, res) {
        //db.query('DESCRIBE games');
        res.send("En routes games.ts");
    }
}
exports.gamesController = new GamesController();
