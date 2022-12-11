import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-panel.administrador',
  templateUrl: './panel.administrador.component.html',
  styleUrls: ['./panel.administrador.component.scss']
})
export class PanelAdministradorComponent implements OnInit {

  constructor(private logoutservice:LogoutService, private router:Router) { }

  ngOnInit(): void {
  }


  CerrarSesion(){
    this.logoutservice.deleteToken().subscribe(
      (data:any)=>{
        console.log(data)
        if(data.success){
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('accessToken');
          this.router.navigate(['']);
        }else{
          console.log('No se pudo Cerrar Sesión');
        }
      }
    );
    
    }
  }

