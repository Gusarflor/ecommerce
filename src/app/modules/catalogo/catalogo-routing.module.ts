import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor.component';
import { EliminarProveedorComponent } from './proveedor/eliminar-proveedor/eliminar-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { CrearProveedorComponent } from './proveedor/crear-proveedor/crear-proveedor.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { EliminarCategoriaComponent } from './categoria/eliminar-categoria/eliminar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'crear-categoria', component:CrearCategoriaComponent},
  {path:'editar-categoria', component:EditarCategoriaComponent},
  {path:'eliminar-categoria', component:EliminarCategoriaComponent},
  {path:'listar-categoria', component:ListarCategoriaComponent},

  {path:'crear-proveedor', component:CrearProveedorComponent},
  {path:'editar-proveedor', component:EditarProveedorComponent},
  {path:'eliminar-proveedor', component:EliminarProveedorComponent},
  {path:'listar-proveedor', component:ListarProveedorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
