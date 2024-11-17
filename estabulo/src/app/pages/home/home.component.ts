import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardCavaloComponent } from '../../components/card-cavalo/card-cavalo.component';
import { CavaloService } from '../../services/cavalo.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,MatIconModule, CardCavaloComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  listaCavalos: any[] = [];
constructor(private router: Router, private cavaloService: CavaloService) {}

verDetalhes(cavaloId: number): void {
  this.router.navigate([`/cavalo/${cavaloId}`]);
}

adicionarCavalo(): void {
  this.router.navigate(['/cavalo/cadastrar']);
}

ngOnInit(): void {
  this.cavaloService.listarCavalo().subscribe(
    (data) => {
      this.listaCavalos = data; 
      console.log(this.listaCavalos);
    },
    (error) => {
      console.error('Erro ao buscar cavalos', error);
    }
  );
}

}
