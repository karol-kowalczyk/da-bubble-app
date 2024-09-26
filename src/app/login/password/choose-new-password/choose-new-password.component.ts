import { Component } from '@angular/core';
import { LoginLogoComponent } from '../../shared/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../shared/login-footer/login-footer.component';

@Component({
  selector: 'app-choose-new-password',
  standalone: true,
  imports: [LoginLogoComponent, LoginFooterComponent],
  templateUrl: './choose-new-password.component.html',
  styleUrl: './choose-new-password.component.scss'
})
export class ChooseNewPasswordComponent {

}
