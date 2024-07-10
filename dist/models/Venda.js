"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
class Venda {
    constructor(cpf, itens, total) {
        this.id = this.geraId();
        this.cpf = cpf;
        this.itens = itens;
        this.total = total;
    }
    geraId() {
        return Date.now();
    }
}
exports.Venda = Venda;
