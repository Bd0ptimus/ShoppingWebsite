// Make the pictures can role when click to the button 
var i=0;

function openNav(){
    document.getElementById("sidenav").style.width="250px";
    document.getElementById("myOverlay").style.display="250px";
}

function closeNav(){
    document.getElementById("sidenav").style.display="0px";
    document.getElementById("myOverlay").style.display="0px";
}

function Buy(){
    i++;
    var ele=document.getElementById("new");
    ele.innerHTML = "HI";
}

var counter=3;