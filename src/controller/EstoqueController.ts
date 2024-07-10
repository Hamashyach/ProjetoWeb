import { Request, Response} from "express";
import { EstoqueService} from "../service/EstoqueService";

const estoqueService = new EstoqueService();

export function AdicionarEstoqueController(req: Request, res: Response) {
    try {
        const { paoId, quantidade, precovenda } = req.body;
        const paraEstoque ={ paoId, quantidade, precovenda } 
        console.log(paraEstoque);
        const novoEstoque = estoqueService.adicionarEstoque(paraEstoque);
        res.status(201).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                pao: novoEstoque
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function PesquisarEstoqueController(req: Request, res: Response){
    try{
        const pao = parseInt(req.params.id);
        const foundEstoque = estoqueService.pesquisarEstoque(pao);
        if(foundEstoque) {
            res.status(200).json(
                {
                    mensagem: "Produto encontrado com sucesso!",
                    pao: foundEstoque
                }
            );
        } else{
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function DeletarEstoqueController(req: Request, res: Response) {
    try {
        estoqueService.deletarEstoque(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
};

export function AtualizarEstoqueController(req: Request, res: Response) {
    try {
        const { paoId, quantidade, precovenda } = req.body;
        const id = parseInt(req.params.id);
        const atualizarEstoque = { paoId, quantidade, precovenda };

        const novoEstoque= estoqueService.atualizarEstoque(id, atualizarEstoque);

        res.status(201).json(
            {
                mensagem: "Produto atualizado com sucesso!",
                pao: atualizarEstoque
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function TodosEstoqueController(req: Request, res: Response) {
    try {
        res.status(200).json(estoqueService.todosEstoque(req));
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};