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

// Puzzle 8
var p8MaxSteps = 8;
var p8Steps = 0;

while (p8Steps < p8MaxSteps){
	
	move("down", 1);
	p8Steps = p8Steps + 1;
	if (p8Steps == p8MaxSteps){
		move("right", 2);
	}

}

p8Steps = 0;
while (p8Steps < p8MaxSteps){
	
	move("up", 1);
	p8Steps = p8Steps + 1;
	if (p8Steps == p8MaxSteps){
		move("right", 2);
	}

}

p8Steps = 0;
while (p8Steps < p8MaxSteps){
	
	move("down", 1);
	p8Steps = p8Steps + 1;
	if (p8Steps == p8MaxSteps){
		move("right", 2);
	}

}

p8Steps = 0;
while (p8Steps < p8MaxSteps){
	
	move("up", 1);
	p8Steps = p8Steps + 1;
	if (p8Steps == p8MaxSteps){
		move("right", 2);
	}

}

p8Steps = 0;
while (p8Steps < p8MaxSteps){
	
	move("down", 1);
	p8Steps = p8Steps + 1;
	if (p8Steps == p8MaxSteps){
		move("right", 1);
	}

}
