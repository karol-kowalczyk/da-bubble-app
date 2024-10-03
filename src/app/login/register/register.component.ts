import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { auth, createUserWithEmailAndPassword, sendEmailVerification, User } from '../firebase/firebase-config';
import { CommonModule } from '@angular/common';
import { FirebaseError } from 'firebase/app';
import { LoginLogoComponent } from '../../shared/shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../shared/shared-login/login-footer/login-footer.component';

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
  registerForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  async onRegister() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Bitte füllen Sie alle Felder korrekt aus.';
      return;
    }

    const { email, password, fullName } = this.registerForm.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user as User);
      this.successMessage = 'Registrierung erfolgreich! Eine Bestätigungs-E-Mail wurde an Ihre E-Mail-Adresse gesendet.';
      this.errorMessage = null;
      setTimeout(() => this.router.navigate(['/create-profile']), 2000);
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.errorMessage = 'Ein Fehler ist bei der Registrierung aufgetreten. Bitte versuchen Sie es erneut.';
      } else {
        this.errorMessage = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
      }
    }
  }

  hideError() {
    this.errorMessage = null;
  }

}
