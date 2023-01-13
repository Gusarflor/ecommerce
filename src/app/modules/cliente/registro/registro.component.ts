import { DataService } from 'src/app/services/data.service';
import { error } from '@angular/compiler/src/util';
import { ClienteModel } from './../../../models/cliente.model';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare const mostrarMensaje: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  fgValidator!: FormGroup;
  empleadoservice: any;
  clienteservice: any;

  constructor(private fb: FormBuilder, private services: ClienteService, private router: Router, private dataService:DataService) { }

  ngOnInit(): void {

    this.FormBuilding();

    console.log(this.clienteservice.registrarCliente());
  }

  FormBuilding() {

    this.fgValidator = this.fb.group({

      documento: ['', [Validators.required, Validators.minLength(1)]],
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      apellido: ['', [Validators.required, Validators.minLength(1)]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      direccion: ['', [Validators.required, Validators.minLength(2)]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],

    });
  }

  RegistrarClienteFn() {

    if (this.fgValidator.invalid) {
      mostrarMensaje("Registro erroneo");

    } else {
      // mostrarMensaje("Registrando...");

    let model = this.obtenerDatosCliente();

      // this.clienteservice.registrarCliente(model).subscribe(
      //   ClienteModel =>{
      //     mostrarMensaje("Registro realilzado");
      //   },

      //   error=>{
      //     mostrarMensaje("Registro erroneo");
      //   }
      // );

    };
  }

  obtenerDatosCliente(): ClienteModel {

    let model = new ClienteModel();

    model.Documento = this.fgv['Documento'].value;
    model.Nombre = this.fgv['nombre'].value;
    model.Apellido = this.fgv['Apellido'].value;
    model.Direccion = this.fgv['Direccion'].value;
    model.Ciudad = this.fgv['Ciudad'].value;
    model.Telefono = this.fgv['Telefono'].value;
    model.email = this.fgv['email'].value;

    return model;


  }


  get fgv() {
    return this.fgValidator.controls;
  };

}
// function obtenerDatosCliente() {
//   throw new Error('Function not implemented.');
// }

