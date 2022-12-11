import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaProductos } from './lista-productos';
import urlbase from '../helperproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private httpClient: HttpClient) { }

  getallproducts(): Observable<ListaProductos[]> {
    return this.httpClient.get<ListaProductos[]>(`${urlbase}/products/globals`, {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') })
    }
    );
  }
}
