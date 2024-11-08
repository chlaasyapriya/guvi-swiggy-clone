import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path: 'item/:id', component:ItemComponent},
    {path: 'cart', component:CartComponent},
    {path: 'favorite', component:FavoriteComponent}
];
