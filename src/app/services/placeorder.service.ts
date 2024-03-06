import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {
  private apiUrl = 'http://localhost:3000'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  placeOrder(orderDetails: any): Observable<any> {
    const url = `${this.apiUrl}/placeorder`; // Replace with your actual endpoint

    // Assuming you're sending a POST request with order details
    return this.http.post(url, orderDetails);
  }
}