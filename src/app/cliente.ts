import { Animal } from "./animal";

export class Cliente {
    nome : string;
    email : string;
    telefone : string;
    dataCadastro : Date;
    listaAnimal  : Animal [] = []
    
    constructor(
        nome : string,
        email : string,
        telefone : string,
        dataCadastro: Date
    ){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dataCadastro = dataCadastro;
    }
    adicionarAnimais(animal : Animal) : void {
        if(this.listaAnimal.length < 5){
            this.listaAnimal.push(animal);
        }else{
            throw new Error ("O limite já utrapassou")
        }
    }
}
