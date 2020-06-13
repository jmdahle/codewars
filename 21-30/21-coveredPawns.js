// Covered Pawns
// https://www.codewars.com/kata/597cfe0a38015079a0000006
// 6 kyu

/* Description */
// Given a list of white pawns on a chessboard (any number of them, meaning from 0 to 64 and with the possibility to be positioned everywhere), determine how many of them have their backs covered by another. Pawns attacking upwards since we have only white ones.

// Please remember that a pawn attack(and defend as well) only the 2 square on the sides in front of him. https://en.wikipedia.org/wiki/Pawn_(chess)#/media/File:Pawn_(chess)_movements.gif

// This is how the chess board coordinates are defined:
// (standard chessboard configuration with rows = a-h from bottom and columns/ranks = 1-8 starting on left, a "dark" square)

/* Function */
const coveredPawns = (array) => {
    let countCoveredPawns = 0;
    let cols = ['a','b','c','d','e','f','g','h'];
    let rows = ['1','2','3','4','5','6','7','8'];
    for (let i = 0; i < array.length; i++) {
        let currCol = cols.indexOf(array[i][0]);
        let currRow = rows.indexOf(array[i][1]);
        let coveredRight = cols[currCol+1] + rows[currRow-1];
        let coveredLeft = cols[currCol-1] + rows[currRow-1];
        // console.log(array[i], coveredRight, coveredLeft );
        // if pawn covered behind and right, OR behind on the left, add 1
        if ( (array.indexOf(coveredRight) > -1 || array.indexOf(coveredLeft) > -1) ) {
            countCoveredPawns++;
        }
    }
    return countCoveredPawns;
}

/* Export */
module.exports = coveredPawns;

/* Test case */
// console.log(coveredPawns(['g2','h3']),1);
// console.log(coveredPawns(['g2','h4']),0);