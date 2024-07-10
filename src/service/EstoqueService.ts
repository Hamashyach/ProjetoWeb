import { Estoque } from "../models/Estoque";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class EstoqueService {

    estoqueRepository: EstoqueRepository = new EstoqueRepository;
    
    adicionarEstoque(estoqueData: any): Estoque {
        const { paoId, quantidade, precoVenda} = estoqueData;
        if (!estoqueData){
            throw new Error("Informações incompletas");
        }

        const foundEstoque = this.pesquisarEstoque(undefined);
        if (foundEstoque){
            throw new Error("Produto já cadastrado!!!");
        }
        const novoEstoque = new Estoque(paoId, quantidade, precoVenda);
        this.estoqueRepository.adicionarEstoque(novoEstoque);
        console.log(novoEstoque);
        return novoEstoque;
    }

    pesquisarEstoque(id: any): Estoque | undefined {
        if(id) {
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.estoqueRepository.estoqueId(idNumber);
        }
        console.log(id)
        return undefined;
    }

    todosEstoque(ordem: any): Estoque[] {
        return this.estoqueRepository.todosEstoque();
    } 

    deletarEstoque(id: any) {
        const item = this.pesquisarEstoque(id);
        if (!item) {
            throw new Error("Produto não encontrado");
        }

        this.estoqueRepository.deletarEstoque(item);
    }

    atualizarEstoque(id: any, estoque: any): void{
        const pao = this.pesquisarEstoque(id.id);
        if(pao) {
            throw new Error("Produto não encontrado");
        }

        this.estoqueRepository.atualizarEstoqueRepository(id, estoque);
    }
}
    

