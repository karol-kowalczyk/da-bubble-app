import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"da-bubble-app","appId":"1:727256499474:web:02040277d8cfc853c71fcb","storageBucket":"da-bubble-app.appspot.com","locationId":"europe-west","apiKey":"AIzaSyAh81UwaXL5hqI4sMGEzFVTDbekSJbeCT0","authDomain":"da-bubble-app.firebaseapp.com","messagingSenderId":"727256499474"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())
  ]
};
