const mongoose = require("mongoose")
require("../model/index");
let singerModel = mongoose.model("singer")

//增加歌手
function addSinger(doc, callback) {
    singerModel.create(doc, function (err, newDoc) {
        if (!err) callback(newDoc.toObject())
        else console.log(err);
    })
}

//查询歌手
function findAllSingers(callback) {
    singerModel.find({}).exec(function (err, docs) {
        if (!err) callback(docs)
        else console.log(err);
    })
}

//删除歌手
function deleteSinger(id, callback) {
    singerModel.remove({"id": id}, function (err) {
        if (!err) callback({})
        else console.log(err);
    })
}

//更新歌手
function updateSinger(doc, callback) {
    let obj = eval(doc);
    let id = obj.id;
    singerModel.findOneAndUpdate({"id": id}, obj, function (err, newDoc) {
        if (!err) callback(newDoc)
        else console.log(err);
    })
}

module.exports = {addSinger, findAllSingers, deleteSinger, updateSinger}