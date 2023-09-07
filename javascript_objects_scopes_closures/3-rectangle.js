#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
            //checking whether w or h is equal to 0 or not a number
        } else {
            /*initializing: 
             the attribute width=w
             the attribute height=h
            */
            this.width = w;
            this.height = h;
        }
    }
    // creating an instance method print() to print the rectangle using 'x'
    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                // print 'x' repeated for the width of the rectangle
                console.log('X'.repeat(this.width));
            }
        }
    }
}

module.exports = Rectangle;