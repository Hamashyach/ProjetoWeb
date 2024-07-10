export class Estoque {
    id: number;
    paoId: number;
    quantidade: number;
    precoVenda: number;

    constructor(paoId: number, quantidade:number, precoVenda:number){
        this.paoId = paoId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
        this.id = this.geraId();
    }

    private geraId(): number {
        return Date.now();
}

}