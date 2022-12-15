import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CambiarPassComponent } from './cambiar-pass/cambiar-pass.component';
import { RestablecerPassComponent } from './restablecer-pass/restablecer-pass.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    CambiarPassComponent,
    RestablecerPassComponent
  ],
  imports: [
    CommonModule,
    ControlRoutingModule,
    ReactiveFormsModule
  ]
})
export class ControlModule { }
