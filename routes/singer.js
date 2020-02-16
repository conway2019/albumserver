var express = require('express');
var router = express.Router();
var singerDao = require("../dao/SingerDao");

router.get('/', function (req, res) {
    singerDao.findAllSingers(function (docs) {
        res.json(docs)
    })
});

router.post("/", function (req, res) {
    singerDao.addSinger(req.body, function (doc) {
        res.json(doc)
    })
})

router.post("/update/", function (req, res) {
    singerDao.updateSinger(req.body, function (doc) {
        res.json(doc)
    })
})

router.post("/delete/", function (req, res) {
    //console.log(req.body.id);
    singerDao.deleteSinger(req.body.id, function (doc) {
        res.json(doc)
    })
})

module.exports = router;
