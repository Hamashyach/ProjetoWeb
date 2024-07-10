"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const Estoque_1 = require("../models/Estoque");
const EstoqueRepository_1 = require("../repository/EstoqueRepository");
class EstoqueService {
    constructor() {
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository;
    }
    adicionarEstoque(estoqueData) {
        const { paoId, quantidade, precoVenda } = estoqueData;
        if (!estoqueData) {
            throw new Error("Informações incompletas");
        }
        const foundEstoque = this.pesquisarEstoque(undefined);
        if (foundEstoque) {
            throw new Error("Produto já cadastrado!!!");
        }
        const novoEstoque = new Estoque_1.Estoque(paoId, quantidade, precoVenda);
        this.estoqueRepository.adicionarEstoque(novoEstoque);
        console.log(novoEstoque);
        return novoEstoque;
    }
    pesquisarEstoque(id) {
        if (id) {
            console.log("Com ID");
            const idNumber = parseInt(id, 10);
            return this.estoqueRepository.estoqueId(idNumber);
        }
        console.log(id);
        return undefined;
    }
    todosEstoque(ordem) {
        return this.estoqueRepository.todosEstoque();
    }
    deletarEstoque(id) {
        const item = this.pesquisarEstoque(id);
        if (!item) {
            throw new Error("Produto não encontrado");
        }
        this.estoqueRepository.deletarEstoque(item);
    }
    atualizarEstoque(id, estoque) {
        const pao = this.pesquisarEstoque(id.id);
        if (pao) {
            throw new Error("Produto não encontrado");
        }
        this.estoqueRepository.atualizarEstoqueRepository(id, estoque);
    }
}
exports.EstoqueService = EstoqueService;
