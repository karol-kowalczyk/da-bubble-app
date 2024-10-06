import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  firestore:Firestore = inject(Firestore);

  constructor() { }

  userDataArray:any = [];
}