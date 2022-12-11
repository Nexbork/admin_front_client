import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistroAdminComponent } from './registro.admin/registro.admin.component';
import { PanelAdministradorComponent } from './panel.administrador/panel.administrador.component';
import { LoginHomeComponent } from './login.home/login.home.component';
import { OpcionesregistroComponent } from './opcionesregistro/opcionesregistro.component';
import { ProductosGlobalesComponent } from './productos-globales/productos-globales.component';
import { AtributosComponent } from './atributos/atributos.component';
import { FormProductosComponent } from './form-productos/form-productos.component';
import { TablaSubproductsComponent } from './tabla-subproducts/tabla-subproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroAdminComponent,
    PanelAdministradorComponent,
    LoginHomeComponent,
    OpcionesregistroComponent,
    ProductosGlobalesComponent,
    AtributosComponent,
    FormProductosComponent,
    TablaSubproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
