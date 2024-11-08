import { Injectable } from '@angular/core';
import { Item } from './item.service';

interface CartItem {
  item: Item;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  
  constructor() { }

  addToCart(item: Item): void {
    const existingCartItem = this.cartItems.find(cartItem => cartItem.item.id === item.id);
    if (existingCartItem) {
      existingCartItem.quantity += 1; 
    } else {
      this.cartItems.push({ item, quantity: 1 });
    }
  }

  getCartItems():CartItem[]{
    return this.cartItems;
  }

  getTotalPrice():number{
    return this.cartItems.reduce((total, cartItem) => total+cartItem.item.price*cartItem.quantity, 0);
  }

  updateQuantity(item: Item, quantity: number): void {
    const cartItem = this.cartItems.find(cartItem => cartItem.item.id === item.id);
    if (cartItem && quantity > 0) {
      cartItem.quantity = quantity; 
    } else if (cartItem && quantity <= 0) {
      this.removeFromCart(item); 
    }
  }

  removeFromCart(item:Item):void{
    this.cartItems=this.cartItems.filter(cartItem=>cartItem.item.id!=item.id);
  }

  clearCart():void{
    this.cartItems=[];
  }
}
