import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlAuthentication from '../helperauthentication';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient:HttpClient) { }

  deleteToken(){
    return this.httpClient.delete(`${urlAuthentication}/logout`,{
      body:{refreshToken:localStorage.getItem('refreshToken')} 
    })
  }
}
