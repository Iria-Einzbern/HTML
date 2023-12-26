    window.addEventListener('scroll',function(){
    var top = this.document.getElementById("top")
    var wallpaper =this.document.getElementById("wallpaper")

    var dropdown1 =this.document.querySelector(".dropdown1")
    var dropdown2 =this.document.querySelector(".dropdown2")
    var dropdown3 =this.document.querySelector(".dropdown3")
    var dropdown4 =this.document.querySelector(".dropdown4")
    var dropdown5 =this.document.querySelector(".dropdown5")

    var center=this.document.getElementById("center")

    var body=this.document.getElementById("body")

    if (this.window.scrollY===0)
    {
        top.style.backgroundColor='rgba(255, 255, 255, 0.4)';
        top.style.boxShadow='5px 5px 20px rgba(217, 217, 217,0)';
        wallpaper.style.opacity='0.9'
        dropdown1.style.backgroundColor='rgba(255, 255, 255, 0.4)';
        dropdown2.style.backgroundColor='rgba(255, 255, 255, 0.4)';
        dropdown3.style.backgroundColor='rgba(255, 255, 255, 0.4)';
        dropdown4.style.backgroundColor='rgba(255, 255, 255, 0.4)';
        dropdown5.style.backgroundColor='rgba(255, 255, 255, 0.4)';

        center.style.top=0;
        

       


    }
    else
    {
        top.style.backgroundColor= 'rgba(255, 255, 255,1)';
        top.style.boxShadow= '5px 5px 20px rgba(217, 217, 217,1)';
        wallpaper.style.opacity='0'
        dropdown1.style.backgroundColor='rgba(255, 255, 255, 1)';
        dropdown2.style.backgroundColor='rgba(255, 255, 255, 1)';
        dropdown3.style.backgroundColor='rgba(255, 255, 255, 1)';
        dropdown4.style.backgroundColor='rgba(255, 255, 255, 1)';
        dropdown5.style.backgroundColor='rgba(255, 255, 255, 1)';

        center.style.top='-100vh';
        center.style.marginTop='180px'

        
    }
})

