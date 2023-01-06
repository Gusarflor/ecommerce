import { ControlService } from './../../../services/control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  estaLogueado: Boolean=false;
  role: number = 0;

  constructor(private services: ControlService) { }

  ngOnInit(): void {
  }

}
