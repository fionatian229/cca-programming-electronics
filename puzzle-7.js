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

// Puzzle 7 
var maxSteps = 9;
var p7Steps = 0;

while (p7Steps < maxSteps){
	if (getColor() == "red"){
		move("right", 2);
		p7Steps = maxSteps;
	}
	else {
		move("down", 1);
		p7Steps = p7Steps + 1;
	}
}

p7Steps = 0;
while (p7Steps < maxSteps){
	if (getColor() == "red"){
		move("right", 2);
		p7Steps = maxSteps;
	}
	else {
		move("up", 1);
		p7Steps = p7Steps + 1;
	}
}

p7Steps = 0;
while (p7Steps < maxSteps){
	if (getColor() == "red"){
		move("right", 2);
		p7Steps = maxSteps;
	}
	else {
		move("down", 1);
		p7Steps = p7Steps + 1;
	}
}

p7Steps = 0;
while (p7Steps < maxSteps){
	if (getColor() == "red"){
		move("right", 2);
		p7Steps = maxSteps;
	}
	else {
		move("up", 1);
		p7Steps = p7Steps + 1;
	}
}

p7Steps = 0;
while (p7Steps < maxSteps){
	if (getColor() == "red"){
		move("right", 1);
		p7Steps = maxSteps;
	}
	else {
		move("down", 1);
		p7Steps = p7Steps + 1;
	}
}

