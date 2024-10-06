import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ChooseProfilePictureComponent } from './login/register/choose-profile-picture/choose-profile-picture.component';
import { ResetPasswordComponent } from './login/password/reset-password/reset-password.component';
import { ChooseNewPasswordComponent } from './login/password/choose-new-password/choose-new-password.component';
import { CentralComponent } from './central/central.component';
import { LogoComponent } from './login/logo/logo.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/hello', pathMatch: 'full' },
    { path: 'hello', component: LogoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'create-profile', component: ChooseProfilePictureComponent},
    {path: 'forgot-password', component: ResetPasswordComponent},
    {path: 'choose-new-password', component: ChooseNewPasswordComponent},
    {path: 'main', component: CentralComponent},
    { path:'**'   , component: LoginComponent}
];