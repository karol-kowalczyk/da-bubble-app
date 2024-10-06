import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  firestore:Firestore = inject(Firestore);

  constructor() { }

  userDataArray:any = [];

  profilePictures = [
    { src: 'assets/img/profile-picture-pic-1.svg', alt: 'Avatar 1' },
    { src: 'assets/img/profile-picture-pic-2.svg', alt: 'Avatar 2' },
    { src: 'assets/img/profile-picture-pic-3.svg', alt: 'Avatar 3' },
    { src: 'assets/img/profile-picture-pic-4.svg', alt: 'Avatar 4' },
    { src: 'assets/img/profile-picture-pic-5.svg', alt: 'Avatar 5' }
  ];
}