import { CambiarPassComponent } from './cambiar-pass/cambiar-pass.component';
import { RestablecerPassComponent } from './restablecer-pass/restablecer-pass.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'login', component:LoginComponent},

  {path:'logout', component:LogoutComponent},

  {path:'restablecer-pass', component:RestablecerPassComponent},

  {path:'cambiar-pass', component:CambiarPassComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
