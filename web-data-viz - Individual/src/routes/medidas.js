var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/pers", function (req, res) {
    medidaController.pers(req, res);
});

router.get("/idade", function (req, res) {
    medidaController.idade(req, res);
});

module.exports = router;