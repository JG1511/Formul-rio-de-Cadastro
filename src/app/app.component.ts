import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';
import { Animal } from './animal';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // essas variaveis estão sendo utilizadas para capturar os dados de entrada, necessario para trabalhar com o two-way
  nomeCliente = '';
  email = '';
  telefone = '';
  dataCadastro = new Date();
  
  nomeAnimal = '';
  dataNascimento = new Date();
  sexo = '';
  especie = '';

  clientes : Cliente[] = []; // criação de uma lista do tipo cliente 

  adicionarCliente(): void { // metódo na classe pai para istanciar novos objetos e adicionar a lista.
    const novoCliente = new Cliente(
      this.nomeCliente,
      this.email,
      this.telefone,
      this.dataCadastro
    );
    this.clientes.push(novoCliente);
    this.limparFormularioCliente(); // assim qeu termina o preenchimento do formulario ele é limpado
  }
  adicionarAnimal(cliente : Cliente): void{ //ele adiciona o animal ao cliente, criando um novo animal para cada cliente, que no caso seria 5 animais
    const novoAnimal = new Animal(
      this.nomeAnimal,
      this.dataNascimento,
      this.sexo,
      this.especie
    );
    const mensagem = cliente.adicionarAnimais(novoAnimal);
    alert(mensagem) // vai exibir a caixinha que o animal foi adicionado
    this.limparFormularioAnimal();
  } 

  limparFormularioCliente() : void{ // metódo para limpar o formulario 
    this.nomeCliente = '';
    this.email = '';
    this.telefone = '';
    this.dataCadastro = new Date();
  }
  limparFormularioAnimal(): void {
    this.nomeAnimal = '';
    this.dataNascimento = new Date();
    this.sexo = '';
    this.especie = '';
  }

}
