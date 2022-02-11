var color = null;

function getColorEvent(num){
    var divList = document.getElementsByClassName("box");
    var nowDiv = divList[num];

    color = nowDiv.style.backgroundColor; // ->안됨 css 외부로 빼거나 하면 안됨
    color = window.getComputedStyle(nowDiv).backgroundColor;
    console.log(color);
}

function setDragOverEvent(){ // 얘가 예외 처리
    event.preventDefault();
}

function setColorEvent(){
    var result = document.getElementById("result");
    result.style.backgroundColor = color;
}
