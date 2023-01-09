import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  fgValidator!: FormGroup;

  constructor() { }



  ngOnInit(): void {
  }

  guardarNuevoRegistro(){

  }

  }
