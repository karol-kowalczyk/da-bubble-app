import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CentralComponent } from './central/central.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CentralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'da-bubble';
}
