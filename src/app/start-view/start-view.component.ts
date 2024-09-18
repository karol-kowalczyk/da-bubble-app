import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-start-view',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './start-view.component.html',
  styleUrl: './start-view.component.scss'
})
export class StartViewComponent {

}
