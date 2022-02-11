var startButton = document.getElementById("hiddenButton");
var startTitle = document.getElementById("startTitle");
var startImg = document.getElementById("startImg");
var ballDiv = document.getElementById("ballDiv");
var numButtons = document.getElementById("numButtons");
var socores = document.getElementById("socores");
var targetBall = document.getElementById("ball1");
var rows = socores.getElementsByTagName("tr");
var victoryImg = document.getElementById("victory");
var failImg = document.getElementById("fail");
var num1, num2, num3;
var trnum = 1;

function sleep(ms) {
    return new Promise((nexts) => setTimeout(nexts,ms));
}

function getIndex(className, classObj) {
    var classes = document.getElementsByClassName(className);
    for (var i = 0; classes[i]!=classObj; i++){}
    return parseInt(i);
}


function start(){
    startButton.style.display = "none";
    startTitle.style.display = "block";
    startImg.style.display="block";
}

function generateNum() {
    num1 = Math.floor(Math.random() * 8 + 1);
    do {num2 = Math.floor(Math.random() * 8 + 1)} while(num2==num1);
    do {num3 = Math.floor(Math.random() * 8 + 1)} while(num3==num1 || num3==num2);
}

function startGame() {
    sleep(300);
    startImg.style.display="none";
    ballDiv.style.display="inline-flex";
    numButtons.style.display="inline-flex";
    socores.style.display="inline-block";
    generateNum();
}

function clickBall(thisBall) {
    targetBall = thisBall;
}

function clickButton(thisButton){
    if(thisButton.innerText=="입력") clickInput();
    else if (thisButton.innerText=="삭제") clickDelete();
    else if (thisButton.innerText=="↑" || thisButton.innerText=="↓")   
        clickhwasal(thisButton.innerText);
    else clickNumber(thisButton.innerText);
}

function clickInput(){
    var inputNum = document.getElementsByClassName('ballText');
    if(inputNum[0].innerText==num1 && inputNum[1].innerText==num2 && inputNum[2].innerText==num3) 
        victory();
    else {
        inputNums(inputNum);
        checkNums(inputNum);
        clickDelete();
    }
    if (trnum==10) fail();
}

function clickDelete() {
    targetBall.innerText =" ";
    document.getElementsByClassName('ballText')[(getIndex('ballText', targetBall) + 1) % 3].innerText =" ";
    document.getElementsByClassName('ballText')[(getIndex('ballText', targetBall) + 2) % 3].innerText =" ";
    targetBall = document.getElementById("ball1");
}

function clickNumber(num) {
    targetBall.innerText = num;
    targetBall= document.getElementsByClassName('ballText')[(getIndex('ballText', targetBall) + 1) % 3]
}

function clickhwasal(hwa) {
    if (hwa=="↑") targetBall= document.getElementsByClassName('ballText')[(getIndex('ballText', targetBall) - 1) % 3];
    else targetBall= document.getElementsByClassName('ballText')[(getIndex('ballText', targetBall) + 1) % 3];
}

function inputNums(inputNum) {
    socores.rows[trnum].cells[1].innerHTML = inputNum[0].innerText;
    socores.rows[trnum].cells[2].innerHTML = inputNum[1].innerText;
    socores.rows[trnum].cells[3].innerHTML = inputNum[2].innerText;
}

function checkNums(inputNum) {
    var strike = 0;
    var ball = 0;
    var out = 0;

    for (var i = 0; i <3; i++){
        if(inputNum[i].innerText==num1) ball++;
        if(inputNum[i].innerText==num2) ball++;
        if(inputNum[i].innerText==num3) ball++;
    }
    if(inputNum[0].innerText==num1) strike++;
    if(inputNum[1].innerText==num2) strike++;
    if(inputNum[2].innerText==num3) strike++;

    ball -= strike;
    out = 3 - strike - ball;

    socores.rows[trnum].cells[4].innerHTML = strike;
    socores.rows[trnum].cells[5].innerHTML = ball;
    socores.rows[trnum].cells[6].innerHTML = out;

    trnum++;
}

function victory() {
    ballDiv.style.display="none";
    numButtons.style.display="none";    
    socores.style.display = "none";
    victoryImg.style.display = "block";
}

function fail() {
    ballDiv.style.display="none";
    numButtons.style.display="none";    
    socores.style.display = "none";
    failImg.style.display = "block";    
}