import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
  public userName: string = 'João Silva';
  public isLoggedIn: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  logout(): void {
    this.isLoggedIn = false;
    this.userName = '';
  }
}
