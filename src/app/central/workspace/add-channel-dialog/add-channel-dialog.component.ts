import { Component, inject, NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-channel-dialog',
  standalone: true,
  imports: [ CommonModule,FormsModule,],
  templateUrl: './add-channel-dialog.component.html',
  styleUrl: './add-channel-dialog.component.scss'
})
export class AddChannelDialogComponent {
  
}
