import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgValidator!: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.FormBuilding();
  }

  FormBuilding(){

    this.fgValidator = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],

    });
  }

  LoginClienteFn(){

    if (this.fgValidator.invalid){
      alert("Acceso no autorizado");
      return false;
    }

    alert("Iniciando Sesion...");
    return false;
  }

  get fgv(){
    return this.fgValidator.controls;
  };

}
