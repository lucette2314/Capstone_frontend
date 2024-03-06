import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ifood } from '../interfaces/ifood';
import { Ifoodcategory } from '../interfaces/ifoodcategory';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  private selectedFoodsSubject: BehaviorSubject<Ifood[]> = new BehaviorSubject<Ifood[]>([]);

  selectedFoods$: Observable<Ifood[]> = this.selectedFoodsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getFoods(){
    return this.http.get<Ifood[]>('http://localhost:3000/foods');
  }
  deleteFood(food_id: number){
    return this.http.delete<any>(`http://localhost:3000/foods/${food_id}`);
  }
  createFood(formData: any){
    return this.http.post<Ifood>('http://localhost:3000/foods', formData);
  }
  updateFood(food_id:number, formData: any){
    return this.http.patch<Ifood>(`http://localhost:3000/foods/${food_id}`, formData);
  }
  getFoodCategories() {
    return this.http.get<Ifoodcategory[]>('http://localhost:3000/foodcategories');
  }
  getProfile(){
    return this.http.get<Ifood>('http://localhost:3000/foods/profile');
  }
  addToSelectedFoods(food: Ifood) {
    const selectedFoods = this.selectedFoodsSubject.value;
    selectedFoods.push(food);
    this.selectedFoodsSubject.next(selectedFoods);
  }
  clearSelectedFoods() {
    this.selectedFoodsSubject.next([]);
  }
  getSelectedFoods(): Ifood[] {
    return this.selectedFoodsSubject.value;
  }
}