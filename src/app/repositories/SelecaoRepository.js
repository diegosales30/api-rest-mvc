import { consulta } from "../database/conexao.js";

class SelecaoRepository {
  //CRUD
  //regas relacionadas ao MySql E persistencia de dados no mysql

  //metodo para criar
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;"
    /*return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (erro, result) => {
        if(erro) return reject('Não foi possivel cadastrar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    }) */
    return consulta(sql, selecao, 'Não foi possivel cadastrar!')
  }
  //metodos para buscar tudo com SELECT *
  findAll() {
    const sql = `SELECT * FROM selecoes;`
    // return new Promise((resolve, reject) => {
    //   conexao.query(sql, (erro, result) => {
    //     if(erro) return reject('Não foi possivel cadastrar!');

    //     const row = JSON.parse(JSON.stringify(result));
    //     return resolve(row);
    //   })
    // })
    return consulta(sql, 'Não foi possivel encontrar!')
  }

  //metodo para buscar por ID
  findById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=?;`
    // return new Promise((resolve, reject) => {
    //   conexao.query(sql, id, (erro, result) => {
    //     if(erro) return reject('Não localizado!');

    //     const row = JSON.parse(JSON.stringify(result));
    //     return resolve(row);
    //   })
    // })     
    return consulta(sql, id, 'Não foi possivel encontrar!')
  }

  //metodo para criar no SQL
  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    // return new Promise((resolve, reject) => {
    //   conexao.query(sql, [selecao, id], (erro, result) => {
    //     if(erro) return reject('Não foi possivel atualizar!');

    //     const row = JSON.parse(JSON.stringify(result));
    //     return resolve(row);
    //   })
    // })
    return consulta(sql, [selecao, id], 'Não foi possivel atualizar!')

  }
  //metodo para DELETAR no SQL
  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=?;`
    // return new Promise((resolve, reject) => {
    //   conexao.query(sql, id, (erro, result) => {
    //     if(erro) return reject('Não foi possivel deletar!');

    //     const row = JSON.parse(JSON.stringify(result));
    //     return resolve(row);
    //   })
    // })
    return consulta(sql, id, 'Não foi possivel apagar!')
  }
}

export default new SelecaoRepository();