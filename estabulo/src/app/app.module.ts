import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//nossos componentes 
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CardCavaloComponent } from './components/card-cavalo/card-cavalo.component';
import { RodapeComponent } from './components/rodape/rodape.component';

//páginas
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CabecalhoComponent,
    HomeComponent,
    CardCavaloComponent,
    RodapeComponent,

    MatIconModule,
    BrowserModule,
    RouterModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
