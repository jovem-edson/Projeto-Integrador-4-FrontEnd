import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//nossos componentes 
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

//páginas
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent

  ],
  imports: [
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
