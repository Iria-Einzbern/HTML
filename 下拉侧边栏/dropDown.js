var allSubMenu = document.querySelectorAll('.subMenu');
allSubMenu.forEach(subMenu => {
    //元素渲染时初始化子菜单高度
    var dropHeight=subMenu.querySelector('.dropMenu').offsetHeight;
    //状态变量，初始为关
    subMenu.setAttribute('isopen', 'false');
    subMenu.addEventListener('click',(event)=>{
        // 获取被点击的元素
        var clickedElement = event.target;
        //每次点击刷新子菜单高度
        dropHeight=subMenu.querySelector('.dropMenu').offsetHeight;
        // 如果点击的是标题区域，执行展开/关闭操作
        if (clickedElement.classList.contains('subMenuText')) {
            closeOtherMenus(subMenu);
            // 获取父元素
            var parentElement = clickedElement.parentNode;

            var isopen=subMenu.getAttribute('isopen')
            console.log(isopen)

            if(isopen=='false'){
                parentElement.style.height=dropHeight+40+"px"
                subMenu.setAttribute('isopen','true')
            }
            else{
                parentElement.style.height="40px"
                isopen=false;
                subMenu.setAttribute('isopen','false')
            }
        } 
    })
});
// 关闭其他菜单的函数，并重置它们的状态
function closeOtherMenus(currentMenu) {
    allSubMenu.forEach(menu => {
        if (menu !== currentMenu) {
            menu.style.height = "40px";
            menu.setAttribute('isopen','false')
        }
    });
}





