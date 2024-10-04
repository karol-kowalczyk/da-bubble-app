import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importiere ActivatedRoute
import { LoginLogoComponent } from '../../../shared/shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../../shared/shared-login/login-footer/login-footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { verifyPasswordResetCode, confirmPasswordReset, getAuth } from "firebase/auth";
import { auth } from '../../../shared/firebase/firebase-config';

@Component({
  selector: 'app-choose-new-password',
  standalone: true,
  imports: [LoginLogoComponent, LoginFooterComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './choose-new-password.component.html',
  styleUrls: ['./choose-new-password.component.scss']
})
export class ChooseNewPasswordComponent implements OnInit {
  password: string = "";
  confirmPassword: string = "";
  actionCode: string = ""; // Füge ein Feld für den Action-Code hinzu

  constructor(private route: ActivatedRoute, private router: Router) {} // Aktiviere den Router

  ngOnInit() {
    // Extrahiere den actionCode aus den URL-Parametern
    this.route.queryParams.subscribe(params => {
      this.actionCode = params['oobCode']; // oobCode ist der Parameter für den actionCode
    });
  }

  sendNotification() {
    if (this.actionCode) {
      this.handleResetPassword(this.actionCode);
    } else {
      alert('Fehler: Der actionCode fehlt.');
    }
  }

  handleResetPassword(actionCode: string) {
    // Verwende auth aus der firebase-config.ts
    verifyPasswordResetCode(auth, actionCode).then((email) => {
      if (this.password === this.confirmPassword) {
        const newPassword = this.password; 
        // Bestätigen des neuen Passworts
        confirmPasswordReset(auth, actionCode, newPassword).then(() => {
          alert('Passwort wurde erfolgreich zurückgesetzt!');
          setTimeout(() => this.router.navigate(['/login']), 2000);
        }).catch((error) => {
          alert('Fehler beim Zurücksetzen des Passworts: ' + error.message);
        });
      } else {
        alert('Die Passwörter stimmen nicht überein.');
      }
    }).catch((error) => {
      alert('Der Link zum Zurücksetzen des Passworts ist ungültig oder abgelaufen: ' + error.message);
    });
  }
}