"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PaoController_1 = require("./controller/PaoController");
const EstoqueController_1 = require("./controller/EstoqueController");
const VendaController_1 = require("./controller/VendaController");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/api/modalidade/todas', PaoController_1.TodosPaesController);
app.get('/api/modalidade/:id', PaoController_1.PesquisarPaesController);
app.post('/api/modalidade/', PaoController_1.AdicionarPaesController);
app.put('/api/modalidade/:id', PaoController_1.AtualizarPaesController);
app.delete('/api/modalidade/:id', PaoController_1.DeletarPaesController);
app.get('/api/venda/todas', VendaController_1.TodasVendaController);
app.get('/api/venda/:id', VendaController_1.PesquisarVendaController);
app.post('/api/venda/', VendaController_1.AdicionarVendaController);
app.get('/api/estoque/todos', EstoqueController_1.TodosEstoqueController);
app.get('/api/estoque/:id', EstoqueController_1.PesquisarEstoqueController);
app.post('/api/estoque/', EstoqueController_1.AdicionarEstoqueController);
app.put('/api/estoque/:id', EstoqueController_1.AtualizarEstoqueController);
app.delete('/api/estoque/:id', EstoqueController_1.DeletarEstoqueController);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//export default app;
