import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Criamos um array de pokemons
  // [] => representa um array (lista)
  // {} => represneta um objetivo (item)
  listaPokemons = [
    {
      numero: '001',
      nome: 'Bulbasaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      tipos: [ 'Grass', 'Poison' ]
    },
    {
      numero: '002',
      nome: 'Ivysaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      tipos: [ 'Grass', 'Poison' ]
    },
    {
      numero: '003',
      nome: 'Venusaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      tipos: [ 'Grass', 'Poison' ]
    },
    {
      numero: '004',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '005',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '006',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '007',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '008',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '009',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '010',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png',
      tipos: [ 'Fire' ]
    }
  ];

  constructor() {}

}
