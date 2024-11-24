// src/app/services/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/login';
import { environment } from '../environments/envinronment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl2 = environment.baseUrl2;

    constructor(private http: HttpClient) {}

    login(usuario: Usuario): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        // Log the request details (for debugging)
        console.log('Request URL:', `${this.baseUrl2}/login`);
        console.log('Request payload:', usuario);

        return this.http.post<any>(
            `${this.baseUrl2}/login`, 
            usuario,
            { headers: headers }
        );
    }
}