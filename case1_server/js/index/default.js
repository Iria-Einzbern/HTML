var ADchooser1=document.getElementById('chooser1')
var ADchooser2=document.getElementById('chooser2')
var ADchooser3=document.getElementById('chooser3')
var ADchooser4=document.getElementById('chooser4')

function updateChooser(chooser, bgColor, visibility) {
    chooser.querySelector('.ch-img').style.backgroundColor = bgColor;
    chooser.querySelector('i').style.visibility = visibility;
}

updateChooser(ADchooser1, 'rgb(0,195,183)', 'visible');
