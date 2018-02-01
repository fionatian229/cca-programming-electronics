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

// Puzzle 4
move("down", 4);
move("right",1);
var p4Color1 = getColor();

if (p4Color1 == "green"){
	move("down", 1);
}

if (p4Color1 == "blue"){
	move("down", 1);
}

if (p4Color1 == "pink"){
	move("down", 1);
}

setColor(p4Color1);
move("right", 2);
move("up", 1);
move("right", 1);

var p4Color2 = getColor();

if (p4Color2 == "yellow"){
	move("down",1);
}
if (p4Color2 == "green"){
	move("down",1);
}
if (p4Color2 == "blue"){
	move("down",1);
}

setColor(p4Color2);
move("right",2);
