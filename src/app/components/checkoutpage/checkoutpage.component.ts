import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Router, NavigationEnd } from '@angular/router';
import { addIcons } from 'ionicons';
import { trash, create } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { IonButton, IonIcon, IonThumbnail, IonLabel, IonItem, IonList, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonThumbnail, IonLabel, IonItem, IonList, IonContent, HeaderComponent, CommonModule]
})
export class CheckoutpageComponent implements OnInit {

  public foods: any[] = [];
  public drinks: any[] = [];
  
  constructor(private foodService: FoodService, private router: Router, private alertController: AlertController, private drinkService: DrinkService) {
    addIcons({ trash, create });


    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {

      this.refreshSelectedFoods();
    });
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {

      this.refreshSelectedDrinks();
    });
  }

  ngOnInit() {
    // console.log('Fetching selected foods...');
    // this.foods = this.foodService.getSelectedFoods() || [];
    // console.log('Selected foods:', this.foods);
  }

  async deleteFood(item: any, isDrink: boolean = false) {
    const itemType = isDrink ? 'drink' : 'food';
  
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete ${item.name}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            if (isDrink) {
              // Create a new array without the deleted drink
              this.drinks = this.drinks.filter(drink => drink !== item);
            } else {
              // Create a new array without the deleted food
              this.foods = this.foods.filter(food => food !== item);
            }
  
            console.log(`Deleted ${itemType}:`, item);
          },
        },
      ],
    });
  
    await alert.present();
  }

  increaseQuantity(food: any) {
    food.quantity++;
  }

  decreaseQuantity(food: any) {
    if (food.quantity > 1) {
      food.quantity--;
    }
  }

  private refreshSelectedFoods() {
    this.foods = this.foodService.getSelectedFoods() || [];
    console.log('Selected foods:', this.foods);
  }
  private refreshSelectedDrinks() {
    this.drinks = this.drinkService.getSelectedDrinks() || [];
    console.log('Selected drinks:', this.drinks);
  }

  placeOrder() {
    this.router.navigate(['/placeorder']);
  }
}
