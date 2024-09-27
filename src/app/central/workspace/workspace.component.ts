import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject,} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { trigger, state, style, transition, animate } from '@angular/animations';

import { AddChannelDialogComponent } from './add-channel-dialog/add-channel-dialog.component';


@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, AddChannelDialogComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 1 })),
      state('out', style({ height: '0px', opacity: 0 })),
      transition('in <=> out', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class WorkspaceComponent {
  isMenuVisible = false;
  isDmMenuVisible = false;
  isWorkspaceVisible = true;
  contents = ['Inhalt 1', 'Inhalt 2', 'Inhalt 3'];
  public dialog = inject(MatDialog);

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleDmMenu() {
    this.isDmMenuVisible = !this.isDmMenuVisible;
  }

  toggleWorkspace() {
    this.isWorkspaceVisible = !this.isWorkspaceVisible
  }

  openDialog() {
    this.dialog.open(AddChannelDialogComponent);
  }
}
