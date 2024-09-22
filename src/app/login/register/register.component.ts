import { Component } from '@angular/core';
import { LoginLogoComponent } from '../shared/login-logo/login-logo.component';
import { LoginFooterComponent } from '../shared/login-footer/login-footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginLogoComponent, LoginFooterComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
