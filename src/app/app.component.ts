import { Component } from '@angular/core';
import firebase from 'firebase/app';
import * as config from './../../src/config.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asse';

  constructor() {
    
    firebase.initializeApp(config);
  }
}
