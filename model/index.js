const mongoose = require("mongoose")

//歌星
let SingerSchema = mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    introduction: String,
    songs: []
})

//专辑
let AlbumSchema = mongoose.Schema({
    id: String,
    name: String,
    author: String,
    age: String,
    introduction: String,
    songs: []
})

//用户管理
let UserSchema = mongoose.Schema({
    id: String,
    name: String,
    password: String,
    phone: String,
    mail: String,
    role: {type: Number, default: 0}
})

mongoose.model("singer", SingerSchema)
mongoose.model("album", AlbumSchema)
mongoose.model("user", UserSchema)