import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token, User } from '../interfaces/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://invoicebackend-rb6r.onrender.com/api/v1/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {

  }

  registerUser(userDetails: User) {
    // Aquí iría la lógica para registrar al usuario, por ejemplo, una llamada HTTP a un backend
  }

  getUserByDni(dni: string, json : any): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}login`,json);

    
  }
}
