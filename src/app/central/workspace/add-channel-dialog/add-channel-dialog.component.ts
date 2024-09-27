import { Component, inject, NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-add-channel-dialog',
  standalone: true,
  imports: [ MatDialogModule, /* CommonModule, FormsModule, */ ],
  templateUrl: './add-channel-dialog.component.html',
  styleUrl: './add-channel-dialog.component.scss'
})
export class AddChannelDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddChannelDialogComponent>) {}
  
  closeDialog() {
    this.dialogRef.close();
  }
}
