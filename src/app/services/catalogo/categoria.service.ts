import { DataService } from 'src/app/services/data.service';
import {ConfigService } from './../../config/config-service';
import { CategoriaModel } from './../../models/catalogo/categoria.model';
import { ControlService } from './../control.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  registro = "CategoriaModel";



  constructor(private httpClient:HttpClient, private controlService:ControlService, private dataService:DataService) { }

  listarCategoria(): Observable <CategoriaModel[]>{
    return this.httpClient.get<CategoriaModel[]>(`${ConfigService.BASE_URL}${this.registro}`);
  }

  guardarCategoria(registro:CategoriaModel): Observable<CategoriaModel>{
    return this.httpClient.post<CategoriaModel>(`${ConfigService.BASE_URL}${this.registro}`, registro, {
    });
  }

  EditarCategoria(registro:CategoriaModel): Observable<CategoriaModel>{
    return this.httpClient.put<CategoriaModel>(`${ConfigService.BASE_URL}${this.registro}`, registro, {
    });
  }

  EliminarCategoria(registroId:CategoriaModel): Observable<any>{
    return this.httpClient.delete(`${ConfigService.BASE_URL}${this.registro}/${registroId}`, {
    });
  }

}
