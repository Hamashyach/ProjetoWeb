import { Venda } from "../models/Venda";
import { VendaRepository } from "../repository/VendaRepository";

export class VendaService {

    vendaRepository: VendaRepository = new VendaRepository;

    AdicionarVenda(vendaData: any): Venda {
        const {cpf, itens, total} = vendaData;
        if (!vendaData) {
            throw new Error("Informações incompletas");
        }

        const foundVenda = this.pesquisarVenda(undefined);
        if (foundVenda) {
            throw new Error("Produto já cadastrado!!!");
        }
        const novaVenda = new Venda(cpf, itens, total);
        this.vendaRepository.adicionarVenda(novaVenda);
        console.log(novaVenda);
        return novaVenda;
    }

    pesquisarVenda(id: any): Venda | undefined {
        if (id) {
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.vendaRepository.vendaId(idNumber);
        }
        console.log(id)
        return undefined;
    }

    todasVendas(ordem: any): Venda[] {
        return this.vendaRepository.todasVendas();
    }
}
        
    
