"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdicionarVendaController = AdicionarVendaController;
exports.PesquisarVendaController = PesquisarVendaController;
exports.TodasVendaController = TodasVendaController;
const VendaService_1 = require("../service/VendaService");
const EstoqueService_1 = require("../service/EstoqueService");
const vendaService = new VendaService_1.VendaService();
const estoqueService = new EstoqueService_1.EstoqueService();
function AdicionarVendaController(req, res) {
    try {
        const { cpf, itens, total } = req.body;
        const avenda = { cpf, itens, total };
        const novaVenda = vendaService.AdicionarVenda(avenda);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            pao: novaVenda
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function PesquisarVendaController(req, res) {
    try {
        res.status(200).json(vendaService.todasVendas(req));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function TodasVendaController(req, res) {
    try {
        res.status(200).json(vendaService.todasVendas(req));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
