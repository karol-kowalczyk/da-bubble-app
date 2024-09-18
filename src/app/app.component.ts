import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartViewComponent } from './start-view/start-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'da-bubble';
}
