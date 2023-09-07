#!/usr/bin/node

/*
    class Square inherits from rectangle
*/

const Rectangle = require('./4-rectangle.js');

class Square extends Rectangle {
    constructor (size) {
        //calling the constructor of class rectangle using super
        super(size, size);
    }
}

module.exports = Square;