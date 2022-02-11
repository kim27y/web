var leftmenu = document.getElementById("leftmenu");
var leftsidemenu = document.getElementById("leftsidemenu");
var mains = document.getElementById("mains");
var headers = document.getElementById("headers");
var allgray = document.getElementById("allgray");
var leftAnchor = document.querySelectorAll(".leftAnchor");
var leftminiAnchor = document.querySelectorAll(".leftminiAnchor");
var menuFlag;

window.onresize = function() {
    if(window.innerWidth < 1300) {
        if (leftmenu.classList.contains('hidden')){
            leftmenu.classList.remove('hidden');
            mains.classList.remove('moveMain');
        }
    }

    else {
        if (leftmenu.classList.contains('miniopen')){
            leftmenu.classList.remove('miniopen');
            allgray.classList.remove('allgrayOpen');
        }
    
    }
}

function cclick(){
    if (window.innerWidth > 1300){
        leftmenu.classList.toggle('hidden');
        mains.classList.toggle('moveMain');
    }

    else {
        leftsidemenu.classList.toggle('miniopen');
        allgray.classList.toggle('allgrayOpen');
    }
}

function clickGray(){
    if (leftsidemenu.classList.contains('miniopen')){
        leftsidemenu.classList.remove('miniopen');
        allgray.classList.remove('allgrayOpen');
    }
}


function clickMenu() {
    if(menuFlag) menuFlag.classList.remove('clickMenus');
    menuFlag = this;
    menuFlag.classList.add('clickMenus');
}

for (var i = 0; i < leftminiAnchor.length; i++) {
    leftAnchor[i].addEventListener('click',clickMenu);
    leftminiAnchor[i].addEventListener('click',clickMenu);
}

for (var i = leftminiAnchor.length; i < leftAnchor.length; i++) {
    leftAnchor[i].addEventListener('click',clickMenu);
}