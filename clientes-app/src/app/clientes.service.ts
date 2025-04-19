import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

 constructor( private http : HttpClient){ }


 salvar(cliente: Cliente) : Observable<Cliente>{

  return this.http.post<Cliente>(' http://localhost:3000/clientes',cliente);
 }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/clientes')
  }

  geti() : Cliente[]{
    let cliente = new Cliente();
    cliente.id=0;
    cliente.nome="Renan";
    cliente.cpf="122121222";
    cliente.dataCadastro="01/01/1111"
    return [cliente];
  }
}
