import { Component } from '@angular/core';
import { LoginLogoComponent } from '../../shared/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../shared/login-footer/login-footer.component';


@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [LoginLogoComponent, LoginFooterComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

}
