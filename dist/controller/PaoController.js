"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdicionarPaesController = AdicionarPaesController;
exports.PesquisarPaesController = PesquisarPaesController;
exports.TodosPaesController = TodosPaesController;
exports.DeletarPaesController = DeletarPaesController;
exports.AtualizarPaesController = AtualizarPaesController;
const PaoService_1 = require("../service/PaoService");
const paoService = new PaoService_1.PaoService();
function AdicionarPaesController(req, res) {
    try {
        const novoPao = paoService.adicionarPao(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            pao: novoPao
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function PesquisarPaesController(req, res) {
    try {
        const pao = parseInt(req.params.id);
        const foundPao = paoService.PesquisarPao(pao, req);
        if (foundPao) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                pao: foundPao
            });
        }
        else {
            res.status(404).json({ mensagem: "Produto não encontrado!" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function TodosPaesController(req, res) {
    try {
        res.status(200).json(paoService.todosPaes(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function DeletarPaesController(req, res) {
    try {
        paoService.deletarPaes(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function AtualizarPaesController(req, res) {
    try {
        const { nome, vegano, precovenda } = req.body;
        const id = parseInt(req.params.id);
        const atualizarpaes = { id, nome, vegano, precovenda };
        const newBread = paoService.atualizarpaes(atualizarpaes);
        res.status(201).json({
            mensagem: "Produto atualizado com sucesso!",
            bread: atualizarpaes
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
