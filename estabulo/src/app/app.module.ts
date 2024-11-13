import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//nossos componentes 
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

//páginas
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    

  ],
  imports: [
    MatIconModule,
    BrowserModule,
    RouterModule,
    HomeComponent
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
