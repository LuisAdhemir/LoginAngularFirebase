import { Component, OnInit } from '@angular/core';
import { AutenticaServiceService } from '../../Servicios/autentica-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email:string;
  public password: string;

  constructor(
    public auService : AutenticaServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitRegisterUser(){
    this.auService.registerUser(this.email,this.password)
    .then( (res) => {
      //console.log("inicia registro");
      this.router.navigate(['/private']);

      console.log(res);
    }).catch( (err) => { 
      console.log(err)
    } )
  }

}
