import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  estaLogueado: Boolean=false;
  role: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
