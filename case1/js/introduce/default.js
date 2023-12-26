var titleCar=document.getElementById('title-car')


function titleStyle(title){
    title.querySelector('.mainTitle').style.fontWeight='500';
    title.querySelector('.mainTitle').style.borderBottom='1px solid'
    title.querySelector('.mainTitle').style.transform='translateY(-0.1vw)'
}

titleStyle(titleCar)

