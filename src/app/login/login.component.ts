import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { auth, signInWithEmailAndPassword } from '../shared/firebase/services/firebase-config';
import { FirebaseError } from 'firebase/app';
import { LoginHeaderComponent } from '../shared/shared-login/login-header/login-header.component';
import { LoginFooterComponent } from '../shared/shared-login/login-footer/login-footer.component';
import { Renderer2 } from '@angular/core';
import { ResponsiveCreateUserSectionComponent } from '../shared/shared-login/responsive-create-user-section/responsive-create-user-section.component';
import { CommonModule } from '@angular/common';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LoginHeaderComponent,
    LoginFooterComponent,
    ResponsiveCreateUserSectionComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-page');
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Bitte geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein.';
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.errorMessage = null;
      this.router.navigate(['/main']);
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            this.errorMessage = 'Kein Benutzer mit dieser E-Mail-Adresse gefunden.';
            break;
          case 'auth/wrong-password':
            this.errorMessage = 'Falsches Passwort. Bitte versuchen Sie es erneut.';
            break;
          default:
            this.errorMessage = 'Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.';
        }
      } else {
        this.errorMessage = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
      }
    }
  }

  hideError() {
    this.errorMessage = null;
  }

  async onGoogleLogin(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
  
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      this.errorMessage = null;
      this.router.navigate(['/dashboard']);
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.errorMessage = 'Anmeldung mit Google fehlgeschlagen. Bitte versuchen Sie es erneut.';
      } else {
        this.errorMessage = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
      }
    }
  }
}