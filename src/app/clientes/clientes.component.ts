import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  constructor(private http: HttpClient) { }

  REST_API_SERVER = "https://localhost:5001/clientes"

  cliente:Cliente
  clientes = []
  mensagem:string

  ngOnInit(): void {
    this.cliente = new Cliente()
  	this.carregarLista()
  }

  carregarLista(){
    this.http.get(this.REST_API_SERVER).subscribe((data: Cliente[])=>{
      this.clientes = data
    })
  }

  Salvar(){
    if(!this.cliente.id || this.cliente.id === 0){
      this.http.post(this.REST_API_SERVER, this.cliente).subscribe((clienteRest: Cliente)=>{
        this.cliente = new Cliente()
        this.mensagem = "Usuario cadastrado com sucesso!"
        setTimeout(() => {
          this.mensagem = undefined
        }, 2000)
        this.carregarLista()
      }) 
    }
    else{
      this.http.put(`${this.REST_API_SERVER}/${this.cliente.id}`, this.cliente).subscribe((clienteRest: Cliente)=>{
        this.cliente = new Cliente()
        this.mensagem = "Usuario atualizado com sucesso!"
        setTimeout(() => {
          this.mensagem = undefined
        }, 2000)
        this.carregarLista()
      }) 
    }
  }

  Alterar(_cliente: Cliente){
    this.cliente = _cliente
  }

  Excluir(cliente: Cliente){
    if(confirm("Confirma ?")){
      this.http.delete(`${this.REST_API_SERVER}/${cliente.id}`).subscribe(()=>{
        this.mensagem = "Usuario excluido!"
        setTimeout(() => {
          this.mensagem = undefined
        }, 2000)
        this.carregarLista()
      })
    }
  }
}
