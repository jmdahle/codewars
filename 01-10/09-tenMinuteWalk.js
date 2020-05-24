// Ten Minute Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228
// 6 kyu

/* Directions */
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

/* Function */
const isValidWalk = (walk) => {
    // n and s move in the y axis in opposite directions
    // e and w move in the x axis in opposite directions
    // keep track of x and y as changed by n(y++), s(y--), e(x++), w(x--)
    let x =0;
    let y = 0;
    for (let i = 0; i < walk.length; i++) {
        if (walk[i].toUpperCase() === 'N') {y++}
        if (walk[i].toUpperCase() === 'S') {y--}
        if (walk[i].toUpperCase() === 'E') {x++}
        if (walk[i].toUpperCase() === 'W') {x--}
    }
    // keep track of m total movements (1 min each)
    let m = walk.length;
    // total distance d from start is abs(x) + abs(y)
    let d = Math.abs(x) + Math.abs(y);
    // we have returned to the start only if d = 0
    // we have walked exactly 10 minutes only if m = 10
    return (d === 0) && (m === 10);

}

/* Export */
module.exports = isValidWalk;

/* test cases */


/* Test Cases */
