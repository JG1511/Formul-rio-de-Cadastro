export class Animal {
    nome : string;
    dataNascimento : Date;
    sexo : string;
    especie : string;

    constructor(
        nome : string,
        dataNascimento : Date,
        sexo : string,
        especie : string

    ){
        this.nome =nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.especie = especie;
    }
}
