import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {
  isAdmin: boolean = false; // Estado inicial: deslogado

  constructor(private router: Router) {}

  toggleLogin(): void {
    if (this.isAdmin) {
      this.logout(); // Ação para deslogar
    } else {
      this.login(); // Ação para logar
    }
  }

  login(): void {
    console.log("Redirecionando para a página de login...");
    this.router.navigate(['/']);
    this.isAdmin = true; // Simula o login para fins de demonstração
  }

  logout(): void {
    console.log("Usuário deslogado.");
    this.isAdmin = false; // Simula o logout
    this.router.navigate(['/']); // Redireciona para a página inicial
  }
}
