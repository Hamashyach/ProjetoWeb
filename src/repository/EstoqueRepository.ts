import { Estoque } from "../models/Estoque";

export class EstoqueRepository {
    estoqueLista: Estoque[] = [];
    adicionarEstoque(estoque: Estoque){
        this.estoqueLista.push(estoque);
    }



    estoqueId(id: number): Estoque | undefined {
        return this.estoqueLista.find(item => item.id === id);
    }

    todosEstoque(): Estoque [] {
        return this.estoqueLista;
    }

    deletarEstoque(estoque: Estoque) {
        const index = this.estoqueLista.indexOf(estoque);
        if (index !== -1) {
            this.estoqueLista.splice(index, 1);
        }
    }

    atualizarEstoqueRepository(id: number, estoque: Estoque): void {
        const index = this.estoqueLista.findIndex(s => s.id === id);
        console.log(index);
        if (index !== -1) this.estoqueLista[index] = estoque;
    }


}


