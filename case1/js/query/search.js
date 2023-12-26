var submitButton = document.getElementById('submitButton');
var inputForm = document.getElementById('inputForm');
var inputError = document.getElementById('textEmpty');
var inputField = document.querySelector('input[name="qureyData"]');
var resultMain = document.getElementById('resultMain');


var inputData;
var inputOK;


inputForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为
});



inputForm.addEventListener('input',function(){
    inputData=inputField.value;
    if(inputData==''){
        inputOK = false;
        inputError.style.visibility='visible';
    }
    else{
        inputOK = true;
        inputError.style.visibility='hidden';
    }
})


submitButton.addEventListener('click',function(){
    if(inputOK){
        console.log(inputData);
        var jsonObject = {data:inputData}
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://127.0.0.1:11451/',true);
        xhr.setRequestHeader('Content-Type', 'application/json');



        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4&&xhr.status === 200) {
                //获取后端数据，解析一次后还是字符串
                var responseData = JSON.parse(xhr.responseText);
                //解析第二次才变成对象
                const data = JSON.parse(responseData);

                console.log(data.searchState);

                if(data.searchState==-1){
                    resultMain.innerHTML="无结果";
                }
                else if(data.searchState==1){
                    resultMain.innerHTML="姓名："+data.searchResult.name+"<br>邮箱："+data.searchResult.email+"<br>手机号："+data.searchResult.phone;
                    if(data.searchResult.interested.length!=0){
                        resultMain.innerHTML+="<br>感兴趣的方向："+data.searchResult.interested;
                    }
                    if(data.searchResult.ability.length!=0){
                        resultMain.innerHTML+="<br>目前掌握："+data.searchResult.ability;
                    }
                    if(data.searchResult.message.length!=0){
                        resultMain.innerHTML+="<br>留言："+data.searchResult.message;
                    }
                }
            }
        }
        



        xhr.send(JSON.stringify(jsonObject));
    }
    else{
        return;
    }
})