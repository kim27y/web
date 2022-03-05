var startPuzzle;
var mouseX, mouseY;

window.onload = function() {
    var checkDup = [0,0,0,0,0,0,0,0,0,0,0]
    var beforeGround = document.getElementById("beforeGround");

    for (var i = 1; i <=10; i++){
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

function startPuzzleEvent(puzzle){
    startPuzzle = puzzle;
}

function takePuzzleEvent(puzzle){
    console.log("테이크");
    puzzle.getBoundingClientRect().top += 50;
    puzzle.getBoundingClientRect().left += 50;
    return false;
}

function duringPuzzleEvent() {
    event.preventDefault();
}

function takeGroundEvent(ev) {
    ev.preventDefault();
    console.log("그라운드테이크");
}