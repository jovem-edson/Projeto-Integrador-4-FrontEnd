import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  constructor(private router: Router) {}


  entrar(): void {
    console.log("Redirecionando para a página de login...");
    this.router.navigate(['/cavalo/entrar']);
  }
}