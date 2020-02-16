const mongoose = require("mongoose")
require("../model/index");
let albumModel = mongoose.model("album")

//增加专辑
function addAlbum(Album, callback) {
    albumModel.create(Album, function (err, newAlbum) {
        if (!err) callback(newAlbum.toObject())
        else console.log(err);
    })
}

//查询专辑
function findAllAlbums(callback) {
    albumModel.find({}).exec(function (err, albums) {
        if (!err) callback(albums)
        else console.log(err);
    })
}

//删除专辑
function deleteAlbum(id, callback) {
    albumModel.remove({"id": id}, function (err) {
        if (!err) callback({})
        else console.log(err);
    })
}

//更新专辑
function updateAlbum(album, callback) {
    let obj = eval(album);
    let id = obj.id;
    albumModel.findOneAndUpdate({"id": id}, album,function (err, newAlbum) {
        if (!err) callback(newAlbum)
        else console.log(err);
    })
}

module.exports = {addAlbum, findAllAlbums, deleteAlbum, updateAlbum}