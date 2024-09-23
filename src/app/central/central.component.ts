import { Component } from '@angular/core';
import { WorkspaceComponent } from './workspace/workspace.component';

@Component({
  selector: 'app-central',
  standalone: true,
  imports: [ WorkspaceComponent, ],
  templateUrl: './central.component.html',
  styleUrl: './central.component.scss'
})
export class CentralComponent {

}
