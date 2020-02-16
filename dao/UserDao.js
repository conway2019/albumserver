const mongoose = require("mongoose")
require("../model/index");
let userModel = mongoose.model("user")

//增加用户
function addUser(doc, callback) {
    userModel.create(doc, function (err, newDoc) {
        if (!err) callback(newDoc.toObject())
        else console.log(err);
    })
}

//查询用户
function findAllUsers(callback) {
    userModel.find({}).exec(function (err, docs) {
        if (!err) callback(docs)
        else console.log(err);
    })
}

//删除用户
function deleteUser(id, callback) {
    userModel.remove({"id": id}, function (err) {
        if (!err) callback({})
        else console.log(err);
    })
}

//更新用户
function updateUser(doc, callback) {
    let obj = eval(doc);
    let id = obj.id;
    userModel.findOneAndUpdate({"id": id}, obj, function (err, newDoc) {
        if (!err) callback(newDoc)
        else console.log(err);
    })
}

module.exports = {addUser, findAllUsers, deleteUser, updateUser}