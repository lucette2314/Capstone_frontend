import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButtons, IonCard, IonCardContent, IonIcon, IonCardHeader, IonCardTitle, IonList, IonButton, IonAlert } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { Ioffers } from 'src/app/interfaces/ioffers';
import { OffersService } from 'src/app/services/offers.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { calendar, cash } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent, IonButtons, IonCard, IonCardContent, IonIcon, CommonModule, IonCardHeader, IonCardTitle, IonList, IonButton, IonAlert], 
})
export class OffersComponent implements OnInit {

  public offers!: Ioffers[];

  constructor(private offersService: OffersService, private alertController: AlertController) {
    addIcons({ calendar, cash });
  }

  ngOnInit() {
    this.getOffer();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congrats',
      message: 'Your Promotion has being added successfully',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  getOffer() {
    this.offersService.getOffers().subscribe((results) => {
      this.offers = results;
    });
  }
  
}