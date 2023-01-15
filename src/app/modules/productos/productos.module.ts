import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListarProductoComponent } from './gestor/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './gestor/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './gestor/editar-producto/editar-producto.component';


@NgModule({
  declarations: [
    ListarProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
