import { Injectable } from '@angular/core';
import { environment } from '../environments/envinronment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cavalo } from '../entities/cavalo';
import { MatSnackBar } from '@angular/material/snack-bar';




@Injectable({
  providedIn: 'root'
})
export class CavaloService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }


  message(msg: String): void {
    this.snack.open(`${msg}`, `OK`, {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 5000
    })
  }

  listarCavalo() : Observable<Cavalo[]>{
    return this.http.get<Cavalo[]>(`${this.baseUrl}`);
  }

  acharPorId(id: Number): Observable<Cavalo>{
    return this.http.get<Cavalo>(`${this.baseUrl}/${id}`);
  }

  inserirCavalo(cavalo: FormData): Observable<any> {
    return this.http.post(this.baseUrl, cavalo);
  }

  atualizarCavalo(id: Number, cavalo: FormData): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, cavalo);
  }

  apagarCavalo(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  listarDisponiveis(): Observable<Cavalo[]> {
    return this.http.get<Cavalo[]>(`${this.baseUrl}/disponiveis`);
  }

  listarIndisponiveis(): Observable<Cavalo[]> {
    return this.http.get<Cavalo[]>(`${this.baseUrl}/indisponiveis`);
  }


}
