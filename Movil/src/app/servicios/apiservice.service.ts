import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  apiURL = 'https://jsonplaceholder.typicode.com/todos/1'
  constructor( private http:HttpClient) { }

  obtenerDatos (id: number){
    return this.http.get(`${this.apiURL}`);
  }
}
