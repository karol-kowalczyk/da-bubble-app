import { Component, OnInit, inject } from '@angular/core';
import { LoginLogoComponent } from '../../../shared/shared-login/login-logo/login-logo.component';
import { LoginFooterComponent } from '../../../shared/shared-login/login-footer/login-footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../shared/firebase/firebase-config';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from '../../../shared/firebase/user-data.service';




@Component({
  selector: 'app-choose-profile-picture',
  standalone: true,
  imports: [LoginLogoComponent, LoginFooterComponent, RouterLink, CommonModule, CommonModule],
  templateUrl: './choose-profile-picture.component.html',
  styleUrls: ['./choose-profile-picture.component.scss']
})

export class ChooseProfilePictureComponent implements OnInit {
  userData = inject(UserDataService);
  userName:string = '';
  selectedImage: any = 'assets/img/profile-user-default.svg';
  errorMessage: string = '';

  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute) {}

  ngOnInit():void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
    })
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        const width = img.width;
        const height = img.height;

        if (width > 200 || height > 200) {
          this.snackBar.open('Fehler! Das Bild darf maximal 200x200 Pixel groß sein.', 'Schließen', {
            duration: 5000,
          });
          return;
        } else {
          this.errorMessage = '';

          const filePath = `assets/img/${file.name}`;
          const storageRef = ref(storage, filePath);

          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on('state_changed',
            (snapshot) => {},
            (error) => {
              console.error('Fehler beim Hochladen:', error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                this.selectedImage = downloadURL;
              });
            }
          );
        }
      };
    }
  }
  selectImage(imagePath: string) {
    this.selectedImage = imagePath;
  }
}
