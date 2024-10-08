import { Component, Renderer2, ElementRef } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss'
})
export class ThreadComponent {

constructor(private renderer: Renderer2, private el: ElementRef) {}

closeThreadDialog() {
  const threadContainer = this.el.nativeElement.querySelector('#threadContainer');
  this.renderer.addClass(threadContainer, "d-none")
}

}
