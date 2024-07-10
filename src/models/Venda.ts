interface VendaItem {
    stoqueid: number;
    quantidade: number;
    nome: string;
    precoVenda: number;
    paoId: number;
}
    export class Venda {
        public id: number;
        public cpf: number;
        public itens: VendaItem[];
        public total: number;  

        constructor(cpf: number, itens: VendaItem[], total:number){
        this.id = this.geraId();
        this.cpf = cpf;
        this.itens = itens;
        this.total = total;
        
        }

        private geraId(): number {
            return Date.now();
        }
    }

