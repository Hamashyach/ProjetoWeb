"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdicionarEstoqueController = AdicionarEstoqueController;
exports.PesquisarEstoqueController = PesquisarEstoqueController;
exports.DeletarEstoqueController = DeletarEstoqueController;
exports.AtualizarEstoqueController = AtualizarEstoqueController;
exports.TodosEstoqueController = TodosEstoqueController;
const EstoqueService_1 = require("../service/EstoqueService");
const estoqueService = new EstoqueService_1.EstoqueService();
function AdicionarEstoqueController(req, res) {
    try {
        const { paoId, quantidade, precovenda } = req.body;
        const paraEstoque = { paoId, quantidade, precovenda };
        console.log(paraEstoque);
        const novoEstoque = estoqueService.adicionarEstoque(paraEstoque);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            pao: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function PesquisarEstoqueController(req, res) {
    try {
        const pao = parseInt(req.params.id);
        const foundEstoque = estoqueService.pesquisarEstoque(pao);
        if (foundEstoque) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                pao: foundEstoque
            });
        }
        else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function DeletarEstoqueController(req, res) {
    try {
        estoqueService.deletarEstoque(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function AtualizarEstoqueController(req, res) {
    try {
        const { paoId, quantidade, precovenda } = req.body;
        const id = parseInt(req.params.id);
        const atualizarEstoque = { paoId, quantidade, precovenda };
        const novoEstoque = estoqueService.atualizarEstoque(id, atualizarEstoque);
        res.status(201).json({
            mensagem: "Produto atualizado com sucesso!",
            pao: atualizarEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function TodosEstoqueController(req, res) {
    try {
        res.status(200).json(estoqueService.todosEstoque(req));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
