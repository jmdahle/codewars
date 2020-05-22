// rgb
// https://www.codewars.com/kata/513e08acc600c94f01000001
// 5 kyu

/* Description */
/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

/* Function */
const rgb = (r, g, b) => {

    let hexValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    const hex = (dec) => {
        dec = Math.min(Math.max(dec,0),255)
        return hexValues[Math.floor(dec/16)] + hexValues[dec%16]
    }
    return hex(r) + hex(g) + hex(b);
}

/* Export */
module.exports = rgb;

/* test cases */
// console.log( rgb(0,0,0), 's/b 000000');
// console.log( rgb(0,0,-20), 's/b 000000');
// console.log( rgb(300,255,255), 's/b FFFFFF');
// console.log( rgb(173,255,47), 's/b ADFF2F');
