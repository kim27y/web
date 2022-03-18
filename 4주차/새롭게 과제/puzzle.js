var startDiv = document.getElementById("startDiv");
var startTitle = document.getElementById("startTitle");
var startButton = document.getElementById("startButton");
var mainTag = document.getElementsByTagName("main");
var victory = document.getElementsByTagName("victory");

function startGame() {    
    var checkDup = [0,0,0,0,0,0,0,0,0]
    var beforeGround = document.getElementById("beforeGround");

    startTitle.style.display="none";
    startButton.style.display="none";
    mainTag.item(0).style.display="inline-block";

    for (var i = 1; i <=8; i++){
        var tmpNum = Math.floor(Math.random()*10) + 1;
        var tmpImg;
        var tmpDom;
        
        while(checkDup[tmpNum]!=0) tmpNum = Math.floor(Math.random()*10) + 1;
        checkDup[tmpNum]=1;
        tmpImg = 'img/'+tmpNum + '.jpg'
        tmpDom = document.createElement("img");
        tmpDom.setAttribute("src", tmpImg);
        tmpDom.setAttribute("position", "absolute")
        tmpDom.setAttribute("width","10%");
        tmpDom.setAttribute("draggable","true");
        tmpDom.setAttribute("ondragstart","startPuzzleEvent(this)");
        tmpDom.setAttribute("ondragover","duringPuzzleEvent()");
        tmpDom.setAttribute("ondrop","takePuzzleEvent(this)");
        beforeGround.appendChild(tmpDom);
    }


}

function victory() {
    mainTag.item(0).style.display="none";
    victory.style.display="block";
}