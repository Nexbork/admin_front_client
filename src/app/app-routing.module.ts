import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHomeComponent } from './login.home/login.home.component';
import { PanelAdministradorComponent } from './panel.administrador/panel.administrador.component';
import { RegistroAdminComponent } from './registro.admin/registro.admin.component';
import { OpcionesregistroComponent } from './opcionesregistro/opcionesregistro.component';
import { ProductosGlobalesComponent } from './productos-globales/productos-globales.component';
import { AtributosComponent } from './atributos/atributos.component';

const routes: Routes = [
  {
    path:'',
    component:LoginHomeComponent,
    pathMatch:'full'
  },
  {
    path:'registro',
    component:RegistroAdminComponent,
    pathMatch:'full'
  },
  {
    path:'panel',
    component:PanelAdministradorComponent,
    pathMatch:'full'
  },
  {
    path:'opciones-registro',
    component:OpcionesregistroComponent,
    pathMatch:'full'
  },
  {
    path:'productosglobales',
    component:ProductosGlobalesComponent,
    pathMatch:'full'
  },
  {
    path:'productosglobales/Subproductos/:idProducto',
    component:ProductosGlobalesComponent,
    pathMatch:'full'
  },
  {
    path:'atributos',
    component:AtributosComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
