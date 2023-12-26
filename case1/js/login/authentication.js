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
}
else{
    var xhr = new XMLHttpRequest();
    var jsonToken = JSON.stringify({ token: token });

    xhr.open('post','http://127.0.0.1:10101',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resData = false;
            resData=JSON.parse(xhr.responseText).certified;
            if(resData){
                location.href="./query.html";//跳转至后台页面
            }
        }
    }

    xhr.send(jsonToken);
}