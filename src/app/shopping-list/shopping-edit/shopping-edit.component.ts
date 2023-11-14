import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredients } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredients;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;
  @ViewChild('f') slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;

      this.editedItem = this.shoppingListService.getIngredient(index);
      console.log(this.editedItem);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    this.ingredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        this.ingredient
      );
    } else {
      this.shoppingListService.addIngredient(this.ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClearForm() {
    this.editMode = false;
    this.slForm.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearForm();
  }
}
