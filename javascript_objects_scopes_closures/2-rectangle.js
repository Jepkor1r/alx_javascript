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
}
module.exports = Rectangle;