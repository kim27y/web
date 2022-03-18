const numColsToCut = 4;
const numRowsToCut = 4;
const originImagePieces = [];
const imagePieces = [];
const resultPieces = new Array(numColsToCut*numRowsToCut);
const maxTime = 30;
let nowTime = 0;
let timer;
const completePuzzle = (puzzle, result) => puzzle.every((piece, index) =>piece === result[index]);

function suffleList(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function suffleRendering() {
    const box = document.getElementById('puzzle-box');
    suffleList(imagePieces);
    while(resultPieces.length > 0) {
        resultPieces.pop();
}

imagePieces.forEach(img => {
	box.appendChild(img);
	});
}

function startTimer() {
    timer = window.setInterval(() => {
        if(nowTime === maxTime) {
            window.clearInterval(timer);
            suffleRendering();
            window.alert('시간 종료!');
        }
        nowTime += 1;
        
    }, 1000);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  const child = document.getElementById(data);
  if (!data) return;
  if (resultPieces.length === 0) {
	startTimer();
  }
  if (ev.target.nodeName !== 'TD') {
    console.log(ev.target.parentNode);
    const currentImage = ev.target;
    const td = ev.target.parentNode;
    td.removeChild(currentImage);
    td.appendChild(child)
    const box = document.getElementById('puzzle-box');
    box.appendChild(currentImage);
    return;
  }
  ev.target.appendChild(document.getElementById(data));
  const index = ev.target.id.replace('piece_', '');
  resultPieces[Number(index)] = data;
  if (completePuzzle(originImagePieces, resultPieces)) window.alert('퍼즐 성공!');
}

function updateImageDisplay() {
  const preview = document.querySelector('.preview');
  const input = document.querySelector('input');
  const board = document.getElementById('puzzle-board');

  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }
  const curFiles = input.files;
    for(const file of curFiles) {
         const para = document.createElement('p');
         const imageItem = document.createElement('div');
           const img = new Image();
           img.onload = function() {
             const widthOfOnePiece = this.width/numColsToCut;
             const heightOfOnePiece = this.height/numRowsToCut;
             para.innerHTML = `${numColsToCut}X${numRowsToCut}로 생성된 퍼즐입니다.`;

              while(board.firstChild) {
                board.removeChild(board.firstChild);
              }
                 for(var x = 0; x < numColsToCut; ++x) {
                    let tableRow = document.createElement('tr');
                     for(var y = 0; y < numRowsToCut; ++y) {
                         var canvas = document.createElement('canvas');
                         canvas.width = widthOfOnePiece;
                         canvas.height = heightOfOnePiece;
                         var context = canvas.getContext('2d');
                         context.drawImage(img, y * widthOfOnePiece, x * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
                         let pieceImage = new Image();
                         pieceImage.src = canvas.toDataURL();
                         pieceImage.id = canvas.toDataURL();
                         pieceImage.draggable = true;
                         pieceImage.ondragstart = drag;
                         let tableData = document.createElement('td');
                         tableData.ondrop = drop;
                         tableData.ondragover = allowDrop;
                         tableData.width = widthOfOnePiece;
                         tableData.height = heightOfOnePiece;
                         tableData.id = `piece_${x * numColsToCut + y}`;
                         tableRow.appendChild(tableData);
		   originImagePieces.push(pieceImage.src);
                         imagePieces.push(pieceImage);
                     }
                     board.appendChild(tableRow);
                 }
	suffleRendering();
	startTimer();
	}	
           img.src = URL.createObjectURL(file);

           imageItem.appendChild(img);
           imageItem.appendChild(para);
           preview.appendChild(imageItem);
     }
}