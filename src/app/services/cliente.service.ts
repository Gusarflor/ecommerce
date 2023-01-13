import { ClienteModel } from './../models/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  registro = "cliente";
  httpClient: any;

  constructor(private http: HttpClient) { }

  //metodo para enlazar datos clilente con backend

  registroCliente(registro:ClienteModel): Observable<ClienteModel>{
    return this.httpClient.post(`${ConfigService.BASE_URL}${this.registro}`, registro, {
    });
  }
}

