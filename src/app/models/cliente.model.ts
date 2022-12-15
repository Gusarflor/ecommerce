import { UsuarioModel } from './usuario.model';
export class ClienteModel {

  id?= String;
  Documento = String;
  Nombre = String;
  Apellido = String;
  Telefono = Number;
  Direccion = String;
  Ciudad = String;
  email = String;
  Usuario = UsuarioModel;

}
