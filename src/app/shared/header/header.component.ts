import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openDialogToggle(event: Event) {
    let container = document.getElementById('openDialogHeader');
  
    if (container) {
      if (container.classList.contains('displayUnset')) {
        container.classList.remove('displayUnset');
        container.classList.add('displayNone');
      } else {
        container.classList.remove('displayNone');
        container.classList.add('displayUnset');
      }
    }
  }

  testdd() {
    console.log('Hat geklappt');
    }
}