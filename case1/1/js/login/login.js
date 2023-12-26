var loginButton = document.getElementById("submit");

var usrnInput = document.querySelector('input[name="username"]');
var pwdInput = document.querySelector('input[name="password"]');

var form = document.querySelector('form');

var pwdOK=false;
var usrnOK=false;

// 设置 Cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
//获取cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}






//阻止默认提交
form.addEventListener('submit',function(event){
    event.preventDefault();
})


usrnInput.addEventListener('input',function(){
    data.usrn=usrnInput.value;
    if(data.usrn==''){
        usrnOK = false;
        usrnError.style.visibility='visible';
    }
    else{
        usrnOK = true;
        usrnError.style.visibility='hidden';
    }
})
pwdInput.addEventListener('input',function(){
    data.pwd=pwdInput.value;
    if(data.pwd==''){
        pwdOK = false;
        pwdError.style.visibility='visible';
    }
    else{
        pwdOK = true;
        pwdError.style.visibility='hidden';
    }
})


var xhr = new XMLHttpRequest();
var data={
    usrn:0,
    pwd:0
}




loginButton.addEventListener('click',function(){
    if(usrnOK&&pwdOK){
        var jsonData=JSON.stringify(data);
        console.log(jsonData);

        xhr.open('post','http://127.0.0.1:8888',true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(jsonData);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //解析后台传回的对象
            var resData=JSON.parse(xhr.responseText);
            if(resData.userExist==false){
                alert("该用户不存在");
            }
            else{
                if(resData.pwdOK==false){
                    alert("密码错误，请重新输入");
                }
                else{
                    //保存token在cookie里
                    setCookie("smartlab411LoginToken",resData.token,7);
                    console.log(getCookie("smartlab411LoginToken"))
                    location.href="./query.html";//跳转至后台页面

                }
            }
            return;
        }

        if (xhr.status === 0) {
            console.error("网络请求失败: 请求被中止");
            alert("网络请求失败，请检查网络连接或联系管理员");
        }
    };

})
