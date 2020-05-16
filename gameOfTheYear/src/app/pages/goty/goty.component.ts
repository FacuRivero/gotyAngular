import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from 'src/app/interfaces/interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {


  games: Game[] = [];

  constructor( private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe( resp => {
      this.games = resp;
      console.log(this.games);
    });
  }

  votar(id: string) {
    this.gameService.votarJuego(id).subscribe(
      (resp: {ok: boolean, mensaje: string}) => {
        console.log(resp);
        if(resp.ok){
          Swal.fire('Gracias', resp.mensaje, 'success');
        } else {
          Swal.fire('Oops', resp.mensaje, 'error');
        }
      }
    );
  }

}
