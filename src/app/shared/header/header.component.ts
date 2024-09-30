import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  closeDialog() {
    let container = document.getElementById('openDialogHeader');
    let dialog = document.getElementById('openDialogProfile');
    let edit = document.getElementById('openDialogEdit');

    if (dialog) {
      dialog.classList.add('displayNone'),
        dialog.classList.remove('displayFlex');
      dialog.classList.remove('displayUnset');
    }

    if (edit) {
      edit.classList.add('displayNone'), edit.classList.remove('displayFlex');
      edit.classList.remove('displayUnset');
    }

    if (container) {
      container.classList.add('displayNone'),
        container.classList.remove('displayUnset');
    }
  }

  openDialog(event: Event) {
    let container = document.getElementById('openDialogHeader');
    let dialog = document.getElementById('openDialogProfile');
    let edit = document.getElementById('openDialogEdit');
    if (container) {
      if (container.classList.contains('displayUnset')) {
        container.classList.remove('displayUnset');
        container.classList.add('displayNone');
      } else {
        container.classList.remove('displayNone');
        container.classList.add('displayUnset');
      }
    }

    if (dialog) {
      dialog.classList.add('displayNone'),
        dialog.classList.remove('displayFlex');
    }

    if (edit) {
      edit.classList.add('displayNone'), edit.classList.remove('displayFlex');
    }
  }

  openDialogProfile() {
    let dialog = document.getElementById('openDialogProfile');

    if (dialog) {
      dialog.classList.remove('displayNone');
      dialog.classList.add('displayUnset');
    }
  }

  openDialogEdit() {
    let dialog = document.getElementById('openDialogEdit');

    if (dialog) {
      dialog.classList.remove('displayNone');
      dialog.classList.add('displayUnset');
    }
  }

  closeDialogEdit() {
    let dialog = document.getElementById('openDialogEdit');

    if (dialog) {
      dialog.classList.add('displayNone');
      dialog.classList.remove('displayUnset');
    }
  }
}
