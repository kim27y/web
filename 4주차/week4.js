
    var num = [];
window.onload = function() {
    //배열 
    // var arr = [1,2,3,4,5];

    // for (var i = 0; i< 5; i++){
    //     console.log(arr[i]);
    // }

}

function resultEvent(){
    
    // var targetNum = document.getElementById("targetNum").value;
    // var numBox = document.getElementsByClassName("numBox");
    // var resultBox = document.getElementById("resultBox");

    // for (var i = 0; i<9; i++){
    //     numBox[i].innerHTML = parseInt(targetNum) * (i + 1);
    // }

    // for (var i = 0; i <9; i++) {
    //     var tmpDiv = document.createElement("div");
    //     tmpDiv.innerHTML = parseInt(targetNum) * (i+1);
    //     resultBox.appendChild(tmpDiv);
    // }
}

    function insertEvent(){
        var insertNum = document.getElementById("insertNum").value;
        num.push(insertNum);
}

function printEvent(){
    for (var i = 0; i<num.length; i++) {
        console.log(num[i]);
    }
}