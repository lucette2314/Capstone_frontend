import { Injectable } from '@angular/core';
import { Ioffers } from '../interfaces/ioffers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(){
    return this.http.get<Ioffers[]>('http://localhost:3000/promotions');
  }
}