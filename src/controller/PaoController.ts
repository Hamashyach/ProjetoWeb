import { Request, Response } from "express";
import { PaoService } from "../service/PaoService";

const paoService = new PaoService();

export function AdicionarPaesController(req:Request, res: Response ){
    try {
        const novoPao = paoService.adicionarPao(req.body);
        res.status(201).json(
            {

                mensagem: "Produto adicionado com sucesso!",
                pao: novoPao
            }
        );
    } catch (error: any){
        res.status(400).json({message: error.message});
    }
};

export function PesquisarPaesController(req: Request, res: Response) {
    try{
        const pao =parseInt(req.params.id);
        const foundPao = paoService.PesquisarPao(pao, req);
        if(foundPao) {
            res.status(200).json(
                {
                    mensagem: "Produto encontrado com sucesso!",
                    pao: foundPao
                }
            );
        } else {
            res.status(404).json({mensagem: "Produto não encontrado!"});

        } 
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};

export function TodosPaesController(req: Request, res: Response) {
    try {
        res.status(200).json(paoService.todosPaes(req.query.ordem));
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};

export function DeletarPaesController(req: Request, res: Response) {
    try {
        paoService.deletarPaes(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
};

export function AtualizarPaesController(req: Request, res: Response) {
    try {
        const { nome, vegano, precovenda } = req.body;
        const id = parseInt(req.params.id);
        const atualizarpaes = { id, nome, vegano, precovenda };

        const newBread = paoService.atualizarpaes(atualizarpaes);

        res.status(201).json(
            {
                mensagem: "Produto atualizado com sucesso!",
                bread: atualizarpaes
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};