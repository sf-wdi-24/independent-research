$(function() {
	console.log('loaded');

	var canvasContext;
	var canvas;
	var ball = 10;
	var ballSpeed = 20

	// canvas = document.getElementById('newCanvas');
	canvas = $('#newCanvas')[0];
	canvasContext = canvas.getContext('2d');
	//game board
	// canvasContext.fillStyle = 'black';
	// canvasContext.fillRect(0,0,canvas.width, canvas.height);

	//use setInterval to move 
	var fps = 30;
	setInterval(function () {
		move();
		draw();
	}, 1000/fps);







function move() {
	ball = ball + ballSpeed;
	//if ball width exceeds the width of the canvas
	if(ball > (canvas.width - 10)) {
		ballSpeed = -ballSpeed;
	}
	//0 is the left side of the board width
	if (ball < 0) {
		ballSpeed = -ballSpeed;
	};
}
function draw() {
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width, canvas.height);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(0, 40, 10, 90);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(ball, 40, 10, 10);
	};





});