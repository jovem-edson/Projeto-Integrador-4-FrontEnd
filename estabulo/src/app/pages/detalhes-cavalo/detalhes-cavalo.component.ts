import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { CavaloService } from '../../services/cavalo.service';  // Serviço para buscar cavalo
import { Cavalo } from '../../entities/cavalo';  // Modelo do Cavalo
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-cavalo',
  standalone: true,
  imports: [MatIconModule],  // Importando o módulo de ícones
  templateUrl: './detalhes-cavalo.component.html',
  styleUrl: './detalhes-cavalo.component.scss'
})
export class DetalhesCavaloComponent implements OnInit {
  cavalo: Cavalo | undefined;  // Definir o objeto cavalo que será preenchido com os dados

  constructor(
    private route: ActivatedRoute,  // Para acessar os parâmetros da URL
    private cavaloService: CavaloService,
    private router: Router  // Serviço que busca os dados do cavalo
  ) {}

  ngOnInit(): void {
    // Captura o ID da URL
    const cavaloId = Number(this.route.snapshot.paramMap.get('id'));

    // Chama o serviço para buscar os dados do cavalo
    this.cavaloService.acharPorId(cavaloId).subscribe({
      next: (cavalo: Cavalo) => {
        this.cavalo = cavalo;  // Atribui o cavalo retornado ao objeto cavalo
      },
      error: (err) => {
        console.error('Erro ao carregar dados do cavalo:', err);
        // Aqui você pode tratar erros, como exibir uma mensagem para o usuário
      }
    });
  }

  voltar(): void {
  this.router.navigate(['/']);
}
}