import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-clientes-form',
  standalone: false,
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

 constructor(){
  this.cliente = new Cliente();

 }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  clicar(){
    console.log(this.cliente)
  }

}
