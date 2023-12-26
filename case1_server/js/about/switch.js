var side1=document.getElementById('side-Frontend')
var side2=document.getElementById('side-Backend')
var side3=document.getElementById('side-Mobile')
var side4=document.getElementById('side-Data')
var side5=document.getElementById('side-about')
var Selector=document.getElementById('sideSelected')
var itemHeight=side1.offsetHeight;
var X=0


var main1=document.getElementById('Frontend-text')
var main2=document.getElementById('Backend-text')
var main3=document.getElementById('Mobile-text')
var main4=document.getElementById('Data-text')
var main5=document.getElementById('About-text')

window.addEventListener('resize', function() {
    itemHeight=side1.offsetHeight;
    Selector.style.transform='translateY('+X*itemHeight+'px)'
})


function itemInitialization(item1,item2,item3,item4){
    item1.style.color='black';
    item2.style.color='black';
    item3.style.color='black';
    item4.style.color='black';
}
function itemSelect(item,h){
    itemHeight=side1.offsetHeight;
    X=h/itemHeight;
    item.style.color='rgb(0,195,182)';
    Selector.style.transform='translateY('+h+'px)'
}

function Hidden(main){
    main.style.opacity=0;
    main.style.transform='translateY(2vw)';
    main.style.zIndex=1;
}

function Display(main){
    main.style.opacity=1;
    main.style.transform='translateY(0)'
    main.style.zIndex=10;
}

side1.addEventListener('click',function(){
    itemInitialization(side2,side3,side4,side5);
    itemSelect(side1,0);
    Display(main1);
    Hidden(main2);
    Hidden(main3);
    Hidden(main4);
    Hidden(main5);
})
side2.addEventListener('click',function(){
    itemInitialization(side1,side3,side4,side5);
    itemSelect(side2,itemHeight);
    Display(main2);
    Hidden(main1);
    Hidden(main3);
    Hidden(main4);
    Hidden(main5);
})
side3.addEventListener('click',function(){
    itemInitialization(side1,side2,side4,side5);
    itemSelect(side3,2*itemHeight);
    Display(main3);
    Hidden(main2);
    Hidden(main1);
    Hidden(main4);
    Hidden(main5);
})
side4.addEventListener('click',function(){
    itemInitialization(side1,side3,side2,side5);
    itemSelect(side4,3*itemHeight);
    Display(main4);
    Hidden(main2);
    Hidden(main3);
    Hidden(main1);
    Hidden(main5);
})
side5.addEventListener('click',function(){
    itemInitialization(side1,side3,side4,side2);
    itemSelect(side5,4*itemHeight);
    Display(main5);
    Hidden(main2);
    Hidden(main3);
    Hidden(main4);
    Hidden(main1);
})
