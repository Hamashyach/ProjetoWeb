export class Pao {
    id: number;
    preco: number;
    nome: string;
    vegano: boolean;
    
    constructor(nome: string, preco: number, vegano: boolean){
        this.nome = nome;
        this.preco = preco;
        this.vegano = vegano;
        this.id = this.geraId();
    }
    private geraId(): number {
        return Date.now();
    }

}    

