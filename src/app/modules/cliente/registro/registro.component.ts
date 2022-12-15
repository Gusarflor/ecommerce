import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  fgValidator!: FormGroup;

  constructor(private fb: FormBuilder,){}
              // private service:ClienteService,
              // private router: Router) { }

  ngOnInit(): void {

    this.FormBuilding();
  }

  FormBuilding(){

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

  RegistrarClienteFn(){

    if (this.fgValidator.invalid){
      alert("Registro erroneo");
      return false;
    }

    alert("Registrando...");
    return false;
  }

  get fgv(){
    return this.fgValidator.controls;
  };

}
