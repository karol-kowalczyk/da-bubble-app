import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importiere ActivatedRoute
import { LoginLogoComponent } from '../../../shared/shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../../shared/shared-login/login-footer/login-footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { verifyPasswordResetCode, confirmPasswordReset, getAuth } from "firebase/auth";
import { auth } from '../../../shared/firebase/firebase-config';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) {} // Aktiviere den Router

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
      this.snackBar.open('Fehler: Der actionCode fehlt.', 'Schließen', {
        duration: 5000,
      });
    }
  }

  handleResetPassword(actionCode: string) {
    // Verwende auth aus der firebase-config.ts
    verifyPasswordResetCode(auth, actionCode).then((email) => {
      if (this.password === this.confirmPassword) {
        const newPassword = this.password; 
        // Bestätigen des neuen Passworts
        confirmPasswordReset(auth, actionCode, newPassword).then(() => {
          this.snackBar.open('Passwort wurde erfolgreich zurückgesetzt!', 'Schließen', {
            duration: 5000,
          });
          setTimeout(() => this.router.navigate(['/login']), 4000);
        }).catch((error) => {
          this.snackBar.open('Fehler beim Zurücksetzen des Passworts: ' + error.message, 'Schließen', {
            duration: 5000,
          });
        });
      } else {
        this.snackBar.open('Die Passwörter stimmen nicht überein.', 'Schließen', {
          duration: 5000,
        });
      }
    }).catch((error) => {
      this.snackBar.open('Der Link zum Zurücksetzen des Passworts ist ungültig oder abgelaufen: ' + error.message, 'Schließen', {
        duration: 5000,
      });
    });
  }
}