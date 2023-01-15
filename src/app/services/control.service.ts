import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  static role: number;

  estaLogueado() {

  }
  //establecer funciones para login y logout
  login: any;
  logout: any;

  constructor( private http: HttpClient) { }
}
