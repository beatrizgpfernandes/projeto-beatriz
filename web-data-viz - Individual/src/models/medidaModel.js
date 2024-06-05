var database = require("../database/config");


function pers() {

    var instrucaoSql = `SELECT personagem.nome as Personagem, count(personagem.nome) as Quantidade
    FROM usuario join personagem on fkPersonagem = personagem.id
    GROUP BY personagem.nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function idade() {

    var instrucaoSql = `SELECT TIMESTAMPDIFF(YEAR, CAST(dtNasc AS UNSIGNED), NOW()) as Idade, count(TIMESTAMPDIFF(YEAR, CAST(dtNasc AS UNSIGNED), NOW())) as Quantidades
    FROM usuario group by Idade order by Idade;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   pers,
    idade
}
