"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaoRepository = void 0;
class PaoRepository {
    constructor() {
        this.paoLista = [];
    }
    adicionarPao(pao) {
        this.paoLista.push(pao);
    }
    paoId(id) {
        return this.paoLista.find(pao => pao.id === id);
    }
    paoNome(nome) {
        return this.paoLista.find(pao => pao.nome === nome);
    }
    todosPaes() {
        return this.paoLista;
    }
    deletarPao(produto) {
        const index = this.paoLista.indexOf(produto);
        if (index !== -1) {
            this.paoLista.splice(index, 1);
        }
    }
    AtualizarPaoRepository(id, produto) {
        const index = this.paoLista.findIndex(s => s.id === id);
        console.log(index);
        if (index !== -1)
            this.paoLista[index] = produto;
    }
}
exports.PaoRepository = PaoRepository;
