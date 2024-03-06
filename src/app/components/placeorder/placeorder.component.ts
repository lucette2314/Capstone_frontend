import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { DrinkService } from 'src/app/services/drink.service';
import { PlaceorderService } from 'src/app/services/placeorder.service';
import { Ifood } from 'src/app/interfaces/ifood';
import { Idrink } from 'src/app/interfaces/idrink';
import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonTextarea, IonContent, IonList, IonThumbnail, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss'],
  standalone: true,
  imports: [HeaderComponent, CommonModule, IonButton, IonItem, IonLabel, IonSelect, IonTextarea, IonContent, IonInput, IonThumbnail, IonNote, IonList, FormsModule],
})
export class PlaceorderComponent implements OnInit {
  foods: Ifood[] = [];  // Update the type based on your data model
  drinks: Idrink[] = [];  // Update the type based on your data model
  comments: string = '';
  selectedItem: string = '';

  constructor(private foodsService: FoodService, private router: Router, private drinksService: DrinkService, private placeorderService: PlaceorderService) { }

  ngOnInit(): void {
    this.foods = this.foodsService.getSelectedFoods();
    this.drinks = this.drinksService.getSelectedDrinks();
  }

  decreaseQuantity(item: any) {
    // Implement logic to decrease quantity
  }

  increaseQuantity(item: any) {
    // Implement logic to increase quantity
  }

  deleteFood(item: any, isDrink: boolean = false) {
    // Implement logic to delete food or drink
  }

  getTotalPrice(): number {
    let totalPrice = 0;
  
    for (const food of this.foods) {
      totalPrice += food.price * food.quantity;
    }
  
    for (const drink of this.drinks) {
      totalPrice += drink.price * drink.quantity;
    }
  
    return totalPrice;
  }

  placeOrder() {

    const orderDetails = {
      foods: this.foods,
      drinks: this.drinks,
      comments: this.comments,
      selectedItem: this.selectedItem
    };

    this.placeorderService.placeOrder(orderDetails).subscribe(
      (response) => {
        // Handle the response, maybe redirect to an order confirmation page
        console.log('Order placed successfully:', response);
      },
      (error) => {
        // Handle error
        console.error('Failed to place order:', error);
      }
    );
  }
}