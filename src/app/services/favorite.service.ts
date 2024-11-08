import { Injectable } from '@angular/core';
import { Item } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: Item[]=[];

  constructor() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
   }

  getFavorites(): Item[] {
    return this.favorites;
  }

  addFavorite(item: Item): void {
    if (!this.isFavorited(item.id)) {
      this.favorites.push(item);
      this.saveFavorites();
    }
  }

  removeFavorite(itemId: number): void {
    this.favorites = this.favorites.filter(fav => fav.id !== itemId);
    this.saveFavorites();
  }

  isFavorited(itemId: number): boolean {
    return this.favorites.some(fav => fav.id === itemId);
  }

  private saveFavorites():void{
    localStorage.setItem('favorites',JSON.stringify(this.favorites));
  }
}
