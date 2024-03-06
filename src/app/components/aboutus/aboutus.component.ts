import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonContent,IonAccordion, IonAccordionGroup, IonItem, IonHeader, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonContent, IonAccordion, IonAccordionGroup, IonItem, HeaderComponent, CommonModule, IonHeader, IonCard, IonCardHeader, 
            IonCardTitle, IonCardContent]
})
export class AboutusComponent  implements OnInit {
  title: string = "Garden of Eat'n"
  constructor() { }

  ngOnInit() {}

}
