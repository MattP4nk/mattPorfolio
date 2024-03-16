import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from "firebase/app";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const firebaseConfig = {
  apiKey: "AIzaSyCN4Hq7Qi0uQPIMy0Kc8ss6qSd3s4ZjI2c",
  authDomain: "matt-porfolio.firebaseapp.com",
  projectId: "matt-porfolio",
  storageBucket: "matt-porfolio.appspot.com",
  messagingSenderId: "842250665394",
  appId: "1:842250665394:web:d971b9719cf424133ff8ab"
};

const app = initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
