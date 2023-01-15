import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ControlService } from './../../../services/control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {


  constructor(private services: ControlService, private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {

  }

}
