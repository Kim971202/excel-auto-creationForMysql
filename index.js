const xlsx = require('xlsx');
const workbook = xlsx.utils.book_new(); // 가상의 엑셀 파일 생성

const array = [];

// Table의 컬럼 개수
let numOfColumn = 3;
// Table의 로우 개수
let numOfRow = 6;

function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

const arr = create2DArray(numOfRow, numOfColumn);

for(i = 0; i < numOfRow; ++i){
    for(j = 0; j < numOfColumn; ++j){
        console.log("i: " + i);
        console.log("j: " + j);
    }
}



