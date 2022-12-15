import { HttpClientModule } from '@angular/common/http';
import { MenuNavegacionComponent } from './public/paginaPrincipal/menu-navegacion/menu-navegacion.component';
import { BarraNavegacionComponent } from './public/paginaPrincipal/barra-navegacion/barra-navegacion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefectoComponent } from './public/home/defecto/defecto.component';
import { FooterComponent } from './public/paginaPrincipal/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    DefectoComponent,
    FooterComponent,
    BarraNavegacionComponent,
    MenuNavegacionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
