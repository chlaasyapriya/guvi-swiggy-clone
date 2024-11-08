import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../services/item.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CartService } from '../services/cart.service';
import { FavoriteService } from '../services/favorite.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgFor, NgIf,RouterLink,NavbarComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  item?: Item | undefined;
  constructor(private route: ActivatedRoute, private itemService:ItemService, private cartService:CartService,private favoriteService:FavoriteService){
    const itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.itemService.getItemById(itemId);
  }

  addToCart():void{
    if(this.item){
      this.cartService.addToCart(this.item);
      alert(`${this.item.name} is added to cart`);
    }
  }

  ngOnInit(): void {
      const itemId=Number(this.route.snapshot.paramMap.get('id'));
      this.item=this.itemService.getItemById(itemId);
  }

  toggleFavorite(item:Item):void{
    if (this.favoriteService.isFavorited(item.id)) {
      this.favoriteService.removeFavorite(item.id);
    } else {
      this.favoriteService.addFavorite(item);
    }
  }

  isFavorited(item: Item): boolean {
    return this.favoriteService.isFavorited(item.id);
  }
}
