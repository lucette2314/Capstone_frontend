import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButton, IonTextarea, IonSelectOption, IonSelect, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ireviews } from 'src/app/interfaces/ireviews';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, FormsModule, ReactiveFormsModule, IonItem, HeaderComponent, IonContent, IonButton, IonTextarea, IonSelectOption, IonInput, IonSelect], 
})
export class ReviewsComponent {
  reviewForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewsService,
    private route: ActivatedRoute,
    private router: Router) {

    //Create form group and controls
    this.reviewForm = formBuilder.group({
      first_name: ["", [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      comments: ['', [Validators.required]],
    });
  }
  onSubmit() {
    const formData = this.reviewForm.value;
    this.reviewService.createReview(formData).subscribe(
      (result) => {
        console.log(result);
        alert('Review was submitted successfully');
        this.reviewForm.reset(); // Clear web form data
      },
      (error) => {
        console.error(error);
        alert('Error submitting review. Please try again.');
      }
    );
  }
}