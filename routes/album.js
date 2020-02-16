var express = require('express');
var router = express.Router();
var albumDao = require("../dao/AlbumDao");

router.get('/', function (req, res) {
    albumDao.findAllAlbums(function (albums) {
        res.json(albums)
    })
});

router.post("/", function (req, res) {
    albumDao.addAlbum(req.body, function (newAlbum) {
        res.json(newAlbum)
    })
})

router.post("/update/", function (req, res) {
    albumDao.updateAlbum(req.body, function (newAlbum) {
        res.json(newAlbum)
    })
})

router.post("/delete/", function (req, res) {
    console.log(req.body.id);
    albumDao.deleteAlbum(req.body.id, function (obj) {
        res.json(obj)
    })
})

module.exports = router;
