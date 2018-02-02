function move(d, s) {
    // d means movement direction
    // s means steps to move

    var steps = 0;

    if (d == "up") {
        while (steps < s) {
            up();
            steps = steps + 1;
        } 
    }

    if (d == "down") {
        while (steps < s) {
            down();
            steps = steps + 1;
        } 
    }

    if (d == "left") {
        while (steps < s) {
            left();
            steps = steps + 1;
        } 
    }

    if (d == "right") {
        while (steps < s) {
            right();
            steps = steps + 1;
        } 
    }
}


function open_rectangle(x, y, width, height, color) {
    // this function will use setColor() to draw the outline of a rectangle on the canvas 
    // upper left corner should be at location (x,y) 
    // the size should be specified by width and height variables
    // color specifies the color to use for the outline.

    move('right', x);
    move('down', y);

    var borderColor = color;
    var borderWidth = width;
    var borderHeight = height;
    var steps = 0;

    // top border
    while (steps < borderWidth) {
        move("right", 1);
        setColor(borderColor);
        steps = steps + 1;    
    }

    // right border
    steps = 0;
    while (steps < borderHeight) {
        move("down", 1);
        setColor(borderColor);
        steps = steps + 1;    
    }

    //bottom border
    steps = 0;
    while (steps < borderWidth) {
        move("left", 1);
        setColor(borderColor);
        steps = steps + 1;    
    }

    // left border
    steps = 0;
    while (steps < borderHeight) {
        move("up", 1);
        setColor(borderColor);
        steps = steps + 1;    
    }

}

function closed_rectangle(x, y, width, height, color1, color2) {
    // this function will use setColor() to draw the outline of a rectangle on the canvas 
    // upper left corner should be at location (x,y) 
    // the size should be specified by width and height variables
    // color specifies the color to use for the outline.
    // then use setColor with color2 to fill in the entire inside of the rectangle 
    
    open_rectangle(x, y, width, height, color1);

    // draw the rectangle inside
    move('right', x + 1);
    move('down', y + 1);
    var rows = height - 1;
    var columns = width - 1;
    
    var fillColor = color2;
    var row = 0;
    var column = 0;

    while(row < rows){
        //draw rows
        while(column < columns) {
            //draw columns of the same row
            setColor(fillColor);
            move('right', 1);    
            column++;
        }
        move("down", 1);
        move("left", columns);
        row++;
        column = 0;
      
    }

}

open_rectangle(8,8,7,8,"blue");
// move cursor to the next starting point
move("right", 2);
move("down", 12);
closed_rectangle(10,20,4,5,"red","blue");


