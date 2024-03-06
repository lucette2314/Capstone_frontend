import { Injectable } from '@angular/core';
import { Idrink } from '../interfaces/idrink';
import { HttpClient } from '@angular/common/http';
import { Idrinkcategory } from '../interfaces/idrinkcategory';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private selectedDrinksSubject: BehaviorSubject<Idrink[]> = new BehaviorSubject<Idrink[]>([]);

  selectedDrinks$: Observable<Idrink[]> = this.selectedDrinksSubject.asObservable();
  constructor(private http: HttpClient) { }

  getDrinks(){
    return this.http.get<Idrink[]>('http://localhost:3000/drinks');
  }
  deleteDrinks(drink_id: number){
    return this.http.delete<any>(`http://localhost:3000/drinks/${drink_id}`);
  }
  createDrinks(formData: any){
    return this.http.post<Idrink>('http://localhost:3000/drinks', formData);
  }
  updateDrinks(drink_id:number, formData: any){
    return this.http.patch<Idrink>(`http://localhost:3000/drinks/${drink_id}`, formData);
  }
  getDrinkCategories() {
    return this.http.get<Idrinkcategory[]>('http://localhost:3000/drinkcategories');
  }
  getProfile(){
    return this.http.get<Idrink>('http://localhost:3000/foods/profile');
  }
  addToSelectedDrinks(drink: Idrink) {
    const selectedDrinks = this.selectedDrinksSubject.value;
    selectedDrinks.push(drink);
    this.selectedDrinksSubject.next(selectedDrinks);
  }
  clearSelectedDrinks() {
    this.selectedDrinksSubject.next([]);
  }
  getSelectedDrinks(): Idrink[] {
    return this.selectedDrinksSubject.value;
  }
}
