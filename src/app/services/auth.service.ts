import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new Subject<boolean>();
  isAuth: boolean = false;

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  createNewUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(email, password).then(
          () => {
            this.isAuth = true;
            this.emitAuthSubject();
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signinUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        this.afAuth.signInWithEmailAndPassword(email, password).then(
          () => {
            this.isAuth = true;
            this.emitAuthSubject();
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    return new Promise<void>(
      (resolve, reject) => {
        this.afAuth.signOut().then(
          () => {
            this.isAuth = false;
            this.emitAuthSubject();
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
    
  }

  emitAuthSubject() {
    this.authSubject.next(this.isAuth);
  }
}
