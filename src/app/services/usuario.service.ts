import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth:Auth) { }

  registrar({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  loguear({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
