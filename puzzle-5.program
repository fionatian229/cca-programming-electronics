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

// Puzzle 5

function checkColor(color) {
    if (color == "blue") {
        move("down", 1);
    }
    if (color == "red") {
        move("up", 1);
    }
}

move("right", 2);
var p5Color1 = getColor();
checkColor(p5Color1);

move("right", 2);
var p5Color2 = getColor();
checkColor(p5Color2);

move("right", 2);
var p5Color3 = getColor();
checkColor(p5Color3);

move("right", 3);