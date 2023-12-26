var allSubSideMenu = document.querySelectorAll('.containDM');

//给侧边栏挂载下拉菜单
allSubSideMenu.forEach(subMenu => {
    //元素渲染时初始化子菜单高度和标题高度
    var textHeight=subMenu.querySelector('.subSideMenuDiv').offsetHeight;
    var dropHeight=subMenu.querySelector('.dropMenu').offsetHeight;

    let dropDownMenuButton=subMenu.querySelector('.dropDownMenuButton');
    //状态变量，初始为关
    subMenu.setAttribute('isopen', 'false');

    //添加监听器
    subMenu.addEventListener('click',(event)=>{
        //查看当前菜单是否展开,确认菜单元素并比较菜单是否包含close类
        if(event.target.closest('.sideBar').classList.contains('sideBar')
            &&!event.target.closest('.sideBar').classList.contains('close')){
                
                //每次点击刷新子菜单高度和标题高度
                textHeight=subMenu.querySelector('.subSideMenuDiv').offsetHeight;
                dropHeight=subMenu.querySelector('.dropMenu').offsetHeight;
                var clickedElement = event.target.closest('.subSideMenuDiv');

                
                // 如果点击的是标题区域，执行展开/关闭操作
                if (clickedElement==subMenu.querySelector('.subSideMenuDiv')) {
                    closeOtherMenus(subMenu,textHeight);
                    subMenu.classList.toggle('dropDownOn')
                    dropDownMenuButton.classList.toggle('overturn')
                    // 获取父元素
                    var parentElement = clickedElement.parentNode.parentNode;
                    var isopen=subMenu.getAttribute('isopen')
                    if(isopen=='false'){
                        parentElement.style.height=dropHeight+textHeight+"px"
                        subMenu.setAttribute('isopen','true')
                    }
                    else{
                        parentElement.style.height=textHeight+"px"
                        isopen=false;
                        subMenu.setAttribute('isopen','false')
                    }
                }
            }
    })
});



// 关闭其他菜单的函数，并重置它们的状态
function closeOtherMenus(currentMenu,defaultHeight) {
    allSubSideMenu.forEach(menu => {
        if (menu !== currentMenu) {
            menu.style.height = defaultHeight+"px";
            menu.setAttribute('isopen','false')
            sideTextRec(menu)
        }
    });
}

//不能复用的痛。。。
function closeOtherMenu(){
    let defaultHeight=document.querySelector('.subSideMenuDiv').offsetHeight;
    allSubSideMenu.forEach(menu => {
            menu.style.height = defaultHeight+"px";
            menu.setAttribute('isopen','false')
            sideTextRec(menu)
    });
}

function sideTextRec(menu){
    var parentDiv = menu.closest('.containDM');
    if(parentDiv!=document.querySelector('body')){
        parentDiv.classList.toggle('dropDownOn',false)
    }
    //强行移除按钮的旋转属性
    menu.querySelector('.dropDownMenuButton').classList.toggle('overturn',false)
}



