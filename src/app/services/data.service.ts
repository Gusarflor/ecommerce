import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from './../models/catalogo/categoria.model';
import { Injectable } from '@angular/core';
import { ClienteModel } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpClient: any;
  // httpClient: any;
  // setTodosRegistros(registro:CategoriaModel []) {  }

  constructor() { }

  //creamos métodos para enlazar categoria con nuestra base de datos.

  AlmacenarCategoria(registro:CategoriaModel[]){
    return this.httpClient.get('https://nuevo-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
  }



  CrearCategoria(registro:CategoriaModel[]){
    this.httpClient.put('https://nuevo-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/datos.json', registro).subscribe(
      (response: string)=>console.log("se han almacenado los registros" + response),
      (error: string) => console.log("Error" + error),
    )
  }

//   AlmacenarRegistros(CategoriaModel:CategoriaModel[]){
//     this.httpClient.put('https://nuevo-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/datos.json',CategoriaModel).subscribe(
//       (response: string)=>console.log("se han almacenado los registros" + response),
//       (error: string) => console.log("error" + error),
// )};

registrarCliente(registro:ClienteModel[]){
  this.httpClient.put('https://nuevo-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/datos.json', registro).subscribe(
    (response: string)=>console.log("se han almacenado los registros" + response),
    (error: string) => console.log("Error" + error),
  )
}

}

