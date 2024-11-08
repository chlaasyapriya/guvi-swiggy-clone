import { Component } from '@angular/core';
import { Item } from '../services/item.service';
import { CartService } from '../services/cart.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

interface CartItem {
  item: Item;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor,NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems : CartItem[]=[];
  totalPrice : number;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }  

  increaseQuantity(item: Item): void {
    this.cartService.updateQuantity(item, this.getQuantity(item) + 1);
    this.updateCart();
  }

  decreaseQuantity(item: Item): void {
    const newQuantity = this.getQuantity(item) - 1;
    this.cartService.updateQuantity(item, newQuantity);
    this.updateCart();
  }

  getQuantity(item: Item): number {
    const cartItem = this.cartItems.find(cartItem => cartItem.item.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  }

  updateCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeFromCart(item: Item): void {
    this.cartService.removeFromCart(item);
    this.updateCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.updateCart();
  }

  checkOut(): void {
    if(this.cartItems.length!=1)
    {
      alert("You cannot place orders from two different restaurants");
    }
    else{
      alert("Checked Out!");
      this.clearCart();
      this.router.navigate(['']); 
    }
  }
}
