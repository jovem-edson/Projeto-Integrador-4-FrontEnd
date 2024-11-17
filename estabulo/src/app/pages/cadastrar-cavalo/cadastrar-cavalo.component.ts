import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CavaloService } from '../../services/cavalo.service';
import { Cavalo } from '../../entities/cavalo';

@Component({
  selector: 'app-cadastrar-cavalo',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './cadastrar-cavalo.component.html',
  styleUrl: './cadastrar-cavalo.component.scss'
})
export class CadastrarCavaloComponent implements OnInit {
cavaloForm!: FormGroup;
selectedImage!: File | null;

constructor(private fb: FormBuilder, private cavaloService: CavaloService) {}

  ngOnInit(): void {
    this.cavaloForm = this.fb.group({
      nome: ['', Validators.required],
      idade: [null, Validators.required],
      tipo: ['', Validators.required],
      raca: ['', Validators.required],
      pelagem: [''],
      genero: ['', Validators.required],
      preco: [null],
      disponivelParaCompra: [false],
      imagem: [null]
    });
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];
      this.cavaloForm.patchValue({ imagem: this.selectedImage });
    }
  }

  onSubmit(): void {
    if (this.cavaloForm.valid) {
      const formValue = this.cavaloForm.value;

      // Process image to convert it to URL
      if (this.selectedImage) {
        const reader = new FileReader();
        reader.onload = () => {
          const cavalo: Cavalo = {
            ...formValue,
            imagem: reader.result as string // Base64 URL of the image
          };

          this.cadastrarCavalo(cavalo);
        };
        reader.readAsDataURL(this.selectedImage);
      } else {
        // No image case
        const cavalo: Cavalo = { ...formValue, imagem: '' };
        this.cadastrarCavalo(cavalo);
      }
    }
  }

  private cadastrarCavalo(cavalo: Cavalo): void {
    this.cavaloService.inserirCavalo(cavalo).subscribe({
      next: () => {
        alert('Cavalo cadastrado com sucesso!');
        this.cavaloForm.reset();
      },
      error: (err) => {
        alert('Erro ao cadastrar cavalo: ' + err.message);
      }
    });
  }
}