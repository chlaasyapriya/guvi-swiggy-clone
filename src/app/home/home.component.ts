import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemService,Item } from '../services/item.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories = [
    { name: 'Food Delivery', offer: 'UPTO 60% OFF', image: 'food.png' },
    { name: 'Instamart', offer: 'UPTO 60% OFF', image: 'grocery.png' },
    { name: 'Dineout', offer: 'UPTO 50% OFF', image: 'dineout.png' },
    { name: 'Genie', offer: 'PICK-UP & DROP', image: 'genie.png' }
  ];

  items: Item[] = [];
  constructor(private itemService: ItemService) {}
  ngOnInit(): void {
    this.items = this.itemService.getItems(); // Fetch items from the service
  }

  groceries = [
    { name: 'Cauliflower', image: 'grocery-cauliflower.png' },
    { name: 'Fruits', image: 'grocery-fruits.png' },
    { name: 'Spices', image: 'grocery-spices.png' },
    { name: 'Flour', image: 'grocery-flour.png' },
    { name: 'Lentils', image: 'grocery-lentils.png' },
    { name: 'Oats', image: 'grocery-oats.png' },
    { name: 'Chickpeas', image: 'grocery-chickpeas.png' },
    { name: 'Rice', image: 'grocery-rice.png' },
    { name: 'Sugar', image: 'grocery-sugar.png' }
  ];

  restaurants = [
    { name: 'The Embassy', cuisine: 'European', location: 'Connaught Place', rating: '4.0', image: 'restaurant1.png' },
    { name: 'Ca La Vie Kitchen & Bar', cuisine: 'Asian - Continental', location: 'Connaught Place', rating: '4.5', image: 'restaurant2.png' },
    { name: 'My Bar Square', cuisine: 'Finger Food', location: 'Connaught Place', rating: '4.2', image: 'restaurant3.png' },
    { name: 'DR Zombie', cuisine: 'Fusion - Street Food', location: 'Connaught Place', rating: '4.4', image: 'restaurant4.png' },
    { name: 'Taco King', cuisine: 'Mexican - Fast Food', location: 'Downtown', rating: '4.6', image: 'restaurant5.png' }
  ];
}
