import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() {}

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();

    cliente.id=0;
    cliente.nome="Fulanito";
    cliente.cpf="12121212";
    cliente.dataCadastro="01/01/2111";

    return cliente;
  }
}
