import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import urlconsulta from '../helperconsulta';
import { ListaProductos } from '../productos-globales/lista-productos';

@Injectable({
  providedIn: 'root'
})
export class SubproductosService {

  constructor(private httpClient:HttpClient) { }

  getsubproducts(): Observable<ListaProductos[]> {
    return this.httpClient.get<ListaProductos[]>(`${urlconsulta}/products/globals?product_url_code`, {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') })
    }
    );
  }
}
