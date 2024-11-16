import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardCavaloComponent } from '../../components/card-cavalo/card-cavalo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CardCavaloComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
