import { Component } from '@angular/core';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { LoginFooterComponent } from './shared/login-footer/login-footer.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginHeaderComponent, LoginFooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
