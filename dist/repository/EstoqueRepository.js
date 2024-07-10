"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
class EstoqueRepository {
    constructor() {
        this.estoqueLista = [];
    }
    adicionarEstoque(estoque) {
        this.estoqueLista.push(estoque);
    }
    estoqueId(id) {
        return this.estoqueLista.find(item => item.id === id);
    }
    todosEstoque() {
        return this.estoqueLista;
    }
    deletarEstoque(estoque) {
        const index = this.estoqueLista.indexOf(estoque);
        if (index !== -1) {
            this.estoqueLista.splice(index, 1);
        }
    }
    atualizarEstoqueRepository(id, estoque) {
        const index = this.estoqueLista.findIndex(s => s.id === id);
        console.log(index);
        if (index !== -1)
            this.estoqueLista[index] = estoque;
    }
}
exports.EstoqueRepository = EstoqueRepository;
