import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const router = Router();

router.get("/selecoes", SelecaoController.index);
//buscar seleçao por id Get  :id -> parametro
router.get('/selecoes/:id', SelecaoController.show)
/* rota post para postar dados */
router.post('/selecoes', SelecaoController.store)
//rota atualizar dados com base no id
router.put('/selecoes/:id', SelecaoController.update)
//rota deletar dados com base no id
router.delete('/selecoes/:id', SelecaoController.delete)

export default router;