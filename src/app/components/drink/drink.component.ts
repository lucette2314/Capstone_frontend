import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButton, IonCard, IonCardContent, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { Idrink } from 'src/app/interfaces/idrink';
import { DrinkService } from 'src/app/services/drink.service';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, IonContent, HeaderComponent, IonButton, IonCard, IonCardSubtitle, IonCardContent, IonIcon, CommonModule, IonCardHeader, IonCardTitle]
})
export class DrinkComponent  implements OnInit {
  addIcons = { heartOutline };

  drink: any;
  public drinks!: Idrink[];
  profile!: Idrink;
  profile_image!: File;
  public drinkcategories = [
    { id: 1, name: 'Non-Alcoholic Beverages' },
    { id: 2, name: 'Alcoholic Beverages' },
    { id: 3, name: 'Cocktails' },
    { id: 4, name: 'Smoothies and Shakes' },
  ];

  public cartQuantity: number = 0;
  
  constructor(private drinkService: DrinkService, private alertController: AlertController, private router: Router) { 
    this.getDrink();
  }

  ngOnInit() {

    this.drinkService.getDrinks().subscribe((drinks: any[]) => {
      this.drinks = drinks.map(drink => ({ ...drink, quantity: 1 }));
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Add Food',
      message: 'Your Food has being added successfully',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  getDrink() {
    this.drinkService.getDrinks().subscribe((results) => {
      this.drinks = results;
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.drinkcategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  }  onFileSelected(event: any) {
    this.profile_image = event.target.files[0];
  }
  register() {
    let formData = new FormData();

    if (this.profile_image) {
        formData.append('profile_image', this.profile_image);
    }

    this.drinkService.getProfile().subscribe((result) => {
        this.profile = result;
    });
  }
    increaseQuantity(food: any) {
      food.quantity += 1;
    }
  
    decreaseQuantity(food: any) {
      if (food.quantity > 1) {
        food.quantity -= 1;
      }
}
addToCart(drink: any) {
  this.drinkService.addToSelectedDrinks(drink);
}
goToCheckout() {
  // Pass the selected foods to the checkout page (you might want to store this information in a service)
  this.router.navigate(['/checkout']);
}
}
