/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-11-15 19:04:39
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-09 20:38:16
 * @FilePath: /HTML/登录界面/js/showPassword.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const passwordButton = document.getElementById('passwordButton')
const passwordText = document.querySelector("#password input")

passwordButton.addEventListener('click',function(){

    if(passwordText.type=='password'){
        //若省略方式参数则默认为绿色确认提示窗
        showTip("这是确认提示窗")
        //传入warn参数则为黄色警告提示窗
        showTip("这是警告提示窗","warn")
        //传入参数err或error则为错误提示窗
        showTip("这是错误提示窗","err")
        showTip("这是错误提示窗","error")
        passwordText.type='text'
    }
    else
    {
        passwordText.type='password'
        showTip("隐藏密码成功")
    }
}
)