import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Cliente } from '../cliente';
import{ClientesService} from'../../clientes.service'

@Component({
  selector: 'app-clientes-lista',
  standalone: false,
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'

})
export class ClientesListaComponent implements OnInit {

  clientes : Cliente[] =[];
  clienteselecionado: Cliente | null = new Cliente();
  mensagemSucesso: string="";

  constructor(private service: ClientesService, private router: Router){}

  ngOnInit(): void {

    this.service
    .getClientes()
    .subscribe(response =>
      this.clientes = response)
  }

  cadastro(){
    this.router.navigate(['/clientes-form'])
  }

  voltarHome(){
    this.router.navigate(['/home'])
  }

  preparaDelecao(cliente: Cliente){
    this.clienteselecionado = cliente;
  }

  delete(clienteId: number): void {
    this.clienteselecionado = this.clientes.find(cliente => cliente.id === clienteId) ?? new Cliente();
  }

  confirmDelete(): void {
    if (this.clienteselecionado) {
      this.clientes = this.clientes.filter(cliente => this.clienteselecionado && cliente.id !== this.clienteselecionado.id);
      this.clienteselecionado = null;
    }
  }

}
