/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-28 15:44:43
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-09 19:51:22
 * @FilePath: /Miku/js/homeMain/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//给tip栏开辟一块单独的悬浮div
function addTipsSide(){
    let body = document.body
    let tips = document.createElement('div')
    tips.id='tips'
    body.appendChild(tips)
}

document.addEventListener('DOMContentLoaded', function () {
    addTipsSide()
});



function showTip(tipText,method){
    let tips = document.getElementById('tips');
    //创建一个新的tip，并创建内部的span和i元素
    let tip = document.createElement("div");
    let i = document.createElement("i");
    let span = document.createElement('span');
    //关闭按钮
    let closeButton = document.createElement('div');
    closeButton.classList.add('closeButton')
    closeButton.innerHTML="<i class='fa fa-close'>"

    //默认为oktip
    i.className = "fa fa-check";
    tip.classList.add('tip');
    span.textContent=tipText;
    if(method==="error"||method==="err"){
        i.className="fa fa-close";
        tip.classList.add('errorTip');
    }
    else if(method==="warn"){
        tip.classList.add('warnTip');
        i.className="fa fa-exclamation";
    }
    else{
        tip.classList.add('okTip');
    }
    tip.appendChild(i);
    tip.appendChild(span);
    tip.classList.add('tipHidden')
    tip.appendChild(closeButton)

    tips.appendChild(tip);

    
    setTimeout(()=>{
        tip.classList.remove('tipHidden')
    },300)


    //闭包调用延迟函数
    let autoHidden = setTimeout(function () {
        tip.classList.add('tipHidden','tipMove');
        tip.style.height="0px"
        setTimeout(()=>{
            tips.removeChild(tip);
        },300)
    }, 3000); // 3000 毫秒（3 秒）后移除，可以根据需要调整时间


    closeButton.addEventListener('click',()=>{
        clearTimeout(autoHidden)
        tip.classList.add('tipHidden');
        setTimeout(()=>{
            tip.style.height="0px"
            setTimeout(()=>{
                tips.removeChild(tip);
            },300)
        },300)
    })
}

setTimeout(()=>{
    showTip(1)
},400)
