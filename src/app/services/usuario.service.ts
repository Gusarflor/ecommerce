import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private auth:Auth, private router:Router) { }

  token:string='';

  //metodos para enlazar componente Control con Firebase

  registrar({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loguear({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }


  logout(){
    return signOut(this.auth);
  }


}
