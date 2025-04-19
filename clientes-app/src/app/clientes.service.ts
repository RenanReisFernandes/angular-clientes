import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

 constructor( private http : HttpClient){


 }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();

    cliente.id=0;
    cliente.nome="Fulanito";
    cliente.cpf="12121212";
    cliente.dataCadastro="01/01/2111";

    return cliente;
  }
}
