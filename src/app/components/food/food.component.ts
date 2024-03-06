import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonIcon, IonButton, IonCardContent, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { FoodService } from 'src/app/services/food.service';
import { Ifood } from 'src/app/interfaces/ifood';
import { Ifoodcategory } from 'src/app/interfaces/ifoodcategory';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent, IonInput, IonIcon, IonButton, IonCardContent, IonCard, IonCardSubtitle, CommonModule, IonCardHeader, IonCardTitle], 
})
export class FoodComponent implements OnInit {
  addIcons = { heartOutline };
 
  public foods!: Ifood[];
  profile!: Ifood;
  profile_image!: File;
  public foodcategories = [
    { id: 1, name: 'Appetizers' },
    { id: 2, name: 'Salads' },
    { id: 3, name: 'Main Dishes' },
    { id: 4, name: 'Pasta' },
    { id: 5, name: 'Wings' },
    { id: 6, name: 'Steaks' },
    { id: 7, name: 'Desserts' },
    { id: 8, name: 'Burger' }
  ];

  constructor(private foodService: FoodService, private alertController: AlertController, private router: Router) { 
    this.getFood();
  }

  ngOnInit() {
    this.foodService.getFoods().subscribe((foods: any[]) => {
      this.foods = foods.map(food => ({ ...food, quantity: 1 }));
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Add Food',
      message: 'Your Food has been added successfully',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  getFood() {
    this.foodService.getFoods().subscribe((results) => {
      this.foods = results;
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.foodcategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  }

  onFileSelected(event: any) {
    this.profile_image = event.target.files[0];
  }

  register() {
    let formData = new FormData();

    if (this.profile_image) {
        formData.append('profile_image', this.profile_image);
    }

    this.foodService.getProfile().subscribe((result) => {
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
  addToCart(food: any) {
    this.foodService.addToSelectedFoods(food);
  }
  goToCheckout() {
    // Pass the selected foods to the checkout page (you might want to store this information in a service)
    this.router.navigate(['/checkout']);
  }

}
