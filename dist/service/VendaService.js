"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const Venda_1 = require("../models/Venda");
const VendaRepository_1 = require("../repository/VendaRepository");
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository;
    }
    AdicionarVenda(vendaData) {
        const { cpf, itens, total } = vendaData;
        if (!vendaData) {
            throw new Error("Informações incompletas");
        }
        const foundVenda = this.pesquisarVenda(undefined);
        if (foundVenda) {
            throw new Error("Produto já cadastrado!!!");
        }
        const novaVenda = new Venda_1.Venda(cpf, itens, total);
        this.vendaRepository.adicionarVenda(novaVenda);
        console.log(novaVenda);
        return novaVenda;
    }
    pesquisarVenda(id) {
        if (id) {
            console.log("Com ID");
            const idNumber = parseInt(id, 10);
            return this.vendaRepository.vendaId(idNumber);
        }
        console.log(id);
        return undefined;
    }
    todasVendas(ordem) {
        return this.vendaRepository.todasVendas();
    }
}
exports.VendaService = VendaService;
