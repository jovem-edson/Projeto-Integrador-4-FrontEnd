import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';

//nossos componentes 
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CardCavaloComponent } from './components/card-cavalo/card-cavalo.component';
import { RodapeComponent } from './components/rodape/rodape.component';

//páginas
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

//icones
import {MatIconModule} from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CabecalhoComponent,
    HomeComponent,
    CardCavaloComponent,
    RodapeComponent,
    LoginComponent,

    MatIconModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
