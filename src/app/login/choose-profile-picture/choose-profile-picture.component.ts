import { Component } from '@angular/core';
import { LoginLogoComponent } from '../shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../shared-login/login-footer/login-footer.component';


@Component({
  selector: 'app-choose-profile-picture',
  standalone: true,
  imports: [LoginLogoComponent,LoginFooterComponent],
  templateUrl: './choose-profile-picture.component.html',
  styleUrl: './choose-profile-picture.component.scss'
})
export class ChooseProfilePictureComponent {

}
