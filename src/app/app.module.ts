import { DataService } from 'src/app/services/data.service';
import { ControlService } from './services/control.service';
import { ClienteService } from './services/cliente.service';
import { ProveedorService } from './services/catalogo/proveedor.service';
import { CategoriaService } from 'src/app/services/catalogo/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuNavegacionComponent } from './public/paginaPrincipal/menu-navegacion/menu-navegacion.component';
import { BarraNavegacionComponent } from './public/paginaPrincipal/barra-navegacion/barra-navegacion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefectoComponent } from './public/home/defecto/defecto.component';
import { FooterComponent } from './public/paginaPrincipal/footer/footer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';




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
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())

  ],
  providers: [
    CategoriaService, ProveedorService, ClienteService, ControlService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
