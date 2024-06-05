var personagemModel = require("../models/personagemModel");

// function buscarPorCnpj(req, res) {
//   var cnpj = req.query.cnpj;

//   personagemModel.buscarPorCnpj(cnpj).then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

function listar(req, res) {
  personagemModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  personagemModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

// function cadastrar(req, res) {
//   var cnpj = req.body.cnpj;
//   var razaoSocial = req.body.razaoSocial;

//   personagemModel.buscarPorCnpj(cnpj).then((resultado) => {
//     if (resultado.length > 0) {
//       res
//         .status(401)
//         .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
//     } else {
//       personagemModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
//         res.status(201).json(resultado);
//       });
//     }
//   });
// }

module.exports = {
  // buscarPorCnpj,
  buscarPorId,
  // cadastrar,
  listar,
};
