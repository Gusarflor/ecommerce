import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  static role: number;

  getdatosUsuario() {

  }
  login: any;
  logout: any;

  constructor( private http: HttpClient) { }
}
