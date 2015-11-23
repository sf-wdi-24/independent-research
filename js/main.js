$(function() {
	console.log('loaded');

	var canvasContext;
	var canvas;
	var ball = 50;

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
	ball = ball + 5
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