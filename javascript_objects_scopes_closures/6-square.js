#!/usr/bin/node

/*
    class Square inherits from rectangle
*/

const PrevSquare = require('./5-square');

class Square extends PrevSquare {
    charPrint(c) {
        // Defining a variable to hold the character to be printed
        const myChar = c === undefined ? 'X' : c;
        // height iterate
        for (let i = 0; i < this.height; i++) {
            // Defining a variable to hold the row of the character
            let myVar = '';
            //  width iterate
            for (let j = 0; j < this.width; j++) {
                //concentate the character to the row
                myVar += myChar;
            }

            // display row of characters
            console.log(myVar);
        }
    }
}

module.exports = Square;