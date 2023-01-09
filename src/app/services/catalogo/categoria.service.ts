import {ConfigService } from './../../config/config-service';
import { CategoriaModel } from './../../models/catalogo/categoria.model';
import { ControlService } from './../control.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  entidad = "categoria";

  constructor(private http:HttpClient, private controlService:ControlService) { }

  getTodosRegistros(): Observable <CategoriaModel[]>{
    return this.http.get<CategoriaModel[]>(`${ConfigService.BASE_URL}${this.entidad}`);
  }

  guardarNuevoRegistro(registro:CategoriaModel): Observable<CategoriaModel>{
    return this.http.post<CategoriaModel>(`${ConfigService.BASE_URL}${this.entidad}`, registro, {
    });
  }

  EditarRegistro(registro:CategoriaModel): Observable<CategoriaModel>{
    return this.http.put<CategoriaModel>(`${ConfigService.BASE_URL}${this.entidad}`, registro, {
    });
  }

  EliminarRegistro(registroId:CategoriaModel): Observable<any>{
    return this.http.delete(`${ConfigService.BASE_URL}${this.entidad}/${registroId}`, {
    });
  }

}
