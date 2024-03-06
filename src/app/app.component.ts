import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { callOutline, callSharp, starOutline, starSharp, pricetagOutline, pricetagSharp, fastFoodOutline, fastFoodSharp, beerSharp, beerOutline, peopleCircleSharp,
         peopleCircleOutline, } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, 
             IonLabel, IonRouterOutlet],
})
export class AppComponent {
  
  // public pageTitle: string = "Restaurant";

  public appPages = [
    { title: 'About Us', url: '/aboutus', icon: 'people-circle' },
    { title: 'Food', url: '/food', icon: 'fast-food' },
    { title: 'Drinks', url: '/drink', icon: 'beer' },
    { title: 'Offers "Just for U"', url: '/offers', icon: 'pricetag' },
    { title: 'Tell us How we did!!', url: '/reviews', icon: 'star' },
    { title: 'Contact us', url: '/contactus', icon: 'call' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    
    addIcons({ callOutline, callSharp, starOutline, starSharp, pricetagOutline, pricetagSharp, fastFoodOutline, fastFoodSharp, beerSharp, beerOutline, peopleCircleSharp,
               peopleCircleOutline, });
  }
}
