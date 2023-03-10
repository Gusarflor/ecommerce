import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ControlService } from './../../../services/control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: ControlService, private router: Router, private usuarioService:UsuarioService) { }


  ngOnInit(): void {

  }
  onClick() {
    this.usuarioService.logout()

      .then(( )=> {
        this.router.navigate(['./home/defecto']);

      })
      .catch(error => console.log(error));

  }

}
