import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterListService {

  firestore:Firestore = inject(Firestore);
  unsubList;

  constructor() { 

    this.unsubList = onSnapshot(this.getUserRef(), (list) => {
      list.forEach(element => {
        console.log(element.id);
        console.log(element.data())
      });
    })
  }

  ngonDestroy() {
    this.unsubList();
  }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  getSingleDoc(colId:string, docId:string) {
    return doc(collection(this.firestore, colId), docId)
  }
}
