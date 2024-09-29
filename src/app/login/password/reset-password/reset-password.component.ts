import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginLogoComponent } from '../../shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../shared-login/login-footer/login-footer.component';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [LoginLogoComponent, LoginFooterComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(private snackBar: MatSnackBar) {}
  email: string = '';

  resetPassword() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, this.email)
      .then(() => {
        this.snackBar.open('Ein Link zum Zurücksetzen des Passworts wurde an Ihre E-Mail-Adresse gesendet.', 'Schließen', {
          duration: 5000,
        });
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          this.snackBar.open('Es gab einen Fehler beim Senden der E-Mail zum Zurücksetzen des Passworts. Bitte überprüfen Sie Ihre E-Mail-Adresse.', 'Schließen', {
            duration: 5000,
          });
        } else if (error.code === 'auth/invalid-email') {
          this.snackBar.open('Diese E-Mail-Adresse ist ungültig.', 'Schließen', {
            duration: 5000,
          });
        } else {
          this.snackBar.open('Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es später erneut.', 'Schließen', {
            duration: 5000,
          });
        }
      });
  }
  
}
