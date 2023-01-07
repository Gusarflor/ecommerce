import { CategoriaModel } from './../../../../models/catalogo/categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/catalogo/categoria.service';


@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  page:number = 1;

  collection: any[] = [];

  // listaRegistros: CategoriaModel[] = [];

  constructor( private services: CategoriaService) { }

  ngOnInit(): void {

    this.services.getTodosRegistros();

  }

}
