import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [ CommonModule ],
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
    contents = ['Inhalt 1', 'Inhalt 2', 'Inhalt 3'];

    toggleMenu() {
        this.isMenuVisible = !this.isMenuVisible;
    }
}
