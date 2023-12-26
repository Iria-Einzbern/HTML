var ADchooser1=document.getElementById('chooser1')
var ADchooser2=document.getElementById('chooser2')
var ADchooser3=document.getElementById('chooser3')
var ADchooser4=document.getElementById('chooser4')



var h1=document.getElementById('main1').offsetHeight
var h2=document.getElementById('main2').offsetHeight
var h3=document.getElementById('main3').offsetHeight
var h4=document.getElementById('main4').offsetHeight

window.addEventListener('resize', function() {
    h1=document.getElementById('main1').offsetHeight
    h2=document.getElementById('main2').offsetHeight
    h3=document.getElementById('main3').offsetHeight
    h4=document.getElementById('main4').offsetHeight
})

var scrollMain=document.getElementById('scrollMain')

var wait

function updateChooser(chooser, bgColor, visibility) {
    chooser.querySelector('.ch-img').style.backgroundColor = bgColor;
    chooser.querySelector('i').style.visibility = visibility;
}

function mainScroll(scrollHeight){
    scrollMain.style.transform='translateY('+ -scrollHeight +'px)'
}
function AD1(){
    clearTimeout(wait);
    updateChooser(ADchooser1, 'rgb(0,195,183)', 'visible');
    updateChooser(ADchooser2, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser3, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser4, 'rgb(234, 197, 148)', 'hidden');
    mainScroll(0);
    wait=setTimeout(AD2,3000);
}
function AD2(){
    clearTimeout(wait);
    updateChooser(ADchooser2, 'rgb(0,195,183)', 'visible');
    updateChooser(ADchooser1, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser3, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser4, 'rgb(234, 197, 148)', 'hidden');
    mainScroll(h1);
    wait=setTimeout(AD3,3000);
}
function AD3(){
    clearTimeout(wait);
    updateChooser(ADchooser3, 'rgb(0,195,183)', 'visible');
    updateChooser(ADchooser1, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser2, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser4, 'rgb(234, 197, 148)', 'hidden');
    mainScroll(h1+h2);
    wait=setTimeout(AD4,3000);
}
function AD4(){
    clearTimeout(wait);
    updateChooser(ADchooser4, 'rgb(0,195,183)', 'visible');
    updateChooser(ADchooser1, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser3, 'rgb(234, 197, 148)', 'hidden');
    updateChooser(ADchooser2, 'rgb(234, 197, 148)', 'hidden');
    mainScroll(h1+h2+h3);
    wait=setTimeout(AD1,3000);
}

AD1();




ADchooser1.addEventListener('click', function () {
    AD1();
});

ADchooser2.addEventListener('click', function () {
    AD2();
});

ADchooser3.addEventListener('click', function () {
    AD3();
});

ADchooser4.addEventListener('click', function () {
    AD4();
});



