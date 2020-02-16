var express = require('express');
var router = express.Router();
var userDao = require("../dao/UserDao");

router.get('/', function (req, res) {
  userDao.findAllUsers(function (docs) {
    res.json(docs)
  })
});

router.post("/", function (req, res) {
  userDao.addUser(req.body, function (doc) {
    res.json(doc)
  })
})

router.post("/update/", function (req, res) {
  userDao.updateUser(req.body, function (doc) {
    res.json(doc)
  })
})

router.post("/delete/", function (req, res) {
  console.log(req.body.id);
  userDao.deleteUser(req.body.id, function (doc) {
    res.json(doc)
  })
})

module.exports = router;
