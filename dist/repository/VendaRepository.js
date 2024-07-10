"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
class VendaRepository {
    constructor() {
        this.vendaLista = [];
    }
    adicionarVenda(venda) {
        this.vendaLista.push(venda);
    }
    vendaId(id) {
        return this.vendaLista.find(item => item.id === id);
    }
    todasVendas() {
        return this.vendaLista;
    }
}
exports.VendaRepository = VendaRepository;
