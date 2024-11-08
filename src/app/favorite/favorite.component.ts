import { Component } from '@angular/core';
import { Item } from '../services/item.service';
import { FavoriteService } from '../services/favorite.service';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [NgFor,NgIf,NavbarComponent,RouterLink],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  favorites:Item[]=[];

  constructor(private favoriteService:FavoriteService){
    this.favorites=this.favoriteService.getFavorites();
  }

  removeFavorite(itemId:number):void{
    this.favoriteService.removeFavorite(itemId);
    this.favorites=this.favoriteService.getFavorites();
  }
}
