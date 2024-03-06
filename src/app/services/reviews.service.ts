import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ireviews } from '../interfaces/ireviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }
  
  createReview(formData: any){
    return this.http.post<Ireviews>('http://localhost:3000/reviews', formData);
  }
}
