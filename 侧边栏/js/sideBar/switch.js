var allSubSideMenu = document.querySelectorAll('.containDM');

let sideBar = document.querySelector('.sideBar');
let sideBarSwitch = document.querySelector('.sideBarSwitch');
let headerFonts = document.querySelector('.headerFonts');
let headerIcon = document.querySelector('.headerIcon');
let sideBarSpace = document.querySelector('.sideBarSpace');


//展开侧边栏
sideBarSwitch.addEventListener('click',()=>{
    sideBar.classList.toggle('close');
    headerFonts.classList.toggle('hidden');
    headerIcon.classList.toggle('hidden')
    sideBarSwitch.querySelector('i').classList.toggle('overturn')
    sideBarSpace.classList.toggle('close')
    closeOtherMenu();
})

let darkModeSwitchButton = document.querySelector('.darkModeSwitchButton');
let DMSButtonMainBall = document.querySelector('.DMSButtonMainBall');
let body = document.querySelector('body')
let DMSButtonMain = document.querySelector('.DMSButtonMain');


//切换暗黑模式
darkModeSwitchButton.addEventListener('click',()=>{
    DMSButtonMainBall.classList.toggle('buttonMove')
    DMSButtonMain.classList.toggle('buttonOn')
    body.classList.toggle('dark')
})




function closeSideBar(){
    sideBar.classList.toggle('close',true);
    headerFonts.classList.toggle('hidden',true);
    headerIcon.classList.toggle('hidden',false)
    sideBarSwitch.querySelector('i').classList.toggle('overturn',false)
    sideBarSpace.classList.toggle('close',true)
    closeOtherMenu();
}
//监听点击是否在侧边栏上，不在侧边栏则执行关闭侧边栏函数
document.querySelector("body").addEventListener('click',(event)=>{
    let clickElement = event.target.closest('.sideBar')
    if(clickElement!=sideBar){
        closeSideBar();
    }
})