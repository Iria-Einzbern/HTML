var button1 = document.getElementById("test1");
var button2 = document.getElementById("test2");
var text1 = document.getElementById("back1");
var text2 = document.getElementById("back2");

button1.addEventListener('click',function(){
    data = document.querySelector("select[name='id']").value;
    fetch("http://127.0.0.1:22222/idEcho?id="+data)
        .then(function(res){
            //判断请求是否成功
            if (!res.ok) {
                text1.innerHTML="网络请求好像有点问题uwu...";
                throw new Error('网络请求好像有点问题uwu...');
            }
            //处理返回值
            return res.json();
        })
        .then(function(data){
            text1.innerHTML=data;
        })
        //捕获错误并输出
        .catch(function(err){
            text1.innerHTML="网络请求好像有点问题uwu...";
            console.log(err);
        })
    console.log(data);
})

button2.addEventListener('click',function(){
    data = document.querySelector("input[name='name']").value;
    console.log(data);
    fetch("http://127.0.0.1:22222/hello",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:data})
    })
        .then(function(res){
            if (!res.ok) {
                // HTTP 错误状态码会在这里处理
                text2.innerHTML="网络请求好像有点问题uwu...";
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            //处理返回值
            return res.json();
        })
        .then(function(data){
            console.log(data);
            text2.innerHTML=data;
        })
        .catch(function(err){
            text2.innerHTML="网络请求好像有点问题uwu...";
            console.log(err);
        })
    //console.log(data);
})