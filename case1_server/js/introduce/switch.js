var titleCar=document.getElementById('title-car')
var titleHealth=document.getElementById('title-health')
var titleHard=document.getElementById('title-hard')

var Car=document.getElementById('subitem-car')
var Health=document.getElementById('subitem-health')
var Hard=document.getElementById('subitem-hard')




function titleStyleOn(title){
    title.querySelector('.mainTitle').style.fontWeight='500';
    title.querySelector('.mainTitle').style.borderBottom='1px solid'
    title.querySelector('.mainTitle').style.transform='translateY(-0.1vw)'
}
function titleStyleOff(title){
    title.querySelector('.mainTitle').style.fontWeight='300';
    title.querySelector('.mainTitle').style.borderBottom='none'
    title.querySelector('.mainTitle').style.transform='translateY(0)'
}

function mainHidden(subitem){
    subitem.style.visibility ='hidden'
    subitem.style.transform = 'translateY(5vw)'
    subitem.style.opacity = '0'
}
function mainDisplay(subitem){
    subitem.style.visibility ='visible'
    subitem.style.transform = 'translateY(2.5vw)'
    subitem.style.opacity = '1'
}



titleCar.addEventListener('click',function(){
    titleStyleOn(titleCar);
    titleStyleOff(titleHealth);
    titleStyleOff(titleHard);
    mainDisplay(Car);
    mainHidden(Health);
    mainHidden(Hard);
})
titleHealth.addEventListener('click',function(){
    titleStyleOff(titleCar);
    titleStyleOn(titleHealth);
    titleStyleOff(titleHard);
    mainDisplay(Health);
    mainHidden(Car);
    mainHidden(Hard);
})
titleHard.addEventListener('click',function(){
    titleStyleOff(titleCar);
    titleStyleOff(titleHealth);
    titleStyleOn(titleHard);
    mainDisplay(Hard);
    mainHidden(Health);
    mainHidden(Car);
})