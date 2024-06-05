var database = require("../database/config");

function listar() {

    var instrucaoSql = `SELECT personagem.nome 
    FROM usuario join personagem on fkPersonagem = personagem.id
    GROUP BY personagem.nome
    order by count(*) desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function listar2() {

    var instrucaoSql = `SELECT min(TIMESTAMPDIFF(YEAR, CAST(dtNasc AS UNSIGNED), NOW())) as idadeMin from usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function listar3() {

    var instrucaoSql = `SELECT max(TIMESTAMPDIFF(YEAR, CAST(dtNasc AS UNSIGNED), NOW())) as idadeMax from usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function listarR() {

    var instrucaoSql = `SELECT nome, pontuacao as Ranking
    from usuario join pontuacaoQuiz on fkUsuario = usuario.id
   order by pontuacao desc
   limit 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
   listar,
   listar2,
   listar3,
   listarR
}
