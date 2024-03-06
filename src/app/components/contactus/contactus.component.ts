import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButton, IonTextarea, IonHeader, IonToolbar, IonTitle, IonInput, IonList, IonCard, IonCardContent} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactusService } from 'src/app/services/contactus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule, IonLabel, IonItem, HeaderComponent, IonContent, IonButton, IonTextarea, IonHeader, IonToolbar, IonTitle, IonInput, CommonModule, IonList, IonCardContent, 
            IonCard], 
})

export class ContactusComponent {
  messageForm!: FormGroup;

  constructor(
    private contactusService: ContactusService,
    private formBuilder: FormBuilder,
    private router: Router) 
    {

    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  sendMessage() {
    if (this.messageForm.valid) {
      const formData = this.messageForm.value;
      this.contactusService.createMessage(formData).subscribe(
        (result) => {
          console.log(result);
          alert('Message was submitted successfully');
          this.resetForm();
        },
        (error) => {
          console.error(error);
          alert('Error submitting message. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }

  resetForm() {
    this.messageForm.reset();
  }
}

