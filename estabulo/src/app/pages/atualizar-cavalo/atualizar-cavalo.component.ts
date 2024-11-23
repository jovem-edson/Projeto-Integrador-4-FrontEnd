import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CavaloService } from '../../services/cavalo.service';
import { Cavalo } from '../../entities/cavalo';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-cavalo',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './atualizar-cavalo.component.html',
  styleUrls: ['./atualizar-cavalo.component.scss']
})
export class AtualizarCavaloComponent implements OnInit {
  cavalo: Cavalo = {
    nome: '',
    idade: 0,
    tipo: '',
    raca: '',
    pelagem: '',
    genero: '',
    preco: 0,
    disponivelParaCompra: false,
    imagem: undefined
  };
  cavaloId: number | null = null; // Para armazenar o ID do cavalo

  constructor(
    private router: Router,
    private cavaloService: CavaloService,
    private route: ActivatedRoute  // Para acessar o ID da URL
  ) {}

  ngOnInit(): void {
    // Captura o ID do cavalo da URL
    this.route.paramMap.subscribe(params => {
      this.cavaloId = Number(params.get('id'));
      if (this.cavaloId) {
        this.carregarCavalo(this.cavaloId);
      }
    });
  }

  

  carregarCavalo(id: number): void {
    this.cavaloService.acharPorId(id).subscribe({
      next: (cavalo) => {
        this.cavalo = cavalo;  // Preenche os campos com os dados do cavalo
      },
      error: (err) => {
        alert('Erro ao carregar o cavalo para edição: ' + err.message);
      }
    });
  }

  onSubmit(): void {
    this.atualizarCavalo();
  }

  atualizarCavalo(): void {
    const formData = this.criarFormData();
    this.cavaloService.atualizarCavalo(this.cavaloId!, formData).subscribe({
      next: () => {
        alert('Cavalo atualizado com sucesso!');
        console.log('Cavalo atualizado:');
        formData.forEach((value, key) => {
          console.log(key + ': ' + value);
        });
        this.router.navigate(['/cavalos']);  // Redireciona para a lista de cavalos
      },
      error: (err) => {
        alert('Erro ao atualizar o cavalo: ' + err.message);
      }
    });
  }

  criarFormData(): FormData {
    const formData = new FormData();
    formData.append('nome', this.cavalo.nome);
    formData.append('idade', this.cavalo.idade.toString());
    formData.append('tipo', this.cavalo.tipo);
    formData.append('raca', this.cavalo.raca);
    formData.append('pelagem', this.cavalo.pelagem);
    formData.append('genero', this.cavalo.genero);
    formData.append('preco', this.cavalo.preco.toString());
    formData.append('disponivelParaCompra', this.cavalo.disponivelParaCompra.toString());

    if (this.cavalo.imagem) {
      formData.append('imagem', this.cavalo.imagem, this.cavalo.imagem.name);
    }

    return formData;
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.cavalo.imagem = file;
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
  voltar(): void {
    this.router.navigate(['/home']);
  }


}
