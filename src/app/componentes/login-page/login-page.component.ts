import { Component, OnInit } from '@angular/core';
import { AutenticaServiceService } from '../../Servicios/autentica-service.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    public router: Router,
    public flashMensaje: FlashMessagesService

  ) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.auService.loginUser(this.email, this.password)
    .then( (res) => {
      console.log("usuario login");
      
      this.flashMensaje.show('Usuario logado correctamente.',{cssClass: 'alert-success', timeout:4000});
      this.router.navigate(["/private"]);
    } ).catch( (err) => {
      console.log(err);
      this.flashMensaje.show( err.message,{cssClass: 'alert-danger', timeout:4000});
      this.router.navigate(["/login"]);
    })
  }

}
