import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,tap,take } from 'rxjs/operators';

/* import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'; */

import { AngularFireAuth } from 'angularfire2/auth';
import { AutenticaServiceService } from '../Servicios/autentica-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private auService: AutenticaServiceService
  ){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auService.afAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !! authState))
      .pipe(tap( authenticated => {
        if( !authenticated ){
          this.router.navigate(['/login'])
        }
      }))

  }
  
}
