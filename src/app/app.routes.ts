import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ChooseProfilePictureComponent } from './login/choose-profile-picture/choose-profile-picture.component';
import { ResetPasswordComponent } from './login/password/reset-password/reset-password.component';
import { ChooseNewPasswordComponent } from './login/password/choose-new-password/choose-new-password.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'create-profile', component: ChooseProfilePictureComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'choose-new-password', component: ChooseNewPasswordComponent},
];