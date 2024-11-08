import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  name: string;
  rname: string,
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: string[];
}

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor() { }

  private items: Item[] = [
    { id: 1, name: 'Pizza', rname: 'Pizza Palace', description: 'Delicious Italian pizza', image: 'pizza.png', price: 500, rating: 4.5, reviews: ['Amazing!', 'Delicious!'] },
    { id: 2, name: 'Burger', rname: 'Burger Town', description: 'Best burgers in town', image: 'burger.png', price: 250, rating: 4.2, reviews: ['Very tasty', 'Would recommend!'] },
    { id: 3, name: 'Pasta', rname: 'Pasta World', description: 'Creamy pasta with a rich sauce', image: 'pasta.png', price: 350, rating: 4.7, reviews: ['So creamy', 'Perfectly cooked!'] },
    { id: 4, name: 'Sushi', rname: 'Sushi House', description: 'Fresh sushi rolls with authentic taste', image: 'sushi.png', price: 600, rating: 4.8, reviews: ['Fresh and tasty', 'Best sushi ever!'] },
    { id: 5, name: 'Fried Chicken', rname: 'Fried Chicken Express', description: 'Crispy fried chicken with special spices', image: 'fried_chicken.png', price: 300, rating: 4.3, reviews: ['Crispy and tender', 'Satisfying meal!'] },
    { id: 6, name: 'Tacos', rname: 'Taco Mania', description: 'Authentic Mexican tacos with fresh fillings', image: 'tacos.png', price: 150, rating: 4.6, reviews: ['So flavorful', 'Must try!'] },
    { id: 7, name: 'Salad', rname: 'Healthy Eats', description: 'Fresh garden salad with a variety of veggies', image: 'salad.png', price: 200, rating: 4.0, reviews: ['Light and healthy', 'Refreshing!'] },
    { id: 8, name: 'Steak', rname: 'Steakhouse Grill', description: 'Juicy, tender steak cooked to perfection', image: 'steak.png', price: 700, rating: 4.9, reviews: ['Melt in your mouth', 'Perfectly cooked!'] },
    { id: 9, name: 'Ice Cream', rname: 'Sweet Treats', description: 'Delicious creamy ice cream with various flavors', image: 'icecream.png', price: 120, rating: 4.4, reviews: ['So creamy', 'Great variety of flavors!'] },
    { id: 10, name: 'Sandwich', rname: 'Sandwich Haven', description: 'Fresh sandwich with a choice of fillings', image: 'sandwich.png', price: 180, rating: 4.1, reviews: ['Quick and tasty', 'Perfect for lunch!'] }
  ];

  getItems(): Item[] {
    return this.items; 
  }
  getItemById(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }
}
