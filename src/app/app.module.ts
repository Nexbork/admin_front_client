import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroAdminComponent } from './registro.admin/registro.admin.component';
import { PanelAdministradorComponent } from './panel.administrador/panel.administrador.component';
import { LoginHomeComponent } from './login.home/login.home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroAdminComponent,
    PanelAdministradorComponent,
    LoginHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
