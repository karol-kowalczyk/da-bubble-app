import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';

/**
 * Component responsible for displaying and animating the logo.
 * Includes animations for fading, sliding, growing, and resizing the logo and text.
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
    // Animation trigger for fading in the icon
    trigger('fade', [
      state('void', style({ opacity: 0 })), // Initial state with opacity 0
      transition('void => *', [
        animate(2000) // Animate to visible state over 2 seconds
      ])
    ]),

    // Animation trigger for sliding in the text
    trigger('slideIn', [
      state('void', style({ marginLeft: '{{marginLeft}}' }), { params: { marginLeft: '-470px' } }),
      transition('void => *', [
        animate(400, style({ marginLeft: '0' })) // Animate margin to 0 over 400ms
      ])
    ]),

    // Animation trigger for growing the logo
    trigger('grow', [
      state('void', style({ width: '0px' })), // Initial state with width 0
      state('*', style({ width: '{{textLogoWidth}}' }), { params: { textLogoWidth: '470px' } }), // Final state with dynamic width
      transition('void => *', [animate(400)]) // Animate to final width over 400ms
    ]),

    // Animation trigger for resizing and moving the logo
    trigger('resizeAndMove', [
      state('start', style({ top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1)' })), // Initial centered state
      state('end', style({
        top: '32px', left: '32px', // Position in the top-left corner
        transform: 'scale({{scaleFactor}})', // Scale according to scale factor
        transformOrigin: 'top left' // Set the transformation origin
      }), { params: { scaleFactor: '.3' } }),
      transition('* => end', animate('1s ease-in-out')) // Smooth transition to end state over 1 second
    ])
  ]
})
export class LogoComponent {

  // URLs for logo images
  logoTextUrl: string = 'assets/img/logo-text-white.png';
  fullLogoBlackUrl: string = 'assets/img/dabubble_header_logo.png';

  // Animation states and dynamic properties
  startGrowing = false; // Indicates whether the growth animation has started
  containerState = 'start'; // Tracks the current state of the logo container
  textVisible = false; // Controls visibility of the logo text
  defaultBackground = false; // Indicates whether the default background is active
  textLogoWidth: string = '470px'; // Default width for text logo
  iconLogoWidth: string = '187px'; // Default width for icon logo
  marginLeft: string = '-470px'; // Default margin for sliding text
  scaleFactor: string = '.354'; // Default scale factor for resizing

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.calculateDynamicValues(); // Calculate dimensions and styles based on window size
    setTimeout(() => {
      this.startGrowing = true; // Trigger growth animation after a delay
    }, 800);
  }

  // Event listener for window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculateDynamicValues(); // Recalculate dimensions on window resize
  }

  /**
   * Calculate and set dynamic values based on the window size.
   * Adjusts the text and icon logo widths, margin, and scale factor.
   */
  calculateDynamicValues() {
    const totalWindowWidth = window.innerWidth; // Get current window width
    const ratio = 2.513; // Aspect ratio for icon to text logo sizes

    // Set default sizes if the window is wider than 1200px
    if (totalWindowWidth > 1200) {
      this.textLogoWidth = `470px`;
      this.iconLogoWidth = `187px`;
      this.marginLeft = `-470px`;
      this.scaleFactor = '.354'; // Default scale factor
      return;
    }

    // Adjust widths based on current window size
    let adjustedWidth: number;
    if (totalWindowWidth > 800) {
      adjustedWidth = totalWindowWidth * 0.5; // Use 50% of window width
      this.scaleFactor = '.6'; // Adjust scale factor
    } else {
      adjustedWidth = totalWindowWidth * 0.6; // Use 60% of window width for smaller sizes
      this.scaleFactor = '.4'; // Adjust scale factor
    }

    // Calculate adjusted icon and text widths based on the ratio
    const adjustedIconWidth = adjustedWidth / (1 + ratio); // Calculate icon width
    const adjustedTextWidth = adjustedIconWidth * ratio; // Calculate text width

    // Set calculated values
    this.textLogoWidth = `${adjustedTextWidth}px`;
    this.iconLogoWidth = `${adjustedIconWidth}px`;
    this.marginLeft = `-${adjustedTextWidth}px`; // Adjust margin for sliding animation
  }

  /**
   * Callback function triggered when the growth animation is complete.
   * Sets the text to be visible after a delay.
   */
  growDone() {
    setTimeout(() => {
      this.textVisible = true; // Make the text visible after the growth animation
    }, 600);
  }

  /**
   * Callback function triggered when the slide-in animation is complete.
   * Updates the container state to 'end'.
   */
  slideDone() {
    this.containerState = 'end'; // Change the state to 'end' after sliding in
  }

  /**
   * Async callback function triggered when resizing and moving animation is complete.
   * Navigates to the dashboard and changes logo text URL.
   */
  async resizeAndMoveDone() {
    if (this.containerState === 'end') {
      this.defaultBackground = true; // Set the default background to true
      this.logoTextUrl = 'assets/img/logo-text-black.png'; // Change logo text to black
      await this.route.navigateByUrl('dashboard'); // Navigate to the dashboard route
    }
  }
}
