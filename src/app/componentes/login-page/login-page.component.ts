import { Component, OnInit } from '@angular/core';
import { AutenticaServiceService } from '../../Servicios/autentica-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password: string;

  constructor(
    public auService: AutenticaServiceService,
    public router: Router

  ) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.auService.loginUser(this.email, this.password)
    .then( (res) => {
      console.log("usuario login");
      this.router.navigate(["/private"]);
    } ).catch( (err) => {
      console.log(err);
      this.router.navigate(["/login"]);
    })
  }

}
