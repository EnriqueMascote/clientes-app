import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService} from "./clientes.service";
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

providers: [
  ClientesService
]

export interface Cliente{
  id: number;
  nombre: string;
  ine: string;
  direccion: string;
  grupo: number;
}
export interface Grupo{
  id: number;
  nombre: string;
}
@NgModule({
  declarations: [
    AltaClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }
