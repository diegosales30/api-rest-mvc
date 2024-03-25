import SelecaoRepository from "../repositories/SelecaoRepository.js";

//regra de negocio
class SelecaoController {
    // vai listar td por *
    async index (req, res) {
      const row = await SelecaoRepository.findAll();
      res.json(row);
    }
    // vai listar td por id
    async show(req, res) {
      const id = req.params.id;
      const row = await SelecaoRepository.findById(id);
      //const linha = row[0]
      res.json(row[0]);
    } 
    // vai criar dados
    async store(req, res) {
      const selecao = req.body;
      const row = await SelecaoRepository.create(selecao);
      res.json(row);
    } 
    // vai atualizar dados
    async update(req, res) {
      const selecao = req.body;
      const id = req.params.id;
      const row = await SelecaoRepository.update(selecao, id);
      res.json(row);   
    } 
    // vai apagar dados
    async delete(req, res) {
      const id = req.params.id;
      const row = await SelecaoRepository.delete(id);
      res.json(row);
    }
}

//padrão singleton
export default new SelecaoController()