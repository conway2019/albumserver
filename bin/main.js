const mongo = "mongodb://127.0.0.1:17027/music"
const mongoose = require("mongoose")
const http = require("http")

require('../model')
const app = require("../app")


let server = http.createServer(app)

mongoose.connect(mongo, function (err) {
    if (err) {
       console.log("mongo建立连接失败");
       console.log(err);
    }
    else{
        console.log("mongo建立连接成功");
        server.listen(3001, function (err) {
            if (!err) console.log("服务监听3001端口")
        })
    }
})

server.on('close', function () {
    mongoose.disconnect()
    console.log("服务关闭,mongo释放连接")
})