import { Venda } from "../models/Venda";

export class VendaRepository {  
    vendaLista: Venda[] = [];
    adicionarVenda(venda: Venda) {
        this.vendaLista.push(venda);
    }

    vendaId(id: number): Venda | undefined {
        return this.vendaLista.find(item => item.id === id);
    }

    todasVendas(): Venda[] {
        return this.vendaLista;
    }
}
