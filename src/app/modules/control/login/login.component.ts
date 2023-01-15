import { UsuarioService } from './../../../services/usuario.service';
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

  constructor(private fb: FormBuilder, private services: ControlService, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.FormBuilding();
  }

  onSubmit(){
    this.usuarioService.loguear(this.fgValidator.value)

      .then(response =>{

        console.log(response);
        this.router.navigate(['./home']);

      })
      .catch(error => console.log(error));
  }



  FormBuilding() {

    this.fgValidator = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],

    });
  }



  get fgv() {
    return this.fgValidator.controls;
  };

}
