import { DataService } from 'src/app/services/data.service';
import {ConfigService } from './../../config/config-service';
import { CategoriaModel } from './../../models/catalogo/categoria.model';
import { ControlService } from './../control.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/models/catalogo/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  registro = "ProductoModel";



  constructor(private httpClient:HttpClient, private controlService:ControlService, private dataService:DataService) { }

  listarProducto(): Observable <ProductoModel[]>{
    return this.httpClient.get<ProductoModel[]>(`${ConfigService.BASE_URL}${this.registro}`);
  }

  guardarProducto(registro:CategoriaModel): Observable<CategoriaModel>{
    return this.httpClient.post<ProductoModel>(`${ConfigService.BASE_URL}${this.registro}`, registro, {
    });
  }

  EditarProducto(registro:ProductoModel): Observable<ProductoModel>{
    return this.httpClient.put<ProductoModel>(`${ConfigService.BASE_URL}${this.registro}`, registro, {
    });
  }


}
