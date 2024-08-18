function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function dai(){
    document.getElementById("dai").innerHTML = "dai";
  }

function primo(){
    document.querySelector('.pre-primo-mese').classList.toggle('remove');
}
function secondo(){
    document.querySelector('.pre-secondo-mese').classList.toggle('remove');
}
function terzo(){
    document.querySelector('.pre-terzo-mese').classList.toggle('remove');
}
function quarto(){
    document.querySelector('.pre-quarto-mese').classList.toggle('remove-quarto');
}
function quinto(){
    document.querySelector('.pre-quinto-mese').classList.toggle('remove-quarto');
}
function sesto(){
    document.querySelector('.pre-sesto-mese').classList.toggle('remove-quarto');
}
function settimo(){
    document.querySelector('.pre-settimo-mese').classList.toggle('remove-quarto');
}
function ottavo(){
    document.querySelector('.pre-ottavo-mese').classList.toggle('remove-quarto');
}
function nono(){
    document.querySelector('.pre-nono-mese').classList.toggle('remove-quarto');
}
function decimo(){
    document.querySelector('.pre-decimo-mese').classList.toggle('remove-quarto');
}
function undicesimo(){
    document.querySelector('.pre-undicesimo-mese').classList.toggle('remove-quarto');
}