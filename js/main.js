$(function() {
	console.log('loaded');

	var canvasContext;
	var canvas;
	//ball x and y axis
	var ballX = 10;
	var ballSpeedX = 10;
	var ballY = 10;
	var ballSpeedY = 4;

	// canvas = document.getElementById('newCanvas');
	canvas = $('#newCanvas')[0];
	canvasContext = canvas.getContext('2d');
	//game board
	// canvasContext.fillStyle = 'black';
	// canvasContext.fillRect(0,0,canvas.width, canvas.height);

	//use setInterval to move 
	var fps = 30;
	setInterval(function () {
		moveBall();
		draw();
	}, 1000/fps);







function moveBall() {
	//x and y coordiantes changes as set interval calls this function
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	//if ball width exceeds the width of the canvas
	if(ballX > (canvas.width - 10)) {
		ballSpeedX = -ballSpeedX;
	}
	//0 is the left side of the board width
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	};
	//if ballY height exceeds the height of the canvas
	if(ballY > (canvas.height - 7)) {
		ballSpeedY = -ballSpeedY;
	}
	//0 is the left side of the board width
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	};
}
function draw() {
	colorRect(0, 0, canvas.width, canvas.height, 'black');
	colorRect(0, 40, 10, 90, 'white');
	//draw circle
	makeCircle(ballX, ballY, 7, 'yellow');
	
	};

function makeCircle(centerX, centerY, radius, color) {
	//build the circle
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	// .arc parameters (x, y, radius, startAngle, endAngle, counterclockwise or clockwise fill)
	//endAngle using radians because internet said so..math.pi
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
}
function colorRect(leftX, topY, width, height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(leftX, topY, width, height);
};



});