import express from 'express';
import {AdicionarPaesController,PesquisarPaesController, DeletarPaesController, AtualizarPaesController, TodosPaesController} from "./controller/PaoController"
import {TodosEstoqueController, PesquisarEstoqueController, AdicionarEstoqueController, AtualizarEstoqueController, DeletarEstoqueController} from "./controller/EstoqueController";
import {TodasVendaController, PesquisarVendaController, AdicionarVendaController} from "./controller/VendaController"
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/modalidade/todas', TodosPaesController);
app.get('/api/modalidade/:id', PesquisarPaesController);
app.post('/api/modalidade/', AdicionarPaesController);
app.put('/api/modalidade/:id', AtualizarPaesController);
app.delete('/api/modalidade/:id', DeletarPaesController);

app.get('/api/venda/todas', TodasVendaController);
app.get('/api/venda/:id', PesquisarVendaController);
app.post('/api/venda/', AdicionarVendaController);

app.get('/api/estoque/todos', TodosEstoqueController);
app.get('/api/estoque/:id', PesquisarEstoqueController);
app.post('/api/estoque/', AdicionarEstoqueController);
app.put('/api/estoque/:id', AtualizarEstoqueController);
app.delete('/api/estoque/:id', DeletarEstoqueController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//export default app;