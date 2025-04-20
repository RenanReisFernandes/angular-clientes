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

}
