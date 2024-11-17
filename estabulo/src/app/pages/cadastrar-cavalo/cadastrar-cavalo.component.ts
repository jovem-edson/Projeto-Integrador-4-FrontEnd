import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CavaloService } from '../../services/cavalo.service';
import { Cavalo } from '../../entities/cavalo';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cadastrar-cavalo',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './cadastrar-cavalo.component.html',
  styleUrl: './cadastrar-cavalo.component.scss'
})
export class CadastrarCavaloComponent implements OnInit {
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

  constructor(private router: Router, private cavaloService: CavaloService) {}

  ngOnInit(): void {}

  voltar(): void {
    this.router.navigate(['']);
  }

  onSubmit(): void {
    this.cadastrarCavalo();
  }

  cadastrarCavalo(): void {
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
  
    this.cavaloService.inserirCavalo(formData).subscribe({
      next: () => {
        alert('Cavalo cadastrado com sucesso!');
        console.log('Cavalo:');
        formData.forEach((value, key) => {
          console.log(key + ': ' + value);
        });
      },
      error: (err) => {
        alert('Erro ao cadastrar cavalo: ' + err.message);
      }
    });
  }
  

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.cavalo.imagem = file;
    }
  }
}
