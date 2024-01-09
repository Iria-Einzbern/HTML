/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2024-01-02 20:55:18
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-03 19:27:44
 * @FilePath: /HTML/LazyLoading/js.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//向服务器请求数据
let body = document.body
let id = 114514
function lazyLoad(){
    fetch('http://127.0.0.1:3939/lazyloading?id='+id)
    .then((res)=>{
        if(!res.ok){
            console.log("出了点小问题x")
            throw new Error(`HTTP Error!StatuCode:`)
        }
        return res.json()
    })
    .then((data)=>{
        createSubDiv(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
function createSubDiv(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i])
        //创建一个新的元素
        let subDiv = document.createElement('div')
        subDiv.classList.add('test')

        let title = document.createElement('div')
        title.classList.add('title')
        title.innerHTML=data[i].title
        subDiv.appendChild(title)

        let main = document.createElement('div')
        main.classList.add('main')
        main.innerHTML=data[i].main
        subDiv.appendChild(main)

        body.appendChild(subDiv)
    }
}



lazyLoad()