import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginHomeComponent } from './login.home/login.home.component';
import { PanelAdministradorComponent } from './panel.administrador/panel.administrador.component';
import { RegistroAdminComponent } from './registro.admin/registro.admin.component';

const routes: Routes = [
  {
    path:'',
    component:LoginHomeComponent
  },
  {
    path:'registro',
    component:RegistroAdminComponent
  },
  {
    path:'panel',
    component:PanelAdministradorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
