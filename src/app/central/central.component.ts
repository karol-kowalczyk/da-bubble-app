import { Component } from '@angular/core';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ChannelComponent } from './channel/channel.component';
import { ThreadComponent } from './thread/thread.component';
import { HeaderComponent } from '../shared/header/header.component';


@Component({
  selector: 'app-central',
  standalone: true,
  imports: [ WorkspaceComponent, ChannelComponent, ThreadComponent, HeaderComponent],
  templateUrl: './central.component.html',
  styleUrl: './central.component.scss'
})
export class CentralComponent {

}
