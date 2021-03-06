import { Injectable } from '@angular/core';
//import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuth }from '@angular/fire/auth';
import * as firebase from 'firebase/app';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//import { AngularFireAuth }from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticaServiceService {

  constructor(
    public afAuth : AngularFireAuth
  ) { }

  loginTwitter () {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());
  }

  loginFacebook() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

    registerUser(email: string, password: string){
      return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(email,password)
        .then( userData => resolve(userData),
        err => reject (err));
      })
    }

    loginUser(email: string, password: string){
      return new Promise((resolve, reject) => {
        this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then( userData => resolve(userData),
        err => reject (err));
      })
    }

/*     getAuth2(){
      //return this.afAuth.authState.map( auth => auth );
      return this.afAuth.authState.pipe(map (auth => auth));
    } */

    getAuth() {
      //return this.afAuth.authState.map(auth => auth);
      return this.afAuth.authState.pipe(map (auth => auth));
    }

    logout(){
      return this.afAuth.auth.signOut();
    }


}
