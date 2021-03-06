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

// Puzzle 6
move ("right", 1);
var p6Color1 = getColor();
if (p6Color1 == "red") {
    move("up", 3);
}
if (p6Color1 == "blue") {
    move("down", 3);
}

var p6Color2 = getColor();
if (p6Color2 == "red") {
    move("left", 1);
}
if (p6Color2 == "blue") {
    move("right", 1);
}
if (p6Color1 =="red"){
  move("up",1);
}
if (p6Color1 =="blue"){
	move("down",1);
}