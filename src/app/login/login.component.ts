import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { LoginFooterComponent } from './shared/login-footer/login-footer.component';
import { Renderer2 } from '@angular/core';
import { ResponsiveCreateUserSectionComponent } from './shared/responsive-create-user-section/responsive-create-user-section.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginHeaderComponent, LoginFooterComponent, ResponsiveCreateUserSectionComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-page');
  }
}