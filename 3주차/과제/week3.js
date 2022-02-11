var a = parseInt(document.getElementById("inputa").value);
var b = parseInt(document.getElementById("inputb").value);

var first;
var last;
var gihos;

function printhi() {
    console.log("ㅠㅛㄷ");
}

// function add(a , b) {
//     return a + b;
// 전역변수가 많을수록 용량 많아짐
// 전역변수의 경우 시작에서 초기화하기 떄문에 제대로 사용하기 위해 업데이트를 해야 함


function insertequal(){
    document.getElementById("giho").value = giho;
    adds();
}

function add(){
    a = parseInt(document.getElementById("inputa").value);
    b = parseInt(document.getElementById("inputb").value);

    if (document.getElementById("giho").value =='+'){
        document.getElementById("resultbox").innerHTML = a + b;
    }

    else if (document.getElementById("giho").value =='-'){
        document.getElementById("resultbox").innerHTML = a - b;
    }
   
    else if (document.getElementById("giho").value =='*'){
        document.getElementById("resultbox").innerHTML = a * b;
    }
   
    else if (document.getElementById("giho").value =='/'){
        document.getElementById("resultbox").innerHTML = a / b;
    }

    else {
        document.getElementById("resultbox").innerHTML = "Invalid giho"
    }
}

/*
이벤트 - 유저의 행동
*/