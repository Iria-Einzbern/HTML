/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2024-01-02 21:22:13
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-03 18:58:50
 * @FilePath: /HTML/LazyLoading/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const express = require("express")
const cors = require('cors')

const expressApp = express()
expressApp.use(cors())

function test(title,main){
    this.title=title
    this.main=main
}
expressApp.get('/lazyloading',(req,res)=>{
    id=req.query.id
    console.log(id)
    let testdata = new Array(10)

    for(let i=0;i<testdata.length;i++){
        let tt = Math.random().toFixed(1)
        let ma = Math.random().toFixed(1)
        let newTest = new test(tt,ma)
        testdata[i]=newTest
    }

    console.log(testdata)
    res.send(testdata)
})
expressApp.listen(3939,()=>{
    console.log("服务器在端口3939上启动")
})