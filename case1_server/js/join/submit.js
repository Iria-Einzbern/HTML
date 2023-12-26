var allForms = document.querySelectorAll('form')//获取所有表单
var allFormData = []//存储表单数据的数组
var FormDataKV = {}//结构化后的表单数据
var submitButton = document.getElementById('submit-button')
//获取姓名，邮箱，电话号码的表单数据
var nameform=document.getElementById('nameform')
var emailform=document.getElementById('emailform')
var phoneform=document.getElementById('phoneform')
var namedata
var emaildata
var phonedata
//正则表达式
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
var phoneRegex =/^\d{11}$/
//判断布尔变量
var nameOK = false
var emailOK = false
var phoneOK = false
//校验提示
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var phoneError = document.getElementById('phoneError');
//校验输入数据


nameform.addEventListener('input',function(){
    namedata=nameform.value;
    if(namedata==''){
        nameOK = false;
        nameError.style.visibility='visible';
    }
    else{
        nameOK = true;
        nameError.style.visibility='hidden';
    }
})




emailform.addEventListener('input',function(){
    emaildata=emailform.value;

    if(emailRegex.test(emaildata)){
        emailOK = true;
        emailError.style.visibility='hidden';
    }
    else{
        emailOK = false;
        emailError.style.visibility='visible';
    }
})
phoneform.addEventListener('input',function(){
    phonedata=phoneform.value;
    if(phoneRegex.test(phonedata)){
        phoneOK = true;
        phoneError.style.visibility='hidden';
    }
    else{
        phoneError.style.visibility='visible';
        phoneOK = false;
    }
})







allForms.forEach(function(form){
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单的默认提交行为
    });
})

    submitButton.addEventListener('click',function(){
    allFormData = [];
    FormDataKV = {};
    var selectedAbility = [];
    var selectedInterested = [];

    if(phoneOK&&emailOK&&nameOK)//输入正确则提交
    {
        allForms.forEach(function(form){
            var formData = new FormData(form);
            var updatedFormData = new FormData();

            // 把language勾选的内容转换为对应值
        form.querySelectorAll('input[name="ability"]:checked').forEach(function (checkbox) {
            var label = form.querySelector('label[for="' + checkbox.id + '"]').innerText;
            selectedAbility.push(label);
        });

        // 把direction勾选的内容转换为对应值
        form.querySelectorAll('input[name="interested"]:checked').forEach(function (checkbox) {
            var label = form.querySelector('label[for="' + checkbox.id + '"]').innerText;
            selectedInterested.push(label);
        });

        formData.forEach(function (value, key) {
            if (key === 'ability') {
                updatedFormData.append(key, selectedAbility);
            } else if (key === 'interested') {
                updatedFormData.append(key, selectedInterested);
            } else {
                updatedFormData.append(key, value);
            }
        });

            allFormData.push(updatedFormData);//获取单一表单的数据并存到allFormData里面
        });
        



        allFormData.forEach(function (formData) {
            for (var pair of formData.entries()) {
                FormDataKV[pair[0]]=pair[1];
            }
        });

        var jsonData=JSON.stringify(FormDataKV);
    
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://43.138.11.233:9999/', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            

            //发送数据
            xhr.send(jsonData);



            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var resData = false;
                    resData=JSON.parse(xhr.responseText).success;
                    console.log(resData);
                    if(resData){
                        alert("提交成功！");
                        location.reload();
                    }
                    else{
                        alert("数据提交成功，但保存至数据库出现问题，请重试\n(请检查是否重复提交)");
                    }
                }
                if (xhr.status === 0) {
                    console.error("网络请求失败: 请求被中止");
                    alert("网络请求失败，请检查网络连接或联系管理员");
                }
            };
    }

    else{//输入错误则提示
        alert("输入有误，请检查姓名，邮箱，电话号码是否输入正确！");
    }
    
})





