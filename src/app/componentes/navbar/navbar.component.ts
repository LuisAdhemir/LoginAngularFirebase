import { Component, OnInit } from '@angular/core';
import { AutenticaServiceService } from '../../Servicios/autentica-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public userName: string;
  public emailUser: string;

  constructor(
    public auService : AutenticaServiceService
  ) { }

  ngOnInit(): void {
    this.auService.getAuth().subscribe( auth => {
      if(auth){
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userName = auth.email;
      }else{
        this.isLogin = false;
      }

    })
  }

  onClickLogout(){
    console.log("usuario logout");
    this.auService.logout();
  }


}
