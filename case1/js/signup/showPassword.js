const passwordButton = document.getElementById('passwordButton')
const passwordText = document.querySelector("#password input")

passwordButton.addEventListener('click',function(){

    if(passwordText.type=='password')
        passwordText.type='text'
    else
        passwordText.type='password'
}
)