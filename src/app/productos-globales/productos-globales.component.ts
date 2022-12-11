import { Component, OnInit } from '@angular/core';
import { ListaProductos } from './lista-productos';
import { ProductserviceService } from './productservice.service';

@Component({
  selector: 'app-productos-globales',
  templateUrl: './productos-globales.component.html',
  styleUrls: ['./productos-globales.component.scss']
})
export class ProductosGlobalesComponent implements OnInit {


  products:any[]
  constructor(private productservice:ProductserviceService) { }


  ngOnInit(): void {
    this.productservice.getallproducts().subscribe( 
    (data:any)=>{
      console.log(data);
      this.products=data.responseBody
    }
    )
  }

}
