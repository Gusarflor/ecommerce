import { Router } from '@angular/router';
import { ControlService } from './../../../services/control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: ControlService,
              private router: Router) { }

  ngOnInit(): void {
    this.service.logout();
    this.router.navigate(['/home']);
  }

}
