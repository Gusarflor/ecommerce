import { ControlService } from './../../../services/control.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})

export class MenuNavegacionComponent implements OnInit {

  estaLogueado: Boolean=false;
  role: number = 0;

  // declare subscription: Subscription;

  constructor( private services: ControlService) { }

  ngOnInit(): void {
    // this.subscription=this.services.getdatosUsuario().susbcribe(DataService =>{
    //   this.estaLogueado=DataService.estalogueado;
    //   this.role = ControlService.role;

    // });


  }

}

