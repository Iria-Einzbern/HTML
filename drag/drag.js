function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    //将被拖动元素的id存储在对象中
    ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev){
    ev.preventDefault();

    let xclass = ev.target.classList;

    if(xclass=="dropTarget"){
        let id = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(id));
    }
}