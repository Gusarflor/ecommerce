import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './categoria/eliminar-categoria/eliminar-categoria.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { CrearProveedorComponent } from './proveedor/crear-proveedor/crear-proveedor.component';
import { EliminarProveedorComponent } from './proveedor/eliminar-proveedor/eliminar-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor.component';


@NgModule({
  declarations: [
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    EliminarCategoriaComponent,
    ListarCategoriaComponent,
    CrearProveedorComponent,
    EliminarProveedorComponent,
    EditarProveedorComponent,
    ListarProveedorComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
