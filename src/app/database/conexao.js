//terá todo codigo necessário para seconecar com o mysql e o db
import mysql from 'mysql';

const conexao = mysql.createConnection({
  //parametros de conexão
  host: 'localhost',
  port: '3306', //port do mysql padrao
  user: 'root',
  password: '1991', 
  database: 'dbcopa' //importante passar o nome do banco
})

conexao.connect( ) // chamar o metodo conect direto aqui
//JSDOC
/**
 * 
 * @param {string} sql 
 * @param {string=id | selecao | [selecao, id]} valores 
 * @param {string} msgReject 
 * @returns 
 */

export const consulta = (sql, valores='', msgReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, result) => {
      if(erro) return reject(msgReject);

      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    })
  })
}
export default conexao;