import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlAuthentication from '../helperauthentication';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  public generartoken(datalogin:any){              
    return this.httpClient.post(`${urlAuthentication}/login`,datalogin);//microservicio de generar token
  }

  public guardartoken(accessToken:any, refreshToken:any){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('refreshToken',refreshToken);
    return true;
  }

  public readallroles(){
    return this.httpClient.get(`${urlAuthentication}`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}
