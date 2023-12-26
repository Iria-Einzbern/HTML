var sidebarHidden = false;//设置初始状态为不隐藏

var sidebarButton = document.getElementById("sidebarButton");//获取div按钮块元素并命名为sidebarButton

sidebarButton.addEventListener("click", sidebarControl);//获取按钮点击，点击即执行内部的回调函数

function sidebarControl()
{
    var sidebar = document.getElementById("sidebar");//获取侧边栏元素块并命名为sidebar

    if (sidebarHidden)//判断状态 sidebarHidden
    {
      sidebar.style.display = "block"; // 展开
    }
    else 
    {
      sidebar.style.display = "none"; // 折叠
    }
    sidebarHidden = !sidebarHidden; // 切换状态
}



