import { Component, inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { auth, createUserWithEmailAndPassword, sendEmailVerification, User } from '../../shared/firebase/firebase-config';
import { CommonModule } from '@angular/common';
import { FirebaseError } from 'firebase/app';
import { LoginLogoComponent } from '../../shared/shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../shared/shared-login/login-footer/login-footer.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from '../../shared/firebase/user-data.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    LoginLogoComponent,
    LoginFooterComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  userData = inject(UserDataService);
  userDataArray = this.userData.userDataArray;

  registerForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  showUserDataArray() {
    const { email, fullName } = this.registerForm.value;
  
    // Nur email und fullName in das Array pushen
    this.userDataArray.push({ email, fullName });
    
    console.log(this.userDataArray);
  }

  async onRegister() {
    const { email, password, fullName } = this.registerForm.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user as User);
      this.snackBar.open('Registrierung erfolgreich! Eine Bestätigungs wurde an Ihre E-Mail-Adresse gesendet.', 'Schließen', {
        duration: 5000,
      });
      this.errorMessage = null;
      setTimeout(() => this.router.navigate(['/create-profile']), 2000);
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.snackBar.open('Ein Fehler ist bei der Registrierung aufgetreten. Bitte versuchen Sie es erneut.', 'Schließen', {
          duration: 5000,
        });
      } else {
        this.snackBar.open('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.', 'Schließen', {
          duration: 5000,
        });
      }
    }
  }

  hideError() {
    this.errorMessage = null;
  }

}
