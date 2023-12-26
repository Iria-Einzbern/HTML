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
var token = getCookie("smartlab411LoginToken");


if(token == null){
    location.href="./jumpError.html";//跳转至错误页面
}
else{
    var xhr = new XMLHttpRequest();
    var jsonToken = JSON.stringify({ token: token });

    xhr.open('post','http://127.0.0.1:10101',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(jsonToken);//


    xhr.onreadystatechange = function () {
        console.log(this.readyState);
        //发送失败
        if(xhr.status === 0){
            location.href="./jumpError.html";//跳转至错误页面
        }
        //成功获取到授权
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resData = false;
            resData=JSON.parse(xhr.responseText).certified;
            if(resData){
            }  
            else{
                location.href="./jumpError.html";//跳转至错误页面
            }
        }
        else{
            if(xhr.readyState === 2||xhr.readyState === 3){
                if(xhr.status === 500){
                    location.href="./jumpError.html";//跳转至错误页面
                }
            }else{
                location.href="./jumpError.html";//跳转至错误页面
            }
        }
    }
}




