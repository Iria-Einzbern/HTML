var allSubSideMenu = document.querySelectorAll('.containDM');

let sideBar = document.querySelector('.sideBar');
let sideBarSwitch = document.querySelector('.sideBarSwitch');
let headerFonts = document.querySelector('.headerFonts');
let headerIcon = document.querySelector('.headerIcon');


//展开侧边栏
sideBarSwitch.addEventListener('click',()=>{
    sideBar.classList.toggle('close');
    headerFonts.classList.toggle('hidden');
    headerIcon.classList.toggle('hidden')
    sideBarSwitch.querySelector('i').classList.toggle('overturn')
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