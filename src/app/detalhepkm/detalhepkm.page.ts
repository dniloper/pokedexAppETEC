
import { IPokemon } from './../models/IPokemon.model';
import { Router } from '@angular/router';
import { DadosService } from './../servicos/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhepkm',
  templateUrl: './detalhepkm.page.html',
  styleUrls: ['./detalhepkm.page.scss'],
})
export class DetalhepkmPage implements OnInit {

  pokemon: IPokemon;
  url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit() {
    this.pokemon = this.dadosService.getDados('pokemon');
    console.log('Dados do Pokemon: ', this.pokemon);

    //Se não tiver um pokemon armazenado no serviço de dados
    //Ele volta para a página home.
    if(!this.pokemon) {
      this.router.navigateByUrl('/home');
    }
  }

}
