import {Pao} from "../models/Pao";
import { PaoRepository } from "../repository/PaoRepository";

export class PaoService {
    
    paoRepository: PaoRepository = new PaoRepository;

    adicionarPao(paoData: any): Pao {
        const { nome, preco, vegano} = paoData;
        if (!paoData) {
            throw new Error("Informações já Incompletas");
        }

        const foundPao = this.PesquisarPao(undefined, nome);
        if (foundPao) {
            throw new Error("Produto já cadastrado!!!");
        }
        const novoPao = new Pao(nome, preco, vegano);
        this.paoRepository.adicionarPao(novoPao);
        return novoPao;
    }

    PesquisarPao(id: any, nome: any): Pao | undefined {
        if (id) {
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.paoRepository.paoId(idNumber);
        
        } else if (nome) {
            console.log("Nome");
            return this.paoRepository.paoNome(nome);

        }

        console.log(id)
        return undefined;

    }

    todosPaes(ordem: any): Pao[] {
        if (ordem === "desc") {
            return this.paoRepository.todosPaes();
        }
        return this.paoRepository.todosPaes();
    }

    deletarPaes(id: any) {
        const pao = this.PesquisarPao(id, undefined);
        if(!pao){
            throw new Error("Produto não encontrado");
        }

        this.paoRepository.deletarPao(pao);
    }
    
    atualizarpaes(paoData: any): void {
        const pao = this.PesquisarPao(paoData.id, undefined);
            if (!pao) {
                throw new Error("Produto não encontrado");
            }
        

        this.paoRepository.AtualizarPaoRepository(paoData.id, paoData);
    }
    
    
}

