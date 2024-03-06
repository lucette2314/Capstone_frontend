import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icontactus } from '../interfaces/icontactus';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {


  constructor(private http: HttpClient) { }
  
  createMessage(formData: any){
    return this.http.post<Icontactus>('http://localhost:3000/contactus', formData);
  }
}
