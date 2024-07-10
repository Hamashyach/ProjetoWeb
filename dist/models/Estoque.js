"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor(paoId, quantidade, precoVenda) {
        this.paoId = paoId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.Estoque = Estoque;
