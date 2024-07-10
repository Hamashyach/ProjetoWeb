import { Request, Response } from "express";
import {VendaService} from "../service/VendaService";
import { EstoqueService} from "../service/EstoqueService";

const vendaService = new VendaService();
const estoqueService = new EstoqueService();

export function AdicionarVendaController(req: Request, res: Response) {
    try{
        const { cpf, itens, total } = req.body;
        const avenda = { cpf, itens, total }
        const novaVenda = vendaService.AdicionarVenda(avenda);
        res.status(201).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                pao: novaVenda
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
        
};

export function PesquisarVendaController(req: Request, res: Response) {
    try{
        res.status(200).json(vendaService.todasVendas(req));
    } catch  (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function TodasVendaController(req: Request, res: Response) {
    try {
        res.status(200).json(vendaService.todasVendas(req));
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};



