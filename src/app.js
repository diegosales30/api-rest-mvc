import express from "express";
import router from "./routes.js";

// import SelecaoController from "./app/controllers/SelecaoController.js";

const app = express();

/* indicar para o express ler body com json */
app.use(express.json());

//usar o router tem que ser chamado depois do express.json()
app.use(router)
//colocar rotas no arquivo separado
//ROTAS
// app.get("/selecoes", SelecaoController.index);
// //buscar seleçao por id Get  :id -> parametro
// app.get('/selecoes/:id', SelecaoController.show)
// /* rota post para postar dados */
// app.post('/selecoes', SelecaoController.store)
// //rota atualizar dados com base no id
// app.put('/selecoes/:id', SelecaoController.update)
// //rota deletar dados com base no id
// app.delete('/selecoes/:id', SelecaoController.delete)
export default app;
