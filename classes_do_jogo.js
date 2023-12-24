class classes_jogaveis {
    criar_classe(nome, idade, classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe 
    }
    skills (classe){
        if (classe == "Guerreiro"){
            let skill = "usou espada"  
        } else if (classe == "Mago"){
            let skill = "usou magia"  
        } else if (classe == "Monge"){
            let skill = "usou artes marciais"  
        } else if (classe == "Ninja"){
            let skill = "usou shuriken"  
        }
    }
    atacar(classe){
        if (classe == "Guerreiro"){
            console.log(`O ${this.classe} atacou usando ${this.skill}`)   
        } else if (classe == "Mago"){
            console.log(`O ${this.classe} atacou usando ${this.skill}`)
        } else if (classe == "Monge"){
            console.log(`O ${this.classe} atacou usando ${this.skill}`)
        } else if (classe == "Ninja"){
            console.log(`O ${this.classe} atacou usando ${this.skill}`)
        }
    }
}

let ficha_de_personagem = new classes_jogaveis("João das Neves", "17", "Guerreiro")

console.log(ficha_de_personagem)
ficha_de_personagem.atacar()