import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlAuthentication from '../helperauthentication';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public insertarusuario(user:any){
    return this.http.post(`${urlAuthentication}/register`, user);
  }
  

  public obtenerusuario(user:any){
    return this.http.get(`${urlAuthentication}/register`, user);
  }
}
