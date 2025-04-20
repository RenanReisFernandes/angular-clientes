import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  standalone: false,
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css',
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  errors: string[] = [];
  id: number=0;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activated: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activated.params
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.service
        .getClienteById(this.id)
        .subscribe(
          response =>this.cliente = response,
          erroResponse => this.cliente = new Cliente()
        )
      }

    })
  }

  onSubmit() {
    if(this.id){
      this.service.atualizar(this.cliente)
      .subscribe(response =>{
        this.success = true;
        this.errors = [];
      },erroResponse =>{
        this.errors=['erro ao atualizar!']
      })

    }else{
      this.service
      .salvar(this.cliente)
      .subscribe(
        (resposta) => {
          this.success = true;
          this.errors = [];
          this.cliente = resposta;
        },
        (error) => {
          this.success = false;
          this.errors = error.errors;
        }
      );
    }

  }

  voltar() {
    this.router.navigate(['/app-clientes-lista']);
  }
}
