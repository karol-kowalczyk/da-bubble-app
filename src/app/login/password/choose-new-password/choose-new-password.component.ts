import { Component } from '@angular/core';
import { LoginLogoComponent } from '../../../shared/shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../../shared/shared-login/login-footer/login-footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-new-password',
  standalone: true,
  imports: [LoginLogoComponent, LoginFooterComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './choose-new-password.component.html',
  styleUrls: ['./choose-new-password.component.scss']
})
export class ChooseNewPasswordComponent {
  password: string = "";
  confirmPassword: string = "";

  sendNotification() {
    setTimeout(() => {
      alert('Passwort wurde aktualisiert');
    }, 1400);

  }

}
