import { Router } from '@angular/router';
import { ControlService } from './../../../services/control.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare const mostrarMensaje: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgValidator!: FormGroup;

  constructor(private fb: FormBuilder, private services: ControlService, private router: Router) { }

  ngOnInit(): void {

    this.FormBuilding();
  }

  FormBuilding() {

    this.fgValidator = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],

    });
  }

  LoginClienteFn() {

    if (this.fgValidator.invalid) {
      mostrarMensaje("Rellenar todos los campos");
      return false;
    } else {

      mostrarMensaje("Sesion Iniciada...");
      return false;
    }
  }

  get fgv() {
    return this.fgValidator.controls;
  };

}
