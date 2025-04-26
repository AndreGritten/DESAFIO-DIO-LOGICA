class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;

        if (this.tipo === "mago"){
            ataque = "magia"
        }else if (this.tipo === "guerreiro"){
            ataque = "espada"
        }else if (this.tipo === "monge"){
            ataque = "artes marciais"
        }else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }
        return `do tipo ${this.tipo} atacou usando ${ataque}`
    }   
}
heroiPessoal = new hero("Geralt", 100, "mago")

console.log(heroiPessoal.atacar())