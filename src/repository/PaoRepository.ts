import{Pao} from "../models/Pao";

export class PaoRepository {
    paoLista: Pao[] = [];
   
    adicionarPao(pao: Pao) {
        this.paoLista.push(pao);
    }

    paoId(id: number): Pao | undefined{
        return this.paoLista.find(pao =>pao.id === id);

    }   

    paoNome(nome: string): Pao | undefined{
        return this.paoLista.find(pao => pao.nome === nome);
    }

    todosPaes(): Pao[] {
        return this.paoLista;
    }

    deletarPao(produto: Pao) {
        const index = this.paoLista.indexOf(produto);
        if (index !== -1) {
            this.paoLista.splice(index, 1);
        }
    }

    AtualizarPaoRepository(id: number, produto: Pao): void{
        const index =this.paoLista.findIndex(s => s.id === id);
        console.log(index);
        if(index !== -1) this.paoLista[index] = produto;
    }
}
