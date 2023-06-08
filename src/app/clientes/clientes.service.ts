import { Injectable } from '@angular/core';
import { Cliente, Grupo} from "./clientes.module";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'sin definir'
      },
      {
        id: 1,
        nombre: 'Activo de guayaba'
      },
      {
        id: 2,
        nombre: 'Inactivo de guayaba'
      },
      {
        id: 3,
        nombre: 'Guayaberos'
      },
    ];
    this.clientes = [];
  }
  getGrupos(){
    return this.grupos;
  }
  getClientes(){
    return this.clientes;
  }
  agregarCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }
  nuevoCliente(): Cliente{
    return {
      id: this.clientes.length,
      nombre: '',
      ine: '',
      direccion: '',
      grupo: 0
    };
  }
}
