import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';


@Component({
  selector: 'app-clientes-form',
  standalone: false,
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: string[] = [];

 constructor(private service: ClientesService){
  this.cliente= new Cliente();
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.service.salvar(this.cliente)
    .subscribe(resposta =>{
      this.success=true;
      this.errors=[];
      this.cliente=resposta;
    }, error =>{
      this.success=false;
      this.errors=error.errors;
    })
  }

}
