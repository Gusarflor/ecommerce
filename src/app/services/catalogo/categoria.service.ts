import { CategoriaModel } from './../../models/catalogo/categoria.model';
import { ControlService } from './../control.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient, private controlService:ControlService) { }

  getTodosRegistros(){

  };






}
