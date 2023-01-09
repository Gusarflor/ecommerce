import { CategoriaModel } from './../../../../models/catalogo/categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/catalogo/categoria.service';
import { error } from '@angular/compiler/src/util';

declare const mostrarMensaje: any;

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  listadoRegistros!: CategoriaModel[];

  constructor(private services:CategoriaService) { }

  ngOnInit(): void {


 this.rellenarRegistros();
  }

  rellenarRegistros() {

    this.services.getTodosRegistros().subscribe(
      collection => {
        this.listadoRegistros = collection;
        console.log(this.listadoRegistros);

      },
      // error => {
      //   mostrarMensaje("Enlace con backend fallido")
      // }
    );


  }
  page:number = 1;
  collection: any[] = [];

}

