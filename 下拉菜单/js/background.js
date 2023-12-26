var wpSwitchBottom = document.getElementById("wpSwitchBottom")


wpSwitchBottom.addEventListener("click",function(){
    var video = document.querySelector("video");
    console.log(video);
    if(video.paused){
        video.play(); // 如果视频当前是暂停状态，播放视频
    }
    else{
        video.pause();
    }
})