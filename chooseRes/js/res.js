const resCSS = document.getElementById("resCSS");
var mainWidth = window.screen.width;
var newCSS = "";

if (mainWidth <= 768) {
    console.log(mainWidth)
    newCSS = "mobile.css";
} else if (mainWidth <= 1366) {
    console.log(mainWidth)
    newCSS = "low.css";
} else if (mainWidth <= 1440) {
    console.log(mainWidth)
    newCSS = "mid.css";
} else if (mainWidth <= 1920) {
    console.log(mainWidth)
    newCSS = "default.css";
} else if (mainWidth <= 2560) {
    console.log(mainWidth)
    newCSS = "high.css";
} else {
    newCSS = "veryhigh.css";
}

// 更新CSS链接
resCSS.href = "./css/"+newCSS;
