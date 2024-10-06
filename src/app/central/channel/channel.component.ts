import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { InfoChannelDialogComponent } from './info-channel-dialog/info-channel-dialog.component';
import { AddUserChannelDialogComponent } from './add-user-channel-dialog/add-user-channel-dialog.component';
import { UsersChannelDialogComponent } from './users-channel-dialog/users-channel-dialog.component';

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss'
})
export class ChannelComponent {
  public dialog = inject(MatDialog);

  openChannelDialog() {
    this.dialog.open(InfoChannelDialogComponent);
  }

  openAddUserDialog() {
    this.dialog.open(AddUserChannelDialogComponent);
  }

  openUsersDialog() {
    this.dialog.open(UsersChannelDialogComponent);
  }
}
