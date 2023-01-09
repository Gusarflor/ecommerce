import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from './../models/catalogo/categoria.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpClient: any;
  setTodosRegistros(registro:CategoriaModel []) {  }

  constructor() { }

  cargarRegistro(){
    return this.httpClient('mongodb+srv://Administrador1:<>@proyectoecommerce.eoqporp.mongodb.net/?retryWrites=true&w=majority');
  }

  //creamos método para conectar con nuestra base de datos.

  AlmacenarRegistros(CategoriaModel:CategoriaModel[]){
    this.httpClient.put('mongodb+srv://Administrador1:<Admin1>@proyectoecommerce.eoqporp.mongodb.net/?retryWrites=true&w=majority',CategoriaModel).subscribe(
      (response: string)=>console.log("se han almacenado los registros" + response),
      (error: string) => console.log("error" + error),
)};

}

