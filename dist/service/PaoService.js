"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaoService = void 0;
const Pao_1 = require("../models/Pao");
const PaoRepository_1 = require("../repository/PaoRepository");
class PaoService {
    constructor() {
        this.paoRepository = new PaoRepository_1.PaoRepository;
    }
    adicionarPao(paoData) {
        const { nome, preco, vegano } = paoData;
        if (!paoData) {
            throw new Error("Informações já Incompletas");
        }
        const foundPao = this.PesquisarPao(undefined, nome);
        if (foundPao) {
            throw new Error("Produto já cadastrado!!!");
        }
        const novoPao = new Pao_1.Pao(nome, preco, vegano);
        this.paoRepository.adicionarPao(novoPao);
        return novoPao;
    }
    PesquisarPao(id, nome) {
        if (id) {
            console.log("Com ID");
            const idNumber = parseInt(id, 10);
            return this.paoRepository.paoId(idNumber);
        }
        else if (nome) {
            console.log("Nome");
            return this.paoRepository.paoNome(nome);
        }
        console.log(id);
        return undefined;
    }
    todosPaes(ordem) {
        if (ordem === "desc") {
            return this.paoRepository.todosPaes();
        }
        return this.paoRepository.todosPaes();
    }
    deletarPaes(id) {
        const pao = this.PesquisarPao(id, undefined);
        if (!pao) {
            throw new Error("Produto não encontrado");
        }
        this.paoRepository.deletarPao(pao);
    }
    atualizarpaes(paoData) {
        const pao = this.PesquisarPao(paoData.id, undefined);
        if (!pao) {
            throw new Error("Produto não encontrado");
        }
        this.paoRepository.AtualizarPaoRepository(paoData.id, paoData);
    }
}
exports.PaoService = PaoService;
