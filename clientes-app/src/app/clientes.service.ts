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

 atualizar(cliente: Cliente) : Observable<any>{

  return this.http.put<Cliente>(`http://localhost:3000/clientes/${cliente.id}`,cliente);
 }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/clientes')
  }

  getClienteById(id:number) : Observable<Cliente>{
    return this.http.get<any>(`http://localhost:3000/clientes/${id}`)
  }

  deleteClient(id: number) : Observable<Cliente>{
    return this.http.delete<Cliente>(`http://localhost:3000/clientes/${id}`)
  }

}
