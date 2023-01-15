import { LoginComponent } from './../../control/login/login.component';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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

  constructor(private fb: FormBuilder, private services: ControlService, private router: Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {

    this.FormBuilding();

    console.log(this.clienteservice.registrarCliente());
  }
  // metodo que ejecuta el registro del formulario

  onSubmit(){
    this.usuarioService.registrar(this.fgValidator.value)

    //promesa que se resuelvera segun validaciones

      .then(response =>{
        console.log(response);
        this.router.navigate(['./control/login']);

      })
      .catch(error => console.log("Registro erroneo"));
  }

  FormBuilding() {

    this.fgValidator = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }




  get fgv() {
    return this.fgValidator.controls;
  };

}
