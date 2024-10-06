import { Component, inject, NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-info-channel-dialog',
  standalone: true,
  imports: [ MatDialogModule, /* CommonModule, FormsModule, */ ],
  templateUrl: './info-channel-dialog.component.html',
  styleUrl: './info-channel-dialog.component.scss'
})
export class InfoChannelDialogComponent {
  constructor(public dialogRef: MatDialogRef<InfoChannelDialogComponent>) {
    
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
