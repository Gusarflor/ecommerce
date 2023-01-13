
import { CategoriaModel } from './../../../../models/catalogo/categoria.model';
import { CategoriaService } from 'src/app/services/catalogo/categoria.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  fgValidator!: FormGroup;


  constructor(private categoriaService:CategoriaService) { }

  ngOnInit(): void { }

  agregarRegistro(){
    let crearCategoria=new CategoriaModel();

  }

  id:String="";
  codigo:String="";
  nombre:String="";
}
