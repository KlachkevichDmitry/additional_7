module.exports = function solveSudoku(matrix) {

//массив чисел в строке
    function numberInRow(row) {
        let arr=[];
        for (let column=0; column<9; column++) {
            arr.push(matrix[row][column]);
        }
        return arr;
    }

//массив чисел в столбце
    function numberInColumn(column){
        let arr=[];
        for (let row=0; row<9; row++) {
            arr.push(matrix[row][column]);
        }
        return arr;
    }

//массив чисел в квадрате
    function numberInSquare(row,column) {
        let arr=[];
        row=Math.floor(row/3)*3;
        column=Math.floor(column/3)*3;

        for (let i=row; i<row+3;i++) {
            for (let j=column; j<column+3; j++) {
                arr.push(matrix[i][j]);
            }
        }
        return arr;
    }


    function numbers(row,column) {
        var numRow=numberInRow(row);
        var numCol=numberInColumn(column);
        var numSq=numberInSquare(row,column);
        var numbersAll=numRow.concat(numCol.concat(numSq));
        return [1,2,3,4,5,6,7,8,9].filter(num => numbersAll.indexOf(num) == -1);
    }


    function findNumber(row,column) {
        if (column==9) {
            return matrix;
        } else if (matrix[row][column]==0) {
            var correct = numbers(row,column).some(num => {
                matrix[row][column]=num;
            return findNumber((row+1)%9,column+(row==8?1:0))
        })
            if (correct){
                return matrix;}
            matrix[row][column]=0;
        } else {
            return findNumber((row+1)%9,column+(row==8?1:0));}
    }

    return findNumber(0,0);

}
