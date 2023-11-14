import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private shoppingListServer: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingListServer.getIngredients();
  }
  onEditItem(index: number) {
    this.shoppingListServer.startedEditing.emit(index);
  }
}
