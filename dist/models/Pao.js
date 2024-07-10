"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pao = void 0;
class Pao {
    constructor(nome, preco, vegano) {
        this.nome = nome;
        this.preco = preco;
        this.vegano = vegano;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.Pao = Pao;
