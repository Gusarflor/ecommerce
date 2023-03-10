import { AppComponent } from './app.component';
import { ControlModule } from './modules/control/control.module';
import { DefectoComponent } from './public/home/defecto/defecto.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [

  { path:'home', component:DefectoComponent},

  { path:'', pathMatch:'full', redirectTo:'/home'},

  {path:'control', loadChildren:()=>import('./modules/control/control.module').then(m => m.ControlModule)},

  {path:'catalogo', loadChildren:()=>import('./modules/catalogo/catalogo.module').then(m => m.CatalogoModule)},

  {path:'cliente', loadChildren:()=>import('./modules/cliente/cliente.module').then(m => m.ClienteModule)},

  { path:'**', redirectTo:'/home'},

  {path: 'home', component:DefectoComponent, ...canActivate(()=>redirectUnauthorizedTo(['./cliente/registro']))},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
