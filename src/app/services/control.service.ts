import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  login: any
  logout: any;

  constructor(private router:Router) { }
}
