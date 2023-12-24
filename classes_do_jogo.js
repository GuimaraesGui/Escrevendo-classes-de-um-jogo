let ficha_de_personagem = {
    nome: "João das Neves",
    idade: 17,
    classe: "Ninja"
}

class char_info {
    constructor(classe) {
        this.classe = classe
    }
    atacar(classe){
        if (classe == "Guerreiro"){
            console.log(`\nO ${this.classe} atacou usando espada.`)
        } else if (classe  == "Mago") {
            console.log(`\nO ${this.classe} atacou usando magia.`)
        } else if (classe == "Monge") {
            console.log(`\nO ${this.classe} atacou usando artes marciais.`)
        } else if (classe == "Ninja") {
            console.log(`\nO ${this.classe} atacou usando Shuriken.`)
        }
    }
    print_ficha(){
        console.log(`Nome: ${ficha_de_personagem.nome}\nIdade: ${ficha_de_personagem.idade}\nClasse: ${ficha_de_personagem.classe}`)
    }
}

let objeto = new char_info(ficha_de_personagem.classe)
objeto.print_ficha()
objeto.atacar(ficha_de_personagem.classe)