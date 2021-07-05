import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import {GamesService} from '../../services/games.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  constructor(private ruta:Router,private gameService: GamesService, private rutaActiva:ActivatedRoute) { }

  game:Game = {
    id: 0,
    title: '',
    descripcion: '',
    imagen: '',
    created_at: new Date
  };
  edit:boolean = false;

  ngOnInit(): void {
    const params = this.rutaActiva.snapshot.params;
    if(params.id){
      this.gameService.getOneGame(params.id).subscribe(
        res => {
          console.log(res);
          this.game=res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;

   this.gameService.saveGame(this.game).subscribe(
     res => {
        this.ruta.navigate(['/games']);
     },
     err => console.log(err)
   );
  }

  updateGame(){
    delete this.game.created_at;

    this.gameService.updateGame(this.game.id, this.game).subscribe(
      res => {
        console.log("update");
        console.log(res);
        this.ruta.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

}
