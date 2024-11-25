import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['']);
  }

  email: string = '';
  cpf: string = '';
  senha: string = '';
  mensagemErro: string = '';

  // Função para validar o CPF
  validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    // Validação do segundo dígito
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  }

  // Método para ser chamado ao enviar o formulário
  cadastrar(): void {
    if (!this.validarCPF(this.cpf)) {
      this.mensagemErro = 'CPF inválido. Por favor, insira um CPF válido.';
      return;
    }

    // Se o CPF for válido, prossiga com o cadastro
    console.log('Cadastro realizado com sucesso!');
    console.log(`Email: ${this.email}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Senha: ${this.senha}`);
  }
  
  

}
