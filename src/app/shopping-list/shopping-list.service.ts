import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

export class ShoppingListService {
  startedEditing = new EventEmitter<number>();
  ingredientChanged = new EventEmitter<Ingredients[]>();
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients;
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
