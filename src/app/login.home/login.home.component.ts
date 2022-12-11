import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login.home',
  templateUrl: './login.home.component.html',
  styleUrls: ['./login.home.component.scss']
})
export class LoginHomeComponent implements OnInit {


  constructor(private loginservice:LoginService, private router:Router) { }

  public datalogin = {
    user_email:'',
    user_password:''
  }


  ngOnInit(): void {
  }

  formSubmit() {
    this.loginservice.generartoken(this.datalogin).subscribe(
      (data: any) => {
        console.log(data)
        this.loginservice.guardartoken(data.responseBody.accessToken,data.responseBody.refreshToken);
        this.router.navigate(["/panel"]);//rediccionar a mi ruta
      }
    );

  }

}
