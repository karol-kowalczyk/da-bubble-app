import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, onSnapshot, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  firestore: Firestore = inject(Firestore);
  unsubList;

  constructor() {

    this.unsubList = onSnapshot(this.getUserRef(), (list) => {
      list.forEach(element => {
        console.log(element.id);
        console.log(element.data())
      });
    })
  }

  async addNewUser(userData: { fullName: string; email: string }) {
    try {
      await addDoc(this.getUserRef(), userData);
    } catch (error) {
      console.error("Error adding new user: ", error);
    }
  }

  ngonDestroy() {
    this.unsubList();
  }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  getSingleDoc(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }

  showUserDataArray() {
    setTimeout(() => this.addNewUser(this.userDataArray), 1000);
    setTimeout(() => {
      console.log(this.userDataArray);
    }, 2000);
  }

  userDataArray: any = [
    {
      name: 'test',
      email: 'test'
    },
  ];

  profilePictures = [
    { src: 'assets/img/profile-picture-pic-1.svg', alt: 'Avatar 1' },
    { src: 'assets/img/profile-picture-pic-2.svg', alt: 'Avatar 2' },
    { src: 'assets/img/profile-picture-pic-3.svg', alt: 'Avatar 3' },
    { src: 'assets/img/profile-picture-pic-4.svg', alt: 'Avatar 4' },
    { src: 'assets/img/profile-picture-pic-5.svg', alt: 'Avatar 5' }
  ];
}
