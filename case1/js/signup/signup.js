var signupButton = document.getElementById("submit");
var infoText = document.getElementById("infoText");
var codeDiv = document.getElementById("code");
var backInfoButton = document.getElementById("backInfo");
var errorTips = document.getElementById("errorTips");
var Tips = document.getElementById("Tips");

var usrnInput = document.querySelector('input[name="username"]');
var pwdInput = document.querySelector('input[name="password"]');
var emailInput = document.querySelector('input[name="email"]');
var confirmPwdInput = document.querySelector('input[name="confirmPassword"]');
var codeInput = document.querySelector('input[name="code"]');

var form = document.querySelector('form');

var pwdOK=false;
var confirmPwdOK=false;
var usrnOK=false;
var emailOK=false;
//各项判定
var codeOK=false;
var pwd=null;
var codePattern = /^\d{6}$/;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
var pwdPattern = /^.{8,}$/
//默认第一页
var isCode=false;
//验证码计时器
var sendCodeStart = null;



var userData={
    username:0,
    email:0,
    password:0,
}




//阻止默认提交
form.addEventListener('submit',function(event){
    event.preventDefault();
})


usrnInput.addEventListener('input',function(){
    usrn=usrnInput.value;
    if(usrn==''){
        usrnOK = false;
        usrnError.style.visibility='visible';
    }
    else{
        usrnOK = true;
        usrnError.style.visibility='hidden';
    }
})
pwdInput.addEventListener('input',function(){
    pwd=pwdInput.value;
    if(!pwdPattern.test(pwd)){
        pwdOK = false;
        pwdError.style.visibility='visible';
    }
    else{
        pwdOK = true;
        pwdError.style.visibility='hidden';
    }
})
emailInput.addEventListener('input',function(){
    email=emailInput.value;
    if(!emailPattern.test(email)){
        emailOK = false;
        emailError.style.visibility='visible';
    }
    else{
        emailOK = true;
        emailError.style.visibility='hidden';
    }
})
confirmPwdInput.addEventListener('input',function(){
    cpwd=confirmPwdInput.value;
    if(pwd==cpwd){
        confirmPwdOK = true;
        confirmPwdError.style.visibility='hidden';
    }
    else{
        confirmPwdOK = false;
        confirmPwdError.style.visibility='visible';
    }
})
codeInput.addEventListener('input',function(){
    code=codeInput.value;
    if(codePattern.test(code)){
        codeOK = true;
        codeError.style.visibility='hidden';
    }
    else{
        codeOK = false;
        codeError.style.visibility='visible';
    }
})


//检查验证码
function inspectCode(codeOK){
    console.log("验证码填写状态"+codeOK);
    if(codeOK){
        let code={
            code:codeInput.value,
            timestamp:Date.now()
        }
        //console.log(code);
        //向后台发送验证码进行比对
        fetch("http://127.0.0.1:12121/inspectCode",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(code)
        })
        .then((res)=>{
            if (!res.ok) {
                // HTTP 错误状态码会在这里处理
                errTips("发生未知错误")
                throw new Error(`HTTP错误! 状态码: ${res.status}`);
            }
            return res.json();
        })
        .then((verify)=>{
            if(verify.codeCorrect==false){
                console.log(verify);
                errTips("验证码错误");
            }
            else{
                if(verify.timeout==true){
                    errTips("该验证码已过期，请尝试重新获取");
                }
                else{
                    console.log(verify);
                    if(verify.write==true){
                        infoTips("注册成功，请前往登录");
                        setTimeout(()=>{
                            location.href="./login.html";
                        },2500)
                    }
                    else{
                        errTips("未知错误，请尝试重新注册");
                    }

                }
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
    else{
        console.log("验证码格式错误");
        codeError.style.visibility='visible';
        return;
    }
}
//发送验证码
function sendCode(){
    if(sendCodeStart==null||(Date.now()-sendCodeStart)>30000){
        //console.log("验证码发送成功");
        userData.username=usrnInput.value;
        userData.email=emailInput.value;
        userData.password=pwdInput.value;

        //计时
        sendCodeStart = Date.now();


        fetch("http://127.0.0.1:12121/sendCode",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userData)
        })
        .then(function(res){
            if (!res.ok) {
                // HTTP 错误状态码会在这里处理
                errTips("发生未知错误")
                throw new Error(`HTTP错误! 状态码: ${res.status}`);
            }
            return res.json();
        })
        .then(function(data){
            console.log(data.success);
            infoTips("验证码发送成功");
        })
        .catch(function(err){
            console.log(err);
            errTips("发生未知错误,可能导致验证码发送不成功")
        })
    }
    else{
        time = (30-((Date.now()-sendCodeStart)/1000)).toFixed(0);
        errTips(time+"秒后才可再次发送")
    }
}
//检查重复注册
function inspectReSignup(){
    userData.username=usrnInput.value;
    return fetch("http://127.0.0.1:12121/inspectReSignup",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userData)
    })
    .then(function(res){
        if (!res.ok) {
            // HTTP 错误状态码会在这里处理
            errTips("发生未知错误")
            throw new Error(`HTTP错误! 状态码: ${res.status}`);
        }
        return res.json();
    })
    .then((result)=>{
        if(result.searchState==0){
            errTips("未知错误，请重试");
            console.log("搜索失败")
            return false;
        }
        else if(result.searchState==1){
            errTips("该用户名已经被注册");
            return false;
        }
        else{
            return true;
        }
    })
    .catch((error)=>{
        console.log(error);
        errTips("未知错误，请重试");
        return false;
    })
}




//表单提交错误时点击按钮将不会跳转，转而触发错误提示
function errTips(tip){
    document.getElementById('errorTip').innerHTML=tip;
    errorTips.style.zIndex=5;
    errorTips.style.transform="translateY(-5px)";
    errorTips.style.opacity=1;
    const timerId = setTimeout(function(){
        errorTips.style.zIndex=-1;
        errorTips.style.transform="translateY(-15px)";
        errorTips.style.opacity=0;
        clearTimeout(timerId);
    },2000)
}
function infoTips(tip){
    document.getElementById('Tip').innerHTML=tip;
    Tips.style.zIndex=5;
    Tips.style.transform="translateY(-5px)";
    Tips.style.opacity=1;
    const timerId = setTimeout(function(){
        Tips.style.zIndex=-1;
        Tips.style.transform="translateY(-15px)";
        Tips.style.opacity=0;
        clearTimeout(timerId);
    },2000)
}


function next(){
    infoText.style.transform="translateX(-80px) scale(0.8)";
    infoText.style.opacity=0;
    infoText.style.zIndex=-1;
    codeDiv.style.transform="translateX(0) scale(1)";
    codeDiv.style.opacity=1;
    codeDiv.style.zIndex=5;
    //表示已经下一页
    isCode=true;
}
function back(){
    //返回上一页
    isCode=false;
    infoText.style.transform="translateX(0) scale(1)";
    infoText.style.opacity=1;
    infoText.style.zIndex=5;
    codeDiv.style.transform="translateX(80px) scale(0.8)";
    codeDiv.style.opacity=0;
    codeDiv.style.zIndex=-1;
}


backInfoButton.addEventListener('click',function(){
    back();
})
document.getElementById('reSendCode').addEventListener('click',function(){
    sendCode();
})


signupButton.addEventListener('click',function(){
    if(isCode){
            console.log("检查验证码");
            inspectCode(codeOK);
        }
        else{
            //增加重复性检测
            if(pwdOK&&usrnOK&&emailOK&&confirmPwdOK){
                inspectReSignup().then((isRepeat)=>{
                    if(isRepeat){
                    //翻页
                        next();
                        console.log("发送验证码");
                        sendCode();
                    }
                })
            }
            else{
                console.log("表单提交错误");
                errTps("请确定各项填写正确");
            }
        }
})


